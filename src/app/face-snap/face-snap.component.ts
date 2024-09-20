import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap
  
  snapped!: boolean;
  snappedTxt!: string;
  unSnappedTxt!: string;
  buttonText!: string;
  
  

  ngOnInit() {
    this.snapped = false
    this.snappedTxt = "Oh Snap!"
    this.unSnappedTxt = "Oops, un Snap!"
    this.buttonText = this.snappedTxt;
  }

  onSnap(): void {
    if (this.snapped === false) {
      this.snap();
    } else {
      this.unSnap();
    }
  }
  snap() {
    this.faceSnap.addSnap();
    this.snapped = true;
    this.buttonText = this.unSnappedTxt
  }
  unSnap() {
    this.faceSnap.removeSnap();
    this.snapped = false;
    this.buttonText = this.snappedTxt
  }
}
