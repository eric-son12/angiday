import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonFooter,
  IonButtons,
  IonButton,
  IonBackButton,
  IonInput,
  IonLabel,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonThumbnail,
  IonNote,
  IonIcon,
  IonItemGroup,
  IonItemDivider,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonFooter,
    IonButtons,
    IonButton,
    IonBackButton,
    IonInput,
    IonLabel,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonThumbnail,
    IonNote,
    IonIcon,
    IonItemGroup,
    IonItemDivider,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    CommonModule,
    FormsModule,
  ],
})
export class CheckoutPage implements OnInit {
  private router = inject(Router);

  isUseAnotherVoucher = false;

  constructor() {}

  ngOnInit() {}

  navigateToConfirmed() {
    this.router.navigate(['/order-confirmed']);
  }
}
