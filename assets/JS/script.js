// Toggle on small devices

const toggleView = document.getElementById('toggle-display');

const toggleCancel = document.querySelector('.cancel');

// toggle View function 
function toggle(){
    if (toggleView.style.display = 'none'){
        toggleView.style.display = 'block'
    } else {
        toggleView.style.display = 'none';
    }
};

// toggle Canacel function 
function cancel(){
    toggleView.style.display = 'none';
};


// add margin to divs 
const detailedR = document.getElementById('style-cont1');
const fullyC = document.getElementById('style-cont2');

detailedR.style.marginTop = "50px";
fullyC.style.marginTop = "100px";



// Sign-up and Login in 
// get modal id
const modal = document.getElementById('register');
const modalLogin = document.getElementById('login-id');

const closeModal = document.getElementById('close-signup');
let closeModalLogin = document.getElementById('close-login');


function signup(){
    if (modal.style.display = 'none'){
        modal.style.display = 'block';
    }
}

function login(){
    if (modalLogin.style.display = 'none'){
        modalLogin.style.display = 'block';
    }
};

closeModal.addEventListener('click', (e) => {
    modal.style.display = 'none';
});

closeModalLogin.addEventListener('click', (e) => {
    modalLogin.style.display = 'none';
});

