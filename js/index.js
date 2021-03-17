/***************************
 *
 *  JC PORTFOLIO
 *  index.js
 *
 ***************************/

if (
  window.performance &&
  window.performance.navigation.type ===
    window.performance.navigation.TYPE_BACK_FORWARD
) {
  console.log('Got here using the browser "Back" or "Forward" button.');
}
