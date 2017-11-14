import Phaser from 'phaser';

import Enums from '../enums';

export class LoadingState extends Phaser.State {
	constructor() {
		super();
	}

	preload() {
	    let loadingBar = this.add.sprite(this.world.centerX, this.world.centerY, "loading");
	    loadingBar.anchor.setTo(0.5,0.5);
	    this.load.setPreloadSprite(loadingBar);

	    for (let i = 0; i < this.game.config.get("numImages"); i++) {
	    	this.game.load.spritesheet("image-" + i, "assets/images/image-" + i + ".png", 100, 100, 9);
	    }

	    this.game.load.spritesheet("buttons", "assets/images/buttons.png", 100, 100, 2);
	    this.load.bitmapFont("fnt_va", 'assets/fonts/fnt_va.png', 'assets/fonts/fnt_va.fnt');
	}

	create() {
		// set a blue color for the background of the stage
		this.game.stage.backgroundColor = this.game.config.get("game.backgroundColor");

		this.game.save.loadHighscore().then(() => {
			this.game.state.start(Enums.States.MENU);
		});
	}
}