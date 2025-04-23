import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonBackButton,
  IonList,
  IonItem,
  IonSegment,
  IonSegmentButton,
  IonSegmentView,
  IonSegmentContent,
  IonLabel,
  IonThumbnail,
  IonNote,
  IonIcon,
  IonFooter,
  ModalController,
} from '@ionic/angular/standalone';

import { MenuModalComponent } from 'src/app/components/menu-modal/menu-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, IonButtons, IonButton, IonBackButton, IonList, IonItem, IonSegment, IonSegmentButton, IonSegmentView, IonSegmentContent, IonLabel, IonThumbnail, IonNote, IonIcon, IonFooter],
})
export class ProductDetailPage implements OnInit {
  categories = [
    {
      name: 'Tất cả',
      value: 'all',
      products: [
        {
          name: 'Blueberry Pancakes',
          desc: 'Fluffy, golden pancakes infused with sweet, juicy blueberries',
          image: 'assets/images/product-detail-1.png',
          price: 120000,
        },
        {
          name: 'Oatmeal & Blueberries',
          desc: 'A wholesome and nutritious breakfast dish featuring creamy, cooked oats topped with sweet, juicy blueberries',
          image: 'assets/images/product-detail-2.png',
          price: 150000,
        },
        {
          name: 'Scrambled Eggs',
          desc: 'A classic breakfast dish made by whisking eggs and cooking them gently in a pan until they form soft, creamy curds.',
          image: 'assets/images/product-detail-3.png',
          price: 79000,
        },
        {
          name: 'Iced Coffee',
          desc: 'A refreshing beverage made by brewing coffee and then chilling it over ice',
          image: 'assets/images/product-detail-4.png',
          price: 35000,
        },
      ],
    },
    { name: 'Cà phê', value: 'coffee' },
    { name: 'Trà sữa', value: 'milk' },
    { name: 'Bánh ngọt', value: 'cake' },
    { name: 'Ăn sáng', value: 'breakfast' },
    { name: 'Ăn trưa', value: 'dinner' },
  ];

  private modalCtrl = inject(ModalController);
  private router = inject(Router);

  constructor() {}

  ngOnInit() {}

  async openMenuModal(product: any) {
    const modal = await this.modalCtrl.create({
      component: MenuModalComponent,
      componentProps: {
        data: product,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      console.log('Modal closed with data:', data);
    }
  }

  navigateToCheckout() {
    this.router.navigate(['/checkout']);
  }
}
