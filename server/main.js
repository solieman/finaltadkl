import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Items } from '/imports/shared/items.js';

import '/imports/server/methods.js';
import '/imports/shared/items.js';


Meteor.startup(function() {
	Items.remove({});
	const itemsListData = [{
		"title": "NEW Lannikaa Acoustic Guitar 40 with pickup SET B", 
		"merchant": "Solieman", 
		"price": "29900", 
		"lat": "3.162792", 
		"lng": "101.704088", 
		"image": "http://img.rnudah.com/images/21/215608086878254.jpg",
		"status": true
	},
	{
		"title": "NEW Mentreel Acoustic Guitar 41 Mahogany (SET A)", 
		"merchant": "KB", 
		"price": "29500", 
		"lat": "3.155191", 
		"lng": "101.698868", 
		"image": "http://img.rnudah.com/images/95/958613077459434.jpg",
		"status": false
	},
	{
		"title": "Martin DCPA5K Acoustic Guitar with Gator Foam Case", 
		"merchant": "Solieman", 
		"price": "270000", 
		"lat": "3.150929", 
		"lng": "101.695807", 
		"image": "http://img.rnudah.com/images/79/790605103914953.jpg",
		"status": true
	},
	{
		"title": "Cort Bass guitar 4 strings", 
		"merchant": "Solieman", 
		"price": "60000", 
		"lat": "3.157729", 
		"lng": "101.694966", 
		"image": "http://img.rnudah.com/images/88/883614105430684.jpg",
		"status": true
	},
	{
		"title": "Drum Sets MES", 
		"merchant": "Solieman", 
		"price": "150000", 
		"lat": "3.158083", 
		"lng": "101.691189", 
		"image": "http://img.rnudah.com/images/88/883614105430684.jpg",
		"status": true
	},
	{
		"title": "Yamaha digital drum set model Dtx 450k", 
		"merchant": "KB", 
		"price": "320000", 
		"lat": "3.160504", 
		"lng": "101.702626", 
		"image": "http://img.rnudah.com/images/87/874613104096335.jpg",
		"status": false
	}];

  _.each(itemsListData, function(item) {
    console.log('loaded');
    Items.insert(item);
  });
});