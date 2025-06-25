document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show thank you message
    document.getElementById('thankYouMessage').style.display = 'block';
    
    // Hide form
    this.style.display = 'none';
    
    // Reset form after 5 seconds
    setTimeout(() => {
        this.reset();
        this.style.display = 'block';
        document.getElementById('thankYouMessage').style.display = 'none';
    }, 5000);
});



document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent normal form submission
    
    // Show the thank you message
    document.getElementById('contactThankYouMessage').style.display = 'block';

    // Simulate form submission after a delay
    setTimeout(() => {
        this.submit(); // Submit the form after showing the message
    }, 2000); // 2 seconds delay
});
