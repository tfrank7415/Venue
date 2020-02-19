import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userCredentialTemp: any;
  user: Observable<firebase.User>;

  constructor(
    private db: AngularFireDatabase,
    private firebaseAuth: AngularFireAuth
    ) {
    this.user = firebaseAuth.authState;
   }

  loginUser(email: string, password: string): Promise<any> {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
    // firebase.auth().signInWithEmailAndPassword(email, password)
    .then((response) => {
      console.log(response);
      console.log(response.user);
    })
    .catch((error) => {
      // TODO: Error handling for loggin in
      console.log(error.code);
      console.log(error.message);
    });
  }

  logout() {
    this.firebaseAuth.auth.signOut();
  }

  // firebase.auth().onAuthStateChanged(function(user) {
  //   if (user) {
  //     User is signed in.
  //     var displayName = user.displayName;
  //     var email = user.email;
  //     var emailVerified = user.emailVerified;
  //     var photoURL = user.photoURL;
  //     var isAnonymous = user.isAnonymous;
  //     var uid = user.uid;
  //     var providerData = user.providerData;
  //     ...
  //   } else {
  //     User is signed out.
  //     ...
  //   }
  // });
  // If you need to see how to use store user data in database go to the below link:
  // https://www.youtube.com/watch?v=mArXOf0daQ4 Go to 19:47.
}
