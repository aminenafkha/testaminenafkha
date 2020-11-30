import { Component, Input, OnInit } from '@angular/core';
import { Legume } from '../classes/legume';

@Component({
  selector: 'amin-legume',
  templateUrl: './legume.component.html',
  styleUrls: ['./legume.component.css']
})
export class LegumeComponent implements OnInit {
    @Input("legume") t :Legume  ;
  constructor() { }

  ngOnInit(): void {
  }

}
