import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSareeComponent } from './view-saree.component';

describe('ViewSareeComponent', () => {
  let component: ViewSareeComponent;
  let fixture: ComponentFixture<ViewSareeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSareeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSareeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
