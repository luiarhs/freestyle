import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RoundService } from '../../services/round.service';
import { Round } from '../../models/Round';

@Component({
  selector: 'app-add-round',
  templateUrl: './add-round.component.html',
  styleUrls: ['./add-round.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddRoundComponent implements OnInit {
  round: Round = {
    title: '',
    description: ''
  };

  constructor(private roundService: RoundService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.round.title !== '' && this.round.description !== '') {
      this.roundService.addRound(this.round);
      this.round.title = '';
      this.round.description = '';
    }
  }

}
