import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GameListComponent } from "./game-list.component";
import { GameListFilterModule } from "../game-list-filter/game-list-filter.module";

@NgModule({
  declarations: [GameListComponent],
  imports: [CommonModule, GameListFilterModule],
  exports: [GameListComponent],
})
export class GameListModule {}
