let item = localStorage.getItem("boards")

if (item === null){
    const array = []
    const items = JSON.stringify(array)
    localStorage.setItem("boards", items)
    item = array
}
