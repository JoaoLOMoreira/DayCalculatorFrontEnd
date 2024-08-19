import { Action, Selector, State, StateContext } from '@ngxs/store';
import { DateDiffGet, StateModel } from './days-calculator.actions';
import { Injectable } from '@angular/core';
import { DateDiff } from 'src/app/Shared/Entities/DateDiff.entity';
import { tap } from 'rxjs/operators';
import { DaysCalculatorService } from '../Providers/days-calculator.service';

@State<StateModel>({
  name: 'DateDiff',
  defaults: { dateDiff: undefined },
})
@Injectable({
  providedIn: 'root',
})
export class DaysCalculatorState {
  @Selector()
  static dateDiff({ dateDiff }: StateModel): DateDiff {
    return dateDiff;
  }

  constructor(private service: DaysCalculatorService) {}

  @Action(DateDiffGet)
  get(
    { setState }: StateContext<StateModel>,
    { startDate, endDate }: DateDiffGet
  ): void {
    this.service
      .getDateDiff(startDate, endDate)
      .pipe(
        tap((result) => {
          setState({
            dateDiff: result,
          });
        })
      )
      .subscribe();
  }
}
