import { Injectable } from '@angular/core';

import {Image} from '../models/image';
@Injectable()
export class ImageService {
    images : Image[] = [
    new Image ('1','1','descripcion','https://www.walldevil.com/wallpapers/a21/thumb/computer-hacking-wallpapers-hackaday-change.jpg','https://www.walldevil.com/wallpapers/a21/thumb/computer-hacking-wallpapers-hackaday-change.jpg'),
    new Image ('2','2','descripcion','https://www.walldevil.com/wallpapers/a21/thumb/computer-hacking-wallpapers-hackaday-change.jpg','https://www.walldevil.com/wallpapers/a21/thumb/computer-hacking-wallpapers-hackaday-change.jpg'),
    new Image ('3','3','descripcion','https://www.walldevil.com/wallpapers/a21/thumb/computer-hacking-wallpapers-hackaday-change.jpg','https://www.walldevil.com/wallpapers/a21/thumb/computer-hacking-wallpapers-hackaday-change.jpg'),
    new Image ('4','4','descripcion','https://www.walldevil.com/wallpapers/a21/thumb/computer-hacking-wallpapers-hackaday-change.jpg','https://www.walldevil.com/wallpapers/a21/thumb/computer-hacking-wallpapers-hackaday-change.jpg'),
    new Image ('5','5','descripcion','https://www.walldevil.com/wallpapers/a21/thumb/computer-hacking-wallpapers-hackaday-change.jpg','https://www.walldevil.com/wallpapers/a21/thumb/computer-hacking-wallpapers-hackaday-change.jpg'),
    new Image ('6','6','descripcion','https://www.walldevil.com/wallpapers/a21/thumb/computer-hacking-wallpapers-hackaday-change.jpg','https://www.walldevil.com/wallpapers/a21/thumb/computer-hacking-wallpapers-hackaday-change.jpg'),
    new Image ('7','7','descripcion','https://www.walldevil.com/wallpapers/a21/thumb/computer-hacking-wallpapers-hackaday-change.jpg','https://www.walldevil.com/wallpapers/a21/thumb/computer-hacking-wallpapers-hackaday-change.jpg')
    ];
  constructor() { }
  getImages(){
    return this.images;
  }
}
