import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Candidate } from '../../models/candidate';
import { Favourite } from '../../models/favourite';
import { CandidateInfoService } from '../../services/candidate-info.service';
import { Gender } from 'src/app/models/gender';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css']
})
export class CandidateDetailComponent implements OnInit {

  @Input() 
  candidate: Candidate
  @Output()
  saveCandidateNotify = new EventEmitter<Candidate>()
  selectedGender: Gender
  genderList: Gender[]
  display: boolean

  constructor(private candidateService: CandidateInfoService) { }

  ngOnInit() {
    this.genderList = [
      {code: 'M', name: 'Masculino'},
      {code: 'F', name: 'Feminino'}
    ]
    if(this.candidate.id > 0 ){
      const item:Gender = this.genderList.find(f => f.code === this.candidate.gender)
      this.selectedGender = item
    } 
    else{
      this.selectedGender = this.genderList[0]
    }
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

  getDOB($event){
    this.candidate.dob = $event
  }

  saveCandidatoInfo(){
    this.candidateService.saveCandidato(this.candidate).subscribe(
      data => {
        console.log(data)
        if(data==null){
          this.display = false
          this.saveCandidateNotify.emit(this.candidate)
        }
      }
    )
  }
  /*saveCandidatoInfo(){
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
  }*/

}