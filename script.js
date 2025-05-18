

const blackDiv = document.querySelector('.main');
const blueDiv = document.querySelector('.divBlue');
const menu = document.querySelector('.divNav');
const menuT = document.querySelector('.divNav-center');
const proj = document.getElementById('projects'); // без `#`

function updateBlueDiv() {
  const w = blackDiv.offsetWidth;
  const h = blackDiv.offsetHeight;
  const hypo = Math.hypot(w, h);
  blueDiv.style.width = `${hypo}px`;
  const angle = Math.atan(h / w) * (180 / Math.PI);
  blueDiv.style.transform = `rotate(${angle}deg)`;
}

function updateBtnDivPosition() {
  const MT = document.querySelector('.mainText');
  const MTHeight = MT.offsetHeight;
  document.querySelector('.btn-div').style.bottom = `calc(${MTHeight}px + 5%)`;
}

const btnk = document.querySelector('.btnK');
const btnkr = document.querySelector('.btnKR');
const computed = getComputedStyle(btnkr);
const origStyles = {
  borderRadius: computed.borderRadius,
  width: computed.width,
  height: computed.height,
  backgroundColor: computed.backgroundColor,
};

window.addEventListener('load', () => {
  updateBlueDiv();
  updateBtnDivPosition();
});

window.addEventListener('resize', () => {
  updateBlueDiv();
  updateBtnDivPosition();
});

document.addEventListener('mousemove', event => {
  const x = event.clientX;
  const y = event.clientY;
  menuT.style.transform = `translateX(${-x / 20}px)`;
  menu.style.transform = `translateY(${-y / 40}px)`;
});

window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

const btnG = document.querySelector('.btn-div');
const btnGo = document.querySelector('#btnGo');

btnGo.addEventListener('mouseenter', () => {
  const btnIn = document.querySelector('.btn-going');
  btnIn.style.transform = 'translateX(100%)';
  btnG.style.transform = 'scale(1.1)';
  btnGo.style.transition = '0.5s';
  btnGo.style.transform = 'scale(1.1)';
});

btnGo.addEventListener('mouseleave', () => {
  const btnIn = document.querySelector('.btn-going');
  btnIn.style.transform = 'translateX(-100%)';
  btnG.style.transform = 'scale(1)';
  btnGo.style.transform = 'scale(1)';
});

btnGo.addEventListener('click', () => {
  document.querySelector('.rmain').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

const coffeeText = document.querySelector('.p-d');
coffeeText.style.marginTop = `calc(100vh - ${coffeeText.offsetHeight}px - 25px)`;

function onBtnkrMouseEnter() {
  btnkr.style.opacity = '1';
  btnkr.style.transform = 'scale(1.1)';
  btnkr.style.border = '1px solid rgb(161, 161, 161)';
  btnkr.style.boxShadow = '0px 0px 30px 2px black';
  btnkr.style.cursor = 'pointer';
  btnkr.style.backgroundColor = origStyles.backgroundColor;
}

function onBtnkrMouseLeave() {
  if (btnkr.querySelector('.btnkrdiv')) return;
  btnkr.style.opacity = '0';
  btnkr.style.transform = 'scale(1)';
  btnkr.style.border = '1px solid rgb(161, 161, 161)';
  btnkr.style.boxShadow = '0px 0px 10px 2px black';
  btnkr.style.cursor = 'pointer';
  btnkr.style.backgroundColor = origStyles.backgroundColor;
}

btnkr.addEventListener('mouseenter', onBtnkrMouseEnter);
btnkr.addEventListener('mouseleave', onBtnkrMouseLeave);

btnkr.addEventListener('click', () => {
  if (btnkr.querySelector('.btnkrdiv')) return;

  document.querySelector('.rmain').scrollIntoView({ behavior: 'smooth' });

  btnkr.removeEventListener('mouseenter', onBtnkrMouseEnter);
  btnkr.removeEventListener('mouseleave', onBtnkrMouseLeave);

  btnkr.style.transition = '0.2s';
  btnkr.style.transform = 'scale(0.5)';
  
  if (btnk) {
    btnk.style.border = '2px solid black';
    btnk.style.backgroundColor = 'transparent';
    btnk.style.transition = '0.2s';
    btnk.style.boxShadow = 'none';
    btnk.style.opacity = '0';
  }

  let btnkcss = {
    transform: 'scale(2)',
    opacity: '0',
  };
  for (let key in btnkcss) {
    btnk.style[key] = btnkcss[key];
  }

  setTimeout(() => {
    btnkr.style.transition = '0.5s';
    btnkr.style.transform = 'scale(1)';
    btnkr.style.borderRadius = '0';
    btnkr.style.width = '100%';
    btnkr.style.height = '100%';
    if (btnk) btnk.remove();
    btnkr.style.cursor = 'default';
    btnkr.style.display = 'flex';
    btnkr.style.justifyContent = 'center';
    btnkr.style.alignItems = 'center';

    const btnkrdiv = document.createElement('div');
    btnkrdiv.classList.add('btnkrdiv');
    btnkrdiv.style.width = '100%';
    btnkrdiv.style.height = '100%';
    btnkrdiv.style.borderRadius = origStyles.borderRadius;
    btnkrdiv.style.display = 'flex';
    btnkrdiv.style.justifyContent = 'center';
    btnkrdiv.style.alignItems = 'center';
    btnkr.appendChild(btnkrdiv);

    setTimeout(() => {
      const divcontent = document.createElement('div');
      divcontent.classList.add('divcontent');
      divcontent.style.width = '97%';
      divcontent.style.height = '95%';
      divcontent.style.overflow = 'hidden';
      divcontent.style.position = 'relative';
      btnkrdiv.appendChild(divcontent);

      let divcontenth = divcontent.offsetHeight;

      function newcreate() {
        let stick = document.createElement('div');
        stick.classList.add('stick');
        stick.style.backgroundColor = 'white';
        stick.style.width = '5px';
        stick.style.height = `${divcontenth}px`;
        stick.style.position = 'absolute';
        stick.style.transform = 'translateY(-150%)';
        stick.style.transition = '0.8s';
        divcontent.appendChild(stick);

        setTimeout(() => {
          stick.style.transform = 'translateY(0px)';
          setTimeout(() => {
            function createone() {
              let numonediv = document.createElement('div');
              numonediv.classList.add('numonediv');
              let numonedivcss = {
                position: 'absolute',
                width: '95%',
                height: '95%',
                background: 'linear-gradient(to right, rgb(48,48,48),rgb(14, 14, 14))',
                transform: 'translateX(-110%)',
                top: '2.5%',
                transition: '0.8s',
                border: '1px solid rgb(83, 83, 83)',
                display: 'flex',
                justifyContent: 'center',
                placeItems: 'center',
                placeContent: 'center'
              };
              for (let key in numonedivcss) {
                numonediv.style[key] = numonedivcss[key];
              }
              divcontent.appendChild(numonediv);

              setTimeout(() => {
                numonediv.style.transform = 'translateX(2.5%)';
                let text = document.createElement('p');
                let originalText = `
                  — В программировании уже более 3-х лет. Начинал с изучения python, а позже начал изучать простые проекты в веб-разработке, постепенно осваивая всё более сложные подходы.
                  — Хорошо знаю HTML, CSS и JavaScript. Уверенно верстаю и анимирую интерфейсы, умею работать с DOM-структурой и адаптивной вёрсткой.
                  — Особое внимание уделяю визуальным деталям, плавности анимаций и взаимодействию элементов.
                  — Сейчас активно изучаю back-end: серверную логику, базы данных и REST API.
                  — Часто экспериментирую с JavaScript, создаю кастомные UI-эффекты и анимации.
                  — Работаю над одностраничными и многостраничными сайтами, портфолио и интерактивными блоками. Люблю минимализм и динамичность.
                `;

                let formattedText = originalText.replace(/\.\s*/g, '.<br><br>');

                text.innerHTML = formattedText;

                let textcss = {
                  position: 'relative',
                  color: 'white',
                  fontSize: '20pt',
                  width: '90%'
                };
                for (let key in textcss) {
                  text.style[key] = textcss[key];
                }
                numonediv.appendChild(text)
              }, 200);
            }
            createone();
          }, 150);
        }, 50);
      }
      newcreate();
    }, 750);
  }, 250);
});

let about = document.querySelector('.about');
let aboutw = about.offsetWidth;
about.style.transform = `translateX(calc(-${aboutw}px - 3% + 1px))`;

const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelector('.about').style.transform = 'translateX(0px)';
    }
  });
});
observer1.observe(document.querySelector('.about'));

let onezero = document.querySelector('.onezero');
let num = Math.floor(Math.random() * 131) + 50;

let x = window.innerWidth;
let y = window.innerHeight;
const glitchChars = ['#', '*', '@', '!'];

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const el = entry.target;

    if (!entry.isIntersecting) {
      el.textContent = Math.random() >= 0.5 ? '0' : '1';
    } else {
      let symbols = ['#', '*', '@', '!'];
      let i = 0;

      let interval = setInterval(() => {
        el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        i++;

        if (i > 50) {
          clearInterval(interval);
          el.textContent = Math.random() >= 0.5 ? '0' : '1';
        }
      }, 30);
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.onezero p').forEach(el => {
  observer.observe(el);
});


for (let i = 0; i < num; i++) {
  let newP = document.createElement('p');

  newP.textContent = glitchChars[Math.floor(Math.random() * glitchChars.length)];

  let randTop = Math.floor(Math.random() * 95);
  let randLeft = Math.floor(Math.random() * 95);
  let signX = Math.random() < 0.5 ? -1 : 1;
  let signY = Math.random() < 0.5 ? -1 : 1;
  let randTransition = Math.floor(Math.random() * 4000) + 1000;
  let randTranslateX = Math.floor(Math.random() * x * 0.1 * signX);
  let randTranslateY = Math.floor(Math.random() * y * 0.1 * signY);

  let styles = {
    position: 'absolute',
    top: `${randTop}%`,
    left: `${randLeft}%`,
    fontSize: '18px',
    color: 'gray',
    fontFamily: 'monospace',
    userSelect: 'none',
    transition: `${randTransition}ms`,
    transform: `translate(${randTranslateX}px, ${randTranslateY}px)`,
  };

  for (let key in styles) {
    newP.style[key] = styles[key];
  }

  onezero.appendChild(newP);

  observer.observe(newP);
}

let imgg = document.getElementById('imgg')
imgg.addEventListener('click', function() {


  let imggcss = {
    transition: '0.5s',
    transform: 'translateX(65%) scale(2)',
    position: 'absolute',
    zIndex: ' 5',
  }


  for (let key in imggcss) {
    imgg.style[key] = imggcss[key];
  }
})

imgg.addEventListener('mouseleave', function() {
  let imggcss = {
    transition: '0.5s',
    transform: 'translateX(0%) scale(1)',
    position: 'absolute',
    zIndex: '5',
  }
  for (let key in imggcss) {
    imgg.style[key] = imggcss[key];
  }
})

let probtn = document.getElementById('projects')
probtn.addEventListener('click', function() {
  document.querySelector('.about').scrollIntoView({
    behavior: 'smooth'
  })
})

let conbtn = document.getElementById('contact')
conbtn.addEventListener('click', function() {
  document.querySelector('.rmain2').scrollIntoView({
    behavior: 'smooth'
  })
})