/**
 * SudokuController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var Grid = require('../base/grid.js')
var Solver = require('../base/solver.js')

var sudoku = require('../base/sudoku.js');

module.exports = {


    solveSudoku: function(req, res){
        // var puzzle = "52...6.........7.13...........4..8..6......5...........418.........3..2...87.....";
        var puzzle = ".......6...73..9....89......71..............88...5.6.4.1.2...9...2..4....69....7.";
        var puzzleInGrid = sudoku.board_string_to_grid(puzzle)
        var solvedPuzzle = sudoku.board_string_to_grid(sudoku.solve(puzzle));
        return res.ok({'puzzle': puzzleInGrid, 'solution': solvedPuzzle});    
    }
    

};