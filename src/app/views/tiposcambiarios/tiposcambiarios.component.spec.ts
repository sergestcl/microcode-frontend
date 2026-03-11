import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposcambiariosComponent } from './tiposcambiarios.component';

describe('TiposcambiariosComponent', () => {
  let component: TiposcambiariosComponent;
  let fixture: ComponentFixture<TiposcambiariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiposcambiariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiposcambiariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
