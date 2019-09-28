import { SquareBalloon } from './../model/square-balloon';
import { Clown } from './../model/Clown';
import { Balloon } from './../model/balloon';
import { ScoreBoard } from "./score-board";

let scoreBoard: ScoreBoard = new ScoreBoard();

console.log('Balloon Tap Score:');
scoreBoard.algoritmBase = new Balloon();
scoreBoard.showScore(10, 5);

console.log('Clown Tap Score:');
scoreBoard.algoritmBase = new Clown();
scoreBoard.showScore(10, 5);

console.log('Square Balloon Tap Score:');
scoreBoard.algoritmBase = new SquareBalloon();
scoreBoard.showScore(10, 5);
