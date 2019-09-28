import { ScoreAlgorithmBase } from "../controller/score-algorithm-base";

export class SquareBalloon extends ScoreAlgorithmBase {

    calculateScore(taps: number, multiplier: number): number {
        console.log('[SquareBalloon calculateScore]');
        return (taps * multiplier) + 40;
    }
}