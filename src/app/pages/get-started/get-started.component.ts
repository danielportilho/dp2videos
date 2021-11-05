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

  calendly: boolean;
  googleForms: boolean;

  constructor(private router: Router) { }

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
}
