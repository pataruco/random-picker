$(document).ready(function(){
  //Variables
  var students = [`Stella`, `Michael`, `Mathew`, `Ella`, `Elishea`, `Kieran`, `Kart`, `Aaron`, `Monika`, `Jun`, `Lee`];
  var $ready = $('#ready');
  var $go = $('#go');

  //methods

  function renderStudents () {
    for (let i = 0; i < students.length; i++) {
      $ready.append(`<span class="student">${students[i]} </span>`);
    }
  }

  function pickStudent (e) {
    e.preventDefault();
    let studentToPick = students[Math.floor(Math.random() * students.length)];
    let studentToRemove = students.indexOf(studentToPick);
    students.splice(studentToRemove, 1);
    $go.empty();
    $go.append(`<h1 class="student">${studentToPick}</h1>`);
    $('#drum')[0].play();
    $ready.empty();
    renderStudents();
  }
  //Event listeners
  $(window).on('load', renderStudents);
  $('#next').on('click', pickStudent);
});
