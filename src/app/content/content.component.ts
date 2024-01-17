import { Component, Input, OnInit } from '@angular/core';
import { Minion } from '../interfaces/minion';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MinionsService } from '../services/minions.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive,FormsModule,AsyncPipe],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  @Input() id : string = ""
  minions$! : Observable<Minion[]>;
  minions2: Minion[] = [];
  constructor(private minionsService: MinionsService){}

  ngOnInit(): void {
    // this.minionsService.getMinions()
    // .subscribe({
    //   next: (minions2) => this.minions2 = minions2
    // })
    this.minions$ = this.minionsService.getMinions();

    this.minionsService.getMinions()
    .subscribe((next)=>console.log(next), (error)=>console.log(error))
  }

  deleteMinion(id:String){
    this.minionsService.deleteMinion(id).subscribe({
      next : () => this.minions2 = this.minions2.filter((minion) => minion.id !== id)
    });
  }

  favorites: String[]=[];
  aggregate(name:String){
    this.favorites.push(name);
  }
  
  eliminate(name:String){
    this.favorites.splice(this.favorites.indexOf(name),1)
  }
}
