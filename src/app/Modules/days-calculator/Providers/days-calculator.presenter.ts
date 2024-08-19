import { Injectable } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { DaysCalculatorState } from "../Store/days-calculator.state";
import { Observable, Subject } from "rxjs";
import { DateDiff } from "src/app/Shared/Entities/DateDiff.entity";
import { DateDiffGet } from "../Store/days-calculator.actions";

@Injectable({
    providedIn: 'root'
  })
export class DaysCalculatorPresenter{
    @Select(DaysCalculatorState.dateDiff)
    dateDiff$!: Observable<DateDiff>;
    
    unsubscribe$ = new Subject<void>();

    constructor(
        private store: Store, 
      ) { }

      get(startDate:string, endDate:string){
        return this.store.dispatch(new DateDiffGet(startDate, endDate))
      }

      destroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
      }
}