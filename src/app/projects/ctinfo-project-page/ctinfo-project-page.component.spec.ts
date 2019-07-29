import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CTInfoProjectPageComponent } from './ctinfo-project-page.component';

describe('CTInfoProjectPageComponent', () => {
  let component: CTInfoProjectPageComponent;
  let fixture: ComponentFixture<CTInfoProjectPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CTInfoProjectPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CTInfoProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
