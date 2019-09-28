import { ScoreAlgorithmBase } from "../controller/score-algorithm-base";

export class Balloon extends ScoreAlgorithmBase {

    calculateScore(taps: number, multiplier: number): number {
        console.log('[Balloon calculateScore');
        return (taps * multiplier) - 20;
    }

}