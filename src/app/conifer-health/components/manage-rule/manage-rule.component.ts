import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { BaseService } from './../../services/base.service';
import { AppComponent } from './../../../app.component';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { DropdownControlComponent } from '../../../shared/components/dropdown-control/dropdown-control.component';
import { Constants } from '../../../shared/configurations/constants';

@Component({
  selector: 'app-manage-rule',
  templateUrl: './manage-rule.component.html',
  styleUrls: ['./manage-rule.component.css']
})
export class ManageRuleComponent implements OnInit {
  operatorSelectedValue: any;
  currentValue = {};
  public manageRuleForm: FormGroup;
  value: any;
  operatorValue: any;
  modalRef: BsModalRef;
  labelList: any;
  data = null;

  formGroupMembers = {
    'Label': 'Name',
    'Operator': 'Optr',
    'Value': 'Value'
  };



  ngOnInit() {
    this.getDemographicData();

    this.manageRuleForm = this._fb.group({
      rules: this._fb.array([
        this.initControllers()
      ]),
      condition: this._fb.array([
        this.initConditionControllers()
      ])
    });



  }
  // addMoreRules(rule: any) {
  //   this.manageRuleForm = this._fb.group({
  //     label: ['', Validators.required],
  //     Operator: ['', Validators.required],
  //     Value: ['', Validators.required]
  //   });
  // }
  constructor(private _fb: FormBuilder, private modalService: BsModalService, private httpService: HttpClient,
    private baseService: BaseService) {

  }

  initControllers = () => {
    return this._fb.group({
      label: ['', Validators.required],
      Operator: ['', Validators.required],
      Value: ['', Validators.required]
    });
  }
  initConditionControllers = () => {
    return this._fb.group({
      Condition: ['', Validators.required],

    });
  }

  getDemographicData() {
    this.baseService.getJsonData(Constants.entityJson).subscribe((data) => {
      this.labelList = data.Demographic;

    },
      (err) => {
        console.error(err);
      });
  }
  getOperatorsData(type: string) {
    this.baseService.getJsonData(Constants.operatorsJson).subscribe((data) => {
      // tslint:disable-next-line:no-debugger

      this.operatorValue = data[type];
      console.log(this.operatorValue);
    },
      (err) => {
        console.error(err);
      });
  }

  selectedValueData = (value: any) => {
    this.currentValue = value;
    // tslint:disable-next-line:no-debugger

    this.getOperatorsData(value['Type']);
  }
  selectedOperatorData = (value) => {
    this.operatorSelectedValue = value;

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  save = (value: any) => {
    console.log(value);
  }
  addNewRow() {
    const control = <FormArray>this.manageRuleForm.controls['rules'];
    control.push(this.initControllers());
  }
}
