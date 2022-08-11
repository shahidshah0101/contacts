import { Injectable } from '@angular/core';
import { ContactsServices } from '../Services/contacts.service';
import { contact } from '../models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  contactData: contact[] = [];
  public selectedContact: contact | undefined;
  constructor(public contactsAPIServices: ContactsServices) {}
  public getContacts() {
    this.contactsAPIServices.getContacts().subscribe((res: any) => {
      console.log(res);
      this.contactData = res.data;
      this.selectedContact = this.contactData[0];
    });
  }
}
