//extra

const vacationManager = require("./dataManager/")
const populateVacationDOM = require("./articleList")

function removeVacation () {
    document.querySelector("#inputVacationDOM").addEventListener("click", (event) => {
        console.log("deleted")
        if(event.target.id.split("--")[0] === "deleteVacation")
        {console.log("buh_bye")
            let id = event.target.id.split("--")[1]
            vacationManager.deleteVacation(id).then(()=> {
                populateVacationDOM()
        })
    }
        })}

module.exports = removeVacation