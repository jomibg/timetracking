import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../login.service";
import {MessagesService} from "../messages.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private loginService:LoginService, private messagesService:MessagesService) {
    this.form = new FormGroup({
      username: new FormControl('',[Validators.required,Validators.minLength(4)]),
    });
  }
  submitForm() :void{
    if (this.form.valid) {
      this.loginService.getOrCrate(this.form.getRawValue().username)
    } else {
      this.messagesService.add('There is a problem with the form');
    }
  }
  ngOnInit(): void {
  }

}
