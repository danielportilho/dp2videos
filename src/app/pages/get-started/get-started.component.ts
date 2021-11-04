import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit, OnChanges {

  showModalCalendly = false;
  showModalForms = false;
  showModal = false;
  showLoader = true;
  showMenu: boolean;
  sendingMessage = false;
  successMessage = false;
  errorMessage = false;
  showAlertSubject = false;
  showAlert = false;
  formValid = false;
  subject: string[] = [];

  endpoint = "http://localhost:80/dp2-videos/email.php";

  calendly: boolean;
  googleForms: boolean;

  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.showModalCalendly || this.showModalForms) {
      this.removePageScroll();
    } else {
      this.restorePageScroll();
    }
  }

  navigateTo(section: string) {
    if (section !== '') {
      this.router.navigate([''], { fragment: section });
    } else {
      this.router.navigate(['']);
    }
  }

  openModalForms() {
    this.showLoader = true;
    this.showModal = true;
    this.showModalForms = true;
  }
  openModalCalendly() {
    this.showLoader = true;
    this.showModal = true;
    this.showModalCalendly = true;
  }

  closeModal() {
    this.showModal = false;
    this.showModalForms = false;
    this.showModalCalendly = false;
    this.showLoader = false;
  }

  removePageScroll() {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  }
  restorePageScroll() {
      document.getElementsByTagName('body')[0].removeAttribute('style');
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

  sendMessage(formData: NgForm) {

    this.sendingMessage = true;

    if ((!formData.valid && this.subject.length === 0) || (formData.valid && this.subject.length === 0) || (!formData.valid && this.subject.length > 0)) {
      this.validateSubmit(formData.control);
      this.showAlertSubject = true;
      window.scrollTo({
        top: 200,
        behavior: 'smooth',
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
          this.sendingMessage = false;
          formData.resetForm();
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
