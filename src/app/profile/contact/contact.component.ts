import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ProfileService } from '../profile.service';
import { SnotifyService } from 'ng-snotify';
import { environment } from '../../../environments/environment';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  model: any = {};

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }
  onSubmit(name: string, subject: string, email: EmailValidator, message: String) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('https://formspree.io/f/mbjwvqpj',
      { name: name, subject: subject, replyto: email, message: message },
      { 'headers': headers }).subscribe(
        response => {
          console.log(response);
        }
      );
  }
}
