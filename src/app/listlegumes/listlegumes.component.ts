import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amin-listlegumes',
  templateUrl: './listlegumes.component.html',
  styleUrls: ['./listlegumes.component.css']
})
export class ListlegumesComponent implements OnInit {
  tabLegumes : Legume[]= [ 
    {image: 'assets/Images/tomate.jpg', nom:'tomate', prix:2.8, frais:false},
    {image:'assets/Images/radis.jpg',nom: 'radis', prix:1.8,frais: true},
    {image:'assets/Images/carotte.jpg', nom:'carotte', prix:3.8, frais:false} 
  ];
nbFrais() {

  
}

  constructor() { }

  ngOnInit(): void {
  }

}
