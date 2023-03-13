import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCharacterComponent } from './item-character.component';

describe('ItemCharacterComponent', () => {
  let component: ItemCharacterComponent;
  let fixture: ComponentFixture<ItemCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
