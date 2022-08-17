import GameCell from "./game-cell.js"

export default class Game{
    constructor(){
        this.gameCells = []
        this.balance = 0;
    }

    initializeGame(){
        this.gameCells.push(new GameCell(1, 1, 1))
        this.gameCells.push(new GameCell(2, 1, 2))
        this.gameCells.push(new GameCell(3, 1, 3))
        this.gameCells.push(new GameCell(1, 2, 4))
        this.gameCells.push(new GameCell(2, 2, 5))
        this.gameCells.push(new GameCell(3, 2, 6))
        this.gameCells.push(new GameCell(1, 3, 7))
        this.gameCells.push(new GameCell(2, 3, 8))
        this.gameCells.push(new GameCell(3, 3, 9))
    }

    getGameCells(){
        return this.gameCells
    }

    canFarmCell(cell){
        if(cell.getGrowthStage() !== 1){
            return true
        }
        return false
    }

    farmGameCell(cell){
        this.incrBalance()
        cell.cellFarmed()
        return this.getBalance()
    }

    incrBalance(){
        this.balance++
    }

    getBalance(){
        return this.balance
    }


}