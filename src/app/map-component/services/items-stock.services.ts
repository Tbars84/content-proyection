import { Injectable } from '@angular/core'
import { HttpClient    } from '@angular/common/http'
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable()

export class AppsData {
  // URL TO CALL THE API
  private API_URL:string = 'http://localhost:3000';

  constructor(private _http: HttpClient) {}
  getAll(): Observable<any> {
    return this._http.get<any>(`${this.API_URL}/applications`)
      .pipe(
        map(res=> res)
      )
  }
}
