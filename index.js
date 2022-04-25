let button = document.getElementById("calculate-btn")
let resetButton = document.getElementById("reset-btn")
let currentArea = document.getElementById("current-area")
let wantedArea = document.getElementById("wanted-area")
let displayArea = document.getElementById("display-area")
let platinumNft = document.getElementById("platinum-nft")
let goldNft = document.getElementById("gold-nft")
let silverNft = document.getElementById("silver-nft")
let bronzeNft = document.getElementById("bronze-nft")
let coinstMined = document.getElementById("coins-mined")
const strongPrice = document.querySelector(".strong-price")
const strongIcon = document.querySelector(".strong-icon")
const strongAPI = "https://api.coingecko.com/api/v3/coins/stronger"

button.addEventListener("click", calculate)

//CALCULATE BUTTON FUNCTION
function calculate() {
    getStrong()
    let price = variablePrice
    let current = currentArea.value 
    let wanted = wantedArea.value
    let platinum = platinumNft.value
    let gold = goldNft.value
    let silver = silverNft.value
    let bronze = bronzeNft.value
    let mined = coinstMined.value
    let dailyToken = ((current *0.0924) + (platinum * 0.464) + (gold * 0.185) + (silver * 0.055) + (bronze * 0.0125) + (mined * 0.001369)) 
    let dailyPrice = dailyToken * price 
    // let days = 0;
    //     for(let i=current; i<wanted; i++) {
    //     let math = days += 10/((i*0.0924) + (platinum * 0.464) + (gold * 0.185) + (silver * 0.055) + (bronze * 0.0125) + (mined * 0.001369))    
    //     let newContent = `
    //         <p>It will take you: <span class="span-color">${math.toFixed(2)}</span> days.</p>
    //         <p>Your amount of daily tokens: <span class="span-color">${dailyToken.toFixed(4)}</span></p>
    //         <p>Your daily income is : <span class="span-color">$${dailyPrice.toFixed(2)}</span></p>
    //         `
    //     displayArea.innerHTML = newContent   
    //     console.log(math)
         
    // }


    let days = 0;
        for(let i=current; i<wanted; i++) {
        days += 10/((i*.0924))    
        let newContent = `
            <p>It will take you: <span class="span-color">${days}}</span> days.</p>
            <p>Your amount of daily tokens: <span class="span-color">${dailyToken.toFixed(4)}</span></p>
            <p>Your daily income is : <span class="span-color">$${dailyPrice.toFixed(2)}</span></p>
            `
        displayArea.innerHTML = newContent   
        console.log(days)
         
    }

//         let days = 0
// const sumOf = (current, wanted) => {
//         for (let i=current; i<wanted; i++) {
//             days += 10/((i*0.0924))
//         }
//         return (days)
//         }

    
    console.log(days);
    console.log(current);
    console.log(wanted)
    console.log(days.toFixed(2))
    console.log(mined)
    console.log(dailyToken)
    console.log(dailyPrice)
        // if (wanted == 0 || current === wanted) {
        //     displayArea.innerHTML = `
        //     <p>Your amount of daily tokens: <span class="span-color">${dailyToken.toFixed(4)}</span></p>
        //     <p>Your daily income is : <span class="span-color">$${dailyPrice.toFixed(2)}</span></p>
        //     `
        // } else if (current > wanted) {
        //     displayArea.innerHTML = "Current value is higher than wanted"
        // }  
}



//API FETCH STRONG INFORMATION FUNCTION
let variablePrice;
const getStrong = () => {
    fetch(strongAPI)
    .then((response) => {
        if(!response.ok) {
            throw Error (response.status)
        }
        return response.json()
    })
    .then((data) => {
        console.log(data)
        strongIcon.src = data.image.small
        const currentPrice = data.market_data.current_price.usd
        strongPrice.innerHTML = `Current price: $${currentPrice}`
        variablePrice = currentPrice;
    })
}
getStrong()

// RESETS THE INPUT FIELDS FUNCTION
const resetInputFields = () => {
    currentArea.value = "";
    wantedArea.value = "";
    bronzeNft.value = "";
    silverNft.value = "";
    goldNft.value = "";
    platinumNft.value = "";
    coinstMined.value = "";
    displayArea.innerHTML = ""
}
resetButton.addEventListener("click", resetInputFields)




