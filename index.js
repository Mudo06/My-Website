let scrollY = 0;


window.addEventListener('scroll', function () {
  if (window.scrollY > scrollY) {
    window.scrollTo(0, scrollY);
  } else {
    scrollY = window.scrollY;
  }
});

window.addEventListener('resize', adjustViewBox);
window.addEventListener('load', adjustViewBox);

function adjustViewBox() {
  var svg = document.querySelector('svg');
  var width = window.innerWidth;

  if (1101 < width && width <= 1474) {
    svg.setAttribute('viewBox', '0 0 100 134');
  }
  else if (900 < width && width < 1100) {
    svg.setAttribute('viewBox', '0 0 100 160');
  }
  else if (700 < width && width < 899) {
    svg.setAttribute('viewBox', '0 0 100 190');
  }
  else if (400 < width && width < 699) {
    svg.setAttribute('viewBox', '0 0 100 220');
  }
  else if (200 < width && width < 399) {
    svg.setAttribute('viewBox', '0 0 100 250');
  }
  else {
    svg.setAttribute('viewBox', '0 0 100 100');
  }
}


document.addEventListener('DOMContentLoaded', function () {
  const languageButton = document.getElementById('languageButton');
  const btn1Element = document.getElementById('btn1');
  const btn2Element = document.getElementById('btn2');
  const btn3Element = document.getElementById('btn3');


  let isTurkish = false;

  languageButton.addEventListener('click', function () {
    isTurkish = !isTurkish;

    if (isTurkish) {
      languageButton.innerText = 'TR';
      btn1Element.innerText = 'İletişim';
      btn2Element.innerText = 'Hikayem';
      btn3Element.innerText = 'Projelerim';


    } else {
      languageButton.innerText = 'EN';
      btn1Element.innerText = 'Contact';
      btn2Element.innerText = 'My Story';
      btn3Element.innerText = 'My Project';

    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const languageButton = document.getElementById('languageButton');
  const btn1Element = document.getElementById('btn4');
  const btn2Element = document.getElementById('btn5');
  const btn3Element = document.getElementById('btn6');
  const storyElement = document.getElementById('story');



  let isTurkish = false;

  languageButton.addEventListener('click', function () {
    isTurkish = !isTurkish;

    if (isTurkish) {
      languageButton.innerText = 'EN';
      btn1Element.innerText = 'İletişim';
      btn2Element.innerText = 'Ana sayfa';
      btn3Element.innerText = 'Projelerim';
      storyElement.innerText = "2003 yılında Ankara'da doğdum, ancak aslen Nevşehirliyim. Akçaabat Fen Lisesi'nde lise eğitimimi tamamladıktan sonra, Erzincan Binali Yıldırım Üniversitesi Bilgisayar Mühendisliği 3. sınıf öğrencisi olarak eğitim hayatıma devam ediyorum. HTML, CSS, JavaScript, Java, Kotlin, Flutter, C#, C++, C, SSMS ve Linux gibi çeşitli alanlarda kendimi geliştirdim. Küçüklüğümden beri teknolojiye olan ilgim ve yeni şeyler üretme arzum nedeniyle seçtiğim mesleği çok seviyorum. Gelecekte yenilikçi teknolojiler üretebilmeyi ve kendimi daha da geliştirebilmeyi umut ediyorum.";



    } else {
      languageButton.innerText = 'TR';
      btn1Element.innerText = 'Contact';
      btn2Element.innerText = 'Home';
      btn3Element.innerText = 'My Project';
      storyElement.innerText = 'I was born in 2003 in Ankara, but I originally come from Nevşehir. After completing my high school education at Akçaabat Science High School, I continue my education life as a 3rd-year student of Computer Engineering at Erzincan Binali Yıldırım University. I have improved myself in various areas including HTML, CSS, JavaScript, Java, Kotlin, Flutter, C#, C++, C, SSMS, and Linux. I love the profession I have chosen a lot because of my interest in technology and producing new things since I was little. I hope to produce innovative technologies and further develop myself in the future.';

    }
  });
});
