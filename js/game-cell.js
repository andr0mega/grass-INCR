export default class GameCell{
    constructor(xPos, yPos, gameCellId){
        this.xPos = xPos
        this.yPos = yPos
        this.gameCellId = gameCellId
        this.growthStage = 3
        // this.cellTick = 1
        // this.cellTickRate = 3000
    }

    cellFarmed(){
        this.growthStage--
        this.cellTick -= 5
    }

    getGrowthStage(){
        return this.growthStage
    }

    getCellId(){
        return this.gameCellId
    }

    // updateCellTick(){
    //     setTimeout(() => {
    //         if(this.cellTick < 10){
    //             this.cellTick++;
    //         }
    //         this.updateCellTick()
    //     },(this.cellTickRate))
    // }

    // getCellTick(){
    //     return this.cellTick
    // }
}