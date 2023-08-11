import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsMapComponent } from './teams-map.component';

describe('TeamsMapComponent', () => {
  let component: TeamsMapComponent;
  let fixture: ComponentFixture<TeamsMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamsMapComponent]
    });
    fixture = TestBed.createComponent(TeamsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
