import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';


import './chat.html';
import './chat.css';


Template.chat.helpers({
	'showHideBot': function () {
		return Session.get("showHideBOTChat");
	},
	'showHideConv': function () {
		return Session.get("showHideHumanChat");
	},
	'showHideResults': function () {
		return Session.get("showHideResponse");
	},
	'theLastResponse': function () {
		return Session.get("lastResponseMessage");	
	}
});

Template.chat.events({
	'click .make-order-from-bot': function() {
		console.log('BOT orders...');
		Meteor.call('getMyOrder',function (err, res){
			if (err) {
				alert(err);
			} else {
				console.log(res);
				alert(res.content);
				// success!
			}
		});

	},
});