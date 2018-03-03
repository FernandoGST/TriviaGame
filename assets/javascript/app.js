$(document).ready(function () {
    $("#startbutton").click(function () {
        //------------------------------------------------

        //start-submit-restart
        // Define time variable
        var time = 30;
        alert("Good Luck!");
        $("#startbutton").on("click", start);
        $("#submit").on("click", finish);
        $("#restart").on("click", restart);

        //Start Function
        function start() {
            counter = setInterval(timer, 1000);
            showMe(".question");
            showMe(".answers");
            showMe("#submit");
            hideMe("#startbutton");
            hideMe(".instructions");
            hideMe("#restart");
            hideMe("#results");
        }

        // Set timer
        function timer() {
            time--
            $("#timerdisplay").html("<h2>" + time + "<h2>");
            if (time === 0) {
                alert("Time is Up!")
                stop();
            }
        }

        //stop game
        function stop() {
            clearInterval(counter);
            $("#results").show();
            $("#restart").show();
            $(".question").hide();
            $(".answers").hide();
            $("#submit").hide();
        }

        // stops timer
        function finish() {
            time = 1;
            clearInterval(counter);
            timer();
        }

        // restart
        function restart() {
            time = 30;
            start();
        }

        function hideMe(e) {
            $(e).hide();
        }

        function showMe(e) {
            $(e).show();
        }

        start();



    });
});



