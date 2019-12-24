import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {

  constructor() { }
  @Input() mediaItem;
  @Output() delete = new EventEmitter();

  onDelete()
  {
    console.log("Delete item");
    this.delete.emit(this.mediaItem);
  }

  ngOnInit() {
  }

}
