import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProgresSpinnerComponent } from '../../shared/components/progres-spinner/progres-spinner.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    TranslateModule,
    ButtonComponent,
    ReactiveFormsModule,
    ProgresSpinnerComponent,
  ],
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  ngOnInit(): void {
    this.contactForm = new FormGroup({
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
      console.log('Form Data:', this.contactForm.value);
    } else {
      console.log('Form is invalid');
      this.contactForm.markAllAsTouched();
    }
  }
}
