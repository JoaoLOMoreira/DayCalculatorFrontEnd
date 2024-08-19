import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { DateDiff } from 'src/app/Shared/Entities/DateDiff.entity';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DaysCalculatorService {
  private endpoint = environment.backendUrl + 'daycalculator';

  constructor(private http: HttpClient) {}

  getDateDiff(startDate: string, endDate: string): Observable<DateDiff> {
    const url = `${this.endpoint}?startDate=${startDate}&endDate=${endDate}`;
    return this.http.get<DateDiff>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        alert(JSON.stringify(error.error));
        return throwError(error);
      })
    );
  }
}
