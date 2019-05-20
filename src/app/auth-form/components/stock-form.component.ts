import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'stock-form',
  template: `
  <div [formGroup]="parent">
    <div formArrayName="stock">
      <div *ngFor="let item of stocks; let i= index">
        <div class="ui-g-12 ui-g-nopad" [formGroupName]="i" >
          <div class="ui-g-4 ui-md-2">
            <div class="valueLabel">
              {{ item.value.product.brand  }}
            </div>
          </div>
          <div class="ui-g-4 ui-md-2">
            <div class="ui-inputgroup">
              <p-spinner formControlName="quantity" size="30" [min]="0" [max]="100" [step]="5"></p-spinner>
            </div>
          </div>
          <div class="ui-g-8 ui-md-4">
            <div class="ui-inputgroup">
                <button pButton type="button" label="Remove" class="ui-button-rounded" (click)="removeItemFromStock(item , i)"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
})

export class StockComponent implements OnInit {
  @Input() parent: FormGroup;
  @Output() removeItem = new EventEmitter<any>();
  constructor()
  { }
  // @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();
  ngOnInit() { 
  }
  get stocks(){
    return (this.parent.get('stock') as FormArray).controls;
  }
  removeItemFromStock(group , index){
    this.removeItem.emit({group , index})
  }

}
