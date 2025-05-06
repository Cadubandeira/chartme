// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFAh_QfHaQqXIna07yHuHzN6EW4mGCtUE",
    authDomain: "chartme-2c4aa.firebaseapp.com",
    projectId: "chartme-2c4aa",
    storageBucket: "chartme-2c4aa.firebasestorage.app",
    messagingSenderId: "1000796548418",
    appId: "1:1000796548418:web:c891c61205cdf404f1ecdb",
    measurementId: "G-T2686T1ETY"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const registerForm = document.getElementById('register-form');
const passwordRequirements = document.getElementById('password-requirements');
const passwordRequirementsList = document.querySelectorAll('#password-requirements li')
const registerPassword = document.getElementById('register-password');
const confirmPasswordInput = document.getElementById('register-confirm-password');
const confirmPasswordError = document.getElementById('confirm-password-error');
const emailAlreadyRegisteredError = document.getElementById('email-already-registered');
const loadingOverlay = document.getElementById('loading-overlay');
const snackbar = document.getElementById('snackbar');

function showError(id, show, mandatory = false, message = '') {
    const errorElement = document.getElementById(id);
    errorElement.innerText = message;
    errorElement.classList.toggle('mandatory-error', mandatory);
    if (show) {
        errorElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';
    }
}

function showMessage(message, isError = false) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerText = message;
    messageDiv.style.color = isError ? 'red' : 'green';
    messageDiv.style.display = 'block';
}

function showSnackbar(message, isError = false) {
    if (!snackbar) {
        return;
    }
    snackbar.innerHTML = `${message} <button onclick="hideSnackbar()">Fechar</button>`;
    snackbar.classList.add('show');
    snackbar.classList.toggle('error', isError);
    setTimeout(() => {
        snackbar.classList.remove('show');
        snackbar.classList.remove('error');
    }, 3000);
}

function hideSnackbar() {
    if (snackbar) {
        snackbar.classList.remove('show');
        snackbar.classList.remove('error');
    }

}

function showLoading() {
    loadingOverlay.classList.add('show');
}

function hideLoading() {
    loadingOverlay.classList.remove('show');
}


registerPassword.addEventListener('focus', () => {
    passwordRequirements.classList.add('visible');
});
registerPassword.addEventListener('input', () => {
    const password = registerPassword.value;

    const rules = {
        minlength: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password)
    }
    const isPasswordValid = Object.values(rules).every(rule => rule === true);

    if (isPasswordValid) {
        passwordRequirements.classList.remove('visible');
    } else {
        passwordRequirements.classList.add('visible');
    }
    passwordRequirementsList.forEach(li => {
        const rule = li.getAttribute('data-rule');
        if (rules[rule]) {
            li.classList.add('valid');
        } else {
            li.classList.remove('valid');
        }
    })

});
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    showLoading();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = registerPassword.value;
    const confirmPassword = confirmPasswordInput.value;
    showError('email-already-registered', false);

    if (password !== confirmPassword) {
        confirmPasswordInput.classList.add('error');
        showError('confirm-password-error', true, false, "Senhas não conferem");
        hideLoading();
        return;
    } else {
        confirmPasswordInput.classList.remove('error');
        showError('confirm-password-error', false);
    }

    const rules = {
        minlength: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password)
    }
    const isPasswordValid = Object.values(rules).every(rule => rule === true);
    if (!isPasswordValid) {
        passwordRequirements.classList.add('visible');
        showMessage('Please make sure the password meets all the requirements', true);
        hideLoading();
        return;
    }
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;

        // Create a new document in the 'users' collection
        await db.collection('users').doc(user.uid).set({
            name: name,
            email: email,
            isAdmin: false  // Set default to false
        });

        // Automatically sign in the user
        await auth.signInWithEmailAndPassword(email, password);

        // Redirect to dashboard with a query parameter indicating success
        window.location.href = 'dashboard.html?registrationSuccess=true';

    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            showError('email-already-registered', true, false, "E-mail já cadastrado");
        } else {
            showMessage(error.message, true);
        }
    } finally {
        hideLoading();
    }
});

// Password reset functionality
const resetForm = document.getElementById('reset-form'); // Get the reset form

// Make the resetPassword function globally accessible
window.resetPassword = () => {
    const email = document.getElementById("emailInput").value; // Get email from input field
    if (!email) {
        showSnackbar("Por favor, digite seu e-mail.", true);
        return;
    }

    showLoading(); // Show loading overlay

    auth.sendPasswordResetEmail(email)
        .then(() => {
            // Password reset email sent!
            showSnackbar("E-mail de recuperação enviado! Verifique sua caixa de entrada.", false);
        })
        .catch((error) => {
            // Error: sendPasswordResetEmail
            showSnackbar("Erro ao enviar e-mail de recuperação: " + error.message, true);
        })
        .finally(() => {
            hideLoading(); // Hide loading overlay
        });
};