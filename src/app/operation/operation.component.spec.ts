import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { OperationComponent } from './operation.component';

describe('OperationComponent', () => {
  let component: OperationComponent;
  let fixture: ComponentFixture<OperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OperationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call onButtonClick when add button is clicked/pressed', () => {
    let spyonButtonClick = spyOn(component, 'onButtonClick').and.callThrough();
    let input = fixture.debugElement.query(By.css('#add')).nativeElement;

    input.click();
    fixture.detectChanges();

    expect(spyonButtonClick).toHaveBeenCalled();
  });

  it('should call onButtonClick when subtract button is clicked/pressed', () => {
    let spyonButtonClick = spyOn(component, 'onButtonClick').and.callThrough();
    let input = fixture.debugElement.query(By.css('#subtract')).nativeElement;

    input.click();
    fixture.detectChanges();

    expect(spyonButtonClick).toHaveBeenCalled();
  });

  it('should call onButtonClick when divide button is clicked/pressed', () => {
    let spyonButtonClick = spyOn(component, 'onButtonClick').and.callThrough();
    let input = fixture.debugElement.query(By.css('#divide')).nativeElement;

    input.click();
    fixture.detectChanges();

    expect(spyonButtonClick).toHaveBeenCalled();
  });

  it('should call onButtonClick when multiply button is clicked/pressed', () => {
    let spyonButtonClick = spyOn(component, 'onButtonClick').and.callThrough();
    let input = fixture.debugElement.query(By.css('#multiply')).nativeElement;

    input.click();
    fixture.detectChanges();

    expect(spyonButtonClick).toHaveBeenCalled();
  });

  it('should operation emit when onButtonClick is called with paramter of 1', () => {
    spyOn(component.operation, 'emit');
    component.onButtonClick(1);

    expect(component.operation.emit).toHaveBeenCalled();
  });
  it('should operation emit when onButtonClick is called with paramter of 2', () => {
    spyOn(component.operation, 'emit');
    component.onButtonClick(2);

    expect(component.operation.emit).toHaveBeenCalled();
  });
  it('should operation emit when onButtonClick is called with paramter of 3', () => {
    spyOn(component.operation, 'emit');
    component.onButtonClick(3);

    expect(component.operation.emit).toHaveBeenCalled();
  });
  it('should operation emit when onButtonClick is called with paramter of 4', () => {
    spyOn(component.operation, 'emit');
    component.onButtonClick(4);

    expect(component.operation.emit).toHaveBeenCalled();
  });
});
