import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardBankComponent } from './onboard-bank.component';

describe('OnboardBankComponent', () => {
  let component: OnboardBankComponent;
  let fixture: ComponentFixture<OnboardBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardBankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
