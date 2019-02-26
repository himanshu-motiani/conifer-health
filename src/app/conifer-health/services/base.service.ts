import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class BaseService {

  constructor(private http: Http) { }


  getJsonData = (path: string) => {
    return this.http.get(path).map((res: Response) => res.json());
  }

}
