// async function getCoinsId() {
//     let response = await fetch ('https://api.coingecko.com/api/v3/coins/list');
//     let data = await response.json()
//     return data;
// }

// async function getCoinsInfo() {
//     const id = document.getElementById("coinName").value;
//     let response = await fetch (`https://api.coingecko.com/api/v3/coins/${id}`);
//     let data = await response.json()
    
//     function displayCoinData(data) {

//     }
// }

const searchButton = document.getElementById("searchBtn");
searchButton.addEventListener("click", getCoinsInfo());

function getCoinsInfo() {
    let userInput = document.getElementById("coinId").value;
    fetch(`https://api.coingecko.com/api/v3/coins/${userInput}`)
        .then((response) => {
            if (response.ok) {
            return response.json();
            } else {
            throw new Error("NETWORK RESPONSE ERROR");
            }
        })
        .then(data => displayCoinData(data))
        .catch(error => console.error("FETCH ERROR:", error));
        
        function displayCoinData(data) {
            console.log(data)
            const coinDiv = document.getElementById("results");    

            const coinNameList = data.map(coin => 
                `<p>${coin.id} - <span>${coin.market_data.current_price.usd}</span></p>`).join('');
            const list = document.createElement("p");
            list.innerHTML = coinNameList;
            coinDiv.appendChild(list);
    }
}