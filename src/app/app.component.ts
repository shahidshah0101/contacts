import { Component } from '@angular/core';
import { ContactsService } from './Managers/contacts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public contactServiceManger: ContactsService) {}
  ngOnInit(): void {
    this.contactServiceManger.getContacts();
  }
  selectedContact(contact: any) {
    this.contactServiceManger.selectedContact = contact;
  }
}
