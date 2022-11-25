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

}

writeFrm.addEventListener(`submit`, submitHandler)