import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { ReactiveVar } from 'meteor/reactive-var';
import { Items } from '../shared/items.js';

import "./item.html";
import "./item.css";

Template.itemCard.onCreated(function itemCardOnCreated() {
	//console.log(this);
	console.log(Session.get("showHideBOTChat"));
	console.log(Session.get("showHideHumanChat"));
	console.log(Session.get("showHideResponse"));
});


Template.itemCard.helpers({
	'title': function () {
		return this.title;
	},
	'price': function () {
		return this.price;
	},
	'merchant': function () {
		return this.merchant;
	},
	'lng': function () {
		return this.lng;
	},
	'lat': function () {
		return this.lat;	
	},
	'image': function () {
		return this.image;
	}
});

Template.itemCard.events({
	'click .send-sms': function () {
		console.log('SMS...');
		Meteor.call('postSMSToTadHackAPI',function (err, res){
			if (err) {
				alert(err);
			} else {
				console.log(res);
				alert(res.content);
				Session.set("lastResponseMessage", res.content);
				Session.set("showHideResponse",true);
				Session.set("showHideBOTChat",false);
				Session.set("showHideHumanChat",false);
				// success!
			}
		});
	},
	'click .send-payment': function () {
		console.log('Payment...');
		Meteor.call('postPaymentToTadHackAPI',function (err, res){
			if (err) {
				alert(err);
			} else {
				console.log(res);
				alert(res.content);
				Session.set("lastResponseMessage", res.content);
				Session.set("showHideResponse",true);
				Session.set("showHideBOTChat",false);
				Session.set("showHideHumanChat",false);
				// success!
			}
		});
	},
	'click .chat-with-bot': function () {
		Session.set("showHideBOTChat",true);
		Session.set("showHideHumanChat",false);
		Session.set("showHideResponse",false);
	},
	'click .chat-now': function () {
		Session.set("showHideBOTChat",false);
		Session.set("showHideHumanChat",true);
		Session.set("showHideResponse",false);
	}
});
