// Function to validate reCAPTCHA
function validateRecaptcha() {
    var response = grecaptcha.getResponse();
    if (response.length === 0) { // reCAPTCHA not filled out
        alert('Please complete the reCAPTCHA challenge.');
        return false;
    }
    return true; // reCAPTCHA filled out
}

// Event listener for form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    if (!validateRecaptcha()) {
        event.preventDefault(); // Prevent form submission if reCAPTCHA not validated
    } else {
        // Optionally show a notification or perform other actions on successful submission
        document.getElementById('notification').style.display = 'block';
    }
});
