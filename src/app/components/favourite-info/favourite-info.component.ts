import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Favourite } from '../../models/favourite';

@Component({
  selector: 'app-favourite-info',
  templateUrl: './favourite-info.component.html',
  styleUrls: ['./favourite-info.component.css']
})
export class FavouriteInfoComponent implements OnInit {

  @Input() favourite: Favourite
  @Output() deleteFavourityNotify: EventEmitter<Favourite> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  deletFavourite(favourite: Favourite){
    this.deleteFavourityNotify.emit(favourite)
  }

}
