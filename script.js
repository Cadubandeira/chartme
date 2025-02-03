// Your web app's Firebase configuration
    // Copy and paste this configuration from the firebase console
    // This code can be found in step 9

const firebaseConfig = {
  apiKey: "AIzaSyDFAh_QfHaQqXIna07yHuHzN6EW4mGCtUE",
  authDomain: "chartme-2c4aa.firebaseapp.com",
  projectId: "chartme-2c4aa",
  storageBucket: "chartme-2c4aa.firebasestorage.app",
  messagingSenderId: "1000796548418",
  appId: "1:1000796548418:web:c891c61205cdf404f1ecdb",
  measurementId: "G-T2686T1ETY"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
const messageDiv = document.getElementById('message');
const userInfoDiv = document.getElementById('user-info');
const userEmailSpan = document.getElementById('user-email');
const logoutButton = document.getElementById('logout-button');
const toLoginButton = document.getElementById('to-login-button');
const toRegisterButton = document.getElementById('to-register-button')

function showMessage(message, isError=false){
  messageDiv.innerText = message;
  messageDiv.style.color = isError ? 'red' : 'green';
  messageDiv.style.display = 'block';
}


function hideMessage(){
  messageDiv.style.display = 'none';
}

function showLogin(){
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    userInfoDiv.classList.add('hidden');
    hideMessage();
}

function showRegister(){
     registerForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
     userInfoDiv.classList.add('hidden');
    hideMessage();
}
// Register
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    hideMessage();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
         showMessage("Account created successfully! Please login.", false);
         showLogin();
    } catch (error) {
         showMessage(error.message, true);
    }
});

// Login
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
    hideMessage();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    userInfoDiv.classList.remove('hidden');
    userEmailSpan.textContent = user.email;
    registerForm.classList.add('hidden');
    loginForm.classList.add('hidden');
    showMessage(`Welcome back, ${user.email}!`, false);

  } catch(error){
    showMessage(error.message, true);
  }
});

logoutButton.addEventListener('click', async () => {
  try {
    await auth.signOut();
      showRegister();
       showMessage("User logged out", false)
  } catch (error) {
     showMessage(error.message, true);
  }
});

toLoginButton.addEventListener('click', showLogin)
toRegisterButton.addEventListener('click', showRegister);


auth.onAuthStateChanged((user) => {
    if(user){
         userInfoDiv.classList.remove('hidden');
        userEmailSpan.textContent = user.email;
           registerForm.classList.add('hidden');
            loginForm.classList.add('hidden');
    }
});