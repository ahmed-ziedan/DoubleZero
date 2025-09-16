import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting: boolean = false;

  private http = inject(HttpClient);

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(4000),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
    }
    console.log(this.contactForm.value);
    // this.contactForm.reset();

    const formspreeEndpoint = 'https://formspree.io/f/xjkeddje';

    this.http.post(formspreeEndpoint, this.contactForm.value).subscribe({
      next: () => {
        this.contactForm.reset();

        setTimeout(() => {
          this.isSubmitting = false;
        }, 2000);
      },
    });
  }
}
