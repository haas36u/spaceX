import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable, of, throwError} from "rxjs/index";
import {Company} from "../models/company";
import {catchError, map, tap} from "rxjs/internal/operators";
import {Launch, LaunchFilter} from '../models/launch';
import {Capsule, CapsuleDetails, CapsuleFilter} from "../models/capsule";
import {Rocket} from "../models/rocket";
import {Core, CoreFilter} from "../models/core";
import {Launchpad} from "../models/launchpad";

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

	getLastestLaunch(filter?: LaunchFilter): Observable<Launch> {
		const params = this.filtersToHttpParams(filter);

		const requestEndpoint = `${this.baseUrl}/launches/latest`;
		return this.http.get<Launch>(requestEndpoint, {params})
		.pipe(
			catchError(this.handleError)
		);
	}

	getPastLaunches(filter?: LaunchFilter): Observable<Launch[]> {
		const params = this.filtersToHttpParams(filter);

		const requestEndpoint = `${this.baseUrl}/launches`;
		return this.http.get<Launch[]>(requestEndpoint, {params})
		.pipe(
			catchError(this.handleError)
		);
	}

	getUpcomingLaunches(filter?: LaunchFilter): Observable<Launch[]> {
		const params = this.filtersToHttpParams(filter);

		const requestEndpoint = `${this.baseUrl}/launches/upcoming`;
		return this.http.get<Launch[]>(requestEndpoint, {params})
		.pipe(
			catchError(this.handleError)
		);
	}

	getAllLaunches(filter?: LaunchFilter): Observable<Launch[]> {
		const params = this.filtersToHttpParams(filter);

		const requestEndpoint = `${this.baseUrl}/launches/all`;
		return this.http.get<Launch[]>(requestEndpoint, {params})
		.pipe(
			catchError(this.handleError)
		);
	}

  getRockets(): Observable<Rocket[]> {
    const requestEndpoint = `${this.baseUrl}/rockets`;
    return this.http.get<Rocket[]>(requestEndpoint)
      .pipe(
        catchError(this.handleError)
      );
  }

  getRocket(name: string): Observable<Rocket> {
    const requestEndpoint = `${this.baseUrl}/rockets/${name}`;
    return this.http.get<Rocket>(requestEndpoint)
      .pipe(
        catchError(this.handleError)
      );
  }

  getCapsules(): Observable<Capsule[]> {
    const requestEndpoint = `${this.baseUrl}/capsules`;
    return this.http.get<Capsule[]>(requestEndpoint)
      .pipe(
        catchError(this.handleError)
      );
  }

  getCapsule(name: string): Observable<Capsule> {
    const requestEndpoint = `${this.baseUrl}/capsules/${name}`;
    return this.http.get<Capsule>(requestEndpoint)
      .pipe(
        catchError(this.handleError)
      );
  }

  getCapsulesDetails(filter?: CapsuleFilter): Observable<CapsuleDetails[]> {
    const params = this.filtersToHttpParams(filter);

    const requestEndpoint = `${this.baseUrl}/parts/caps`;
    return this.http.get<CapsuleDetails[]>(requestEndpoint, {params})
      .pipe(
        catchError(this.handleError)
      );
  }

  getCapsuleDetails(serial: string): Observable<CapsuleDetails> {
    const requestEndpoint = `${this.baseUrl}/parts/caps/${serial}`;
    return this.http.get<CapsuleDetails>(requestEndpoint)
      .pipe(
        catchError(this.handleError)
      );
  }

  getLaunchpads(): Observable<Launchpad[]> {
    const requestEndpoint = `${this.baseUrl}/launchpads`;
    return this.http.get<Launchpad[]>(requestEndpoint)
      .pipe(
        catchError(this.handleError)
      );
  }

  getLaunchpad(id: string): Observable<Launchpad> {
    const requestEndpoint = `${this.baseUrl}/launchpads/${id}`;
    return this.http.get<Launchpad>(requestEndpoint)
      .pipe(
        catchError(this.handleError)
      );
  }

  getCores(filter?: CoreFilter): Observable<Core[]> {
    const params = this.filtersToHttpParams(filter);
    const requestEndpoint = `${this.baseUrl}/parts/cores`;
    return this.http.get<Core[]>(requestEndpoint, {params})
      .pipe(
        catchError(this.handleError)
      );
  }

  getCore(serial: string): Observable<Core> {
    const requestEndpoint = `${this.baseUrl}/parts/cores/${serial}`;
    return this.http.get<Core>(requestEndpoint)
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

  private filtersToHttpParams(filter: Object): HttpParams {
    let params = new HttpParams();
    for (let key in filter) {
      params = params.append(key, filter[key]);
    }

		return params;
	}
}
