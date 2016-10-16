import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

var Future = Npm.require( 'fibers/future' ); 


Meteor.methods({
  getIt: function () {
    // .. do stuff ..
    var future = new Future();

    HTTP.call( 'GET', 'http://jsonplaceholder.typicode.com/posts', {}, function( error, response ) {
	  if ( error ) {
	    future.return( error );
	  } else {
	    future.return( response );
	    /*
	     This will return the HTTP response object that looks something like this:
	     {
	       content: "String of content...",
	       data: Array[100], <-- Our actual data lives here. 
	       headers: {  Object containing HTTP response headers }
	       statusCode: 200
	     }
	    */
	  }
	});
	return future.wait();
  },
  postIt: function () {
    // .. do other stuff ..
    var future = new Future();

    HTTP.call( 'POST', 'http://jsonplaceholder.typicode.com/posts', {
    	data: {
		    "title": "Title of our new post",
		    "body": "Body of our new post",
		    "userId": 1337
		  }
		}, function( error, response ) {
		  if ( error ) {
		    future.return( error );
		  } else {
		    future.return( response );
		    /*
		     This will return the HTTP response object that looks something like this:
		     {
		       content: "String of content...",
		       data: {
		         "id": 101,
		         "title": "Title of our new post",
		         "body": "Body of our new post",
		         "userId": 1337
		       },
		       headers: {  Object containing HTTP response headers }
		       statusCode: 201
		     }
		    */
		  }
		});
	return future.wait();
  },
  postSMSToTadHackAPI: function () {
    var future = new Future();

    HTTP.call( 'POST', 'https://api.axiata.com/smsmessaging/v1/outbound/33221/requests', {
    	//auth: 'Bearer:a99c14f6f716eabea562bb4254618817',
    	headers: {
			Authorization: 'Bearer a99c14f6f716eabea562bb4254618817',
    		Accept: 'application/json',
		    'content-type': 'application/json'
		},
		data: {
	        "outboundSMSMessageRequest"    :    {
	                "senderAddress"    :    "tel:+33221",
	                "senderName"    :    "ACME    Inc.",
	                "clientCorrelator"    :    "20161012-1012-0001-2",
	                "outboundSMSTextMessage"    :    {
	                    "message"    :    "SMS from axiata by TADHack in KL"
	                },
	                "address"    :    ["tel:+60191122333"],
	                "receiptRequest"    :    {
	                        "notifyURL"    :    "http://application.example.com/notifications/DeliveryInfoNotification",
	                        "callbackData"    :    "some-data-useful-to-the-requester"
	                }
	        }
	    }
	}, function( error, response ) {

		if ( error ) {
			future.return( error );
		} else {
			future.return( response );
		}
	});
	return future.wait();
  },
  postPaymentToTadHackAPI: function () {
    var future = new Future();

    HTTP.call( 'POST', 'https://api.axiata.com/payment/v1/60191122333/transactions/amount', {
    	headers: {
			Authorization: 'Bearer a99c14f6f716eabea562bb4254618817',
    		Accept: 'application/json',
		    'content-type': 'application/json'
		},
		data: {
	        "amountTransaction":    {
                "clientCorrelator":    "20161012-0946-0001-1",
                "endUserId":    "tel:+60191122333",
                "paymentAmount":    {
                        "chargingInformation":    {
                                "amount":    "99",
                                "currency":    "USD",
                                "description":    "Hello world company"
                        },
                        "chargingMetaData"    :    {
                                "onBehalfOf"    :    "TADHack in KL",
                                "purchaseCategoryCode"    :    "Default",
                                "channel"    :    "WAP",
                                "taxAmount"    :    "0"
                        }
                },
                "referenceCode":    "REF-12345",
                "transactionOperationStatus":    "Charged"
	        }
	    }
	}, function( error, response ) {

		if ( error ) {
			future.return( error );
		} else {
			future.return( response );
		}
	});
	return future.wait();
  },
  getMyOrder: function () {
  	var future = new Future();

  	HTTP.call('GET', 'http://exactapac.cloudapp.net/SynergyHackathon/services/Exact.entity.REST.svc/HackOrderHead//'), {
  		headers:
  		{
		    Authorization: 'Basic bGVlazMwMzQ3OkFiY2QxMTY4JA==',
		    Accept: 'application/json'
		}
  	}, function ( error, response) {
  		if( error ) {
  			future.return( error );
  		} else {
  			future.return ( response );
  		}
  	}
  }
});
