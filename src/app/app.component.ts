import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, callOutline, checkmarkCircle, chevronBackOutline, mapOutline, person, remove, star, starHalf, starHalfOutline, starOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    addIcons({
      add,
      remove,
      starOutline,
      starHalfOutline,
      star,
      starHalf,
      chevronBackOutline,
      person,
      checkmarkCircle,
      callOutline,
      mapOutline,
    });
  }
}
