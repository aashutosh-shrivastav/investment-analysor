import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankdetailComponent } from './bankdetail.component';

describe('BankdetailComponent', () => {
  let component: BankdetailComponent;
  let fixture: ComponentFixture<BankdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
