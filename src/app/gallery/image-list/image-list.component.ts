import { Component, OnInit,Input } from '@angular/core';
import {Image} from '../../models/image';
@Component({
  selector: 'ng-image-list',
  templateUrl: './image-list.component.html',
  styles: []
})
export class ImageListComponent implements OnInit {
 image = new Image('1','1','descripcion','https://www.walldevil.com/wallpapers/a21/thumb/computer-hacking-wallpapers-hackaday-change.jpg','https://www.walldevil.com/wallpapers/a21/thumb/computer-hacking-wallpapers-hackaday-change.jpg');
  constructor() { }

  ngOnInit() {
  }

}
