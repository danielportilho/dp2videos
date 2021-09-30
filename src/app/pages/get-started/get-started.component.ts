import { Router } from '@angular/router';
import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit, OnChanges {

  showModalCalendly = false;
  showModalForms = false;
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
    if (!section) {
      this.router.navigate(['']);
    } else {
      this.router.navigate([''], { fragment: section });
    }
  }

  openModalCalendly() {
    this.showModalCalendly = true;
    this.removePageScroll();
  }
  closeModalCalendly() {
    this.showModalCalendly = false;
    this.restorePageScroll();
  }

  openModalForms() {
    this.showModalForms = true;
    this.removePageScroll();
  }
  closeModalForms() {
    this.showModalForms = false;
    this.restorePageScroll();
  }

  removePageScroll() {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  }
  restorePageScroll() {
      document.getElementsByTagName('body')[0].removeAttribute('style');
  }


}
