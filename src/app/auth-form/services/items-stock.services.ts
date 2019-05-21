import { Injectable } from '@angular/core'
import { HttpClient    } from '@angular/common/http'
import { StockList } from '../models/AuthInterfaces';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable()

export class StockData {
  // URL TO CALL THE API
  private API_URL:string = 'http://localhost:3000';

  constructor(private _http: HttpClient) {}
  getAll(): Observable<StockList[]> {
    // RETURN JUST THE ARRAY
    // return [
    //   { label: 'Select a product', value: null },
    //   { label: 'Huawei', value: { id: 1, brand:'Huawei',  type : 'P20', code: 'P20' } },
    //   { label: 'Motorolla', value: { id: 2,  brand:'Motorolla', type : 'Z play', code: 'ZPLAY' } },
    //   { label: 'Iphone', value: { id: 3,  brand:'Iphone', type : 'Iphone XS', code: 'XS' } },
    //   { label: 'Samsung', value: { id: 4,  brand:'Samsung', type : 'Galaxy S10', code: 'S10' } },
    // ];
    // RETURN THE ARRAY FROM HTTP API
    return this._http.get<StockList[]>(`${this.API_URL}/products`)
      .pipe(
        map(res=> res)
      )
  }
}
