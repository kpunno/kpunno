
main = () => {
    const copyIcon = document.getElementById('copy');
    const email = document.getElementById('email');
    copyIcon.addEventListener('click', () => {
        console.log(email.value);
    })
}

document.addEventListener('DOMContentLoaded', main)