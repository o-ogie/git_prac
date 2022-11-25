let boards = JSON.parse(localStorage.getItem('boards'))
const subject = document.querySelector("#subject")
const writer = document.querySelector("#writer")
const content = document.querySelector("#content")
const date = document.querySelector("#date")
const index = location.search.split('=')[1]
const view = document.querySelectorAll("#view>li>span")
const next = document.querySelector("#next")
const prev = document.querySelector("#prev")


view[0].innerHTML = boards[index].subject
view[1].innerHTML = boards[index].writer
view[2].innerHTML = boards[index].date
view[3].innerHTML = boards[index].content