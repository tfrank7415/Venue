import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private db: AngularFireDatabase) { }

  loginUser(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
      // TODO: Error handling for loggin in
      console.log(error.code);
      console.log(error.message);
    });
  }
}
