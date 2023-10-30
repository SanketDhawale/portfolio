function validateform() {
    var form = document.getElementById('contactForm');
    
    if (!form.checkValidity()) {
        alert('Please fill in all the required fields.');
        return false;
    }

    var mobileInput = form.elements['mobile'];
    if (!isValidMobile(mobileInput.value)) {
        alert('Please enter a valid mobile number.');
        return false;
    }

    var emailInput = form.elements['email'];
    if (!isValidEmail(emailInput.value)) {
        alert('Please enter a valid email address.');
        return false;
    }

    return true;
}

function isValidMobile(mobile) {
    var mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobile);
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}