import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GameFormComponent } from "./game-form.component";

@NgModule({
  declarations: [GameFormComponent],
  imports: [CommonModule],
  exports: [GameFormComponent],
})
export class GameFormModule {}
