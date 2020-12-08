import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttptrialComponent } from './httptrial.component';

describe('HttptrialComponent', () => {
  let component: HttptrialComponent;
  let fixture: ComponentFixture<HttptrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttptrialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttptrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
