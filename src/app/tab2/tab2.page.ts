import { Component } from '@angular/core';
import { PhotoService, UserPhoto  } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page {

  constructor(public photoService: PhotoService) {}
  addPhotoToGalery(){
    this.photoService.addNewToGallery();
  }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  deletePhoto(photo: UserPhoto) {
    this.photoService.deletePhoto(photo);
  }

  toggleSelection(photo: UserPhoto) {
    photo.selected = !photo.selected;
  }

}
