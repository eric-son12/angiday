import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-confirmed',
  templateUrl: './order-confirmed.page.html',
  styleUrls: ['./order-confirmed.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, CommonModule, FormsModule],
})
export class OrderConfirmedPage implements OnInit {
  private router = inject(Router);

  constructor() {}

  ngOnInit() {}

  navigateToHome() {
    this.router.navigate(['/tabs/home']);
  }

  navigateToOrder() {
    this.router.navigate(['/order-detail']);
  }
}
