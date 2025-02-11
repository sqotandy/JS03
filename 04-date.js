// console.log(new Date())
// const start = new Date ()

// console.log(now.getFullYear())
// console.log(now.getDate())
// console.log(now.())


// console.log(now.toDateString())
// console.log(now.toTimeString())
// console.log(now.toLocaleDateString())
// console.log(now.toLocaleTimeString())


// const now = new Date ()
let mode = `full`
const output = document.getElementById(`output`)
const fullBtn = document.getElementById(`full`)
const dateBtn = document.getElementById(`date`)
const timeBtn = document.getElementById(`time`)


function bindMode(name) {
    return function () {
        mode = name
        update ()
    }
}


fullBtn.onclick = bindMode('full')
dateBtn.onclick = bindMode(`date`)
timeBtn.onclick =bindMode(`time`)


setInterval (update, 250)
update ()

function update () {
    output.textContent = format (mode)
}

function format (formatMode) {
    const now = new Date ()
    switch (formatMode) {
        case `time` :  
            return now.toLocaleTimeString () + ';' + now.getMilliseconds ()
        case `date` : 
            return now.toLocaleDateString ()
        case `full` : 
            return now.toLocaleTimeString () + ` ` + now.toLocaleDateString ()
        default :
            return now.toLocaleTimeString ()
    }
}
