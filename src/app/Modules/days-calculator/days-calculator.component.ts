import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-days-calculator',
  templateUrl: './days-calculator.component.html',
  styleUrls: ['./days-calculator.component.scss']
})
export class DaysCalculatorComponent implements OnInit {
  dateForm: FormGroup;
  difference: { days: number, months: number, years: number, hours: number } | null = null;
  displayedColumns: string[] = ['difference', 'value'];
  dataSource = new MatTableDataSource<any>([]);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.dateForm = this.fb.group({
      startDate: [null],
      endDate: [null]
    });
  }

  calculateDifference(): void {
    const startDate = this.dateForm.get('startDate')?.value;
    const endDate = this.dateForm.get('endDate')?.value;

    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      if (start > end) {
        alert('A data inicial deve ser anterior à data final.');
        return;
      }

      const diffTime = end.getTime() - start.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const diffMonths = this.calculateMonths(start, end);
      const diffYears = this.calculateYears(start, end);
      const diffHours = Math.floor(diffTime / (1000 * 60 * 60));

      this.difference = {
        days: diffDays,
        months: diffMonths,
        years: diffYears,
        hours: diffHours
      };

      this.dataSource.data = [
        { difference: 'Dias', value: this.difference.days },
        { difference: 'Meses', value: this.difference.months },
        { difference: 'Anos', value: this.difference.years },
        { difference: 'Horas', value: this.difference.hours }
      ];
    }
  }

  private calculateMonths(start: Date, end: Date): number {
    const months = (end.getFullYear() - start.getFullYear()) * 12 + end.getMonth() - start.getMonth();
    return months;
  }

  private calculateYears(start: Date, end: Date): number {
    return end.getFullYear() - start.getFullYear();
  }

  clearForm() {
    this.dateForm.reset();
    this.difference = null;
    this.dataSource.data = []; 
  }
}
