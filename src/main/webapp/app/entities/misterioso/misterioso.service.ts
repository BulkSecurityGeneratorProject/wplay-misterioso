import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

import { Misterioso } from './misterioso.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class MisteriosoService {

    private resourceUrl = SERVER_API_URL + 'api/misteriosos';

    constructor(private http: Http) { }

    create(misterioso: Misterioso): Observable<Misterioso> {
        const copy = this.convert(misterioso);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(misterioso: Misterioso): Observable<Misterioso> {
        const copy = this.convert(misterioso);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<Misterioso> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            return res.json();
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        return new ResponseWrapper(res.headers, jsonResponse, res.status);
    }

    private convert(misterioso: Misterioso): Misterioso {
        const copy: Misterioso = Object.assign({}, misterioso);
        return copy;
    }
}