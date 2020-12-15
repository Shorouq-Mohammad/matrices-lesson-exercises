/* Write your code below */
class Matrix{
    constructor(x, y){
        this.matrix = this.generateMatrix(x,y)
    }
    generateMatrix(x,y){
        const matrix = []
        let counter  = 1 
        for(let i=0; i<x; i++){
            matrix[i] = []
            for(let j=0; j<y; j++){
                matrix[i][j] = counter
                counter ++
            }
        }
        return matrix
    }
    get(x,y){
        return this.matrix[x][y]
    }
    alter(x,y, value){
        this.matrix[x][y] = value
    }
    print(){
        for(let i =0; i< this.matrix.length; i++){
            let str =''
            for(let j=0; j<this.matrix[i].length; j++){
                str += this.matrix[i][j] + '\t'
            }
            console.log(str);
        }
    }
    printRow(x){
        for(let i=0; i<this.matrix[x].length; i++){
            console.log(this.matrix[x][i])
        }
        return this.matrix[x]
    }
    printColumn(y){
        const arr = []
        for(let i=0; i<this.matrix.length; i++){
            arr.push(this.matrix[i][y])
            console.log(this.matrix[i][y])
        }
        return arr
    }
    findCoordinate(value){
        let coords = {}
        for(let i=0; i<this.matrix.length; i++){
            for(let j=0; j<this.matrix[i].length; j++){
                if(this.matrix[i][j] === value){
                    coords.x = j
                    coords.y = i
                }
            }
        }
        return coords
    }
}

//You can paste the code from the lesson below to test your solution
let m = new Matrix(3, 4)
console.log(m.findCoordinate(12)) //prints {x: 3, y: 2}
console.log(m.findCoordinate(7)) //prints {x: 2, y: 1}

/* Do not remove the exports below */
module.exports = Matrix