function openNavbar() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('submit-button').addEventListener('click', function (event) {
        event.preventDefault(); 

        // Get user inputs
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        const userData = {
            name: name,
            email: email,
            phone: phone,
            message: message
        };

        console.log('User Data:', userData);

        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('message').value = '';

        redirectToResponsePage();
    });
});
