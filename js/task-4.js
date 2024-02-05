const formUser = document.querySelector('.login-form');
formUser.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  const email = formUser.elements.email.value.trim();
  const password = formUser.elements.password.value.trim();
  if (!email || !password) {
    alert('Будь ласка, заповніть всі поля форми.');
    return;
  }
  const userData = {
    email,
    password
  };

  console.log(userData);
  formUser.reset();
}

