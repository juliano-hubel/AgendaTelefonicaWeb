import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contact.model';

@Injectable()
export class DataService
{
    private serviceUrl = "http://localhost:63963";
    
    constructor(private http: HttpClient) {                

    }
    getContacts()
    {
        return this.http.get<Contact[]>(`${this.serviceUrl}/contacts`);          
    }
    getContact(id:any)
    {
        return this.http.get<Contact>(`${this.serviceUrl}/contacts/${id}`);          
    }

    searchContacts(key:string)
    {
        return this.http.get<Contact[]>(`${this.serviceUrl}/contacts/${key}`);        
    }

    addContact(contact:Contact)
    {        
        return this.http.post(`${this.serviceUrl}/contacts`, contact);
    }

        
}