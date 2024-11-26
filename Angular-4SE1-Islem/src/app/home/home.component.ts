import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Projet_SE1_';
  color:string;

  user = [
    { id: 1, name: "Isleeem", age: 21, email: "Lahami@gmail.com" },
    { id: 2, name: "mariem", age: 16, email: "mariem@gmail.com" },
    { id: 3, name: "med", age: 17, email: "med@gmail.com" }
  ]

  show() {
    alert('Hello SE1');
  }
  
  searchAge: number = 0;

}
