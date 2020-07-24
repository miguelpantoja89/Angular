import { Injectable, NgZone } from '@angular/core';
import * as _ from "lodash";
import { GoogleAuthService } from "ng-gapi";
import GoogleUser = gapi.auth2.GoogleUser;

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public static SESSION_STORAGE_KEY: string = 'accessToken';
  private user: GoogleUser;
  userName: string;

  constructor(private googleAuth: GoogleAuthService, private ngZone: NgZone) { 
    
    
  }
  public getToken(): string {
    let token: string = sessionStorage.getItem(LoginService.SESSION_STORAGE_KEY);
    if (!token) {
        throw new Error("no token set , authentication required");
    }
    return sessionStorage.getItem(LoginService.SESSION_STORAGE_KEY);
}

public signIn(): void {
    this.googleAuth.getAuth()
        .subscribe((auth) => {
            auth.signIn().then((res: GoogleUser) => this.signInSuccessHandler(res));
        });
}

private signInSuccessHandler(res: GoogleUser) {
        this.user = res;
        this.userName = this.user.getBasicProfile().getEmail();
        sessionStorage.setItem(
          LoginService.SESSION_STORAGE_KEY, res.getAuthResponse().access_token
        );
    }



  public signOut(): void {
    this.googleAuth.getAuth().subscribe((auth) => {
      try {
        auth.signOut();
      } catch (e) {
        console.error(e);
      }
      sessionStorage.removeItem(LoginService.SESSION_STORAGE_KEY);
    });
  }

  public isUserSignedIn(): boolean {
    return !_.isEmpty(sessionStorage.getItem(LoginService.SESSION_STORAGE_KEY));
  }

  public onSignIn(aux: GoogleUser) {
    var profile = aux.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }


}
