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


