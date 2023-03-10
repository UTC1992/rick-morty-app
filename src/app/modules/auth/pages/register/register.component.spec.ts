import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterComponent } from './register.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

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
      declarations: [RegisterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Registro'`, () => {
    expect(component.title).toEqual('Registro');
  });

  it('should render the title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Registro');
  });

  it('should have input with initial value', () => {
    const loginFormGroup = component.registerForm;
    const loginFormValues = {
      fullName: '',
      nickname: '',
      email: '',
      password: '',
    };
    expect(loginFormGroup.value).toEqual(loginFormValues);
  });

  it('should render a form group with 4 inputs', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const formElement = compiled.querySelector('#registerForm');
    const inputElements = formElement?.querySelectorAll('input');
    expect(inputElements?.length).toEqual(4);
  });

  it('should render a button with text "Registrarme"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')?.textContent).toContain(
      'Registrarme'
    );
  });

  it(`should have as info of link to Login`, () => {
    expect(component.titleLinkToLogin).toEqual('Ingresar');
  });

  it('should render the question about your account', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('¿ Ya tienes cuenta ?');
  });

  it('should render the link to Login', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a')?.textContent).toContain('Ingresar');
  });


});
