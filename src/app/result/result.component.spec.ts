import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponent } from './result.component';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;

    component.receive = 1;
    fixture.detectChanges();
  });

  it('should call compute() when on ngOnChanges() is called', () => {
    spyOn(component, 'compute');
    component.ngOnChanges();

    fixture.detectChanges();
    expect(component.compute).toHaveBeenCalled();
  });

  it('should be an add operator when receive.op is 1, receive.first is 5, receive.second is 5 and result is 10', () => {
    component.receive = { op: 1 };
    component.receive.first = 5;
    component.receive.second = 5;

    component.ngOnChanges();

    fixture.detectChanges();
    expect(component.result).toBe(10);
  });

  it('should be a subtract operator when receive.op is 2, receive.first is 5, receive.second is 5 and result is 0', () => {
    component.receive = { op: 2 };
    component.receive.first = 5;
    component.receive.second = 5;

    component.ngOnChanges();

    fixture.detectChanges();
    expect(component.result).toBe(0);
  });

  it('should be a divide add operator when receive.op is 3, receive.first is 5, receive.second is 5 and result is 1', () => {
    component.receive = { op: 3 };
    component.receive.first = 5;
    component.receive.second = 5;

    component.ngOnChanges();

    fixture.detectChanges();
    expect(component.result).toBe(1);
  });

  it('should be a multiply operator when receive.op is 4, receive.first is 5, receive.second is 5 and result is 25', () => {
    component.receive = { op: 4 };
    component.receive.first = 5;
    component.receive.second = 5;

    component.ngOnChanges();

    fixture.detectChanges();
    expect(component.result).toBe(25);
  });
});
