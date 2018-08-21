const vacationManager = Object.create(null, {
    getVacations: {
        value: () => {
            return fetch("http://localhost:8088/places").then(r => r.json())
        }
    },

saveVacationEntry: {
    value: (newEntry) => {
        return fetch("http://localhost:8088/places", {
            method: "POST",
            headers: {

                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntry)
        }).then(r => r.json)
    }
},
})



module.exports = vacationManager