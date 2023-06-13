import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSareeComponent } from './add-saree.component';

describe('AddSareeComponent', () => {
  let component: AddSareeComponent;
  let fixture: ComponentFixture<AddSareeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSareeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSareeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
