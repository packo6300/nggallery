import { Component, OnInit,Input } from '@angular/core';
import {Image} from '../../models/image';
@Component({
  selector: 'ng-image',
  templateUrl: './image.component.html',
  styles: [`img{margin-bottom: 20px;}
img:hover{
    filter:gray;
}`]
})
export class ImageComponent implements OnInit {
@Input() image:Image;
  constructor() { }

  ngOnInit() {
  }

}
