import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcapitalComponent } from './editcapital.component';

describe('EditcapitalComponent', () => {
  let component: EditcapitalComponent;
  let fixture: ComponentFixture<EditcapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditcapitalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditcapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
