let hour = document.getElementById("hour")
let minutes = document.getElementById("min")
let second = document.getElementById("sec")
let date = document.getElementById("date")
let digital_clock = document.getElementById("pm")

let now = new Date()
date.innerText = now.toDateString()

function clock (){
    let time = new Date()
    hour.innerText = time.getHours()
    minutes.innerText = time.getMinutes()
    second.innerText = time.getSeconds()
}
setInterval(()=>{
     clock() 
},1000)
