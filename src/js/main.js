const inputVacation = require("./vacationForm")
const vacationManager = require("./dataManager")
const vacationList = require("./vacationList")

document.querySelector("#locationVacationForm").innerHTML = inputVacation.renderVacationForm()

const vacationEntries = () => {
    vacationManager.getVacations()
        .then(allEntries => vacationList(allEntries))
}

vacationEntries()

//event listener for save button
document.querySelector("#saveVacationButton").addEventListener("click", () => {
    const newVacation = {
        location: document.querySelector("#location").value,
        date: document.querySelector("#date").value,
        type: document.querySelector("#type").value,
        rating: document.querySelector("#rating").value
    }
//do something with NewVacation
newVacation()

// POST to API
vacationManager.saveVacationEntry(newVacation)
    .then(() => {
    inputVacation.clearVacationForm()
    vacationEntries()
    })
})
