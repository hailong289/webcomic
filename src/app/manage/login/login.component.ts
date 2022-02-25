import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  formData!: FormGroup;
  constructor(
    private messageService: MessageService,
    private login: FormBuilder,
    public router: Router,
    private load: NgxSpinnerService
  ) {
    this.formData = this.login.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
       this.load.show();
       setTimeout(() => {
          this.load.hide();
       }, 3000);
  }
  addSingle() {}
  onSubmit() {
    if (!this.formData.invalid) {
      if (
        this.formData.controls['username'].value == 'long' &&
        this.formData.controls['password'].value == 1
      ) {
        this.messageService.add({
          severity: 'success',
          summary: 'Đăng nhập thành công',
        });
        localStorage.setItem('token', this.makeid(1000));
        this.router.navigate(['admin/dashboard']);
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Đăng nhập thất bại',
          detail: 'Vui lòng kiểm tra tài khoản hoặc mật khẩu của bạn',
        });
      }
    }
  }
  makeid(length: number) {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
