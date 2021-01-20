export interface Frame {
    gameOver: boolean;
    gameSarted: boolean;
    width: number;
    height: number;
    score: number;
}

export interface PipePair {
    topPipe: Pipe;
    bottomPipe: Pipe;
    show: boolean;
    left: number;
    width: number;

}

export interface Pipe {
    top: number;
    height: number;
}

export class GameController {
    private frame: Frame;

    private velocity = 0;

    constructor(public readonly height = 800, public readonly width = 400) {

    }

    public newGame() {
        this.frame = {
            score: 0,
            width: this.width,
            height: this.height,
            gameOver: false,
            gameSarted: false,
        };

        return this.frame;
    }

}