import { Component, OnInit, Input } from '@angular/core';
import {dvh_Hero} from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() dvh_hero?: dvh_Hero;

  constructor() { }

  ngOnInit() {
  }

}