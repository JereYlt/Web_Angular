import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditacionComponent } from './meditacion.component';

describe('MeditacionComponent', () => {
  let component: MeditacionComponent;
  let fixture: ComponentFixture<MeditacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeditacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeditacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
