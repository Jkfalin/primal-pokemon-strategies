var date = new Date()
var m = date.getMonth()
var d = date.getDay()
var y = date.getFullYear()

var copyright = document.querySelector("#copyright")

copyright.textContent = 'Copyright ' + m + '-' + d + '-'+ y

