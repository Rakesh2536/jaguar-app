const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');
const navbar = document.getElementById('navbar');
const languageSelect = document.getElementById('selected-lang');
const navItemService= document.getElementById('nav-item-service');




function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'flex';
    lightboxImg.src = element.src;
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}




// Open the popup
function contactOpenPopup() {
    document.getElementById('contactpopup').style.display = 'flex';
}

// Handle form submission (store the redirection URL in sessionStorage)
function contactHandleSubmit(event) {
    // Prevent the form from submitting normally

// Store the initial redirection URL in sessionStorage
   

// Show the thank you message
document.getElementById('contactThankYouMessage').style.display = 'block';

// Simulate form submission after a delay (to show the "Thank you" message)
setTimeout(function() {
    document.getElementById('contactForm').submit();
}, 2000); // Delay for showing the thank you message before submission
}
  // Handle form submission and redirection override

// Close popup
function contactClosePopup() {
    document.getElementById('contactpopup').style.display = 'none';
}

// Get today's date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];

// Initialize the Flatpickr calendar on the hidden input with minDate set to today's date
flatpickr("#appointmentDate", {
  minDate: today, // Prevent selecting past dates
  onChange: function(selectedDates, dateStr, instance) {
    // Update the hidden input field with the selected date
    let appointmentDateField = document.getElementById('appointmentDateField');
    appointmentDateField.value = dateStr;

// Update the email content in the textarea with the selected appointment date
let emailBody = document.getElementById('emailBody');
emailBody.value = "You have an appointment scheduled on " + dateStr + ".";
  }
});

// Show the calendar when the button is clicked
document.getElementById('datePickerButton').addEventListener('click', function() {
  document.getElementById('appointmentDate').click();
});

// Open the popup
function openPopup() {
    document.getElementById('popup').style.display = 'flex';
}

// Handle form submission
function handleSubmit(event) {
    // Prevent the default form submission behavior

// Show the thank you message
document.getElementById('thankYouMessage').style.display = 'block';

// Simulate a short delay for showing the thank you message
setTimeout(function() {
    // Now submit the form manually
    document.getElementById('emailForm').submit(); // Trigger form submission

    // Close the popup after a short delay (to show the thank you message)
    closePopup();
}, 3000); // Delay for 3 seconds (you can adjust the time)
}

// Close popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}







