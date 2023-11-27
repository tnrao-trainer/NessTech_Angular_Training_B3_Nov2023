import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  // Unit test case that involves component instances and its properties, methods

  it('should create login', () => {
    expect(component).toBeTruthy();
  });


  it('should result property empty by default', () => {
    expect(component.result).toBe("");
  });

  it('should result contains "Welcome to Admin" for valid user credentials', () => {
    component.uid = "admin";
    component.pwd = "admin123";
    component.loginButton_click();
    expect(component.result).toBe("Welcome to Admin");
  });

  it('should result contains "Invalid user id or password" for invalid user credentials', () => {
    component.uid = "scott";
    component.pwd = "hello";
    component.loginButton_click();
    expect(component.result).toBe("Invalid user id or password");
  });


  // Unit test case that involves template (UI)
  it('should contains "Testing Angular Components" as text in h3 tag', () => {
    let headingObj = fixture.nativeElement.querySelector('h3');
    // console.log(headingObj.textContent);
    expect(headingObj.textContent).toBe('Testing Angular Components');
  });


  it('should set the value "Scott" to user id textbox', () => {
    let inputObj = fixture.nativeElement.querySelector('input');
    inputObj.value = 'Scott';
    //    console.log("After : " + inputObj.value);
    expect(inputObj.value).toBe('Scott');
  });


  it('should set the textbox value to component property', () => {
    let inputObj = fixture.nativeElement.querySelector('input');
    inputObj.value = 'Scott';

    // reflect two-way data binding
    inputObj.dispatchEvent(new Event('input'));

    expect(component.uid).toBe("Scott");
  });


  //  Testing Component Templates --- events, data binding
  it('should login button click generates result in paragraph -- valid user', () => {

    const inputArray = fixture.nativeElement.querySelectorAll("input");

    inputArray[0].value = 'admin';
    inputArray[0].dispatchEvent(new Event('input'));

    inputArray[1].value = 'admin123';
    inputArray[1].dispatchEvent(new Event('input'));
    
    inputArray[2].dispatchEvent(new Event('click'));

    console.log(component.result);  // should modify paragraph
    fixture.detectChanges();

    let parObj = fixture.nativeElement.querySelector('p');
    expect(parObj.textContent).toBe('Welcome to Admin');
  });




});
