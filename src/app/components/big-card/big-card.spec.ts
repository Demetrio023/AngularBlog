import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCard } from './big-card';

describe('BigCard', () => {
  let component: BigCard;
  let fixture: ComponentFixture<BigCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
