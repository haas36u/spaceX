import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable, of, throwError} from "rxjs/index";
import {Company} from "../models/company";
import {catchError, map, tap} from "rxjs/internal/operators";
import {LaunchFilter} from "../models/launchFilter";
import { Launch } from '../models/launch';

@Injectable({
  providedIn: 'root'
})
export class SpacexApiService {

  private baseUrl = 'https://api.spacexdata.com/v2';

  constructor(private http: HttpClient) {
  }

  getCompanyInfo(): Observable<Company> {
    const requestEndpoint = `${this.baseUrl}/info`;
    return this.http.get<Company>(requestEndpoint)
      .pipe(
        catchError(this.handleError)
      );
  }

  getLastLaunch(filter?: LaunchFilter): Observable<Launch> {
    const params = this.filtersToHttpParams(filter);

    const requestEndpoint = `${this.baseUrl}/launches/latest`;
    return this.http.get<Launch>(requestEndpoint, {params})
      .pipe(
        catchError(this.handleError)
      );
  }

  getPastLaunches(filter?: LaunchFilter): Observable<Launch> {
    const params = this.filtersToHttpParams(filter);

    const requestEndpoint = `${this.baseUrl}/launches`;
    return this.http.get<Launch>(requestEndpoint, {params})
      .pipe(
        catchError(this.handleError)
      );
  }

  getUpcomingLaunches(filter?: LaunchFilter): Observable<Launch> {
    const params = this.filtersToHttpParams(filter);

    const requestEndpoint = `${this.baseUrl}/launches/upcoming`;
    return this.http.get<Launch>(requestEndpoint, {params})
      .pipe(
        catchError(this.handleError)
      );
  }

  getAllLaunches(filter?: LaunchFilter): Observable<Launch> {
    const params = this.filtersToHttpParams(filter);

    const requestEndpoint = `${this.baseUrl}/launches/all`;
    return this.http.get<Launch>(requestEndpoint, {params})
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  private filtersToHttpParams(filter: LaunchFilter): HttpParams {
    let params = new HttpParams();
    for (let key in filter) {
      params = params.append(key, filter[key]);
    }

    return params;
  }
}
