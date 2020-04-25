import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Categories } from '../interface/categories';
import { GameApiService } from '../service/game-api.service';

@Component({
  selector: "app-game-list-filter",
  templateUrl: "./game-list-filter.component.html",
  styleUrls: ["./game-list-filter.component.css"]
})

export class GameListFilterComponent implements OnInit {
  @Input() color: string;
  categories: Categories[];

  @Output() filtered = new EventEmitter();

  constructor(private gameApi: GameApiService) {}

  form = {
    name: "",
    type: "",
    editor: ""
  };

  setValue(target: any | { name: string; value: string }) {
    this.form[target.name] = target.value;
  }

  filter() {
    this.filtered.emit(this.form);
  }

  reset() {
    Object.keys(this.form).map((key, index) => {
      this.form[key] = "";
    });
    this.filtered.emit(this.form);
  }

  getCategories() {
    this.gameApi.getAllCategories().subscribe((data: Categories[]) => {
      this.categories = data;
    })
  }

  ngOnInit() {
    this.getCategories();
  }
}
