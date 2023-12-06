const form = document.getElementById("myForm").value;

function createPersonObj() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;

        const person = {
            firstName: firstName,
            lastName: lastName,
            age: age,
        };
    return person;
}

function addDataPersonAttribute() {
    const person = createPersonObj();
    const jsonData = JSON.stringify(person);

    form.setAttribute("data-person", jsonData);
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    addDataPersonAttribute();
});
