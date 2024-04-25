import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnChartExampleComponent } from './column-chart-example.component';

describe('ColumnChartExampleComponent', () => {
  let component: ColumnChartExampleComponent;
  let fixture: ComponentFixture<ColumnChartExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColumnChartExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColumnChartExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
