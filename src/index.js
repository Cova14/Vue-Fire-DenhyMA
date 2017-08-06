import Vue from 'vue';
import VueFire from 'vuefire';
import firebase from 'firebase';
import $ from 'jquery';
import toastr from 'toastr';
import Masonry from 'masonry-layout'
import VueMasonryPlugin from '../vue-masonry';
//import './index.css';

Vue.use(VueFire);
Vue.use(VueMasonryPlugin);

// TODO: Replace with your Firebase Credentials

var config = {
	apiKey: "AIzaSyDnrlHBHjhyNXm-wXgq9Lsii2XZooc8fRc",
    authDomain: "denhyma.firebaseapp.com",
    databaseURL: "https://denhyma.firebaseio.com",
    projectId: "denhyma",
    storageBucket: "denhyma.appspot.com",
    messagingSenderId: "194171672244"
};

var firebaseApp = firebase.initializeApp(config);
var db = firebaseApp.database();
var storageRef = firebaseApp.storage().ref();

var vm = new Vue({
	el: '#prin',
	data: {
		image: '',
	},
	firebase: {
		photos: db.ref('photos'),
	},
});