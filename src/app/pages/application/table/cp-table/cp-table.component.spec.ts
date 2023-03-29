import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpTableComponent } from './cp-table.component';

describe('CpTableComponent', () => {
  let component: CpTableComponent;
  let fixture: ComponentFixture<CpTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
