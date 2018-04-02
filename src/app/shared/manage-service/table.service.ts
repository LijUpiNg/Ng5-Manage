import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TableService {

  constructor(public http: Http, ) {

  }

  public getDatas(): Observable<any[]> {
    return this.http
      .get('../../assets/data/data-table.json')
      .map((response: Response) => {
        const data = response.json();
        return data;
      })
      .catch((error: any) => Observable.throw(error || 'chargeListServer error'));
  }

  public getDatas2(): Observable<any[]> {
    return this.http
      .get('../../assets/data/data-table2.json')
      .map((response: Response) => {
        const data = response.json();
        return data;
      })
      .catch((error: any) => Observable.throw(error || 'chargeListServer error'));
  }

  public getDatas3(): Observable<any[]> {
    return this.http
      .get('../../assets/data/data-table-inline.json')
      .map((response: Response) => {
        const data = response.json();
        return data;
      })
      .catch((error: any) => Observable.throw(error || 'chargeListServer error'));
  }
}
