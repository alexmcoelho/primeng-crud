import { Component, OnInit } from '@angular/core';
import { CandidateInfoService } from '../../services/candidate-info.service';
import { Candidate } from '../../models/candidate';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {

  candidates: Candidate[]
  candidate: Candidate

  constructor(private candidateService: CandidateInfoService) { }

  ngOnInit() {
    this.getAllCandidates()
  }

  getAllCandidates(){
    this.candidateService.getAllCandidato().subscribe(
      data => {
        this.candidates = data
      }
    )
  }

  selectedCandidate(candidate: Candidate){
    this.candidate = candidate
  }

  addNewCandidate(){
    this.candidate = new Candidate()
    this.candidate.favouriteCollection = []
  }

  saveCandidate(candidate: Candidate){
    const _candidate = this.candidates.find(x => x.id === this.candidate.id)
    if(_candidate == null){
      this.candidates.push(candidate)
    }
    this.candidate = null
  }

}
