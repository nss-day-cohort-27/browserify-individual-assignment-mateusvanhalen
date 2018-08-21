//MH - entering form for input of new vacations. Required fields etc.
const inputVacation= Object.create(null, {
    clearVacationForm: {
        value: () => {
            document.querySelector("#Location").value = " ",
            document.querySelector("#Date").value = " ",
            document.querySelector("#Type").value = " ",
            document.querySelector("#Rating").value = " ",
            alert("Vacation submitted!");
        }
    },

    renderVacationForm: {
        value: () => {
            return `
                <div class = "locationVacationForm">
                    <h3>Vacations!</h3>
                    <input type="text" placeholder="Enter Location" id ="Location" class="locationVaca" required>
                    <input type="date" placeholder="Enter The Date" id = "Date" class="dateVaca"  required>
                    <input type="text" placeholder="Enter Type" class="typeVaca" id="Enter Vaca Type"required>
                    <input type="number" placeholder="Enter number rating" class="numberVaca" id="Enter Rating"required>

                    <button id=save class="saveVacationbutton" type="submit">Save Vacation</button>
            </div>`
            }
        },

    })

module.exports = inputVacation