import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GameDetailsComponent } from "./game-details.component";

@NgModule({
  declarations: [GameDetailsComponent],
  imports: [CommonModule],
  exports: [GameDetailsComponent],
})
export class GameDetailsModule {}
