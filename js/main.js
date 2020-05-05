const cartButton = document.querySelector("#cart-button"),
  modal = document.querySelector(".modal"),
  close = document.querySelector(".close");

const toggleModal = () => {
  modal.classList.toggle("is-open");
};

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);



// Авторизация
const buttonAuth = document.querySelector('.button-auth'),
  modalAuth = document.querySelector('.modal-auth'),
  closeAuth = document.querySelector('.close-auth'),
  logInForm = document.querySelector('#logInForm'),
  loginInput = document.querySelector('#login'),
  userName = document.querySelector('.user-name'),
  buttonOut = document.querySelector('.button-out'),
  passwordInput = document.querySelector('#password');

let login = localStorage.getItem('gloDelivery'),
password = '';


const toggleModalAuth = () => {
    modalAuth.classList.toggle("is-open");
  },
  authorized = () => {

    let logOut = () => {
      login = '';

      localStorage.removeItem('gloDelivery');
      buttonAuth.style.display = '';
      userName.style.display = '';
      buttonOut.style.display = '';

      buttonOut.removeEventListener('click', logOut);

      checkAuth();
    }

    console.log('Авторизован');

    userName.textContent = login;

    buttonAuth.style.display = 'none';
    userName.style.display = 'inline';
    buttonOut.style.display = 'block';

    buttonOut.addEventListener('click', logOut);
  },
  notAuthorized = () => {
    console.log('Не авторизован');

    let logIn = (event) => {
      event.preventDefault();

      login = loginInput.value;
      password = passwordInput.value;
     

      if (login && password) {

        localStorage.setItem('gloDelivery', login);
        toggleModalAuth();

        buttonAuth.removeEventListener('click', toggleModalAuth);
        closeAuth.removeEventListener('click', toggleModalAuth);
        logInForm.removeEventListener('submit', logIn);
        logInForm.reset();

        checkAuth();
        
      } else if (login.length === 0 && password.length === 0) {
        alert('Введите логин и пароль');
      } else if (login.length === 0 ) {
        alert('Введите логин');
      } else if (password.length === 0){
        alert('Введите пароль');
      };

    };

    buttonAuth.addEventListener('click', toggleModalAuth);
    closeAuth.addEventListener('click', toggleModalAuth);
    logInForm.addEventListener('submit', logIn);
  },
  checkAuth = () => {
    if (login && password) {
      authorized();
    } else {
      notAuthorized();
    };
  };

checkAuth();