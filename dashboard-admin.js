// In dashboard-admin.js

// 1. Check User Privileges and Show Admin Filters
auth.onAuthStateChanged(async (user) => {
    if (user) {
        try {
            const userDoc = await db.collection("users").doc(user.uid).get();
            if (userDoc.exists) {
                const userData = userDoc.data();
                if (userData.isAdmin === true) {
                    document.getElementById('admin-dashboard-button-container').style.display = 'block';
                    document.getElementById('admin-users-button-container').style.display = 'block';
                    document.getElementById('admin-filters').style.display = 'block';
                    await populateUserSelect(); // Populate the select element
                }
            }
        } catch (error) {
            console.error("Error checking user admin status:", error);
        }
        await loadAssessmentHistory(); // Load history after checking admin status
    }
});

// Populate User Select Function
async function populateUserSelect() {
    const userSelect = document.getElementById('user-select');
    if (!userSelect) {
        console.error("userSelect element not found");
        return;
    }
    userSelect.innerHTML = '<option value="">Todos os Usuários</option>'; // Clear existing options

    try {
        const snapshot = await db.collection("users").get();
        snapshot.forEach(doc => {
            const user = doc.data();
            const option = document.createElement("option");
            option.value = doc.id; // Use user ID as the value
            option.text = `${user.name || 'Sem nome'} (${user.email})`;
            userSelect.appendChild(option);
        });
    } catch (error) {
        console.error("Error loading users:", error);
        userSelect.innerHTML = '<option value="">Erro ao carregar usuários</option>';
    }
}

// Add event listeners to filters
const assessmentFilter = document.getElementById('assessment-filter');
const userSelectElement = document.getElementById('user-select'); // Get the select element

assessmentFilter.addEventListener('change', loadAssessmentHistory);
userSelectElement.addEventListener('change', loadAssessmentHistory); // Call loadAssessmentHistory on change

// 2.  Modified loadAssessmentHistory Function
// Modified loadAssessmentHistory Function

async function loadAssessmentHistory() {
    const historyList = document.getElementById('history-list');
    const resultsCountSpan = document.getElementById('results-count');

    console.log("historyList:", historyList);
    console.log("resultsCountSpan:", resultsCountSpan);

    if (!historyList || !resultsCountSpan) {
        console.error("historyList or resultsCountSpan element not found");
        return;
    }

    historyList.innerHTML = ''; // Clear previous content
    resultsCountSpan.innerText = ''; // Clear the count

    const user = auth.currentUser;
    if (user) {
        try {
            const assessmentTypeFilter = document.getElementById('assessment-filter').value;
            const userFilter = document.getElementById('user-select').value; // Get selected user ID

            let historyRef = db.collection('assessmentHistory');

            //Admin user get all assessment history
            const userDoc = await db.collection("users").doc(user.uid).get(); //Assuming you have a "users" collection
            let isAdmin = false;
            if (userDoc.exists) {
                const userData = userDoc.data();
                if (userData.isAdmin === true) {
                     isAdmin = true;
                }
            }

            if (!isAdmin) {
                  historyRef = historyRef.where('userId', '==', user.uid);
            } else {
                 if (userFilter) { // If a user is selected
                      historyRef = historyRef.where('userId', '==', userFilter);  // Filter by the selected user ID
                 }
            }

            if (assessmentTypeFilter) {
                historyRef = historyRef.where('assessmentName', '==', assessmentTypeFilter);
            }

            historyRef = historyRef.orderBy('timestamp', 'desc');

            const snapshot = await historyRef.get();

            if (snapshot.empty) {
                historyList.innerHTML = '<li class="mdc-list-item" tabindex="0">Nenhuma avaliação encontrada.</li>';
                resultsCountSpan.innerText = 'Total de Resultados: 0';
                return;
            }

            let assessmentCount = 0; // initialize assessments

            for (const doc of snapshot.docs) { // Iterate through each snapshot.docs
                assessmentCount++;
                const assessment = doc.data();
                let resultDisplay = '';

                if (assessment.assessmentName === 'Índice de Magnetismo Profissional' && assessment.result) {
                    resultDisplay = `Resultado: ${assessment.result} - ${translateResultInterpretation(assessment.resultInterpretation)}`;
                } else if (assessment.assessmentName === 'Fórmula do Networking' && assessment.result) {
                    resultDisplay = `Resultado: ${assessment.result} - ${translateResultInterpretation(assessment.resultInterpretation)}`;
                } else if (assessment.assessmentName === 'Índice de Networking Interno' && assessment.result) {
                    resultDisplay = `Resultado: ${assessment.result} - ${translateResultInterpretation(assessment.resultInterpretation)}`;
                } else {
                    resultDisplay = 'Resultado: Não Disponível';
                }

                const date = assessment.timestamp ? new Date(assessment.timestamp.seconds * 1000).toLocaleString('pt-BR') : 'Data Indisponível';
                const listItem = document.createElement('li');
                listItem.classList.add('mdc-list-item');
                listItem.setAttribute('tabindex', '0');

                // Fetch user data
                let userName = 'Nome Desconhecido';
                let userEmail = 'Email Desconhecido';
                if (isAdmin) {
                    try {
                        const userDoc = await db.collection("users").doc(assessment.userId).get();
                        if (userDoc.exists) {
                            const userData = userDoc.data();
                            userName = userData.name || 'Nome Desconhecido';
                            userEmail = userData.email || 'Email Desconhecido';
                        }
                    } catch (error) {
                        console.error("Error fetching user data:", error);
                    }
                }

                listItem.innerHTML = `
                    <a href="assessment_result.html?assessmentId=${doc.id}" style="text-decoration:none; color:inherit;">
                    <span class="mdc-list-item__text">
                        <strong>${assessment.assessmentName}</strong><br>
                        ${resultDisplay}<br>
                        Data: ${date}<br>
                        ${isAdmin ? `Usuário: ${userName} (${userEmail})` : ''}  <!-- Conditionally show user info -->
                    </span>
                    </a>
                `;
                historyList.appendChild(listItem);
            }
            resultsCountSpan.innerText = `Total de Resultados: ${assessmentCount}`; // Update the count
        } catch (error) {
            console.error("Erro ao carregar o histórico:", error);
            historyList.innerHTML = '<li class="mdc-list-item" tabindex="0">Erro ao carregar o histórico.</li>';
            resultsCountSpan.innerText = 'Erro ao carregar o histórico.';
        }
    } else {
        historyList.innerHTML = '<li class="mdc-list-item" tabindex="0">Usuário não autenticado.</li>';
        resultsCountSpan.innerText = 'Usuário não autenticado.';
    }
}

// 3. Implement User Search with Suggestions
let searchTimeoutId;

function searchUsers(searchTerm) {
    clearTimeout(searchTimeoutId); // Clear previous timeout

    if (!searchTerm || searchTerm.length < 3) { // Require at least 3 characters
        clearUserSuggestions();
        return;
    }

    // Simple client-side filtering, replace with server-side search for large datasets
    const user = auth.currentUser;
    console.log("User to search:", user);
    db.collection("users")
        .where("email", ">=", searchTerm)
        .where("email", "<=", searchTerm + '\uf8ff')
        .get()
        .then((querySnapshot) => {
            clearUserSuggestions();
            if (querySnapshot.size > 0) {
                querySnapshot.forEach((doc) => {
                    const user = doc.data();
                    addUserSuggestion(user.name || 'No name', user.email);
                });
            } else {
                // Search for names
                db.collection("users")
                    .where("name", ">=", searchTerm)
                    .where("name", "<=", searchTerm + '\uf8ff')
                    .get()
                    .then((nameQuerySnapshot) => {
                        if (nameQuerySnapshot.size > 0) {
                            nameQuerySnapshot.forEach((doc) => {
                                const user = doc.data();
                                addUserSuggestion(user.name || 'No name', user.email);
                            });
                        } else {
                            addUserSuggestion('Nenhum usuário encontrado.', '');
                        }
                    })
                    .catch((error) => {
                        console.error("Error searching users (name):", error);
                    });
                }
            })
        .catch((error) => {
            console.error("Error searching users:", error);
        });
}

function addUserSuggestion(name, email) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${name}</strong><br><small>${email}</small>`; // Display both name and email
    listItem.classList.add('mdc-list-item'); // Add Material Design class
    listItem.style.cursor = 'pointer';
    listItem.addEventListener('click', () => {
        document.getElementById('user-filter').value = email; // Populate with the email, can modify to populate also name
        clearUserSuggestions();
        loadAssessmentHistory(); // Load history for selected user
    });
    userSuggestionsList.appendChild(listItem);
    userSuggestionsList.style.display = 'block'; // Show suggestions
}

function clearUserSuggestions() {
    userSuggestionsList.innerHTML = '';
    userSuggestionsList.style.display = 'none'; // Hide suggestions
}

function debouncedSearchUsers(searchTerm) {
    clearTimeout(searchTimeoutId);
    searchTimeoutId = setTimeout(() => {
        searchUsers(searchTerm);
    }, 300); // 300ms debounce
}

// Function to handle navigation to the admin dashboard
async function handleAdminDashboard() {
    try {
        window.location.href = 'admin_dashboard.html';
    } catch (error) {
        console.log(error.message);
    }
}