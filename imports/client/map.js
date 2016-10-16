import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { ReactiveVar } from 'meteor/reactive-var';
import { Items } from '../shared/items.js';

import "./map.html";
import "./map.css";


Template.mapPostsList.onCreated(function mapPostsListOnCreated() {
  const itemsArray = Items.find({}).fetch();

  _.each(itemsArray,function (selectedItem) { 
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(selectedItem.lat,selectedItem.lng),
        title:'Meine Position',
        icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
      });
      marker.setMap(map);
    });
  
});

Template.mapPostsList.rendered = function() {
  var mapOptions = {
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions); 
  map.setCenter(new google.maps.LatLng("3.1469947","101.714567"));
};

Template.mapPostsList.helpers({
  items() {
    const itemsArray = Items.find({}).fetch();
    return itemsArray;
  },

  
});

Template.mapPostsList.events({
  '.sidebar-toggle': function () {
    console.log('-----');
    var toggle_el = $(this).data("toggle");
    $(toggle_el).toggleClass("open-sidebar");
  },


  'click .add-marker': function() {
    const itemsArray = Items.find({}).fetch();
     _.each(itemsArray,function (currentItem) {
      console.log(currentItem);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(currentItem.lat,currentItem.lng),
            title:'Meine Position',
            icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
          });
          marker.setMap(map);
        });
   }
});
