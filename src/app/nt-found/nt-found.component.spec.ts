import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtFoundComponent } from './nt-found.component';

describe('NtFoundComponent', () => {
  let component: NtFoundComponent;
  let fixture: ComponentFixture<NtFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NtFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NtFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
