import { Injectable } from '@angular/core'
import { HttpClient , HttpResponse } from '@angular/common/http'
import { StockList } from '../models/AuthInterfaces';


@Injectable()

export class StockData {
  // URL TO CALL THE API
  private API_URL = 'http://localhost:3030/api/hoteles';

  constructor(private _http: HttpClient) {}
  getAll(): StockList[]{
    // RETURN JUST THE ARRAY
    return [
      { label: 'Select a product', value: null },
      { label: 'Huawei', value: { id: 1, brand:'Huawei',  type : 'P20', code: 'P20' } },
      { label: 'Motorolla', value: { id: 2,  brand:'Motorolla', type : 'Z play', code: 'ZPLAY' } },
      { label: 'Iphone', value: { id: 3,  brand:'Iphone', type : 'Iphone XS', code: 'XS' } },
      { label: 'Samsung', value: { id: 4,  brand:'Samsung', type : 'Galaxy S10', code: 'S10' } },
    ];

    // RETURN FROM HTTP API
    // return this._http.get('/api/products')
    //   .pipe(
    //     map((data: any[]) => {
    //       return data;
    //     }), catchError( error => {
    //       return throwError( 'Something went wrong!' );
    //     })
    //   )
  }

}
