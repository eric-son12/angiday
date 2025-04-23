import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, ModalController } from '@ionic/angular/standalone';
import { AddAddressComponent } from 'src/app/components/add-address/add-address.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule, FormsModule],
})
export class LocationPage implements OnInit {
  private modalCtrl = inject(ModalController);

  constructor() {}

  ngOnInit() {}

  async openAddAddressModal() {
    const modal = await this.modalCtrl.create({
      component: AddAddressComponent,
      componentProps: {
        data: { data: 'data' },
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      console.log('Modal closed with data:', data);
    }
  }
}
