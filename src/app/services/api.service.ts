import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

    constructor(private http: Http) {
    }

    get(path: string): Observable<any> {
        return this.http.get(path, this.getDefaultRequestOptions()).map(this.getJson);
    }

    private getDefaultRequestOptions(): RequestOptions {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return new RequestOptions({ headers: headers, body: '' });
    }

    private getJson(response: Response) {
        return response.json();
    }

}
