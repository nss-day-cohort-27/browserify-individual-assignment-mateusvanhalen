const inputVacation = require("./vacationForm")
const vacationManager = require("./dataManager")
const populateVacationDOM = require("./vacationList")

document.querySelector("#locationVacationForm").innerHTML = inputVacation.renderVacationForm()

populateVacationDOM();

document.querySelector("#inputVacationDOM").innerHTML = vacationDOM.vacationHTML()

//event listener for save button
document.querySelector("#saveVacationButton").addEventListener("click", () => {
    const newVacation = {
        location: document.querySelector("#location").value,
        date: document.querySelector("#date").value,
        type: document.querySelector(".#type").value,
        rating: document.querySelector("#rating").value
    }

// POST to API
vacationManager.saveVacationEntry(newVacation)
    .then(() => {
    // Clear the form fields
    inputVacation.clearVacationForm()
    listEntries()
})
})
