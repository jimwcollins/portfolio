/***************************
 *
 *  JC PORTFOLIO
 *  index.js
 *
 ***************************/

// Set a global variable if user has hit back or fwd buttons

let browserBtn = false;

if (
  window.performance &&
  window.performance.navigation.type ===
    window.performance.navigation.TYPE_BACK_FORWARD
) {
  browserBtn = true;
}
