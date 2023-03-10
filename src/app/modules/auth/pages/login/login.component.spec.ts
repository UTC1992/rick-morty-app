import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

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
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Rick and Morty'`, () => {
    expect(component.title).toEqual('Rick and Morty');
  });

  it('should render the title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Rick and Morty');
  });

  it('should have input with initial value', () => {
    const loginFormGroup = component.loginForm;
    const loginFormValues = {
      email: '',
      password: '',
    };
    expect(loginFormGroup.value).toEqual(loginFormValues);
  });

  it('should render a form group with 2 inputs', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const formElement = compiled.querySelector('#loginForm');
    const inputElements = formElement?.querySelectorAll('input');
    expect(inputElements?.length).toEqual(2);
  });

  it('should render a button with text "Ingresar"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')?.textContent).toContain(
      'Ingresar'
    );
  });

  it(`should have as info of link to Register`, () => {
    expect(component.titleLinkToRegister).toEqual('Registrarme');
  });

  it('should render the question about your account', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('¿ No tienes cuenta ?');
  });

  it('should render the link to Register', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a')?.textContent).toContain('Registrarte');
  });

});
