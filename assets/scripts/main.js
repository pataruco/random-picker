$(document).ready(function(){
  //Variables
  var students = [`Stella`, `Michael`, `Mathew`, `Ella`, `Elishea`, `Zakira`, `Kieran`, `Kart`, `Aaron`, `Monika`, `Jun`, `Lee`];
  var $ready = $('#ready');
  var $buttonNext = $('#next');
  var $go = $('#go');

  //methods

  function renderStudents () {
    for (let i = 0; i < students.length; i++) {
      $ready.append(`<span class="student">${students[i]} </span>`);
    }
  }

  function pickStudent () {
    let studentToPick = students[Math.floor(Math.random() * students.length)];
    let studentToRemove = students.indexOf(studentToPick);
    students.splice(studentToRemove, 1);
    $go.empty();
    $go.append(`<h1>${studentToPick}</h1>`);
    $ready.empty();
    renderStudents();
  }



  //Event listeners

  $(window).on('load', renderStudents);
  $buttonNext.on('click', pickStudent);
});
