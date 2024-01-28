import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DISComponent } from './dis.component';

describe('DISComponent', () => {
  let component: DISComponent;
  let fixture: ComponentFixture<DISComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DISComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DISComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
