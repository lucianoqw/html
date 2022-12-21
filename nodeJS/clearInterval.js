// clear Interval irá cancelar umsetInterval registrado
const timeOut = 1000
const checking = () => console.log('checking!')

let interval = setInterval(checking, timeOut)


setTimeout( () => clearInterval(interval), 3000)
