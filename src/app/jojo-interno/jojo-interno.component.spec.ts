import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JojoInternoComponent } from './jojo-interno.component';

describe('JojoInternoComponent', () => {
  let component: JojoInternoComponent;
  let fixture: ComponentFixture<JojoInternoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JojoInternoComponent]
    });
    fixture = TestBed.createComponent(JojoInternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
