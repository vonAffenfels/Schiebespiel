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
				backgroundColor: '#ffffff',
				renderer: Phaser.CANVAS,
				name: "Schiebespiel"
			},

			fontSize: {
				title: 			42,
				score: 			32
			},

			defaultState: 		Enums.States.BOOT,
			scoreGain:  		50,
			scoreBegin: 		10000,
			numImages: 			4, 

			songs:    			[
				"https://www.youtube.com/watch?v=LvWBz1pLXps",
				"https://www.youtube.com/watch?v=y3LZr6dSM8A",
				"https://www.youtube.com/watch?v=I4jznFlGMUo",
				"https://www.youtube.com/watch?v=5blg8NegJDY",
				"https://www.youtube.com/watch?v=Cn3NXlEMyAk",
				"https://www.youtube.com/watch?v=RSzhPoUH-G8",
				"https://www.youtube.com/watch?v=1VlD6fKWQDk",
				"https://www.youtube.com/watch?v=CuIn95h10ZQ",
				"https://www.youtube.com/watch?v=Cb5oXKa8phg"
			]
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