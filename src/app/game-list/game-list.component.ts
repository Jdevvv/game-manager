import { Component, OnInit } from "@angular/core";
import { Games } from '../interface/games';
import { GameApiService } from '../service/game-api.service';

@Component({
  selector: "app-game-list",
  templateUrl: "./game-list.component.html",
  styleUrls: ["./game-list.component.css"]
})
export class GameListComponent implements OnInit {
  games: Games[];
  filteredGames: any[];

  baseCardWidth = 450;
  newCardWidth = 450;

  constructor(private gameApi: GameApiService) {}

  truncate(text: string) {
    return text.split(" ", 20).join(" ") + "...";
  }

  myAlert(event) {
    alert(`clicked on ${event.button} for the game ${event.game}`);
  }

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
      .filter(game => !form.name || game.title === form.name)
      .filter(game => !form.editor || game.publisher == form.editor)
      .filter(game => !form.type || game.genres == form.type);
  }

  getGames() {
    this.gameApi.getAllGames().subscribe((data: Games[]) => {
      this.games = data;
    })
  }

  ngOnInit() {
    this.getGames();
  }
}
