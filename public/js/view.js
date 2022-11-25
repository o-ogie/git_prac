let boards = JSON.parse(localStorage.getItem('boards'))
const subject = document.querySelector("#subject")
const writer = document.querySelector("#writer")
const content = document.querySelector("#content")
const date = document.querySelector("#date")
let index = location.search.split('=')[1]


