import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-game-list',
	templateUrl: './game-list.component.html',
	styleUrls: [ './game-list.component.css' ]
})
export class GameListComponent implements OnInit {
	games = [
		{
			name: 'BattleBlock Theater',
			editor: 'The Behemoth',
			editorImg: 'https://cdn3.dualshockers.com/wp-content/uploads/2010/11/The_Behemoth_Chicken_Sticker_by_Mabelma-ds1-670x670.png',
			gameImg: 'https://steamcdn-a.akamaihd.net/steam/apps/238460/header.jpg?t=1561397233',
			type: 'Jeu de plateforme multijoueur',
			note: 9.8,
			desc:
				'Having shipwrecked on a mysterious island you find yourself both betrayed by your best friend Hatty and captured by the locals. All of this is happening while being forced..'
		},
		{
			name: 'Minecraft',
			editor: 'Mojang',
			editorImg: 'https://gamepedia.cursecdn.com/minecraft_gamepedia/4/44/Grass_Block_Revision_6.png',
			gameImg: 'https://www.jvfrance.com/wp-content/uploads/2019/08/minecraft.png',
			type: "Jeu d'action-aventure, Monde ouvert, Sandbox",
			note: 5.5,
			desc:
				'Minecraft is a sandbox video game created by Swedish developer Markus Persson, released by Mojang in 2011 and purchased by Microsoft in 2014. It is the single best-selling video game of all time, selling over 180 million ...'
		}
	];
	constructor() {}

	truncate(text) {
		return text.split(' ', 20).join(' ') + '...';
	}

	ngOnInit() {}
}
