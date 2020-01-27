import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Media } from '../model/media.model';
@Component({
  selector: 'app-media-base',
  templateUrl: './media-base.component.html',
  styleUrls: ['./media-base.component.css']
})
export class MediaBaseComponent implements OnInit {

  media:Array<Media>;

  constructor() {
    this.media = [
        new Media("first post","hello","fun","first file"),
        new Media("second post","hai","frustate","second file"),
    ];
   }
   
   saveMedia(txtTitle:HTMLInputElement, txtDescription:HTMLInputElement, txtTag:HTMLInputElement, txtFileName:HTMLInputElement ):void{
    // create a new Product Object from coming values 
    let media = new Media(txtTitle.value, txtDescription.value, txtTag.value, txtFileName.value );
    // add that object to array
    this.media.push(media);

    // reset the form
    txtTitle.value="";
    txtDescription.value="";
     txtTag.value="";
      txtFileName.value="";
}

  ngOnInit() {
  }

}
