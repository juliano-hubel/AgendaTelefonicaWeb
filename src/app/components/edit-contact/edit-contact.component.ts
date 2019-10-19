import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html'
})
export class EditContactComponent implements OnInit {
  public form: FormGroup;
  contact: Contact = null;


  constructor(private fb: FormBuilder, private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.BuildForm();
  }

  ngOnInit() {
    this.checkExistingContact();
  }

  private checkExistingContact() {

    this.activatedRoute.params.subscribe(params => {
      let contactId = params['id'];
      this.dataService.getContact(contactId).subscribe(result => {
        this.contact = result;
        this.fillForm();
      }, error => { });
    });

  }

  private fillForm() {
    this.form.controls['id'].setValue(this.contact.id);
    this.form.controls['name'].setValue(this.contact.name);
    this.form.controls['email'].setValue(this.contact.email);
    this.form.controls['phone'].setValue(this.contact.phone);
  }

  private BuildForm() {
    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(100), Validators.required])],
      email: ['', Validators.compose([Validators.minLength(3), Validators.email, Validators.required])],
      phone: ['', Validators.compose([Validators.minLength(10), Validators.required])]
    });
  }

  submit() {

    if (this.form.value.id) {
      this.updateContact();
    }
    else {
      this.addContact();
    }

  }


  private addContact() {
    this.dataService.addContact(this.form.value).subscribe(result => {
      console.log(result);
      this.router.navigateByUrl('/');
    }, error => {
      console.log(error);
    });
  }

  private updateContact() {
    this.dataService.updateContact(this.form.value).subscribe(result => {
      console.log(result);
      this.router.navigateByUrl('/');
    }, error => {
      console.log(error);
    });
  }
}
