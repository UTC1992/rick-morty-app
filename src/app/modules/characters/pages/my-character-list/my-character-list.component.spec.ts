import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCharacterListComponent } from './my-character-list.component';

describe('MyCharacterListComponent', () => {
  let component: MyCharacterListComponent;
  let fixture: ComponentFixture<MyCharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCharacterListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
