$(function() {
    
    $("#home").click(function() {
        $("#content").html("Loading...");

        // Go get home content
        $.get("http://babbage.cs.missouri.edu/~schuylerj/a8/webService.php?content=home", function(data) {
            // Output the response
            $("#content").html(data);
        });
    });


    $("#xml").click(function() {
        $("#content").html("Loading...");

        // Go get XML data
        $.get("http://babbage.cs.missouri.edu/~schuylerj/a8/webService.php?content=data&format=xml", function(data) {
            // Find the <dinosaur> tags
            var $dinosaurs = $(data).find("dinosaur");

            // Create a <ul> for the output
            var dinoList = $('<ul></ul>');

            // For each of the <dinosaur> tags
            $.each($dinosaurs, function() {
                // Create an <li>
                var dino = $('<li></li>');

                // Fill that <li> with the dinosaur's details
                dino.html($(this).find("name").text() + " lived during the " + $(this).find("period").text());

                // Append the dinosaur <li> to the <ul> list
                dinoList.append(dino);
            });

            // Output the <ul>
            $('#content').html(dinoList);
        });
    });


    $("#json").click(function() {
        $("#content").html("Loading...");

        // Go get the JSON data
        $.getJSON("http://babbage.cs.missouri.edu/~schuylerj/a8/webService.php?content=data&format=json", function(data) {

            // Create a <ul> for the output
            var dinoList = $('<ul></ul>');

            // For each of the dinosaur objects
            $.each(data, function() {
                // Create an <li>
                var dino = $('<li></li>');

                // Fill that <li> with the dinosaur's details
                dino.html(this.name + " was a " + this.diet);

                // Append the dinosaur <li> to the <ul> list
                dinoList.append(dino);
            });

            // Output the <ul>
            $('#content').html(dinoList);
        });
    });


});