const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;
const age = document.getElementById("age").value;
const person = {
    firstName: firstName,
    lastName: lastName,
    age: age,
};
const form = document.getElementById("myForm").value;

form.getAttribute("data-person", JSON.stringify(person));
