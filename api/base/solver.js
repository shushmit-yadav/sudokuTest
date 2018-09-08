const Grid = require('./grid.js')

class Solver {

  /**
   * @param {Grid} grid A Grid object.
   */
  constructor(grid) {
    if (!(grid instanceof Grid)) {
      throw new TypeError('grid must be an instance of Grid')
    }

    this.grid = grid
  }

  /**
   * @returns {number[]} The solved grid.
   */
  solve() {
    let sudoku = this.grid.grid
    let solved = false

    while (!solved) {
      solved = true

      for (let index = 0; index < 81; index++) {
        if (sudoku[index] !== 0) { continue }

        let possible_values = this.grid.getPossibleValues(index)

        if (possible_values.length === 1) {
          sudoku[index] = possible_values[0]
        } else if (possible_values.length > 1) {
          solved = false
        }
      }
    }

    return sudoku
  }

}

module.exports = Solver