import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceControlComponent } from './choice-control.component';

describe('ChoiceControlComponent', () => {
  let component: ChoiceControlComponent;
  let fixture: ComponentFixture<ChoiceControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoiceControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
