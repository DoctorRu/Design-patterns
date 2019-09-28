import { ScoreAlgorithmBase } from "./score-algorithm-base";

export class ScoreBoard {

    algoritmBase: ScoreAlgorithmBase

    showScore(taps: number, multiplier: number) {
        console.log('[ScoreBoard calculateScore]');
        console.log(this.algoritmBase.calculateScore(taps, multiplier));
    }

}