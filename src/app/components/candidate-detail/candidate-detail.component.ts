import { Component, OnInit, Input } from '@angular/core';
import { Candidate } from '../../models/candidate';
import { Favourite } from '../../models/favourite';
import { CandidateInfoService } from '../../services/candidate-info.service';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css']
})
export class CandidateDetailComponent implements OnInit {

  @Input() candidate: Candidate
  display: boolean

  constructor(private candidateService: CandidateInfoService) { }

  ngOnInit() {
    this.display=true
  }

  addFavourite(){
    this.candidate.favouriteCollection.push({favkey: '', favValue: ''})
  }

  deleteFavourite(favourite: Favourite){
    const favIndex = this.candidate.favouriteCollection.indexOf(favourite)
    if(favIndex >= 0){
      this.candidate.favouriteCollection.splice(favIndex, 1)
    }
  }

  /*saveCandidatoInfo(){
    this.candidateService.saveCandidato(this.candidate).subscribe(
      data => {
        console.log(data)
        if(data){
          this.display = false
        }
      }
    )
  }*/
  saveCandidatoInfo(){
    this.candidateService.saveCandidato2(this.candidate).subscribe(
      data => {
        console.log(data)
        if(data){
          alert("Salvo com sucesso")
          this.display = false
        }
      },
      error => {

      }
    )
  }

}