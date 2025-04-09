import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonContent,
  IonButton,
  IonIcon,
  IonModal,
  IonInput,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { person } from 'ionicons/icons';

@Component({
  selector: 'app-splash-screen',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonContent,
    IonButton,
    IonIcon,
    IonModal,
    IonInput,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
})
export class SplashScreenComponent {
  currentStepSignUp = 1;
  signUpForm: FormGroup;
  signInForm: FormGroup;

  private fb = inject(FormBuilder);
  private router = inject(Router);

  constructor() {
    addIcons({ person });
    this.signUpForm = this.fb.group({
      phone: [
        '',
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
    this.signInForm = this.fb.group({
      phone: [
        '',
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  signIn() {
    this.router.navigate(['/']);
  }

  signUp() {
    this.currentStepSignUp = 2;
  }

  verifyOtp() {
    this.currentStepSignUp = 3;
  }

  finishSignUp() {
    this.router.navigate(['/']);
  }
}
