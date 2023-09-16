//assemble
let warrantyHeader = document.createElement("h2")
warrantyHeader.textContent = "Warranty Information"
//install
document.body.append(warrantyHeader)

let firstNameLabel = document.createElement("label")
firstNameLabel.textContent = "First Name"
document.body.append(firstNameLabel)
let firstNameInput = document.createElement("input")
document.body.append(firstNameInput)

let lastNameLabel = document.createElement("label")
lastNameLabel.textContent = "Last Name"
document.body.append(lastNameLabel)
let lastNameInput = document.createElement("input")
document.body.append(lastNameInput)
