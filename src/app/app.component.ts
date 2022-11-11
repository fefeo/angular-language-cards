import { Component } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {LoginComponent} from "./login-component/login-component.component";
import {HeroService} from "./hero.service";
import {AuthService} from "./services/auth.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WordsApp';
  constructor(public afAuth: AngularFireAuth) { }
}
