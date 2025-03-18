import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqInfoComponent } from './req-info.component';

describe('ReqInfoComponent', () => {
  let component: ReqInfoComponent;
  let fixture: ComponentFixture<ReqInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReqInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReqInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
