import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html'
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact = null;


  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) 
  {
    
  }
  ngOnInit() {
    this.fillContact();
  }

  fillContact() {
    this.activatedRoute.params.subscribe(params => {
      let contactId = params['id'];
      this.dataService.getContact(contactId)
        .subscribe(result => {
          this.contact = result;
        }, error => { });

    });
  }

}
