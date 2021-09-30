import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Component, HostListener, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {

  showFixedHeader = true;
  accordion1Active = false;
  accordion2Active = false;
  accordion3Active = false;
  showModalCalendly = false;
  showModalForms = false;
  showMenu: boolean;

  calendly: boolean;
  googleForms: boolean;

  constructor(private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {

    if (this.activatedRouter.snapshot.fragment) {
      this.goTo(this.activatedRouter.snapshot.fragment);
    }

    this.scrollFunction();
  }

  ngOnChanges() {
    if (this.showModalCalendly || this.showModalForms) {
      this.removePageScroll();
    } else {
      this.restorePageScroll();
    }
  }

  @HostListener('document:scroll')
  scrollFunction() {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 60) {
      this.showFixedHeader = true;
    } else {
      this.showFixedHeader = false;
    }
  }

  navigateTo() {
    this.router.navigate(['/get-started']);
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

  goTo(section: string) {
    this.showMenu = false;
    document.getElementById(section).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }


}
