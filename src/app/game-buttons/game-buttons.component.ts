import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AppButtons } from "../app-buttons.enum";

@Component({
  selector: "app-game-buttons",
  templateUrl: "./game-buttons.component.html",
  styleUrls: ["./game-buttons.component.css"]
})
export class GameButtonsComponent implements OnInit {
  public buttons = AppButtons;

  @Input() game: string;

  @Output() clicked = new EventEmitter();

  onClick(button: string) {
    this.clicked.emit({ button, game: this.game });
  }

  constructor() {}

  ngOnInit() {}
}
