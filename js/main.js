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
    let ampm = "am"
    if(hour >= 12)
    {
        ampm = "pm"
    }
    if(hour === 0)
    {
        hour = 12
    }
    else if (hour > 12)
    {
        hour -= 12
    }
}
setInterval(()=>{
     clock() 
},1000)
