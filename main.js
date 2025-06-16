
const inp = document.getElementById("inp")
const btn = document.getElementById("btn")
const p = document.getElementById("p")


let result = []
async function fetchData(){
    const API = "https://yurippe.vercel.app/api/quotes?character=lelouch"
    const getApi = await fetch(API)
    result = await getApi.json()

    // console.log(JSON.stringify(result, null, 2));
}
fetchData()
function RandomQuote() {
    const hasil = [];
    
    while(hasil.length < 3) {
        const random = Math.floor(Math.random() * result.length)
        const item = result[random]
        if(!hasil.includes(item)){
            hasil.push(item)
        }
    }
    return hasil
}

btn.addEventListener('click', () => {
    p.innerHTML = ""
    const quote = RandomQuote()
        quote.forEach( (post) => {
    let newP = document.createElement("p")
    newP.textContent = post.quote
    p.appendChild(newP)
})
})

