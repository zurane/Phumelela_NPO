// Loader script

document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("overlay");
  const content = document.getElementById("content");
  // only show our loader when the document loads content
  window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });
});


// Get the modal, open button, and close button elements
const modalOverlay = document.getElementById('modalOverlay');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalPopUp = document.querySelector('.modals')

// Function to open the modal
function openModal() {
  modalOverlay.classList.add('active');
  modalPopUp.classList.remove('in-active')
}

// Function to close the modal
function closeModal() {
  modalOverlay.classList.remove('active');
  modalPopUp.classList.add('in-active')
}

// Add event listeners to open and close buttons
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

// Add event listener to close the modal when clicking outside of it
window.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});


// Add script to update the year in the footer
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  yearSpan.textContent = currentYear;
});

// Responsive navbar toggle
const navbarToggle = document.getElementById('navbarToggle');
const navbarMenu = document.getElementById('navbarMenu');
navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});
// Close navbar menu when a link is clicked (for better UX on mobile)
const navbarLinks = navbarMenu.querySelectorAll('a');
navbarLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
  });
});