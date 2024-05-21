
// EventListner Function to fetch input value 

// Alternatively,
// const button = document.getElementById('submit-button');
// button.addEventListener('click', () => {
//     const inputUrl = document.getElementById('input-url').value;
//     alert(inputUrl);
// });

document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('submit-button');
    button.addEventListener('click', () => {
        const inputUrl = document.getElementById('input-url').value;
        alert(inputUrl);
    });
});

