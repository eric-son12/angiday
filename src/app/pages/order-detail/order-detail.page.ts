import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButtons, IonBackButton, IonButton, IonThumbnail, IonHeader, IonAvatar, IonList, IonItem, IonNote, IonTitle, IonIcon, IonLabel, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonButtons, IonButton, IonBackButton, IonThumbnail, IonTitle, IonAvatar, IonLabel, IonList, IonItem, IonIcon, IonNote, IonToolbar, CommonModule, FormsModule],
})
export class OrderDetailPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
