import { Component, inject, input, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFooter,
  IonIcon,
  ModalController,
  IonButton,
  IonButtons,
  IonBackButton,
  IonLabel,
  IonList,
  IonItem,
  IonInput,
  IonItemGroup,
  IonItemDivider,
  IonNote,
  IonChip,
  IonRadioGroup,
  IonRadio,
  IonCheckbox,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, chevronBack, chevronBackOutline, remove } from 'ionicons/icons';

@Component({
  selector: 'app-menu-modal',
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonFooter,
    IonButton,
    IonButtons,
    IonBackButton,
    IonLabel,
    IonIcon,
    IonList,
    IonItem,
    IonInput,
    IonItemGroup,
    IonItemDivider,
    IonNote,
    IonChip,
    IonRadioGroup,
    IonRadio,
    IonCheckbox,
  ],
  templateUrl: './menu-modal.component.html',
  styleUrls: ['./menu-modal.component.scss'],
})
export class MenuModalComponent implements OnInit {
  public product = input();

  private modalCtrl = inject(ModalController);

  constructor() {
    addIcons({
      add,
      remove,
      chevronBackOutline,
    });
  }

  ngOnInit() {
    console.log('MenuModalComponent initialized', this.product());
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  addToCart() {
    return this.modalCtrl.dismiss({ product: 1234 }, 'confirm');
  }
}
