import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptListComponent } from './dept-list.component';

describe('DeptListComponent', () => {
  let component: DeptListComponent;
  let fixture: ComponentFixture<DeptListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeptListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
