document.addEventListener('DOMContentLoaded', () => {
  let students = [
    'Adeela',
    'Charles',
    'Desi',
    'Esme',
    'Esme',
    'Jamie',
    'Jay',
    'Jenny',
    'Jose',
    'Kaitlyn',
    'Katherine',
    'Marcel',
    'Michael',
    'Mohamed',
    'Richard',
    'Ross',
    'Samuel',
    'Steven',
    'Yann',
  ];

  const studentReadyList = document.getElementById('ready');
  const nextButton = document.getElementById('next');
  const goContainer = document.getElementById('go');
  const drumPlayer = document.getElementById('drum');

  const renderStudents = () => {
    studentReadyList.innerHTML = '';
    students.map((student) => {
      const text = document.createTextNode(`${student}`);
      const li = document.createElement('li');
      const span = document.createElement('span');
      span.appendChild(text);
      li.appendChild(span);
      studentReadyList.appendChild(li);
    });
  };

  const renderStudent = (className, innerText) => {
    goContainer.innerHTML = '';
    const h1 = document.createElement('h1');
    const text = document.createTextNode(innerText);
    h1.classList = className;
    h1.appendChild(text);
    goContainer.appendChild(h1);
    setTimeout(() => {
      studentReadyList.style.opacity = 1;
    }, 2000);
  };

  const pickStudent = (event) => {
    event.preventDefault();
    let studentToPick = students[Math.floor(Math.random() * students.length)];
    let studentToRemove = students.indexOf(studentToPick);
    let animation = `animated tada`;
    studentReadyList.style.opacity = 0;
    students.splice(studentToRemove, 1);
    renderStudent(`waiting`, `...`);
    if (typeof studentToPick === 'undefined') {
      renderStudent(animation, `Let's go to the Pub `);
    } else {
      drumPlayer.play();
      setTimeout(() => {
        renderStudent(animation, studentToPick);
      }, 2000);
    }
    renderStudents();
  };

  nextButton.addEventListener('click', pickStudent);
  window.addEventListener('load', renderStudents);
}); // end of document
