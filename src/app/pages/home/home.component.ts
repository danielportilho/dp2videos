import { Video } from './../../models/video.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, EventEmitter, HostListener, OnChanges, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

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
    this.bgVideo1 = sanitizer.bypassSecurityTrustHtml(`<video style="min-width:100%;min-height:100%" src="../../../assets/videos/intro.mp4" autoplay muted loop playsInline><source src="../../../assets/videos/intro-web.mp4" type="video/mp4"><source src="../../../assets/videos/intro-web.webm" type="video/webm"></video>`);
    this.bgVideo2 = sanitizer.bypassSecurityTrustHtml(`<video style="min-width:100%;min-height:100%" src="../../../assets/videos/intro-3.mp4" autoplay muted loop playsInline><source src="../../../assets/videos/intro-3.mp4" type="video/mp4"><source src="../../../assets/videos/intro-web-3.webm" type="video/webm"></video>`);
  }
  
  ngOnInit(): void {
    
    this.portfolio1 = [
      {
        id: 1,
        title: 'PondLeap',
        category: 'Take the Leap',
        label: 'url(../../../assets/images/pondleap.jpg',
        video: 'https://player.vimeo.com/video/630268012?h=e398909dd1'
      },
      {
        id: 2,
        title: 'Pringles',
        category: 'Strategy',
        label: 'url(../../../assets/images/pringles.jpg',
        video: 'https://player.vimeo.com/video/630265407?h=c295d118f4'
      },
      {
        id: 3,
        title: 'PepsiCo',
        category: 'Event',
        label: 'url(../../../assets/images/pepsico.jpg',
        video: 'https://player.vimeo.com/video/630264621?h=2183ec4828'
      },
      {
        id: 4,
        title: 'Nivea',
        category: '',
        label: 'url(../../../assets/images/nivea.jpg',
        video: 'https://player.vimeo.com/video/630263280?h=55289085ae'
      },{
        id: 5,
        title: 'Nestlé',
        category: 'CHEF',
        label: 'url(../../../assets/images/nestle.jpg',
        video: 'https://player.vimeo.com/video/630262193?h=f7b476d449'
      },
      {
        id: 6,
        title: 'KPMG',
        category: 'Safety',
        label: 'url(../../../assets/images/kpmg.jpg',
        video: 'https://player.vimeo.com/video/630261477?h=c4dab2ed0c'
      },
      {
        id: 7,
        title: 'C8',
        category: '',
        label: 'url(../../../assets/images/c8.jpg',
        video: 'https://player.vimeo.com/video/630258399?h=bdac403a8f'
      },
      {
        id: 8,
        title: 'Sew EuroDrive',
        category: '',
        label: 'url(../../../assets/images/sew-eurodrive.jpg',
        video: 'https://player.vimeo.com/video/630255438?h=b2bc85c72b'
      },
      {
        id: 9,
        title: 'Video 9',
        category: 'Product Video',
        label: 'url(../../../assets/images/image-8.jpg',
        video: 'https://www.youtube.com/embed/G-rzE-9zHj8'
      }
    ];
    this.portfolio2 = [
      {
        id: 10,
        title: 'Video 10',
        category: 'Product Video',
        label: 'url(../../../assets/images/image-8.jpg',
        video: 'https://www.youtube.com/embed/G-rzE-9zHj8'
      },
      {
        id: 11,
        title: 'Video 11',
        category: 'Explainer Video',
        label: 'url(../../../assets/images/image-8.jpg',
        video: 'https://www.youtube.com/embed/G-rzE-9zHj8'
      },
      {
        id: 12,
        title: 'Video 12',
        category: 'Startup Intro',
        label: 'url(../../../assets/images/image-8.jpg',
        video: 'https://www.youtube.com/embed/G-rzE-9zHj8'
      },
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
        category: 'Startup Intro',
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
      },
    ];
    this.portfolio3 = [
      {
        id: 19,
        title: 'Video 19',
        category: 'Category 19',
        label: 'url(../../../assets/images/image-8.jpg',
        video: 'https://www.youtube.com/embed/G-rzE-9zHj8'
      },
      {
        id: 20,
        title: 'Video 20',
        category: 'Category 20',
        label: 'url(../../../assets/images/image-8.jpg',
        video: 'https://www.youtube.com/embed/G-rzE-9zHj8'
      },
      {
        id: 21,
        title: 'Video 21',
        category: 'Category 21',
        label: 'url(../../../assets/images/image-8.jpg',
        video: 'https://www.youtube.com/embed/G-rzE-9zHj8'
      },
      {
        id: 22,
        title: 'Video 22',
        category: 'Startup Intro',
        label: 'url(../../../assets/images/image-8.jpg',
        video: 'https://www.youtube.com/embed/G-rzE-9zHj8'
      },
      {
        id: 23,
        title: 'Video 23',
        category: 'Startup Intro',
        label: 'url(../../../assets/images/image-8.jpg',
        video: 'https://www.youtube.com/embed/G-rzE-9zHj8'
      },
      {
        id: 24,
        title: 'Video 24',
        category: 'Startup Intro',
        label: 'url(../../../assets/images/image-8.jpg',
        video: 'https://www.youtube.com/embed/G-rzE-9zHj8'
      },
      {
        id: 25,
        title: 'Video 25',
        category: 'Startup Intro',
        label: 'url(../../../assets/images/image-8.jpg',
        video: 'https://www.youtube.com/embed/G-rzE-9zHj8'
      },
      {
        id: 26,
        title: 'Video 26',
        category: 'Startup Intro',
        label: 'url(../../../assets/images/image-8.jpg',
        video: 'https://www.youtube.com/embed/G-rzE-9zHj8'
      },
      {
        id: 27,
        title: 'Video 27',
        category: 'Startup Intro',
        label: 'url(../../../assets/images/image-8.jpg',
        video: 'https://www.youtube.com/embed/G-rzE-9zHj8'
      },
    ];

    if (this.activatedRouter.snapshot.fragment) {
      setTimeout( () => {
        this.goTo(this.activatedRouter.snapshot.fragment);
      }, 500);
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
    } else {
      this.showPortfolio3 = true;
    }
  }
}
