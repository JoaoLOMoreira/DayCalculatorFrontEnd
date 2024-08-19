import { DateDiff } from 'src/app/Shared/Entities/DateDiff.entity';

export interface StateModel {
  dateDiff?: DateDiff;
}

export class DateDiffGet {
  static readonly type = '[DateDiff] Get';
  constructor(public startDate: string, public endDate: string) { }
}
