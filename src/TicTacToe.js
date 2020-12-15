const Matrix = require('./Matrix')
class TicTacToe extends Matrix{
    loadBoard(){
        this.matrix =[]
        this.playerTurn =true//mean player 1
        const x =3;
        for(let i=0; i<x; i++){
            this.matrix[i] = []
            for(let j=0; j<x; j++){
                this.matrix[i][j] = '.'
            }
        }
    }
    play( rowNum, columnNum, player ){
        if(this.matrix[rowNum][columnNum] === '.'){
            if(player === 1 && this.playerTurn){
                this.alter(rowNum, columnNum, 'x')
                this.playerTurn = false
            }else if(player === 2 && !(this.playerTurn)){
                this.alter(rowNum, columnNum, 'o')
                this.playerTurn = true
            }
            // player === 1 ? this.alter(rowNum, columnNum, 'x') : this.alter(rowNum, columnNum, 'o')
            this.checkWin(rowNum, columnNum, player)
        }
    }
    getDiagonalLines(){
        let line1 =[]//where x = y
        let line2 =[]//where
        for(let i=0; i<this.matrix.length; i++){
            line1.push(this.matrix[i][i])
            if(i < this.matrix.length/2){
                const difference = this.matrix.length - 1 -i
                line2.push(this.matrix[i][difference])
                if(i !== difference){
                    line2.push(this.matrix[difference][i])
                }
            } 
        }
        return {line1, line2}
    }
    checkWin(rowNum, columnNum, player){
        const row = this.printRow(rowNum)
        const isRow = row.every(r => r === 'x' || r=== 'o')
        const column = this.printColumn(columnNum)
        const isColumn = column.every(c => c === 'x' || c=== 'o')
        const diagonals = this.getDiagonalLines()
        const isDiagonal = diagonals.line1.every(d => d === 'x' || d=== 'o') || diagonals.line2.every(d => d === 'x' || d=== 'o')
    
        if(isColumn || isRow || isDiagonal){
            console.log(`Congratulations Player ${player}`);
            // this.loadBoard()
        }
    }
}

let board = new TicTacToe()
board.loadBoard()

board.play(0, 2, 1)
board.play(2, 2, 1)
board.play(2, 1, 2)
board.play(1, 1, 1)
board.play(1, 0, 2)
board.play(2, 0, 1) //prints Congratulations Player 1

board.print()
//prints
// o       .       x
// o       .       x
// .       .       x

