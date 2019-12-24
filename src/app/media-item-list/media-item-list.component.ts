import { Component, OnInit } from '@angular/core';
import { MediaItemService } from '../media-item.service';
import { MediaItemInterface } from '../media-item-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {

  constructor(
    private mediaItemService: MediaItemService,
    private activatedRoute: ActivatedRoute) { }

  medium = [];
  hello= "sdsdd";
  mediaItems : MediaItemInterface[];

  ngOnInit() {
     this.mediaItemService.get()
    .subscribe(data => this.mediaItems = data)
    // this.getMediaItems(this.medium);
  }

  // onMediaItemDelete(mediaItem){
  //   this.mediaItemService.delete(mediaItem)
  //   .subscribe( ()=>{
  //     this.getMediaItems(this.medium)
  //   });
  // }

  // getMediaItems(medium: string) {
  //   this.medium = medium;
  //   this.mediaItemService.get(medium)
  //     .subscribe(mediaItems => {
  //       this.mediaItems = mediaItems;
  //     });
  // }

}
