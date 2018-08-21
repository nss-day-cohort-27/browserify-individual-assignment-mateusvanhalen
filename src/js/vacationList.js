//to populate to DOM// Matt
const vacationManager = require("./dataManager")
const VacationDOM = require("./items")



// GET ALL ENTRIES ONTO THE DOM
function populateVacationDOM() {
    document.querySelector("#InputVacationDOM").innerHTML = "";
    vacationManager.getVacation().then(result => {
        result.forEach(entry => {
            // puts existing vacations onto DOM from getVacation
            document.querySelector("#InputVacationDOM").innerHTML += vacationManager.getVacation(entry)
        })

})}

module.exports = populateVacationDOM

