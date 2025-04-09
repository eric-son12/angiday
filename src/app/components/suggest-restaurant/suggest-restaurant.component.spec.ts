import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuggestRestaurantComponent } from './suggest-restaurant.component';

describe('SuggestRestaurantComponent', () => {
  let component: SuggestRestaurantComponent;
  let fixture: ComponentFixture<SuggestRestaurantComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestRestaurantComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuggestRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
