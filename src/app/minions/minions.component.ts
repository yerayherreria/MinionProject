import { Component } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { MinionFilterComponent } from '../minion-filter/minion-filter.component';
import { Minion } from '../interfaces/minion';

@Component({
  selector: 'app-minions',
  standalone: true,
  imports: [ContentComponent,MinionFilterComponent],
  templateUrl: './minions.component.html',
  styleUrl: './minions.component.css'
})
export class MinionsComponent {
  title = 'minionProject';
  searchTerm:string="";
  
  
minionsSearch:Minion[] = [];
  searchStart(word:string):void{
  this.searchTerm = word;
  }
}
