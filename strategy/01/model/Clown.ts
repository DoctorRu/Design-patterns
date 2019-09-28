import { ScoreAlgorithmBase } from "../controller/score-algorithm-base";

export class Clown extends ScoreAlgorithmBase {

    calculateScore(taps: number, multiplier: number): number {
        console.log('[Clown calculateScore]');
        return (taps * multiplier) - 10;
    }
}