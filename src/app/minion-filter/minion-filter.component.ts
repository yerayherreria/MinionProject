import { Component, Input } from '@angular/core';
import { Minion } from '../interfaces/minion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-minion-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './minion-filter.component.html',
  styleUrl: './minion-filter.component.css'
})
export class MinionFilterComponent {
  @Input() arraySearch:Minion[] = [];
}
