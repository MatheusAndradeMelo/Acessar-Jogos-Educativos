import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, timer } from 'rxjs';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css'
  ]
})
export class DiscountComponent implements OnInit {

  timeLeft: number = 900; // 15 minutos em segundos
    interval: any;
  
    constructor(
        private router: Router,
    ) { }
  
    countdown!: Observable<any>;
    startTime!: number;

    durationInSeconds = 5;

  ngOnInit() {
    this.startTime = Date.now();
    const countdownSeconds = 599;
    this.countdown = timer(0, 1000).pipe(map(() => {
      const elapsedSeconds = Math.floor((Date.now() - this.startTime) / 1000);
      const remainingSeconds = countdownSeconds - elapsedSeconds;
      const minutes = Math.floor(remainingSeconds / 60);
      const seconds = remainingSeconds % 60;
      return `${minutes}m ${seconds}s`;
    }));
    this.countdown.subscribe(value => {
      if (value === '0m 0s') {
        this.onCountdownFinished();
      }
    });
  }

onCountdownFinished() {
  this.router.navigate(['/home']);
}

  scroll(id: string) {
    let el: any = document.getElementById(id);
    el.scrollIntoView({behavior: 'smooth'});
  }

}
