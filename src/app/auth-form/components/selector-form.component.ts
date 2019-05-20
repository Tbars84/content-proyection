import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StockList } from '../models/AuthInterfaces';
@Component({
  selector: 'selector-form',
  template: `
  <div [formGroup]="parent">
    <div formGroupName="selector">
      <div class="ui-g-12 ui-md-2">
        <div class="ui-inputgroup">
          <p-dropdown formControlName="product" [options]="stockInput"></p-dropdown>
        </div>
      </div>
      <div class="ui-g-12 ui-md-2">
        <div class="ui-inputgroup">
          <p-spinner formControlName="quantity" size="30" [min]="0" [max]="100" [step]="5"></p-spinner>
        </div>
      </div>
      <div class="ui-g-12 ui-md-2">
        <div class="ui-inputgroup">
          <button pButton label="Add to stock" (click)="addToStock()"></button>
        </div>
      </div>
    </div>
  </div>
  `
})

export class SelectorComponent implements OnInit {
  @Input() parent:FormGroup;
  @Input() stockInput:StockList;
  @Output() addSelected = new EventEmitter<any>();

  ngOnInit() {}

  addToStock() {
    this.addSelected.emit(this.parent.get('selector').value)
  }
}
