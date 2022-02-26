//setTimeout cancelar um timeOut

//const timeOut = 3000
//const finidhed = () => console.log("Hallo!")

//let timer = setTimeout(finidhed, timeOut)
//clearTimeout(timer) // dessa forma que cancela o timeout

let timer = setTimeout(() => {
    console.log('World!') 
}, 1000);
clearTimeout(timer)

