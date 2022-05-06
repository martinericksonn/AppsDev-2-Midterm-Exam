import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NumberInputComponent } from './number-input.component';

describe('NumberInputComponent', () => {
  let component: NumberInputComponent;
  let fixture: ComponentFixture<NumberInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumberInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NumberInputComponent);
    component = fixture.componentInstance;
  });

  it('should contain fist number text content', () => {
    let label = fixture.debugElement.query(By.css('#first'));
    let content = label.nativeElement;

    expect(content.textContent).toContain('First Number');
  });

  it('should contain second number text content', () => {
    let label = fixture.debugElement.query(By.css('#second'));
    let content = label.nativeElement;

    expect(content.textContent).toContain('Second Number');
  });
  it('should firstNumber emit toHaveBeenCalled when getNumber is called with which is 0', () => {
    spyOn(component.firstNumber, 'emit');
    component.numberInput('1', 0);

    expect(component.firstNumber.emit).toHaveBeenCalled();
  });

  it('should secondNumber emit toHaveBeenCalled when getNumber is called with which is 1', () => {
    spyOn(component.secondNumber, 'emit');
    component.numberInput('10', 1);

    expect(component.secondNumber.emit).toHaveBeenCalled();
  });

  it('should call getNumber when number is input in firstNumber field', () => {
    let spyGetNumber = spyOn(component, 'numberInput').and.callThrough();
    let input = fixture.debugElement.query(
      By.css('#firstNumber')
    ).nativeElement;

    input.value = 1;
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(spyGetNumber).toHaveBeenCalled();
  });

  it('should call getNumber when number is input in secondNumber field', () => {
    let spyGetNumber = spyOn(component, 'numberInput').and.callThrough();
    let input = fixture.debugElement.query(
      By.css('#secondNumber')
    ).nativeElement;

    input.value = 1;
    input.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(spyGetNumber).toHaveBeenCalled();
  });
});
