import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSareeComponent } from './update-saree.component';

describe('UpdateSareeComponent', () => {
  let component: UpdateSareeComponent;
  let fixture: ComponentFixture<UpdateSareeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSareeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSareeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
