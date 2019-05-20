import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'auth-remember',
  template: `
  <label>
    <input type="checkbox" (change)="onChecked($event.target.checked)" name="checkedBtn" id="checkedBtn">
    Keep me login
  </label>
  `
})
export class AuthFormRemember implements OnInit {
  @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit() {}

  onChecked(value:boolean){
    this.checked.emit()
  }
}
