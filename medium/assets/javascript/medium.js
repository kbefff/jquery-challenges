/**
 * Hockey is the game. Make it happen.
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 *
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 *
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

(function(){

  //jQuery equivelent to window.onload = function{}
  //code in here wont run until page loads
  $(function(){

    var teamOne         = $("#teamone-shoot");
    var teamOneShoot    = $("#teamone-numshots");
    var goalsOne        = $("#teamone-numhits");

    var teamTwo         = $("#teamtwo-shoot");
    var teamTwoShoot    = $("#teamtwo-numshots");
    var goalsTwo        = $("#teamtwo-numhits");

    var reset           = $("#reset");
    var numReset        = $("#num-resets");



////////////////////////////////  TEAM ONE ////////////////////////////////
    teamOne.click(function(){
      var newCounterValue = parseInt(teamOneShoot.html()) + 1;
      teamOneShoot.html(newCounterValue);

      console.log(Math.random())
        if (Math.random() > .6) {
        var newScore = parseInt(goalsOne.html()) + 1;

          goalsOne.html(newScore);
          $("body").css({
            backgroundColor: 'yellow'
          })
      }

    });



////////////////////////////////  TEAM TWO ////////////////////////////////
    teamTwo.click(function(){
      var newCounterValue = parseInt(teamTwoShoot.html()) + 1;
      teamTwoShoot.html(newCounterValue);

      console.log(Math.random())
        if (Math.random() > .6) {
        var newScore = parseInt(goalsTwo.html()) + 1;

        goalsTwo.html(newScore)
        $("body").css({
          backgroundColor: 'green'
        })
      }
    });




////////////////////////////////  RESET ////////////////////////////////
    reset.click(function(){
      var clearValues = 0
      teamOneShoot.html(clearValues);
      goalsOne.html(clearValues)
      teamTwoShoot.html(clearValues);
      goalsTwo.html(clearValues)

      var count = parseInt(numReset.html()) + 1;
      numReset.html(count);
      $("body").css({
        backgroundColor: 'white'
      })
    });




  });
})();
