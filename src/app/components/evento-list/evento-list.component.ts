import { Component, OnInit } from '@angular/core';
import { EventoInfoService } from '../../services/evento-info.service';
import { Evento } from '../../models/evento';

@Component({
  selector: 'app-evento-list',
  templateUrl: './evento-list.component.html',
  styleUrls: ['./evento-list.component.css']
})
export class EventoListComponent implements OnInit {

  eventoList: Evento[]

  constructor(private eventoService: EventoInfoService) { }

  ngOnInit() {
    this.getAllEventos()
  }

  getAllEventos(){
    this.eventoService.getAllEvento().subscribe(
      data => {
        this.eventoList = data
      }
    )
  }

}
