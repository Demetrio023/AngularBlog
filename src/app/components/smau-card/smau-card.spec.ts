import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmauCard } from './smau-card';

describe('SmauCard', () => {
  let component: SmauCard;
  let fixture: ComponentFixture<SmauCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmauCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmauCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
