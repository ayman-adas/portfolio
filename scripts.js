document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Validate form inputs
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const message = document.querySelector('#message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Check if email is valid
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Display thank you message
        const thankYouMessage = document.createElement('p');
        thankYouMessage.textContent = 'Thank you for your message, ' + name + '!';
        thankYouMessage.style.color = '#3498db';
        thankYouMessage.style.fontSize = '1.2em';
        thankYouMessage.style.marginTop = '20px';

        form.reset();

        const formContainer = form.parentElement;
        if (formContainer.querySelector('p')) {
            formContainer.querySelector('p').remove();
        }
        formContainer.appendChild(thankYouMessage);
    });
});