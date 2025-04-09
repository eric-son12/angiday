import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeroComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
