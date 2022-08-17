import Game from "./game.js"

const playground = document.querySelector("#game-playground");
const balance = document.querySelector("#game-balance")

const init = () => {
    const game = new Game()
    game.initializeGame()
    game.getGameCells().forEach(cell => {
        playground.insertAdjacentHTML("beforeend", 
        `
        <div id="game-cell-${cell.getCellId()}" class="game-cell growth-stage-${cell.getGrowthStage()}">
            <button id="btn-game-cell-${cell.getCellId()}" class="btn-game-cell"</button>
        </div>
        `
        )

        console.log(cell)
        document.querySelector(`#btn-game-cell-${cell.getCellId()}`).addEventListener("click", () => {
            const cellDiv = document.querySelector(`#game-cell-${cell.getCellId()}`)

            if(game.canFarmCell(cell)){
                cellDiv.classList.remove(`growth-stage-${cell.getGrowthStage()}`)
                balance.textContent = game.farmGameCell(cell)
                cellDiv.classList.add(`growth-stage-${cell.getGrowthStage()}`)
                console.log(`clicked Button ${cell.getCellId()}`)
            }
        })

        // cell.updateCellTick();
        // console.log(cell.getCellTick())
    })
}

init()