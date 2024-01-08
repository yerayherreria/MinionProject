import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule,RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Output() search:EventEmitter<string> = new EventEmitter<string>();

  terminno(termino:string){ 
    this.search.emit(termino);
  }
}
