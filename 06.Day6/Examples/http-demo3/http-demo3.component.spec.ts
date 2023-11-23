import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpDemo3Component } from './http-demo3.component';

describe('HttpDemo3Component', () => {
  let component: HttpDemo3Component;
  let fixture: ComponentFixture<HttpDemo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HttpDemo3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HttpDemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
