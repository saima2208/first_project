import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ContainComponent } from "./contain/contain.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,FooterComponent,ContainComponent],
 // templateUrl: './app.component.html',
 template:`
 <div class="container">
  <app-header></app-header>
  <app-contain></app-contain>
  <app-footer></app-footer>
 </div>
 `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_Project_2';
}
 