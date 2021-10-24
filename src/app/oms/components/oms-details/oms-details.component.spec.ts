import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmsDetailsComponent } from './oms-details.component';

describe('OmsDetailsComponent', () => {
  let component: OmsDetailsComponent;
  let fixture: ComponentFixture<OmsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
