import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolepageComponent } from './consolepage.component';

describe('ConsolepageComponent', () => {
  let component: ConsolepageComponent;
  let fixture: ComponentFixture<ConsolepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
