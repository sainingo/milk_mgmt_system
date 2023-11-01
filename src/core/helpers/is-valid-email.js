function validateEmail(email) {
    // Add email validation logic here
    const reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return reg.test(email);
}

module.exports = validateEmail;