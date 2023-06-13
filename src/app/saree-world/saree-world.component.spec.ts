import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SareeWorldComponent } from './saree-world.component';

describe('SareeWorldComponent', () => {
  let component: SareeWorldComponent;
  let fixture: ComponentFixture<SareeWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SareeWorldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SareeWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
