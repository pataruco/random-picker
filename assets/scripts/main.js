$(document).ready(function(){
  //Variables
  var students = [`Stella`, `Michael`, `Mathew`, `Ella`, `Elishea`, `Kieran`, `Kart`, `Aaron`, `Monika`, `Jun`, `Lee`];
  var $ready = $('#ready');
  var $go = $('#go');

  //methods
  function renderStudents () {
    for (let i = 0; i < students.length; i++) {
      $ready.append(`<span>${students[i]} </span>`);
    }
  }

  function pickStudent (e) {
    e.preventDefault();
    let studentToPick = students[Math.floor(Math.random() * students.length)];
    let studentToRemove = students.indexOf(studentToPick);
    students.splice(studentToRemove, 1);
    $go.empty();
    if (students.length === 0) {
      $go.append(`<h1 class="pub student animated tada pub">Let's go to to the Pub </h1>`);
    } else {
      $go.append(`<h1 class="student animated tada">${studentToPick}</h1>`);
      $('#drum')[0].play();
      setTimeout(function(){
        renderStudent(animation, studentToPick);
      }, 2000);
    }
    $('#drum')[0].play();
    $ready.empty();
    renderStudents();
  }
  //Event listeners
  $(window).on('load', renderStudents);
  $('#next').on('click', pickStudent);
});
