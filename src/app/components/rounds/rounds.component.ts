import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RoundService } from '../../services/round.service';
import { Round } from '../../models/Round';

@Component({
  selector: 'app-rounds',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RoundsComponent implements OnInit {
  rounds: Round[];
  editState: boolean = false;
  roundToEdit: Round;

  constructor(private roundService: RoundService) { }

  ngOnInit() {
    this.roundService.getRounds().subscribe(rounds => {
      // console.log(rounds);
      this.rounds = rounds;
    });
  }

  deleteRound(event, round) {
    this.clearState();
    this.roundService.deleteRound(round);
  }

  editRound(event, round) {
    this.editState = true;
    this.roundToEdit = round;
  }

  updateRound(round) {
    this.roundService.updateRound(round);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.roundToEdit = null;
  }

}
