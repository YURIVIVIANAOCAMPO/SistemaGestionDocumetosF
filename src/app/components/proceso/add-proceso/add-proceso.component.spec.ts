import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProcesoComponent } from './add-proceso.component';

describe('AddProcesoComponent', () => {
  let component: AddProcesoComponent;
  let fixture: ComponentFixture<AddProcesoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProcesoComponent]
    });
    fixture = TestBed.createComponent(AddProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
