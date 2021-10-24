import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserByRoleComponent } from './add-user-by-role.component';

describe('AddUserByRoleComponent', () => {
  let component: AddUserByRoleComponent;
  let fixture: ComponentFixture<AddUserByRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserByRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserByRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
