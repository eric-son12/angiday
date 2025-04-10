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
    { name: 'cake', image: 'assets/images/categories/cake.png' },
    { name: 'cocktail', image: 'assets/images/categories/cocktail.png' },
    { name: 'cupcake', image: 'assets/images/categories/cupcake.png' },
    { name: 'donut', image: 'assets/images/categories/donut.png' },
    { name: 'ice cream', image: 'assets/images/categories/ice-cream.png' },
    { name: 'milk', image: 'assets/images/categories/milk.png' },
    { name: 'noodle', image: 'assets/images/categories/noodle.png' },
    { name: 'pancake', image: 'assets/images/categories/pancake.png' },
    { name: 'soda', image: 'assets/images/categories/soda.png' },
    { name: 'sushi', image: 'assets/images/categories/sushi.png' },
    { name: 'waffle', image: 'assets/images/categories/waffle.png' },
  ];
  constructor() {}

  ngOnInit() {}
}
