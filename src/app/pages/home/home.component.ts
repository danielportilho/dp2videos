import { Video } from './../../models/video.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, EventEmitter, HostListener, OnChanges, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {

  @Output() modalStatus: EventEmitter<any> = new EventEmitter();

  showFixedHeader = true;
  accordion1Active = false;
  accordion2Active = false;
  accordion3Active = false;
  showModalCalendly = false;
  showModal = false;
  showModalForms = false;
  showModalPortfolio = false;
  showPortfolio2 = false;
  showPortfolio3 = false;
  showMenu: boolean;
  portfolio1: Video[] = [];
  portfolio2: Video[] = [];
  portfolio3: Video[] = [];
  portfolioComplete: Video[] = [];
  video: Video;

  bgVideo1: SafeUrl;
  bgVideo2: SafeUrl;
  linkCalendly: SafeUrl;

  calendly: boolean;
  googleForms: boolean;

  constructor(
      private router: Router, 
      private activatedRouter: ActivatedRoute, 
      private sanitizer: DomSanitizer) {
    this.bgVideo1 = sanitizer.bypassSecurityTrustHtml(`<video style="min-width:100%;min-height:100%" autoplay muted loop playsinline><source src="../../../assets/videos/intro-web.webm" type="video/webm"><source src="../../../assets/videos/intro-web.mp4" type="video/mp4"></video>`);
    this.bgVideo2 = sanitizer.bypassSecurityTrustHtml(`<video style="min-width:100%;min-height:100%" autoplay muted loop playsinline><source src="../../../assets/videos/intro-web-3.webm" type="video/webm"><source src="../../../assets/videos/intro-web-3.mp4" type="video/mp4"></video>`);
  }
  
  ngOnInit(): void {
    
    this.portfolio1 = [
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
      },
      {
        id: 4,
        title: 'PondLeap',
        category: 'Startup Intro',
        label: 'url(../../../assets/images/image-8.jpg',
        video: 'https://www.youtube.com/embed/G-rzE-9zHj8'
      },{
        id: 5,
        title: 'MASSEY FERGUSON',
        category: 'Explainer Video',
        label: 'url(../../../assets/images/image-8.jpg',
        video: 'https://www.youtube.com/embed/G-rzE-9zHj8'
      },
      {
        id: 6,
        title: 'POSITIVO',
        category: '3D Animation',
        label: 'url(../../../assets/images/image-8.jpg',
        video: 'https://www.youtube.com/embed/G-rzE-9zHj8'
      }
    ];
    this.portfolio2 = [
      {
        id: 7,
        title: 'Video 7',
        category: 'Category 7',
        label: 'url(../../../assets/images/image-8.jpg',
        video: 'https://www.youtube.com/embed/G-rzE-9zHj8'
      },
      {
        id: 8,
        title: 'Video 8',
        category: 'Category 8',
        label: 'url(../../../assets/images/image-8.jpg',
        video: 'https://www.youtube.com/embed/G-rzE-9zHj8'
      },
      {
        id: 9,
        title: 'Video 9',
        category: 'Category 9',
        label: 'url(../../../assets/images/image-8.jpg',
        video: 'https://www.youtube.com/embed/G-rzE-9zHj8'
      },
      {
        id: 10,
        title: 'Video 10',
        category: 'Category 10',
        label: 'url(../../../assets/images/image-8.jpg',
        video: 'https://www.youtube.com/embed/G-rzE-9zHj8'
      },
      {
        id: 11,
        title: 'Video 11',
        category: 'Category 11',
        label: 'url(../../../assets/images/image-8.jpg',
        video: 'https://www.youtube.com/embed/G-rzE-9zHj8'
      },
      {
        id: 12,
        title: 'Video 12',
        category: 'Category 12',
        label: 'url(../../../assets/images/image-8.jpg',
        video: 'https://www.youtube.com/embed/G-rzE-9zHj8'
      }
    ];
    this.portfolio3 = [
      {
        id: 13,
        title: 'Video 13',
        category: 'Category 13',
        label: 'url(../../../assets/images/image-8.jpg',
        video: 'https://www.youtube.com/embed/G-rzE-9zHj8'
      },
      {
        id: 14,
        title: 'Video 14',
        category: 'Category 14',
        label: 'url(../../../assets/images/image-8.jpg',
        video: 'https://www.youtube.com/embed/G-rzE-9zHj8'
      },
      {
        id: 15,
        title: 'Video 15',
        category: 'Category 15',
        label: 'url(../../../assets/images/image-8.jpg',
        video: 'https://www.youtube.com/embed/G-rzE-9zHj8'
      },
      {
        id: 16,
        title: 'Video 16',
        category: 'Category 16',
        label: 'url(../../../assets/images/image-8.jpg',
        video: 'https://www.youtube.com/embed/G-rzE-9zHj8'
      },
      {
        id: 17,
        title: 'Video 17',
        category: 'Category 17',
        label: 'url(../../../assets/images/image-8.jpg',
        video: 'https://www.youtube.com/embed/G-rzE-9zHj8'
      },
      {
        id: 18,
        title: 'Video 18',
        category: 'Category 18',
        label: 'url(../../../assets/images/image-8.jpg',
        video: 'https://www.youtube.com/embed/G-rzE-9zHj8'
      }
    ];

    if (this.activatedRouter.snapshot.fragment) {
      this.goTo(this.activatedRouter.snapshot.fragment);
    }

    this.portfolioComplete = [...this.portfolio1, ...this.portfolio2, ...this.portfolio3];
    this.scrollFunction();
  }

  ngOnChanges() {
    if (this.showModal || this.showModalForms) {
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
  
  openModalForms() {
    this.showModal = true;
    this.showModalForms = true;
  }
  openModalCalendly() {
    this.showModal = true;
    this.showModalCalendly = true;
  }

  closeModal() {
    this.showModal = false;
    this.showModalForms = false;
    this.showModalCalendly = false;
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
    this.video = this.portfolioComplete.find(p => p.id === id);
    this.removePageScroll();
  }

  closeModalPortfolio() {
    this.showModalPortfolio = false;
    this.restorePageScroll();
  }

  showMorePortfolio() {
    if (!this.showPortfolio2) {
      this.showPortfolio2 = true;
    } else {
      this.showPortfolio3 = true;
    }
  }
}
