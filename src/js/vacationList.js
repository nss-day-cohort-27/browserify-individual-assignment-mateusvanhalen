//to populate to DOM// Matt
const VacationDOM = require("./items")

const listVacation = document.querySelector(".inputVacationDOM")

const vacationList = (entries) => {
    listVacation.innerHTML = " "


    entries.map(entry => {
        listVacation.innerHTML += VacationDOM(entry)
    })
}

module.exports = vacationList

