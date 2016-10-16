import { Session } from 'meteor/session';

import './main.html';
import './main.css';

import '/imports/client/map.js';
import '/imports/client/item.js';
import '/imports/client/chat.js';

Session.set("showHideBOTChat", false);
Session.set("showHideHumanChat", false);
Session.set("showHideResponse", false);
