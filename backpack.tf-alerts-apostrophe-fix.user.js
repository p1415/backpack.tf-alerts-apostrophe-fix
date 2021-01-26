// ==UserScript==
// @name Backpack.tf Alerts fix for items names with apostrophe
// @match https://backpack.tf/stats/*
// @icon https://backpack.tf/favicon_440.ico
// @run-at document-end
// @version 1.0
// @namespace https://backpack.tf/u/76561197968633696 
// @author D. Alex
// ==/UserScript==

if( typeof item_name != 'undefined' ){
  item_name = item_name.replace(/&#039;/g,"'");
}  
