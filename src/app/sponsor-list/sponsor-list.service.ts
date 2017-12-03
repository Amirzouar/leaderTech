import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Sponsor } from './sponsor.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SponsorListService {
    constructor(private http: Http){}
    host = 'http://localhost:8081';
    getAll() : Observable<Sponsor[]> {
        return this.http.get(this.host + '/sponsor/all')
            .map((res: Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}