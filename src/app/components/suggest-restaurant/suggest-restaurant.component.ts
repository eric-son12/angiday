import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-suggest-restaurant',
  imports: [IonIcon],
  templateUrl: './suggest-restaurant.component.html',
  styleUrls: ['./suggest-restaurant.component.scss'],
})
export class SuggestRestaurantComponent implements OnInit {
  suggestRestaurants = [
    {
      name: 'Pizza Company',
      thumb: 'assets/images/suggest-restaurant-1.png',
      prepareTime: '22 - 32 min',
      rate: 4.9,
      discount: 30,
    },
    {
      name: 'Chị Bảy Quán',
      thumb: 'assets/images/suggest-restaurant-2.png',
      prepareTime: '20 - 30 min',
      rate: 4.5,
      discount: 30,
    },
  ];

  private router = inject(Router);

  ngOnInit() {}

  navigateProductDetail() {
    this.router.navigate(['/product-detail']);
  }
}
