import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologistsComponent } from './technologists.component';

describe('TechnologistsComponent', () => {
  let component: TechnologistsComponent;
  let fixture: ComponentFixture<TechnologistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologistsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
