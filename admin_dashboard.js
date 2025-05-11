let currentSortColumn = 1; // set IMP as default column.
let currentSortDirection = 'desc'; // Define currentSortDirection - Values will be 'asc' or 'desc'
let overallPieChart = null; // Define overallPieChart
let isLoadingData = false;

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Flatpickr

    const dateRangeInput = document.getElementById('start-date');
    const dateRangeEnd = document.getElementById('end-date');
    const assessmentSelect = document.getElementById('assessment-select'); // Get the select element

    // Initialize Flatpickr in range mode
    flatpickr(dateRangeInput, {
        dateFormat: "d-m-Y", // Set your desired date format
        maxDate: new Date(), // Limit to today
        locale: "pt", //Language
        onChange: function (selectedDates, dateStr, instance) {
            dateRangeEnd.value = dateStr;
            loadAssessmentData();
        },
        "locale": {
            "firstDayOfWeek": 0 // start week on Monday
        },
    });

    flatpickr(dateRangeEnd, {
        dateFormat: "d-m-Y", // Set your desired date format
        maxDate: new Date(), // Limit to today
        locale: "pt", //Language
        onChange: function (selectedDates, dateStr, instance) {
            loadAssessmentData();
        },
        "locale": {
            "firstDayOfWeek": 0 // start week on Monday
        },
    });

    dateRangeInput.addEventListener('change', function () {
        loadAssessmentData();  // Load data when start date changes
        dateRangeEnd.value = dateRangeInput.value;
    });

    dateRangeEnd.addEventListener('change', function () {
        loadAssessmentData();  // Load data when end date changes
    });

    if (assessmentSelect) { // Check if assessmentSelect exists
        assessmentSelect.value = "Índice de Magnetismo Profissional"; // Set default value

        // Set default date values *AFTER* Flatpickr initialization
        const today = formatDate(new Date()); // Use the helper function
        dateRangeInput.value = today;
        dateRangeEnd.value = today;

        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const userDoc = await db.collection("users").doc(user.uid).get();
                if (userDoc.exists) {
                    const userData = userDoc.data();
                    if (userData.isAdmin !== true) {
                        window.location.href = "dashboard.html";  // Redirect if not admin
                        return;
                    }
                } else {
                    console.warn("User document not found");
                    return;
                }
            } else {
                window.location.href = "index.html";  // Redirect if not logged in
            }
        });
    } else {
        console.error("assessmentSelect element not found!");
    }

    // Load data initially with the default dates.
    loadAssessmentData(); // Load data after setting the date and the value of the assessment select.
});

function parseFirebaseTimestamp(timestamp) {
    if (timestamp && typeof timestamp.toDate === 'function') {
        return timestamp.toDate();
    } else {
        console.warn("Expected Firebase Timestamp object, but got:", timestamp);
        return null;
    }
}
//Check if dates on flatpickr is correct and to change format to can work on js
function parseDateStr(dateString) {
    const [day, month, year] = dateString.split('-');
    return new Date(year, parseInt(month) - 1, day);  // Month is 0-indexed
}

// Helper function to format the date as "dd-mm-yyyy"
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

async function loadAssessmentData() {
    if (isLoadingData) {
        console.log("loadAssessmentData() is already running, skipping...");
        return;
    }
    isLoadingData = true;
    const assessmentSelect = document.getElementById('assessment-select'); // Get the select element here too
    if (!assessmentSelect) {
        console.error("assessmentSelect element not found in loadAssessmentData!");
        isLoadingData = false;
        return;
    }

    currentAssessment = assessmentSelect.value;

    const dateRangeInput = document.getElementById('start-date');
    const dateRangeEnd = document.getElementById('end-date');
    let startDateStr = dateRangeInput.value;
    let endDateStr = dateRangeEnd.value;

    let startDate = null;
    let endDate = null;

    if (startDateStr && endDateStr) {
        try {
            startDate = parseDateStr(startDateStr);
            endDate = parseDateStr(endDateStr);
            console.log("Start Date (parsed):", startDate);
            console.log("End Date (parsed):", endDate);
        } catch (e) {
            console.warn("Invalid date strings. Please select a valid date range.");
            clearData(); // Clear data if there are no valid dates on fields
            isLoadingData = false;
            return;
        }
    }

    if (!currentAssessment) {
        clearData();
        isLoadingData = false;
        return;
    }

    let assessmentRef = db.collection('assessmentHistory')
        .where('assessmentName', '==', currentAssessment);

    let assessmentResults = [];
    const userScores = {}; // Use an object to track unique users

    const snapshot = await assessmentRef.get();

    if (snapshot.empty) {
        console.log('No matching documents.');
        assessmentResults = [];  // Ensure assessmentResults is empty
        userHighestScores = []; // Ensure userHighestScores is empty
    }
    else {
        snapshot.docs.forEach(doc => {
            const data = doc.data();
            // Parse the Firebase timestamp object into a Date object
            const firebaseTimestamp = data.timestamp;
            const firebaseDate = parseFirebaseTimestamp(firebaseTimestamp);
            if (firebaseDate instanceof Date && !isNaN(firebaseDate)) {
                if (startDate && endDate) {
                    if (firebaseDate >= startDate && firebaseDate <= new Date(endDate.getTime() + (24 * 60 * 60 * 1000) - 1)) {
                        if (!userScores[data.userId]) {
                            userScores[data.userId] = data;
                        }
                        else if (data.result > userScores[data.userId].result) {
                            userScores[data.userId] = data;
                        }
                    }
                } else { // If there aren't any filter

                    if (!userScores[data.userId]) {
                        userScores[data.userId] = data;
                    }
                    else if (data.result > userScores[data.userId].result) {
                        userScores[data.userId] = data;
                    }
                }
            } else {
                console.warn("The timestamp is not a valid firebase date, verify if data from database has any correct values.");
            }
        });
        assessmentResults = Object.values(userScores);
    }

    let userHighestScores = processHighestScores(assessmentResults);

    if (userHighestScores.length === 0) {
        console.log("No data found for the selected date range.");
        updateUserCount(0);
        renderNoDataPieChart('overall-pie-chart');
        displayNoDataLeaderboard();
    } else {
        sortTable(userHighestScores, currentSortColumn, currentSortDirection);

        // Get unique user IDs
        const uniqueUserIds = [...new Set(userHighestScores.map(userScore => userScore.userId))];
        updateUserCount(uniqueUserIds.length);

        // Calculate overall result distribution
        if (currentAssessment === 'Índice de Magnetismo Profissional') {
            const overallDistribution = calculateOverallDistribution(userHighestScores);
            if (overallPieChart) {
                overallPieChart.destroy();
            }
            overallPieChart = createPieChart('overall-pie-chart', overallDistribution);
            displayLeaderboard(userHighestScores);

        } else {
            clearSectionData();
            console.log('Not Índice de Magnetismo Profissional, no section analysis');
        }
    }

    isLoadingData = false;
}

function clearData() {
    updateUserCount(0);
    clearPieChart('overall-pie-chart');
    clearLeaderboard();
    clearSectionData();
}

function clearSectionData() {
    const sectionChartsContainer = document.getElementById('section-charts-container');
    sectionChartsContainer.innerHTML = "";  // Clear existing charts
}

// Function to clear the pie chart
function clearPieChart(chartId) {
    const chartCanvas = document.getElementById(chartId);
    const chartContext = chartCanvas.getContext('2d');
    chartContext.clearRect(0, 0, chartCanvas.width, chartCanvas.height);
}

function updateUserCount(count) {
    const userCountSpan = document.getElementById('user-count');
    userCountSpan.innerText = count;
}

function calculateOverallDistribution(userHighestScores) {
    const distribution = {
        excellent: 0,
        good: 0,
        average: 0,
        bad: 0
    };

    userHighestScores.forEach(result => {
        distribution[result.resultInterpretation]++;
    });

    return distribution;
}

function createPieChart(canvasId, data) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error(`Canvas element with id "${canvasId}" not found.`);
        return;
    }

    const ctx = canvas.getContext('2d');

    // Translate labels
    const translatedLabels = Object.keys(data).map(label => {
        switch (label) {
            case 'excellent': return 'Excelente';
            case 'good': return 'Bom';
            case 'average': return 'Oportunidades de Melhoria';
            case 'bad': return 'Necessário Investir Intensamente';
        }
    });
    const config = {
        type: 'pie',
        data: {
            labels: translatedLabels,  // Use translated labels
            datasets: [{
                data: Object.values(data),
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,  // Allows adjusting chart dimensions
            plugins: {
                title: {
                    display: true,
                    text: 'Distribuição da Interpretação do Resultado',  //Translated Title
                    fontSize: 16
                },
                legend: {
                    position: 'bottom'
                }
            }
        }
    };

    return new Chart(ctx, config);
}

async function displayLeaderboard(userHighestScores) {
    const leaderboardList = document.getElementById('leaderboard-list');
    leaderboardList.innerHTML = ''; // Clear previous leaderboard

    // Function to fetch username and general informations
    async function generateTableRow(userScore, index) {
        try {
            const userDoc = await db.collection("users").doc(userScore.userId).get();
            if (userDoc.exists) {
                const userData = userDoc.data();
                const username = userData.name || 'Unknown User';
                const userEmail = userData.email || 'Unknown Email';

                const row = leaderboardList.insertRow();
                const posCell = row.insertCell(0);
                const userCell = row.insertCell(1);
                const scoreCell = row.insertCell(2);
                const agradabilidadeCell = row.insertCell(3);
                const expertiseCell = row.insertCell(4);
                const confiancaCell = row.insertCell(5);
                const colaboracaoCell = row.insertCell(6);
                const visibilidadeCell = row.insertCell(7);

                posCell.textContent = index;
                userCell.textContent = `${username} (${userEmail})`;
                scoreCell.textContent = userScore.highestScore;

                // Populate section scores
                if (userScore.sectionScores) {
                    agradabilidadeCell.textContent = userScore.sectionScores[0] != null ? userScore.sectionScores[0] : 'N/A';
                    expertiseCell.textContent = userScore.sectionScores[1] != null ? userScore.sectionScores[1] : 'N/A';
                    confiancaCell.textContent = userScore.sectionScores[2] != null ? userScore.sectionScores[2] : 'N/A';
                    colaboracaoCell.textContent = userScore.sectionScores[3] != null ? userScore.sectionScores[3] : 'N/A';
                    visibilidadeCell.textContent = userScore.sectionScores[4] != null ? userScore.sectionScores[4] : 'N/A';
                } else {
                    agradabilidadeCell.textContent = 'N/A';
                    expertiseCell.textContent = 'N/A';
                    confiancaCell.textContent = 'N/A';
                    colaboracaoCell.textContent = 'N/A';
                    visibilidadeCell.textContent = 'N/A';
                }

                return row;
            } else {
                console.warn("User document not found");
                return null;
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
            return null;
        }
    }

    // Populate the leaderboard
    for (let index = 0; index < userHighestScores.length; index++) {
        const userScore = userHighestScores[index];
        const row = await generateTableRow(userScore, index + 1); // add one. As list start on 0, the user list will show 1

        if (!row) {
            console.warn("Skipping row due to error fetching user data.");
            continue; // Skip to the next iteration if there was an error. If error on a row, it keeps displaying the others
        }

    }
}

function clearLeaderboard() {
    const leaderboardList = document.getElementById('leaderboard-list');
    leaderboardList.innerHTML = '';
}

function processHighestScores(assessmentResults) {
    const userScores = {};

    assessmentResults.forEach(result => {
        const userId = result.userId;
        const score = result.result;

        if (!userScores[userId] || score > userScores[userId].highestScore) {
            userScores[userId] = {
                userId: userId,
                highestScore: score,
                result: result  // Store the entire result object
            };
        }
    });

    // Convert to an array and include section scores
    const userHighestScores = Object.values(userScores).map(userScore => {
        const sectionScores = calculateSectionScores(userScore.result);
        return {
            userId: userScore.userId,
            highestScore: userScore.highestScore,
            sectionScores: sectionScores, //Add score sections! and the main one! IMPORTANT
            resultInterpretation: userScore.result.resultInterpretation //To fix data for chart, must be on this object
        };
    });

    return userHighestScores;
}

// Helper function to calculate section scores for a single assessment
function calculateSectionScores(assessmentResult) {
    const sectionScores = [];
    if (!assessmentResult.answers) {
        console.warn("No answers found for assessmentResult:", assessmentResult);
        return [0, 0, 0, 0, 0];  // Return an array of zeros if there are no answers
    }
    console.log(`assessmentResult.answers`, assessmentResult.answers)
    for (let sectionIndex = 0; sectionIndex < 5; sectionIndex++) { // Assuming 5 sections
        let sectionScore = 0;
        const startQuestionIndex = sectionIndex * 5; // Assuming 5 questions per section
        for (let i = 0; i < 5; i++) {
            const questionIndex = startQuestionIndex + i;
            const answer = assessmentResult.answers.find(ans => ans && ans.questionIndex === questionIndex); // Add null check

            if (answer) {
                sectionScore += 4 - answer.answerIndex;
            }
        }
        sectionScores.push(sectionScore);
    }
    console.log(`sectionScores`, sectionScores);
    return sectionScores;
}

function sortTable(userHighestScores, columnIndex, direction) {
    currentSortDirection = direction
    // Remove any existing sorting indicators
    const thElements = document.querySelectorAll('.leaderboard-table th');
    thElements.forEach(th => th.classList.remove('sorted-asc', 'sorted-desc'));

    const th = thElements[columnIndex];

    if (currentSortColumn === columnIndex) {
        currentSortDirection = currentSortDirection === 'desc' ? 'asc' : 'desc';
        loadAssessmentData();
    } else {
        currentSortColumn = columnIndex;
        currentSortDirection = 'desc'; // Default to descending for new columns
    }

    // Add sorting indicator class to the header element.
    if (th) {
        th.classList.add(currentSortDirection === 'asc' ? 'sorted-asc' : 'sorted-desc');
    } else {
        console.warn("The column index value is incorrect so any changes on html values are not valid.");
    }
    userHighestScores.sort((a, b) => {
        let valueA, valueB;

        switch (columnIndex) {
            case 0: // User (Sort by Username)
                valueA = a.userId;
                valueB = b.userId;
                break;
            case 1: // IMP
                valueA = a.highestScore;
                valueB = b.highestScore;
                break;
            case 2: // Agradabilidade
                valueA = a.sectionScores ? a.sectionScores[0] : null;
                valueB = b.sectionScores ? b.sectionScores[0] : null;
                break;
            case 3: // Expertise
                valueA = a.sectionScores ? a.sectionScores[1] : null;
                valueB = b.sectionScores ? b.sectionScores[1] : null;
                break;
            case 4: // Confiança
                valueA = a.sectionScores ? a.sectionScores[2] : null;
                valueB = b.sectionScores ? b.sectionScores[2] : null;
                break;
            case 5: // Colaboração
                valueA = a.sectionScores ? a.sectionScores[3] : null;
                valueB = b.sectionScores ? b.sectionScores[3] : null;
                break;
            case 6: // Visibilidade
                valueA = a.sectionScores ? a.sectionScores[4] : null;
                valueB = b.sectionScores ? b.sectionScores[4] : null;
                break;
            default:
                return 0;
        }
        if (valueA == null && valueB == null) return 0;
        if (valueA == null) return currentSortDirection === 'asc' ? -1 : 1;
        if (valueB == null) return currentSortDirection === 'asc' ? 1 : -1;

        // Correct comparison (Ensure numbers are treated as numbers)
        if (typeof valueA === 'number' && typeof valueB === 'number') {
            return currentSortDirection === 'asc' ? valueA - valueB : valueB - valueA;
        }
        if (typeof valueA === 'string') {
            valueA = valueA.toLowerCase();
            valueB = b.toLowerCase();
        }

        // Generic Comparasion
        if (currentSortDirection === 'asc') {
            if (valueA < valueB) return -1;
            if (valueA > valueB) return 1;
            return 0;
        } else {
            if (valueA < valueB) return 1;
            if (valueA > valueB) return -1;
            return 0;
        }
    });
}

function renderNoDataPieChart(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error(`Canvas element with id "${canvasId}" not found.`);
        return;
    }

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the existing chart

    // Draw a gray circle
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, Math.min(canvas.width, canvas.height) / 3, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(103, 35, 230, 0.28)';
    ctx.fill();
    ctx.closePath();

    // Add "No Data Available" text
    ctx.font = 'italic 16px sans-serif';
    ctx.fillStyle = '#777';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Sem dados para a data selecionada', canvas.width / 2, canvas.height / 2);
}

function displayNoDataLeaderboard() {
    const leaderboardList = document.getElementById('leaderboard-list');
    leaderboardList.innerHTML = `
        <tr>
            <td colspan="8" style="text-align: center; font-style: italic; color: #777;">Sem dados para a data selecionada.</td>
        </tr>
    `;
}