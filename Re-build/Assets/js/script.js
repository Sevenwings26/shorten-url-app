// On click on hambugger to toggle

let toggleButton = document.getElementById("toggleButton");

function toggle() {
  if ((toggleButton.style.display = "none")) {
    toggleButton.style.display = "block";
  }
  else {
    toggleButton.style.display = "none";
  }
}

function cancel() {
    toggleButton.style.display = 'none';
}

