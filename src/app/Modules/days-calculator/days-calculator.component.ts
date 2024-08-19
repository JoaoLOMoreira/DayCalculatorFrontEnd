import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DaysCalculatorPresenter } from './Providers/days-calculator.presenter';
import { Observable } from 'rxjs';
import { DateDiff } from 'src/app/Shared/Entities/DateDiff.entity';


@Component({
  selector: 'app-days-calculator',
  templateUrl: './days-calculator.component.html',
  styleUrls: ['./days-calculator.component.scss']
})
export class DaysCalculatorComponent implements OnInit {
  dateDiff$ = this.presenter.dateDiff$;
  dateDiff: DateDiff | null = null; 
  dateForm: FormGroup;
  displayedColumns: string[] = ['label', 'value'];


  constructor(
    private fb: FormBuilder,
    private presenter: DaysCalculatorPresenter
  ) {}

  ngOnInit(): void {
    this.dateForm = this.fb.group({
      startDate: [null],
      endDate: [null]
    });
  }

  calculateDifference(): void {
    const startDate = this.dateForm.get('startDate')?.value;
    const endDate = this.dateForm.get('endDate')?.value;

    const startDateString: string = startDate ? startDate.toISOString().split('T')[0] : '';
    const endDateString: string = endDate ? endDate.toISOString().split('T')[0] : '';

    this.presenter.get(startDateString, endDateString);

    this.dateDiff$.subscribe(data => {
      this.dateDiff = data;
      console.log('DateDiff data:', this.dateDiff); 
    });
  }

  clearForm(): void {
    this.dateForm.reset();
    this.dateDiff = null; 
  }
}
