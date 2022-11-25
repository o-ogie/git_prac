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
    const subject = e.target.subject.value
    const content = e.target.content.value
    const writer = e.target.writer.value            //input에 있는 value를 가져와서
    const instance = new Board(subject, content, writer) 

    
}

writeFrm.addEventListener(`submit`, submitHandler)