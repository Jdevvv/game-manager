import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GameListComponent } from "./game-list/game-list.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { GameDetailsComponent } from "./game-details/game-details.component";
import { GameFormComponent } from "./game-form/game-form.component";

const routes: Routes = [
  { path: "product", component: GameListComponent },
  { path: "", redirectTo: "/product", pathMatch: "full" },
  { path: "product/:id", component: GameDetailsComponent },
  { path: "product/new", component: GameFormComponent },
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "/404", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
