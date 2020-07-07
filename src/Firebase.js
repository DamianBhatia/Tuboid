import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// setup firebase
var config = {
    apiKey: "AIzaSyCJ4SoW0rBQ16LuNP4FkAVY3YgRPQo4Gio",
    authDomain: "tuboid.firebaseapp.com",
    databaseURL: "https://tuboid.firebaseio.com",
    projectId: "tuboid",
    storageBucket: "tuboid.appspot.com",
    messagingSenderId: "775715817405",
    appId: "1:775715817405:web:8474f8e8aef059d0c874d4"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore();
    }
}

export default Firebase; 