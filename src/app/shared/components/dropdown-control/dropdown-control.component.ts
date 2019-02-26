import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'dropdown-control',
  templateUrl: './dropdown-control.component.html',
  styleUrls: ['./dropdown-control.component.css']
})
export class DropdownControlComponent implements OnInit {
  dropdownSettings = {
    singleSelection: true,
    idField: 'Name',
    textField: 'DisplayName',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 5,
    allowSearchFilter: true
  };
  @Output() operatorSelected = new EventEmitter();

  @Input() group: FormGroup;
  @Input() operatorList;
  value = [];


  constructor() { }

  // tslint:disable-next-line:use-life-cycle-interface


  ngOnInit() {

    // this.items = [
    //   { item_id: 1, item_text: 'Mumbai' },
    //   { item_id: 2, item_text: 'Bangalore' },
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' },
    //   { item_id: 5, item_text: 'New Delhi' }
    // ];
    // this.selectedItems = [
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' }
    // ];

  }
  ngOnChanges(changes: SimpleChanges) {
    // tslint:disable-next-line:no-debugger

    if (this.operatorList) {
      this.value = this.operatorList;
      console.log(this.value);
    }


  }
  onItemSelect(operator: any) {
    this.operatorSelected.emit(operator);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  // tslint:disable-next-line:use-life-cycle-interface

}

