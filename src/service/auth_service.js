import firebase from "firebase/compat/app";
import {
  getAuth,
  signInWithPopup,
  googleAuthProvider,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

class AuthService {
  constructor() {
    this.firebaseAuth = getAuth();
    this.googleAuthProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }

  logG(providerName) {
    const authProvider = this.googleAuthProvider(providerName);
    return signInWithPopup(this.firebaseAuth, authProvider);
  }

  logoutG() {
    this.firebaseAuth.signOut();
  }

  onAuthChange(onUserChanged) {
    this.firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
  getProvider(providerName) {
    switch (providerName) {
      case "google":
        return this.googleAuthProvider;
      case "github":
        return this.githubProvider;
      default:
        throw new Error("Unknown provider:${providerName}");
    }
  }
}

export default AuthService;
