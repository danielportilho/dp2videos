import { Video } from './../../models/video.model';
import { ActivatedRoute, Router } from '@angular/router';
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
  showModalPortfolio = false;
  showMenu: boolean;
  portfolio: Video[] = [];
  video: Video;

  calendly: boolean;
  googleForms: boolean;

  constructor(private router: Router, private activatedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.portfolio = [
      {
        id: 1,
        title: 'IQVIA',
        category: 'Corporate Video',
        label: 'url(../../../assets/images/image-8.jpg',
        video: 'https://www.youtube.com/embed/LBp2V2Mia9s'
      },
      {
        id: 2,
        title: 'KPMG',
        category: 'Explainer Video',
        label: 'url(../../../assets/images/image-8.jpg',
        video: 'https://www.youtube.com/embed/ysyDU5_Q1aI'
      },
      {
        id: 3,
        title: 'Cargill',
        category: 'Product Video',
        label: 'url(../../../assets/images/image-8.jpg',
        video: 'https://www.youtube.com/embed/078OxawqNLI'
      }
      /* {
        id: 4,
        title: 'PondLeap',
        category: 'Startup Intro',
        label: 'url(../../../assets/images/image-8.jpg',
        video: this.sanitizer.bypassSecurityTrustHtml(`<iframe src="https://www.youtube.com/embed/G-rzE-9zHj8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
      },{
        id: 5,
        title: 'MASSEY FERGUSON',
        category: 'Explainer Video',
        label: 'url(../../../assets/images/image-8.jpg',
        video: this.sanitizer.bypassSecurityTrustHtml(`<iframe src="https://www.youtube.com/embed/G-rzE-9zHj8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
      },

      {
        id: 6,
        title: 'POSITIVO',
        category: '3D Animation',
        label: 'url(../../../assets/images/image-8.jpg',
        video: this.sanitizer.bypassSecurityTrustHtml(`<iframe src="https://www.youtube.com/embed/G-rzE-9zHj8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
      },

      {
        id: 8,
        title: 'Video 8',
        category: 'Category 8',
        label: 'url(../../../assets/images/image-8.jpg',
        video: this.sanitizer.bypassSecurityTrustHtml(`<iframe src="https://www.youtube.com/embed/G-rzE-9zHj8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
      },
      {
        id: 9,
        title: 'Video 9',
        category: 'Category 9',
        label: 'url(../../../assets/images/image-8.jpg',
        video: this.sanitizer.bypassSecurityTrustHtml(`<iframe src="https://www.youtube.com/embed/G-rzE-9zHj8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
      },
      {
        id: 10,
        title: 'Video 10',
        category: 'Category 10',
        label: 'url(../../../assets/images/image-8.jpg',
        video: this.sanitizer.bypassSecurityTrustHtml(`<iframe src="https://www.youtube.com/embed/G-rzE-9zHj8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
      },
      {
        id: 11,
        title: 'Video 11',
        category: 'Category 11',
        label: 'url(../../../assets/images/image-8.jpg',
        video: this.sanitizer.bypassSecurityTrustHtml(`<iframe src="https://www.youtube.com/embed/G-rzE-9zHj8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
      },
      {
        id: 12,
        title: 'Video 12',
        category: 'Category 12',
        label: 'url(../../../assets/images/image-8.jpg',
        video: this.sanitizer.bypassSecurityTrustHtml(`<iframe src="https://www.youtube.com/embed/G-rzE-9zHj8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
      } */
    ];

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

  openModalPortfolio(id: number) {
    this.showModalPortfolio = true;
    this.video = this.portfolio.find(p => p.id === id);
    this.removePageScroll();
  }

  closeModalPortfolio() {
    this.showModalPortfolio = false;
    this.restorePageScroll();
  }


}
