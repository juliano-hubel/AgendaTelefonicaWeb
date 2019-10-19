import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';

const routes: Routes = [
  {path: '', component:ContactsComponent},
  {path: 'new-contact', component:EditContactComponent},
  {path: 'edit-contact/:id', component:EditContactComponent},
  {path: 'create-contact', component:EditContactComponent},  
  {path: 'contact/:id', component:ContactDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
