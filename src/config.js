import Phaser from 'phaser';

import Enums from './enums';

export default class GameConfig {
	constructor() {
		this._data = {
			game: {
				baseWidth: 320,
				baseHeight: 568,
				maxWidth: 768,
				width: "100%",
				height: "100%",
				enableDebug: false,
				backgroundColor: '#FFFFFF',
				renderer: Phaser.CANVAS,
				name: "Schiebespiel"
			},

			fontSize: {
				title: 			42,
				score: 			32
			},

			defaultState: 		Enums.States.BOOT,
			scoreGain:  		10,
			numImages: 			4, 
		};
	}

	get(key, def) {
		let keys = key.split(".");

		let curVal = this._data;
		while (keys.length > 0) {
			let curKey = keys.shift();
			if (!curVal.hasOwnProperty(curKey)) {
				return def;
			}

			curVal = curVal[curKey];
		}

		return curVal;
	}
}