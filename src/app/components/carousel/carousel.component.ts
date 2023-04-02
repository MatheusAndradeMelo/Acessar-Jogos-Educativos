import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [Swiper],
})
export class CarouselComponent implements OnInit {

  constructor(private swiper: Swiper) { }

  ngOnInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }

  nextSlide() {
    this.swiper.slideNext();
  }

  previousSlide() {
    this.swiper.slidePrev();
  }

}
