import { Component, OnInit } from "@angular/core";
import { GameApiService } from "../service/game-api.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-game-details",
  templateUrl: "./game-details.component.html",
  styleUrls: ["./game-details.component.css"],
})
export class GameDetailsComponent implements OnInit {
  gameId: any;
  gameData: any;

  constructor(
    private gameApi: GameApiService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {}

  getGame(id: number) {
    this.gameApi.getSingleGame(id).subscribe((data) => {
      this.gameData = data;
    });
  }

  navigation(link) {
    this.router.navigate([link]);
  }

  ngOnInit() {
    this.gameId = this.actRoute.snapshot.params["id"];
    this.getGame(this.gameId);
  }
}
