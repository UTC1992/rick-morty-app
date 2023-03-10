import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProfileComponent } from './profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatInputModule,
        MatIconModule,
        BrowserAnimationsModule,
      ],
      declarations: [ ProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Perfil'`, () => {
    expect(component.title).toEqual('Perfil');
  });

  it(`should have an attribute to save data about User`, () => {
    expect(component.userToEdit).toBeTruthy();
  });

  it('should render the title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Perfil');
  });

  it('should render the tag img', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('img')).toBeTruthy();
  });

  it('should have input with initial value', () => {
    const profileFormGroup = component.profileForm;
    const profileFormValues = {
      nickname: '',
      fullName: '',
    };
    expect(profileFormGroup.value).toEqual(profileFormValues);
  });

  it('should render 2 input', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const formElement = compiled.querySelector('#profileForm');
    const inputElements = formElement?.querySelectorAll('input');
    expect(inputElements?.length).toEqual(2);
  });

  it('should render a button with text "Actualizar"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')?.textContent).toContain(
      'Actualizar'
    );
  });

});
