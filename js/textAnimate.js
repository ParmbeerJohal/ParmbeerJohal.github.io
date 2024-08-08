/**
 * Text animation for the home page
 * @file textAnimate.js
 * @author Parm Johal
 */

// Array of text to animate
const textArray = [
  "Hello World!",
  "I am a...",
  "Full-Stack Developer",
  "Web Developer",
  "Web Designer",
  "and much more!"
];   
consoleText(textArray, "animateText");

/**
 * Function to animate text on the home page
 * @param {Array} words - Array of words to animate
 * @param {String} id - ID of the element to animate
 * @param {Array} colors - Array of colors to use for the animation
 * @returns {void}
 */
function consoleText(words, id, colors) {
  if (colors === undefined) colors = ["#fff"];
  var visible = true;
  var $con = $("#console");
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var $target = $("#" + id);
  $target.css("color", colors[0]);

  // text animation functionality
  setInterval(function() {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      $target.html(words[0].substring(0, letterCount));
      setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        $target.css("color", colors[0]);
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      $target.html(words[0].substring(0, letterCount));
      letterCount += x;
    }
  }, 120);

  setInterval(function() {
    if (visible === true) {
      $con.addClass("hidden");
      visible = false;
    } else {
      $con.removeClass("hidden");
      visible = true;
    }
  }, 400);
}
