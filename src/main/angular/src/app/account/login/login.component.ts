import {Router} from '@angular/router';
import {AccountService} from '../shared/account.service';
import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;
  login = {
    email: '',
    password: ''
  };

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private http: HttpClient, private accountService: AccountService, private router: Router, private dialog: MatDialog) {
  }

  ngOnInit() {
    window.localStorage.clear();
  }

  async onSubmit() {
    try {
      this.loading = true;
      const result = await this.accountService.login(this.login);
      if(result)
        await this.router.navigate(['']);
      this.loading = true;
      setTimeout(() => this.loading = false, 3000);
    } catch (error) {
      this.loading = false;
      console.error(error);
    }
  }

  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';

  errors: string[] = [];
  messages: string[] = [];
  submitted: boolean = false;
  rememberMe = false;




}


