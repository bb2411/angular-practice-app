import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetxlsComponent } from './getxls.component';

describe('GetxlsComponent', () => {
  let component: GetxlsComponent;
  let fixture: ComponentFixture<GetxlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetxlsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetxlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
