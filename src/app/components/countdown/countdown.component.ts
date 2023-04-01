import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Observable, Subject, timer } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
})
export class CountDownComponent {

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
        const countdownSeconds = 600;
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

}
