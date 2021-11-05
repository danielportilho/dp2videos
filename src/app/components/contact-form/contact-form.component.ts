import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  sendingMessage = false;
  successMessage = false;
  errorMessage = false;
  showAlertSubject = false;
  showAlert = false;
  formValid = false;
  subject: string[] = [];

  endpoint = "http://localhost:80/dp2-videos/email.php";

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  addSubject(event: any) {

    const subjectValue = event.target.value;

    if (this.subject.length === 0) {
      
      this.subject.push(subjectValue);
      this.showAlertSubject = false;

    } else {
      if (!this.subject.includes(subjectValue)) {
        this.subject.push(subjectValue);
      } else {
        this.subject = this.subject.filter( item => item !== subjectValue);

        if (this.subject.length === 0) {
          this.showAlertSubject = true;
        } else {
          this.showAlertSubject = false;
        }
      }
    }
    
  }

  sendMessage(formData: any) {

    this.sendingMessage = true;

    if ((!formData.valid && this.subject.length === 0) || (formData.valid && this.subject.length === 0) || (!formData.valid && this.subject.length > 0)) {
      this.validateSubmit(formData.control);
      this.showAlertSubject = true;
      this.sendingMessage = false;

      document.getElementById('contact-form').scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }    
    
    else {

      this.formValid = true;

      let postVars = {
        name : formData.controls['fullName'].value,
        email : formData.controls['email'].value,
        subject :  this.subject,
        message : formData.controls['message'].value
      };

      this.httpClient.post(this.endpoint, postVars, {responseType: 'text'}).subscribe(
        data => {
          this.showAlert = true;
          this.successMessage = true;
          this.errorMessage = false;
          this.sendingMessage = false;
          formData.resetForm();
        },
        err => {
          this.showAlert = true;
          this.successMessage = false;
          this.errorMessage = true;
          this.sendingMessage = false;
        });  
    }

  }

  validateSubmit(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach ( campo => {
      const control = formGroup.get(campo);
      if (control instanceof FormControl) {
        control.markAsTouched();
        control.markAsDirty();
      } else if (control instanceof FormGroup) {
        this.validateSubmit(control);
      }
    });
  }

}
