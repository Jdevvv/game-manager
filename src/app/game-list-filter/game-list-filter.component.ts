import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-game-list-filter",
  templateUrl: "./game-list-filter.component.html",
  styleUrls: ["./game-list-filter.component.css"]
})
export class GameListFilterComponent implements OnInit {
  @Input() color: string;
  @Input() categories = ["RPG", "action", "shooter", "plateform", "combat"];
  @Output() filtered = new EventEmitter();

  constructor() {}

  ngOnInit() {}

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
}
