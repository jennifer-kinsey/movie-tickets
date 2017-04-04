function Movie(name, movieType, ticketType, time, quantity){
  this.movieName = name;
  this.movieType = movieType;
  this.ticketType = ticketType;
  this.time = time;
  this.quantity = quantity;
}

var Currentmovies = {
  ghost: "Ghost in a Shell",
  logan: "Logan",
  beauty: "Beauty and the Beast",
  power: "Power Rangers: the Movie",
  life: "Life",
};

function resetFields() {
  $("option[value=blank]").attr("selected", "selected");
  $("input[name=quantity]").val('1');
}

$(function(){
  $("#submit").click(function() {
    var inputtedMovieName = $("select[name=movie]").val();
    var inputtedMovieType = $("select[name=movie-type]").val();
    var inputtedTicketType = $("select[name=ticket-type]").val();
    var inputtedMovieTime = $("select[name=ticket-time]").val();
    var inputtedMovieQuantity = $("input[name=quantity]").val();
    var newMovie = new Movie(inputtedMovieName, inputtedMovieType, inputtedTicketType, inputtedMovieTime, inputtedMovieQuantity);
    console.log(newMovie);
    resetFields();

  });


});
