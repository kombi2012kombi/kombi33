let cards = document.querySelector(".cards")

let data = fetch("https://jsonplaceholder.typicode.com/users")
data.then(data => data.json())
    .then(data => {
        let newData = ""

        data.map(element => {
            console.log(element);
            
            newData += `
            <div class="card">
                <h1>Ismi: ${element.name}</h1>
                <p>Username: ${element.username}</p>
                <p>Manzil: ${element.address.street}</p>
                <p>Emai:${element.email}</p>
            </div>
            `
            cards.innerHTML = newData
        })

    })