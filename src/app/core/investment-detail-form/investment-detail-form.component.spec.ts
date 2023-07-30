import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentDetailFormComponent } from './investment-detail-form.component';

describe('InvestmentDetailFormComponent', () => {
  let component: InvestmentDetailFormComponent;
  let fixture: ComponentFixture<InvestmentDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentDetailFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
