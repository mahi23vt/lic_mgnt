import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseDataComponent } from './license-data.component';

describe('LicenseDataComponent', () => {
  let component: LicenseDataComponent;
  let fixture: ComponentFixture<LicenseDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LicenseDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
