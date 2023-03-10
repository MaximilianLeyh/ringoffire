import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartscreenComponent } from './start-screen.component';

describe('StartScreenComponent', () => {
  let component: StartscreenComponent;
  let fixture: ComponentFixture<StartscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartscreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
