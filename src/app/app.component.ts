import {Component} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [  HeaderComponent, RouterOutlet ], //imporsster les dépendences
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

}

