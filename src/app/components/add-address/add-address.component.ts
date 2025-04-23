import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonButtons, IonInput, IonButton, IonIcon, IonList, IonItem, IonLabel, ModalController } from '@ionic/angular/standalone';
@Component({
  selector: 'app-add-address',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonButtons, IonInput, IonButton, IonIcon, IonList, IonItem, IonLabel],
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss'],
})
export class AddAddressComponent implements OnInit {
  private modalCtrl = inject(ModalController);
  private router = inject(Router);

  address: string = '';
  addressList = [
    {
      name: '123 Đường ABC, Phường XYZ',
      address: 'Quận 1, TP.HCM',
    },
    {
      name: '456 Đường DEF, Phường UVW',
      address: 'Quận 2, TP.HCM',
    },
    {
      name: '789 Đường GHI, Phường RST',
      address: 'Quận 3, TP.HCM',
    },
  ];
  isBuilding: boolean = false;

  constructor() {}

  ngOnInit() {}

  onInput(event: CustomEvent) {
    const value = (event.target as HTMLIonInputElement).value ?? '';
    this.address = value as string;
  }

  cancel(e: any) {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss({ address: this.address }, 'confirm');
  }

  navigateToOnboarding() {
    this.confirm();
    this.router.navigate(['/onboarding']);
  }
}
