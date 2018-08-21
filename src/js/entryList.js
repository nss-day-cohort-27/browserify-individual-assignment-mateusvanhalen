const inputVacations = require("./locationEntry")

const VacationDOM = Object.create(null, {
    VacationHTML: {
        value: (data) => {
            return `
            <div class = "wrapper" >
                <div class = "inputVacationDOM" >
                <h3>${data.location}</h3>
                    <p>${data.type}</p>
                    <p>${data.year}</p>
                    <p>${data.rating}</p>
                        <button id="deleteArticle--${data.id}"type="button">Delete</button>
                </div>
            </div>`
        }
},
})

module.exports = VacationDOM