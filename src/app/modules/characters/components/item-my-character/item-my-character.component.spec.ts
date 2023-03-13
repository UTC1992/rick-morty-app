import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMyCharacterComponent } from './item-my-character.component';

describe('ItemMyCharacterComponent', () => {
  let component: ItemMyCharacterComponent;
  let fixture: ComponentFixture<ItemMyCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemMyCharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemMyCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
