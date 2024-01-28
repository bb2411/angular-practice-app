import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StddataComponent } from './stddata.component';

describe('StddataComponent', () => {
  let component: StddataComponent;
  let fixture: ComponentFixture<StddataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StddataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
