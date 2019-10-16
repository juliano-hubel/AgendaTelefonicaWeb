import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html'  
})
export class ContactsComponent implements OnInit {
  contacts$: Observable<Contact[]> = null;

  constructor(private dataService:DataService) { }

  ngOnInit() {    
    this.getContacts();
  }

  getContacts()
  {
    this.contacts$ =  this.dataService.getContacts();

    console.log(this.contacts$);
  }


}
