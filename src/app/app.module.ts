import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { GameListModule } from "./game-list/game-list.module";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { NotFoundModule } from "./not-found/not-found.module";
import { GameDetailsModule } from "./game-details/game-details.module";
import { GameFormModule } from "./game-form/game-form.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    GameListModule,
    AppRoutingModule,
    NotFoundModule,
    GameDetailsModule,
    GameFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
