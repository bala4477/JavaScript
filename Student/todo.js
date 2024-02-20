// script.js

var nameInput = document.getElementById("name");
var ageInput = document.getElementById("age");
var genderInputs = document.querySelectorAll('input[name="gender"]');
var courseInput = document.getElementById("course");
var emailInput = document.getElementById("email");
var data = document.getElementById("container");

function add() {
    var tr = document.createElement("tr");

    var tdName = document.createElement("td");
    tdName.textContent = nameInput.value;
    tr.appendChild(tdName);

    var tdAge = document.createElement("td");
    tdAge.textContent = ageInput.value;
    tr.appendChild(tdAge);

    var tdGender = document.createElement("td");
    for (var i = 0; i < genderInputs.length; i++) {
        if (genderInputs[i].checked) {
            tdGender.textContent = genderInputs[i].value;
            break;
        }
    }
    tr.appendChild(tdGender);

    var tdCourse = document.createElement("td");
    tdCourse.textContent = courseInput.value;
    tr.appendChild(tdCourse);

    var tdEmail = document.createElement("td");
    tdEmail.textContent = emailInput.value;
    tr.appendChild(tdEmail);

    var tdAction = document.createElement("td");
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("id","delbtn")
    deleteButton.addEventListener("click", function () {
        data.removeChild(tr);
    });
    tdAction.appendChild(deleteButton);
    tr.appendChild(tdAction);

    data.appendChild(tr);
}
