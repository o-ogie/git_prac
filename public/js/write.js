const writeFrm = document.querySelector(`#writeFrm`)

class Board{
    constructor(subject, writer, content){
        this.index = 0
        this.subject = subject
        this.content = content
        this.writer = writer
        this.date = `2022-11-17`
        this.hit = 0
    }
}

function submitHandler(e){

    e.preventDefault()
    const subject = e.target.subject.value
    const content = e.target.content.value
    const writer = e.target.writer.value            //input에 있는 value를 가져와서
    const instance = new Board(subject, content, writer) 

    const boards = JSON.parse(localStorage.getItem("boards")) // []
    boards.push(instance)
    const index = boards.length - 1
    console.log(boards)

    const item = JSON.stringify(boards) // 만든객체를 string으로 바꾸고
    localStorage.setItem(`boards`, item)

    location.href = `./board/view.html?index=` + index
    
}

writeFrm.addEventListener(`submit`, submitHandler)


// [{},{},{}]     ?index=0 1 2 