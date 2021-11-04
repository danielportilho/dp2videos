import { Component, EventEmitter, HostListener, OnChanges, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Video } from './../../models/video.model';

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
    this.bgVideo1 = sanitizer.bypassSecurityTrustHtml(`<video style="min-width:100%;min-height:100%" src="../../../assets/videos/intro.mp4" autoplay muted loop playsInline><source src="../../../assets/videos/intro-web.mp4" type="video/mp4"><source src="../../../assets/videos/intro-web.webm" type="video/webm"></video>`);
    this.bgVideo2 = sanitizer.bypassSecurityTrustHtml(`<video style="min-width:100%;min-height:100%" src="../../../assets/videos/intro-3.mp4" autoplay muted loop playsInline><source src="../../../assets/videos/intro-3.mp4" type="video/mp4"><source src="../../../assets/videos/intro-web-3.webm" type="video/webm"></video>`);
  }

  ngOnInit(): void {

    this.portfolio1 = [
      {
        id: 1,
        title: 'PondLeap',
        category: 'Corporate Video',
        label: 'url(../../../assets/images/pondleap.jpg',
        video: 'https://player.vimeo.com/video/630268012?h=e398909dd1'
      },
      {
        id: 2,
        title: 'Pringles',
        category: 'Corporate Communication',
        label: 'url(../../../assets/images/pringles.jpg',
        video: 'https://player.vimeo.com/video/630265407?h=c295d118f4'
      },
      {
        id: 3,
        title: 'PepsiCo',
        category: '2D Animation',
        label: 'url(../../../assets/images/pepsico.jpg',
        video: 'https://player.vimeo.com/video/630264621?h=2183ec4828'
      },
      {
        id: 4,
        title: 'Nivea',
        category: 'Product Introduction',
        label: 'url(../../../assets/images/nivea.jpg',
        video: 'https://player.vimeo.com/video/630263280?h=55289085ae'
      },
      {
        id: 5,
        title: 'Nestlé',
        category: 'Product Launch',
        label: 'url(../../../assets/images/nestle.jpg',
        video: 'https://player.vimeo.com/video/630262193?h=f7b476d449'
      },
      {
        id: 6,
        title: 'KPMG',
        category: 'Safety Procedures',
        label: 'url(../../../assets/images/kpmg.jpg',
        video: 'https://player.vimeo.com/video/630261477?h=c4dab2ed0c'
      },
      {
        id: 7,
        title: 'C8',
        category: 'Product Commercial',
        label: 'url(../../../assets/images/c8.jpg',
        video: 'https://player.vimeo.com/video/630258399?h=bdac403a8f'
      },
      {
        id: 8,
        title: 'Sew EuroDrive',
        category: 'Corporate Video',
        label: 'url(../../../assets/images/sew-eurodrive.jpg',
        video: 'https://player.vimeo.com/video/630255438?h=b2bc85c72b'
      },
      {
        id: 9,
        title: 'Almond',
        category: 'Product Launch',
        label: 'url(../../../assets/images/almond.jpg',
        video: 'https://player.vimeo.com/video/631169480?h=832265bc47'
      }
    ];
    this.portfolio2 = [
      {
        id: 10,
        title: 'Mills',
        category: 'Services Video',
        label: 'url(../../../assets/images/mills.jpg',
        video: 'https://player.vimeo.com/video/631197771?h=b9210fe5c9'
      },
      {
        id: 11,
        title: 'Cargill',
        category: 'Product Video',
        label: 'url(../../../assets/images/cargill.jpg',
        video: 'https://player.vimeo.com/video/630260756?h=bccb61c262'
      },
      {
        id: 12,
        title: 'Hardox',
        category: '3D Animation',
        label: 'url(../../../assets/images/hardox.jpg',
        video: 'https://player.vimeo.com/video/586324469?h=a2d614e66e'
      },
      {
        id: 13,
        title: 'Mars',
        category: 'Business Case',
        label: 'url(../../../assets/images/mars.jpg',
        video: 'https://player.vimeo.com/video/313148085?h=81efe30c38'
      },
      {
        id: 14,
        title: 'Level Up',
        category: 'Event Coverage',
        label: 'url(../../../assets/images/level-up.jpg',
        video: 'https://player.vimeo.com/video/631205408?h=0a8ad85be0'
      },
      {
        id: 15,
        title: 'Positivo',
        category: '3D Animation',
        label: 'url(../../../assets/images/positivo.jpg',
        video: 'https://player.vimeo.com/video/585104074?h=dbdd845edd'
      },

      // + 4 videos
    ];

    if (this.activatedRouter.snapshot.fragment) {
      setTimeout( () => {
        this.goTo(this.activatedRouter.snapshot.fragment);
      }, 500);
    }

    this.portfolioComplete = [...this.portfolio1, ...this.portfolio2];
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
    if (section !== '') {
      document.getElementById(section).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
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
    }
  }
}
