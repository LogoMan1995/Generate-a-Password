function randomPassword(length) {
    const characters = "kdnfksfdnngoerpfkgvmsdfk490523=-402-fjndvskvbcnxf-04r";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}


document.querySelector('.random-password').addEventListener('click', () => {
    const password = randomPassword(10);
    document.querySelector('.pass-in').value = password; 
});


document.querySelector('.send').addEventListener('click', () => {
   
    const inputFields = document.querySelectorAll('input');
    inputFields.forEach(input => {
        input.value = ""; 
    });
});
