import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular-progress',
  templateUrl: './circular-progress.component.html',
  styleUrls: ['./circular-progress.component.scss']
})
export class CircularProgressComponent implements OnInit {

  progressPercent: number = 10

  calculatedProgressPercent: number = this.progressPercent * 65 / 100

  constructor() { }

  ngOnInit(): void {
  }

}
