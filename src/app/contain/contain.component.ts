import { Component } from '@angular/core';

@Component({
  selector: 'app-contain',
  imports: [],
  templateUrl: './contain.component.html',
  styleUrl: './contain.component.css'
})
export class ContainComponent {
  users =[
    {
      id:1,
      name :'Alfi',
      class:'Eight',
      city: 'Khulna',
      picture:"https://randomuser.me/api/portraits/lego/3.jpg"
    },
  
    {
      id:2,
      name :'Ashfi',
      class:'Seven',
      city: 'Khulna',
      picture:"https://randomuser.me/api/portraits/lego/7.jpg"
    },
  
  
    {
      id:3,
      name :'Ayat',
      class:'Four',
      city: 'Dhaka',
      picture:"https://randomuser.me/api/portraits/lego/0.jpg"
    },
  
    {
      id:4,
      name :'Ayaan',
      class:'Three',
      city: 'Khulna',
      picture:"https://randomuser.me/api/portraits/lego/2.jpg"
    },
  
    {
      id:5,
      name :'Anas',
      class:'Two',
      city: 'Jessor',
      picture:"https://randomuser.me/api/portraits/lego/4.jpg"
    }
  
   
  ]
}
