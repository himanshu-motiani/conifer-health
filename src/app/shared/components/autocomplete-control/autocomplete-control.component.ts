import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import 'rxjs/add/observable/of';
import { TypeaheadMatch } from 'ngx-bootstrap';
import * as _ from 'lodash';
@Component({
  selector: 'app-autocomplete-control',
  templateUrl: './autocomplete-control.component.html',
  styleUrls: ['./autocomplete-control.component.css']
})
export class AutocompleteControlComponent implements OnInit {
  selectedObject: any;
  
  private selectedAsset = '';
  @Input() demographicDropdown;
  @Input() formName;
  @Input() group: FormGroup;
  @Output() selected = new EventEmitter();

  constructor(private _sanitizer: DomSanitizer) {

  }

  ngOnInit() {

  }


  autocompleListFormatter = (data: any): SafeHtml => {
    const html = `<span>${data.DisplayName}</span>`;
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }

  typeaheadOnSelect(e: TypeaheadMatch): void {

    this.selectedObject = _.find(this.demographicDropdown, ['DisplayName', this.selectedAsset]);
    this.selectedObject['Selected'] = true;

    this.selected.emit(this.selectedObject);
  }

  // select(value: any) {
  //   console.log(value);
  //   this.selected.emit(value);
  // }

}
