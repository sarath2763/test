import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTodosComponent } from './view-todos.component';

describe('ViewTodosComponent', () => {
  let component: ViewTodosComponent;
  let fixture: ComponentFixture<ViewTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
