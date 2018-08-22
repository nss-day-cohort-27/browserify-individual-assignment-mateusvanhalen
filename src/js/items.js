
const VacationDOM = Object.create(null, {
    VacationHTML: {
        value: (data) => {
            return `
            <div id="entry">
                <div class="inputVacationDOM">
                <h3>${data.location}</h3>
                    <p>${data.type}</p>
                    <p>${data.date}</p>
                    <p>${data.rating}</p>
                        <button id="deleteArticle--${data.id}"type="button">Delete</button>
                </div>
            </div>`
        }
},
})

module.exports = VacationDOM