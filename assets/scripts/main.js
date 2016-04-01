$(document).ready(function(){
  //Variables
  var students = [`Stella`, `Michael`, `Mathew`, `Ella`, `Elishea`, `Kieran`, `Kart`, `Aaron`, `Monika`, `Jun`, `Lee`];
  var $ready = $('#ready');
  var $go = $('#go');

  //methods
  function renderStudents () {
    $ready.empty();
    for (let i = 0; i < students.length; i++) {
      $ready.append(`<span>${students[i]} </span>`);
    }
  }

  function renderStudent(className, innerText) {
    $go.empty();
    $go.append(`<h1 class="${className}">${innerText}</h1>`);
  }

  function pickStudent (e) {
    e.preventDefault();
    let studentToPick = students[Math.floor(Math.random() * students.length)];
    let studentToRemove = students.indexOf(studentToPick);
    let animation = `animated tada`;
    students.splice(studentToRemove, 1);
    renderStudent(`waiting`, `...`);
    if (students.length === 0) {
      renderStudent(animation, `Let's go to the Pub `);
    } else {
      $('#drum')[0].play();
      setTimeout(function(){
        renderStudent(animation, studentToPick);
      }, 2000);
    }
    renderStudents();
  }
  //Event listeners
  $(window).on('load', renderStudents);
  $('#next').on('click', pickStudent);
});
