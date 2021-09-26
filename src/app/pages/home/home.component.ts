import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showFixedHeader = true;
  accordion1Active = false;
  accordion2Active = false;
  accordion3Active = false;

  constructor() { }

  ngOnInit(): void {
    this.scrollFunction();
  }

  @HostListener('document:scroll')
  scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
      this.showFixedHeader = true;
    } else {
      this.showFixedHeader = false;
    }
  }

}
