import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'store-form',
  template: `
  <div [formGroup]="parent">
    <div formGroupName="store">
      <div class="ui-g-12 ui-md-2">
        <div class="ui-inputgroup">
          <span class="ui-inputgroup-addon"><i class="fa fa-user"></i></span>
          <input formControlName="branch" type="text" pInputText placeholder="Branch Id" />
        </div>
      </div>
      <div class="ui-g-12 ui-md-2">
        <div class="ui-inputgroup">
          <span class="ui-inputgroup-addon"><i class="fa fa-envelope"></i></span>
          <input formControlName="code" type="text" pInputText placeholder="Manager code" />
        </div>
      </div>
    </div>
  </div>
  `
})

export class StoreComponent implements OnInit {
  @Input() parent:FormGroup;
  ngOnInit() { }
}
