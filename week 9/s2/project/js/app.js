const timer = document.getElementById('timer')
const start = document.getElementById('start')
const reset = document.getElementById('reset')
const stop = document.getElementById('stop')
let time = 0;
let interval;
function gotimer(){
    time++
    timer.innerHTML = time
}
start.addEventListener('click',function(){
    interval = setInterval(gotimer, 1000)
})
stop.addEventListener('click',function(){
    clearInterval(interval)
})
reset.addEventListener('click',function(){
    clearInterval(interval)
    time = 0
    timer.innerHTML = "00" + ":" + "00" + ":" + "00"
})

