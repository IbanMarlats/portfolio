import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-palmito',
  imports: [RouterModule],
  templateUrl: './palmito.component.html',
  styleUrl: './palmito.component.css'
})
export class PalmitoComponent {
scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

}
