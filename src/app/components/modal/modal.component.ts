import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() showModalCalendly = false;
  @Output() cancel: EventEmitter<void> = new EventEmitter();

  linkCalendly: SafeUrl;

  calendly: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.showModalCalendly) {
      this.removePageScroll();
    } else {
      this.restorePageScroll();
    }
  }

  openModalCalendly() {
    this.showModalCalendly = true;
    this.removePageScroll();
    // this.linkCalendly = this.sanitizer.bypassSecurityTrustHtml(`<div class="calendly-inline-widget" data-url="https://calendly.com/dp2videos/discovery?text_color=1f1f1f&primary_color=F26122" style="min-width:320px;height:100%;"></div>`);
  }
  closeModalCalendly() {
    this.cancel.emit();
    this.showModalCalendly = false;
    this.restorePageScroll();
  }

  removePageScroll() {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  }
  restorePageScroll() {
    document.getElementsByTagName('body')[0].removeAttribute('style');
  }

}
