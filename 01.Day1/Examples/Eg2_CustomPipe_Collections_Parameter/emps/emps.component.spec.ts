import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpsComponent } from './emps.component';

describe('EmpsComponent', () => {
  let component: EmpsComponent;
  let fixture: ComponentFixture<EmpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
