import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Output() search:EventEmitter<string> = new EventEmitter<string>();

  terminno(termino:string){ 
    this.search.emit(termino);
  }
}
