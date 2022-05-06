import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('Should check if ngIf is working correctly', () => {
    expect(fixture.debugElement.query(By.css('#result'))).toBeNull();
  });

  it('Should call receiveFromInput if value is inputted', () => {
    let spy = spyOn(component, 'receiveFromInput').and.callThrough();
    component.receiveFromInput(10);

    expect(spy).toHaveBeenCalled();
  });

  it('Should operation be true when receiveOperation() is called', () => {
    let spy = spyOn(component, 'receiveOperation').and.callThrough();
    component.receiveOperation(1);

    expect(spy).toHaveBeenCalled();
  });

  it('Should call sendValues when sendValue is called', () => {
    let spy = spyOn(component, 'sendValue').and.callThrough();
    component.sendValue();

    expect(spy).toHaveBeenCalled();
  });
});
