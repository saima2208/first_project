import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

import { FooterComponent } from './footer/footer.component';

import { Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './page/home/home.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, RouterOutlet, HomeComponent],
  //templateUrl: './app.component.html',
  template: `
    <h1>Hello{{ title }}</h1> <!--Interpolation (one way)-->
    <img [src]="imgSrc" [alt]="altImg" /><!-- Proparty Binding(one way)-->
    
    <button (mouseover)="showAlert">Click Me</button> <!-- event binding -->
    
    <input (keyup)="oneKeyUp($event)" placeholder="Type something" /> 
    
    

    <textarea name="massage" rows="4" (keyup)="oneKeyUp($event)" placeholder="Type something"></textarea>
    <button (click)="showText">Show Text</button>
    <p>{{ keyPressed }}</p><!-- tWO WAY BINDING -->
   
  `,

  styleUrl: './app.component.css',
  styles:`
  img{
    height = 100px;
    weidth = 100px;
  }

  
  `,
})
export class AppComponent {
  title = 'Saima';
  altImg = 'logo of angular';
  imgSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUcQofbdW28AoTCjLFzojT7sSZQVsEurWQA&s';
  keyPressed = 'saima';
  textFromTextArea = '';
  oneKeyUp(event : KeyboardEvent){
    this.keyPressed = (event.target as HTMLInputElement).value;
  }

  storeText (event: key)

  showAlert() {
    alert('dummy alert');
  }

  showText() {
    const element = document.querySelector('.textFromTextArea');
    if (element) {
      element.innerHTML = this.texFromTextArea
    }
  }
  
}
