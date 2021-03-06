// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import 'bootstrap'
import "@fortawesome/fontawesome-free/css/all"
// require("@rails/ujs").start()

Rails.start()
Turbolinks.start()
ActiveStorage.start()

global.$ = jQuery;

export const scroll_bottom = () => {
  let messageNum = $(".message").length;
  console.log(messageNum)
  if (messageNum > 0) {
    console.log($(".message").last()[0].scrollHeight)
    $("#messages-container").scrollTop = 10000;
    console.log("done")
  }
}


$(document).on('turbolinks:load', function() {
    scroll_bottom();  
});