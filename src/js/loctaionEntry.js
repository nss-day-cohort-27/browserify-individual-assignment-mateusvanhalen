//MH - entering form for input of new vacations. Trying for required fields
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
                <div class = "wrapperArticlesInput">
                    <h3>Vacations!</h3>
                        <input type="text" placeholder="Enter Location" id ="Location" class="titleClass" required>
                        <input type="date" placeholder="Enter The Date" id = "Date" class="symClass"  required>
                        <input type="text" placeholder="Enter URL" class="Type" id="Enter Vaca Type"required>
                        <input type="number" placeholder="Enter URL" class="Type" id="Enter Rating"required>

                            <button id=save class="saveArticlebutton" type="submit">Submit Article</button>
            </div>`
            }
        },

    })

module.exports = inputArticles