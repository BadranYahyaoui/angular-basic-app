import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'badran-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements  OnChanges{


  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked : EventEmitter<string>=new EventEmitter<string>();




  ngOnChanges(): void {
  this.starWidth = this.rating * 86/5 ;
  }



  OnClick():void{
    this.ratingClicked.emit('the Rating '+this.rating)
  }


}
