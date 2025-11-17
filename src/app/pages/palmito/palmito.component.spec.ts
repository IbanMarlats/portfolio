import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalmitoComponent } from './palmito.component';

describe('PalmitoComponent', () => {
  let component: PalmitoComponent;
  let fixture: ComponentFixture<PalmitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PalmitoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalmitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
