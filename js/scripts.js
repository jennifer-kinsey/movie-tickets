function Movie(name, movieType, ticketType, time, quantity){
  this.movieName = name;
  this.movieType = movieType;
  this.ticketType = ticketType;
  this.time = time;
  this.quantity = quantity;
}

function resetFields() {
  $("option[value=blank]").attr("selected", "selected");
  $("input[name=quantity]").val('1');
}

$(function(){
  $("#addMovies").click(function() {
    var inputtedMovieName = $("select[name=movie] option:selected").text();
    var inputtedMovieType = $("select[name=movie-type] option:selected").text();
    var inputtedTicketType = $("select[name=ticket-type] option:selected").text();
    var inputtedMovieTime = $("select[name=ticket-time] option:selected").text();
    var inputtedMovieQuantity = parseInt($("input[name=quantity]").val());
    var newMovie = new Movie(inputtedMovieName, inputtedMovieType, inputtedTicketType, inputtedMovieTime, inputtedMovieQuantity);

    $(".movie-result h3").text(inputtedMovieName);
    $(".movie-result ul").append(`<li>${inputtedMovieType}</li>`);
    $(".movie-result ul").append(`<li>${inputtedTicketType}</li>`);
    $(".movie-result ul").append(`<li>${inputtedMovieTime}</li>`);
    $(".movie-result ul").append(`<li>Quantity: ${inputtedMovieQuantity}</li>`);

    resetFields();



  });


});
