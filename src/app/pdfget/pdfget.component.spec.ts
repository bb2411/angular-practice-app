import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfgetComponent } from './pdfget.component';

describe('PdfgetComponent', () => {
  let component: PdfgetComponent;
  let fixture: ComponentFixture<PdfgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PdfgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PdfgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
