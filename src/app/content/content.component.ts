import { Component, OnInit } from '@angular/core';
import { Minion } from '../interfaces/minion';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MinionsService } from '../services/minions.service';
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive,FormsModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  newMinion: Omit<Minion,"id"> = {
    name: "",
    bio: "",
    img: "",
    birth: "",
    side: ""
  }
  minions2: Minion[] = [];
  constructor(private minionsService: MinionsService){}

  ngOnInit(): void {
    this.minionsService.getMinions().subscribe({
      next: (minions2) => this.minions2 = minions2
    })
  }


  minions: Minion[] = [
    {
      id: "1",
      name: "Kevin",
      bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
      img: "assets/img/kevin.jpg",
      birth: "1951",
      side:"de los buenos"
    },
    {
      id: "2",
      name: "Josua",
      bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
      img: "assets/img/Josua.jpg",
      birth: "1672",
      side:"malvado"
    },
    {
      id: "3",
      name: "Dave",
      bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
      img: "assets/img/dave.jpg",
      birth: "1723",
      side: "de los buenos"
    },
    {
      id: "4",
      name: "Mudito",
      bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
      img: "assets/img/mudito.jpeg",
      birth: "1379",
      side:"de los buenos"
    },
    {
      id: "5",
      name: "Llongueras",
      bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
      img: "assets/img/llongueras.jpg",
      birth: "1687",
      side: "malvado"
    },
    {
      id: "6",
      name: "Minioncé",
      bio: "Le va el cante, dar la nota, ama los karaokes, es el rey y reina de la fiesta. Invítalo a tu fiesta o te arrepentirás.",
      img: "assets/img/minionce.jpg",
      birth: "1976",
      side: "de los buenos"
    },
    {
      id: "7",
      name: "Lobeznion",
      bio: "No lo enfades, este bichillo tiene muy malas pulgas...aunque sólo mide medio metro y ¡no puede ser más gracioso!",
      img: "assets/img/lobeznion.jpg",
      birth: "2017",
      side: "malvado"
    },
    {
      id: "8",
      name: "Minion Presley",
      bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
      img: "assets/img/minion-presley.jpg",
      birth: "2017",
      side: "malvado"
    }
  ];

  favorites: String[]=[];
  aggregate(name:String){
    this.favorites.push(name);
  }

  eliminate(name:String){
    this.favorites.splice(this.favorites.indexOf(name),1)
  }
}
