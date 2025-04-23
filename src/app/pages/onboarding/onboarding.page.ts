import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule],
})
export class OnboardingPage {
  private router = inject(Router);

  constructor() {}

  ionViewDidEnter() {
    setTimeout(() => {
      this.router.navigate(['/tabs/home']);
    }, 2000);
  }
}
