import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-food-categories',
  imports: [IonButton, IonIcon],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './food-categories.component.html',
  styleUrls: ['./food-categories.component.scss'],
})
export class FoodCategoriesComponent implements OnInit {
  categories = [
    { name: 'burger', image: 'assets/images/categories/burger.svg' },
    { name: 'ramen', image: 'assets/images/categories/ramen.svg' },
    { name: 'breakfast', image: 'assets/images/categories/breakfast.svg' },
    { name: 'noodles', image: 'assets/images/categories/noodles.svg' },
    { name: 'burger', image: 'assets/images/categories/burger.svg' },
    { name: 'ramen', image: 'assets/images/categories/ramen.svg' },
    { name: 'breakfast', image: 'assets/images/categories/breakfast.svg' },
    { name: 'noodles', image: 'assets/images/categories/noodles.svg' },
  ];
  constructor() {}

  ngOnInit() {}
}
