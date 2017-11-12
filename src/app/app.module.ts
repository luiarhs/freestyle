import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { RoundsComponent } from './components/rounds/rounds.component';
import { RoundService } from './services/round.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddRoundComponent } from './components/add-round/add-round.component';


@NgModule({
  declarations: [
    AppComponent,
    RoundsComponent,
    NavbarComponent,
    AddRoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'freestyle'),
    AngularFirestoreModule
  ],
  providers: [RoundService],
  bootstrap: [AppComponent]
})
export class AppModule { }
