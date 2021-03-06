//MH - entering form for input of new vacations. Required fields etc.
//removing the commas
const inputVacation = Object.create(null, {
    clearVacationForm: {
        value: () => {
            document.querySelector("#location").value = " "
                document.querySelector("#date").value = " "
                document.querySelector("#type").value = " "
                document.querySelector("#rating").value = " "
                alert("Vacation entry submitted!")
        }
    },
    //post to DOM - up there
    renderVacationForm: {
        value: () => {
            return `
                <div class="locationVacationForm">
                    <h3>Vacations!</h3>
                    <input type="text" placeholder="Enter Location" id="location" class="location" required>
                    <input type="text" placeholder="Enter the date" id="date" class="date" required>
                    <input type="text" placeholder="Enter Type" class="type" id="type" required>
                    <input type="text" placeholder="Enter rating" class="rating" id="rating" required>

                    <button class="saveVacationButton" id="saveVacationButton">Save Vacation</button>
            </div>`
        }
    },

})

module.exports = inputVacation



