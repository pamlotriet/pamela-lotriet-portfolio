import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProgresSpinnerComponent } from '../../shared/components/progres-spinner/progres-spinner.component';
import emailjs from 'emailjs-com';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    TranslateModule,
    ButtonComponent,
    ReactiveFormsModule,
    ProgresSpinnerComponent,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  sending = false;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      from_name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      from_email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(500),
      ]),
    });
  }

  get name() {
    return this.contactForm.get('from_name');
  }

  get email() {
    return this.contactForm.get('from_email');
  }

  get subject() {
    return this.contactForm.get('subject');
  }

  get message() {
    return this.contactForm.get('message');
  }

  buttonClick() {
    if (this.contactForm.valid) {
      this.sending = true;

      emailjs
        .send(
          environment.emailJsServiceKey,
          environment.emailJsTemplateId,
          {
            from_name: this.contactForm.get('from_name')?.value,
            from_email: this.contactForm.get('from_email')?.value,
            subject: this.contactForm.get('subject')?.value,
            message: this.contactForm.get('message')?.value,
          },
          environment.emailJsUserId
        )
        .then(
          () => {
            this.sending = false;
            this.contactForm.reset();
            this.messageService.add({
              severity: 'success',
              summary: 'Email Sent',
              detail: 'Your email was sent successfully!',
            });
          },
          () => {
            this.sending = false;
            this.messageService.add({
              severity: 'error',
              summary: 'Email Sending Failed',
              detail:
                'There was an error sending your email. Please try again later.',
            });
          }
        );
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
