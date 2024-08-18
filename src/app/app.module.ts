import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { RouterModule, Routes } from '@angular/router';
import { DaysCalculatorComponent } from './Modules/days-calculator/days-calculator.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [
  {
    path: '',
    component: DaysCalculatorComponent,
  },
];

@NgModule({
  declarations: [AppComponent, DaysCalculatorComponent],
  imports: [
    BrowserModule,
    NgxsModule.forRoot(),
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatTableModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
