import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { of } from 'rxjs';


// create sample data from spy objects

const sampleData:any[] = [
  {
     "deptno": "10",
     "dname": "Sales",
     "loc": "Hyd"
   },
   {
     "deptno": "20",
     "dname": "Accounts",
     "loc": "Hyd"
   },
 {
     "deptno": "30",
     "dname": "Operations",
     "loc": "Chennai"
   }
];


describe('DataService', () => {

  let service: DataService;
  let httpClientSpy: { get: jasmine.Spy, post:jasmine.Spy};

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // service = TestBed.inject(DataService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new DataService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });



  it('should return an Observable<any[]> with depts data', () => {

    httpClientSpy.get.and.returnValue( of(sampleData) );

    service.getData().subscribe( (resData:any[]) => {
        // console.log(resData);
        expect(resData.length).toBe(sampleData.length);
    });
  });



  it('should perform post operation using addData method', () => {

    let obj:any = { "deptno": "40", "dname": "Testing",  "loc": "Hyd"};

    httpClientSpy.post.and.returnValue( of(40) );
    //httpClientSpy.post.and.returnValue( of(obj) );

    service.addData(obj).subscribe( (resData:any) => {
        // console.log(resData);
        // expect(resData).toEqual(obj);
        expect(resData).toEqual(40);
    });

    expect(httpClientSpy.post.calls.count()).toBe(1);
  });





});
