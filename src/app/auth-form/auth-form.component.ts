import { Component, OnInit , AfterContentInit } from '@angular/core';
import { FormBuilder, FormArray} from '@angular/forms';
import { StockList } from './models/AuthInterfaces';
import { StockData } from './services/items-stock.services';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit , AfterContentInit {

  // ARRAY OF ITEMS FOR THE INVENTORY
  stockList: StockList[];
  // FORM STRUCTURE OF APP
  public formExample= this._fb.group({
    store: this._fb.group({
      branch: '',
      code: ''
    }),
    selector: this.createStock({}),
    stock: this._fb.array([])
  })

  constructor(
    private _stockSrv: StockData,
    private _fb: FormBuilder) {}
  ngOnInit() {
    // LIST OF PRODUCTS INTO SELECT INPUT INFO FROM SERVICE
    this.stockList = this._stockSrv.getAll();
  }
  ngAfterContentInit(){}

  onSubmit() {
  }
  createStock(stock){
    return this._fb.group({
      product: stock.product || '',
      quantity: parseInt(stock.quantity) || 10,
    });
  }
  filledStock(stockSelected){
    const controlStockAdd = this.formExample.get('stock') as FormArray;
    controlStockAdd.push(this.createStock(stockSelected));
  }
  removedFromInventory({group , index}){
    const controlStockRemove = this.formExample.get('stock') as FormArray;
    controlStockRemove.removeAt(index)
  }

}
