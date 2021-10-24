import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedDetailsComponent } from './completed-details.component';

describe('CompletedDetailsComponent', () => {
  let component: CompletedDetailsComponent;
  let fixture: ComponentFixture<CompletedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
