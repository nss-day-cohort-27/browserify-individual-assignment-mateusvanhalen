//const entryLists = require("./entryList")

const vacationManager = require("./dataManager")
const inputVacation = require("./locationEntry")
const vacationDOM = require("./entryList")

document.querySelector("#locationVacationForm").innerHTML = inputVacation.renderVacationForm();
document.querySelector("#inputVacationDOM").innerHTML = vacationDOM.data()

inputVacation();
VacationManager();
vacationDOM();
document.querySelector("#inputVacationDOM").innerHTML = inputVacation.renderVacationForm();
                saveVacationToDatabase()