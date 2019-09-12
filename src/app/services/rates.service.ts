import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Rate} from "../shared/rate.model";
import {environment} from '../../environments/environment';

@Injectable()
export class RatesService {

  constructor(private http: HttpClient) {
  }

  getRates(): Observable<Rate> {
    // console.log(environment.production);
    return this.http.get<Rate>(`${environment.apiEndpoint}?app_id=${environment.apiKey}`);
  }
}
