import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCUZnYl-joasdB76JlS880mkQVDW615sis",
    authDomain: "todo-react-redux-183a6.firebaseapp.com",
    databaseURL: "https://todo-react-redux-183a6.firebaseio.com"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
