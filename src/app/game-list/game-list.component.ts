import { Component, OnInit } from "@angular/core";
import { AppTypes } from "../app-types.enum";

@Component({
  selector: "app-game-list",
  templateUrl: "./game-list.component.html",
  styleUrls: ["./game-list.component.css"]
})
export class GameListComponent implements OnInit {
  games = [
    {
      name: "BattleBlock Theater",
      editor: "The Behemoth",
      editorImg:
        "https://cdn3.dualshockers.com/wp-content/uploads/2010/11/The_Behemoth_Chicken_Sticker_by_Mabelma-ds1-670x670.png",
      gameImg:
        "https://steamcdn-a.akamaihd.net/steam/apps/238460/header.jpg?t=1561397233",
      type: AppTypes.RPG,
      note: 9.8,
      desc:
        "Having shipwrecked on a mysterious island you find yourself both betrayed by your best friend Hatty and captured by the locals. All of this is happening while being forced.."
    },
    {
      name: "Minecraft",
      editor: "Mojang",
      editorImg:
        "https://gamepedia.cursecdn.com/minecraft_gamepedia/4/44/Grass_Block_Revision_6.png",
      gameImg:
        "https://www.jvfrance.com/wp-content/uploads/2019/08/minecraft.png",
      type: AppTypes.ACTION,
      note: 5.5,
      desc:
        "Minecraft is a sandbox video game created by Swedish developer Markus Persson, released by Mojang in 2011 and purchased by Microsoft in 2014. It is the single best-selling video game of all time, selling over 180 million ..."
    }
  ];

  filteredGames: any[];

  constructor() {}

  ngOnInit() {
    this.filtering({});
  }

  truncate(text: string) {
    return text.split(" ", 20).join(" ") + "...";
  }

  myAlert(event) {
    alert(`clicked on ${event.button} for the game ${event.game}`);
  }

  baseCardWidth = 450;
  newCardWidth = 450;

  //   increaseCard() {
  //     this.cardWidth += 10;
  //   }

  //   decreaseCard() {
  //     this.cardWidth -= 10;
  //   }

  changeCardWidth(operator: string, value: number) {
    operator == "+"
      ? (this.newCardWidth += value)
      : (this.newCardWidth -= value);
  }

  resetCardWidth() {
    this.newCardWidth = this.baseCardWidth;
  }

  filtering(form) {
    this.filteredGames = this.games
      .filter(game => !form.name || game.name === form.name)
      .filter(game => !form.editor || game.editor == form.editor)
      .filter(game => !form.type || game.type == form.type);
  }
}
