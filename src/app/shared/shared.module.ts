import { BaseService } from './../conifer-health/services/base.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TypeaheadModule, ModalModule, BsDatepickerModule } from 'ngx-bootstrap';
import { TextControlComponent } from './components/text-control/text-control.component';
import { DateControlComponent } from './components/date-control/date-control.component';
import { TypeaheadControlComponent } from './components/typeahead-control/typeahead-control.component';
import { DropdownControlComponent } from './components/dropdown-control/dropdown-control.component';
import { ChoiceControlComponent } from './components/choice-control/choice-control.component';
import { HttpModule } from '@angular/http';
import { AutocompleteControlComponent } from './components/autocomplete-control/autocomplete-control.component';
import { Ng2MultiSelectDropDownModule } from 'ng-multiselect-dropdown';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2MultiSelectDropDownModule.forRoot(),
    HttpModule,
    TypeaheadModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [BaseService],
  // tslint:disable-next-line:max-line-length
  declarations: [TextControlComponent, DateControlComponent, TypeaheadControlComponent, AutocompleteControlComponent, DropdownControlComponent, ChoiceControlComponent
  ],
  exports: [DateControlComponent, DropdownControlComponent, AutocompleteControlComponent]

})
export class SharedModule { }
