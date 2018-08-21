const saveVacationEntry = function () {

    document.querySelector(".saveVacationbutton").addEventListener("click", () => {

       // const userObject = session.getActiveUser()
        const newArticle = {
            content: document.querySelector("#Location").value,
            type: document.querySelector("#Type").value,
            date: querySelector("date").value,
            rating: document.querySelector("#rating").value,

        }

        dataManager.saveVacationEntry(newArticle).then(() => {
            inputArticles.clearVacationForm()

            document.querySelector("#inputVacationDOM").innerHTML = "";
            dataManager.getVacations().then(result =>{
                result.forEach(entry => {


            document.querySelector("#inputVacationDOM").innerHTML += inputVacation.vacationsHTML(entry)
        })

            })
        })
    })
}

module.exports = saveVacationToDatabase