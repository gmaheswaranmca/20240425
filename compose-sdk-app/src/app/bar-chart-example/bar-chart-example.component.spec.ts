import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartExampleComponent } from './bar-chart-example.component';

describe('BarChartExampleComponent', () => {
  let component: BarChartExampleComponent;
  let fixture: ComponentFixture<BarChartExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarChartExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarChartExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
