import { Component } from '@angular/core';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  users =[
    {
      date:'2017-07-07',
      referrence :'cbpb',
      customer:'Alfi',
      nb: 2,
      total:'$77.88'
    },
    {
      date:'2017-07-07',
      referrence :'cbpb',
      customer:'Alfi',
      nb: 2,
      total:'$77.88'
    },
    {
      date:'2017-07-07',
      referrence :'cbpb',
      customer:'Alfi',
      nb: 2,
      total:'$77.88'
    },
    {
      date:'2017-07-07',
      referrence :'cbpb',
      customer:'Alfi',
      nb: 2,
      total:'$77.88'
    },
    {
      date:'2017-07-07',
      referrence :'cbpb',
      customer:'Alfi',
      nb: 3,
      total :'$55.00'
    }
   
  ]

  user =[
    {
      customer:'Alfi',
      product:'ni92-E',
      rating:'***',
    },
    {
      customer:'Alfi',
      product:'ni92-E',
      reviews:'***',
    },
    {
      customer:'Alfi',
      product:'ni92-E',
      reviews:'***',
    },
    {
      customer:'Alfi',
      product:'ni92-E',
      reviews:'***',
    },
    {
      customer:'Alfi',
      product:'ni92-E',
      reviews:'***',
    }
  ]
}
