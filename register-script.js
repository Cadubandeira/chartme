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
        const registerForm = document.getElementById('register-form');
       const passwordRequirements = document.getElementById('password-requirements');
       const passwordRequirementsList = document.querySelectorAll('#password-requirements li')
         const registerPassword = document.getElementById('register-password');
        const confirmPasswordInput = document.getElementById('register-confirm-password');
       const confirmPasswordError = document.getElementById('confirm-password-error');
        const emailAlreadyRegisteredError = document.getElementById('email-already-registered');

           function showError(id, show, mandatory = false, message = ''){
                const errorElement = document.getElementById(id);
                errorElement.innerText = message;
                errorElement.classList.toggle('mandatory-error', mandatory);
                    if(show){
                     errorElement.style.display = 'block';
                    } else {
                     errorElement.style.display = 'none';
                    }
            }
     function showMessage(message, isError=false){
        const messageDiv = document.getElementById('message');
      messageDiv.innerText = message;
      messageDiv.style.color = isError ? 'red' : 'green';
      messageDiv.style.display = 'block';
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

             if(isPasswordValid){
               passwordRequirements.classList.remove('visible');
            } else{
                 passwordRequirements.classList.add('visible');
            }
         passwordRequirementsList.forEach(li => {
              const rule = li.getAttribute('data-rule');
             if(rules[rule]){
                 li.classList.add('valid');
              } else{
                  li.classList.remove('valid');
              }
         })

      });
        registerForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                 const email = document.getElementById('register-email').value;
                 const password = registerPassword.value;
                const confirmPassword = confirmPasswordInput.value;
                 showError('email-already-registered', false);

            if (password !== confirmPassword) {
                 confirmPasswordInput.classList.add('error');
                  showError('confirm-password-error', true, false, "Senhas não conferem");
                return;
            } else{
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
                        return;
                    }
             try {
                     const userCredential = await auth.createUserWithEmailAndPassword(email, password);
                    showMessage("Account created successfully! Please login.", false);
                   window.location.href = 'index.html';
                } catch (error) {
                      if (error.code === 'auth/email-already-in-use') {
                        showError('email-already-registered', true, false, "E-mail já cadastrado");
                       }  else{
                            showMessage(error.message, true);
                       }
                }
        });