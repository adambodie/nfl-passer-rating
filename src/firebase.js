import firebase from 'firebase'

const config = {
	apiKey: "AIzaSyBBbiPGGG6cijISRf61DBXVcPpGLIpJSrY",
	authDomain: "nfl-passer-rating.firebaseapp.com",
	databaseURL: "https://nfl-passer-rating.firebaseio.com",
	projectId: "nfl-passer-rating",
	storageBucket: "",
	messagingSenderId: "157737411113",
	appId: "1:157737411113:web:9a778766695931cd"
};

firebase.initializeApp(config);

export default firebase;
