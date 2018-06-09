import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CommonService } from './common.service'
import { UserDetail } from './app.model';

@Injectable() export class CommonAPIService {
    public ApiUrl = 'http://52.14.255.120:8000/';
    // public ApiUrl = 'http://192.168.43.205:8000/';

    userDetail: UserDetail;
    constructor(private http: Http, private _cmnSvc: CommonService) {
        this.userDetail = new UserDetail();
    }

    getCookie() {
        this._cmnSvc.getCookie('access_token');
    }

    get(endpoint: string): Observable<any> {
        const headers = new Headers({ 'AccessToken': this.getCookie(), 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', crossDomain: true});
        const options = new RequestOptions({ headers: headers });
        return this.http
            .get(this.ApiUrl + endpoint);
    }

    post(endpoint: string, data: any): Observable<any> {
        const headers = new Headers({ 'AccessToken': this.getCookie(), 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', crossDomain: true});
        const options = new RequestOptions({ headers: headers });
        return this.http.post(this.ApiUrl + endpoint, data, options);
    };

    handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}
