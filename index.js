
document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('trial-submit-btn');
    const emailInput = document.getElementById('trial-email-input');


    console.log("DOM fully loaded. Target button:", submitButton);
    console.log("DOM fully loaded. Target input:", emailInput);

    if (submitButton && emailInput) {
        submitButton.addEventListener('click', (event) => {
            
            event.preventDefault(); 
            
            console.log("Email submit button clicked");
            const emailValue = emailInput.value.trim();

            
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+\$/;

            if (!emailValue) {
                console.warn("Blocked: Field is empty.");
                alert('Please enter an email address to begin.');
                emailInput.focus();
            } else if (!emailPattern.test(emailValue)) {
                console.warn("Blocked: Input violates standard format rules.");
                alert('Please provide a valid email address structure (e.g., name@example.com).');
                emailInput.focus();
            } else {
                console.log("Success: Validation passed safely.");
                alert(`Success! A free trial activation link has been sent to: ${emailValue}`);
                emailInput.value = ''; 
            }
        });
    } else {
        console.error("Configuration Error: One or more element IDs were not found in the HTML frame.");
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const toolsTrigger = document.querySelector('.tools-trigger');
    const toolsWrapper = document.querySelector('.betting-tools-wrapper');

    if (toolsTrigger && toolsWrapper) {
         
        toolsTrigger.addEventListener('click', (event) => {
            event.preventDefault(); 
            toolsWrapper.classList.toggle('active');
        });

        
        document.addEventListener('click', (event) => {
            if (!toolsWrapper.contains(event.target)) {
                toolsWrapper.classList.remove('active');
            }
        });
    }
});

