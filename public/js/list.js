let item = localStorage.getItem("boards")

if (item === null){
    const array = []
    const items = JSON.stringify(array)
    localStorage.setItem("boards", items)
    item = array
}

const tbody = document.querySelector("tbody")
const boards = JSON.parse(item)

function list(list, index){
    return `<td>${index}}</td>
    <td>${list.subject}</td>
    <td>${list.writer}</td>
    <td>${list.date}</td>
    <td>${list.hit}</td>`
}

for(let i = 0; i < boards.length; i++){
    tbody.innerHTML += list(boards[i], i)
}
