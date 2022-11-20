import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".nav");
const shadow = document.querySelector(".header__nav-shadow");
const burgerLink = document.querySelectorAll(".nav__link");

if (burger) {
  burger.addEventListener("click", show);
  shadow.addEventListener("click", show);
  burgerLink.forEach((item) => {
    item.addEventListener("click", removeAll);
  });
}

function show() {
  burgerMenu.classList.toggle("active");
  burger.classList.toggle("active");
  shadow.classList.toggle("active");
  document.body.classList.toggle("lock");
}

function removeAll() {
  document.body.classList.remove("lock");
  burgerMenu.classList.remove("active");
  burger.classList.remove("active");
  shadow.classList.remove("active");
}


//Swiper
const heroSwiper = document.querySelector('.hero__swiper');
if(heroSwiper){
  const swiper = new Swiper('.hero__swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.hero__pag',
      clickable: true,
  
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.btnNext',
      prevEl: '.btnPrev',
    },
  });
}

const slider = document.querySelector('.slider');
document.querySelector('.slider__change').addEventListener('input', (e) => {
  slider.style.setProperty('--position', `${e.target.value}%`)
})


// Constants //
const videoPlayer = document.querySelector('.video__player')
const video = videoPlayer.querySelector('.player')
const play = videoPlayer.querySelector('.player__pause')
const bigPlay = videoPlayer.querySelector('.player__btn')
const volumeButton = videoPlayer.querySelector('.volume-button')
const progressLine = videoPlayer.querySelector('.progress-line');
const progressVolume = videoPlayer.querySelector('.progress-volume');
// End Constants //
  
// Line gradient for inputs //
progressVolume.addEventListener('input', function() {
    const value = this.value;
    if(value === '0'){
        volumeButton.classList.add('mute')
    }else{
        volumeButton.classList.remove('mute')
    }
    this.style.background = ` linear-gradient( to right, #710707 0%, #710707 ${value*100}%, #c8c8c8 ${value*100}%, white 100% )`
    })

  //End of line gradient for inputs //


// Play video function and chanching buttons //

function playVideo() {
    if(video.paused){
        bigPlay.style.display = 'none'
        play.classList.add('pause')
        video.play()
    } else {
        bigPlay.style.display = 'block'
        play.classList.remove('pause')
        video.pause()
    }
}

bigPlay.addEventListener('click', playVideo)
video.addEventListener('click', playVideo)
play.addEventListener('click', playVideo)

// End of play video function and chanching buttons //

//  volume //
function volume() {
    const volume = progressVolume.value;
    video.volume = volume;
}

volumeButton.addEventListener('click', function() {
    const value = video.volume;
    if(!volumeButton.classList.contains('mute')){
        volumeButton.classList.add('mute')
        video.volume = 0;
    }else{
        volumeButton.classList.remove('mute')
        const value = progressVolume.value;
        video.volume = value;
    }
})
progressVolume.addEventListener('input', volume)
progressVolume.addEventListener('change', volume)
// End of volume //

// Progress video //

function progressVideo(){
    progressLine.value = (video.currentTime / video.duration) * 100;
    progressLine.style.background = ` linear-gradient( to right, #710707 0%, #710707 ${progressLine.value}%, #c8c8c8 ${progressLine.value}%, white 100% )`
    if(progressLine.value === '100'){
        bigPlay.style.display = 'block'
        play.classList.remove('pause')
    }
}

function scrub(e){
    video.currentTime = (progressLine.value * video.duration) / 100
    console.log(video.currentTime)
}

progressLine.addEventListener('input', scrub)
video.addEventListener('timeupdate', progressVideo)

// End of progress video //

//Swiper video
//Swipe
const swiperVideoSection = document.querySelector('.video__slider')

if(swiperVideoSection){
  const swiperVideo = new Swiper('.video__slider', {
    loop: true,
    pagination: {
      el: '.video__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.video__button-next',
      prevEl: '.video__button-prev',
    },
    slidesPerView: 3,
    spaceBetween: 42,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      481: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      769: {
        spaceBetween: 25,
        slidesPerView: 3,
      },
      1025: {
        spaceBetween: 42,
      }
    },
  });
  
}
//Gallery generation img
let a = [];
const arrayGenaration = function(){
  const range = 15; // максимальное значение (1..1000000 включительно)
  const count = 15;      // кол-во требуемых чисел
  
  let m = {};
  for (let i = 0; i < count; ++i) {
    let r = Math.floor(Math.random() * (range - i));
    a.push(((r in m) ? m[r] : r) + 1);
    let l = range - i - 1;
    m[r] = (l in m) ? m[l] : l;
  }
}

arrayGenaration();

const galleryBox = document.querySelector('.gallery__photos');

a.forEach(item => {
  const html = `<img src="img/gallery/galery${item}.jpg" alt="img" class="gallery__img anim no_hide">`;
  galleryBox.insertAdjacentHTML("afterbegin",html);
});

//Modal
const modal = document.querySelector('.modal');
const btnModal = document.querySelector('.button__calculator');
const closeModal = document.querySelector(".modal__close")

if(modal){
  btnModal.addEventListener('click', modalOpen);
  closeModal.addEventListener('click', modalClose);
}

function modalOpen(){
  modal.classList.add('active');
  document.body.classList.add("lock");
}

function modalClose(){
  modal.classList.remove('active');
  document.body.classList.remove("lock");
}
//Calculator
const prices = { 
  'permanent': {
      'basic': 20, 
      'senior': 10
  }, 
  'temporary':{
      'basic': 30, 
      'senior': 15
  },
  'combined':{
      'basic': 40, 
      'senior': 20
  }
}
const radioBtn = document.querySelectorAll('.radio__input');
const radioInput = document.querySelectorAll('.tickets__number');

const textBasic = document.querySelector('.entry__text-basic');
const textSenior = document.querySelector('.entry__text-senior');
const listTypeTicket = document.querySelector('.overview__list-type');

let basicCount = document.querySelector('.price__basic-count');
let seniorCount = document.querySelector('.price__senior-count');

let priceBasic = document.querySelector('.price__basic-name');
let priceSenior = document.querySelector('.price__senior-name');

let priceBasicTotal = document.querySelector('.price__basic-total');
let priceSeniorTotal = document.querySelector('.price__senior-total');


const select = document.querySelector('.modal__select');
const text = document.querySelector('.ticket__calculator');
const totalPrice = document.querySelector('.total__price');

const minusTicket = document.querySelectorAll(".minus");
const plusTicket = document.querySelectorAll(".plus");

let radio, sum = 0, html, htmlModal,inputTicket, basicPrice = 0, seniorPrice = 0;

function calculationAll(str, ticketType){
  if(str == 'plus'){
    sum += ticketType == "senior" ? prices[radio].senior : prices[radio].basic;
    html = `${ticketType == "senior" ? `Senior 65+ (${basicPrice+=prices[radio].senior} €)` : `Basic 18+ (${seniorPrice+=prices[radio].basic} €)`}`
    htmlModal =  `${ticketType == "senior" ? `Senior (${prices[radio].senior} €)` : `Basic (${prices[radio].basic} €)`}`
    ticketType == "senior" ? textSenior.textContent = html : textBasic.textContent = html
    ticketType == "senior" ? priceSenior.textContent = htmlModal : priceBasic.textContent = htmlModal
    ticketType == "senior" ? priceSeniorTotal.textContent = `${basicPrice} €` : priceBasicTotal.textContent = `${seniorPrice} €`
    text.textContent = `Total € ${sum}`;
    totalPrice.textContent = `${sum} €`
  } if(str == 'minus'){
    sum -= ticketType == "senior" ? prices[radio].senior : prices[radio].basic;
    html = `${ticketType == "senior" ? `Senior 65+ (${basicPrice-=prices[radio].senior} €)` : `Basic 18+ (${seniorPrice-=prices[radio].basic} €)`}`
    htmlModal =  `${ticketType == "senior" ? `Senior (${prices[radio].senior} €)` : `Basic (${prices[radio].basic} €)`}`
    ticketType == "senior" ? textSenior.textContent = html : textBasic.textContent = html
    ticketType == "senior" ? priceSenior.textContent = htmlModal : priceBasic.textContent = htmlModal
    ticketType == "senior" ? priceSeniorTotal.textContent = `${basicPrice} €` : priceBasicTotal.textContent = `${seniorPrice} €`
    text.textContent = `Total € ${sum}`;
    totalPrice.textContent = `${sum} €`
  }
}

function radioBtns(str, ticketType){
    radioBtn.forEach(el => {
        if(el.checked && str == 'plus'){
            radio = el.value;
            calculationAll('plus', ticketType)
        }
        if(el.checked && str == 'minus'){
            radio = el.value;
            calculationAll('minus', ticketType)
        }
        
    })
}
function selectCalc(str, ticketType){
  if(str == 'plus'){
      radio = select.value;
      calculationAll('plus', ticketType)
  }
  if(str == 'minus'){
      radio = select.value;
      calculationAll('minus', ticketType)
  }
}

function changeType(){
    sum = 0
    basicPrice = 0
    seniorPrice = 0
    radioInput.forEach(el => {
        el.value = 0;
    })
    text.textContent = `Total € ${sum}`;
    textSenior.textContent = 'Senior 65+ (0 €)';
    textBasic.textContent = 'Basic 18+ (0 €)';
    totalPrice.textContent = `0 €`
    basicCount.textContent = `0`
    seniorCount.textContent = `0`
    priceSeniorTotal.textContent = `0 €`
    priceBasicTotal.textContent = `0 €`
    priceBasic.textContent = `Basic (0 €)`
    priceSenior.textContent =`Senior (0 €)`

}

function ticketMinus(){
    inputTicket = this.nextElementSibling;
    if(+inputTicket.value <= +inputTicket.min){
        inputTicket.value = 0
      } else{
        inputTicket.value--;
        if(modal.classList.contains('active')){
          selectCalc('minus', this.dataset.type) 
          modalChangeBtn(this.dataset.type)
      } else{
          radioBtns('minus', this.dataset.type) 
          modalChangeBtn(this.dataset.type)
      }
    }
    
}

function modalChangeBtn(typeBtn){
  const inputs = document.querySelectorAll('.tickets__number');
  inputs.forEach(input => {
      if(input.dataset.type == 'basic' && typeBtn == input.dataset.type){
          input.value = inputTicket.value;
          basicCount.textContent = `${input.value}`
      }
      if(input.dataset.type == 'senior' && typeBtn == input.dataset.type){
          input.value = inputTicket.value;
          seniorCount.textContent = `${input.value}`

      }
  })
  
}

function ticketPlus(){
    inputTicket = this.previousElementSibling;
    if(+inputTicket.value >= +inputTicket.max){
        inputTicket.value = 20;
      } else{
        inputTicket.value++;
        if(modal.classList.contains('active')){
          selectCalc('plus', this.dataset.type) 
          modalChangeBtn(this.dataset.type)
      } else{
          radioBtns('plus', this.dataset.type) 
          modalChangeBtn(this.dataset.type)
      }
    }
}


minusTicket.forEach(el => {
    el.addEventListener('click', ticketMinus)
})
plusTicket.forEach(el => {
    el.addEventListener('click', ticketPlus);
})
radioBtn.forEach(el => {
    el.addEventListener('change', changeType)
})

radioBtn.forEach(el => {
  el.addEventListener('change', () => {
      select.value = el.value
  })
})

select.addEventListener('change', changeType)
select.addEventListener('change', function(){
  listTypeTicket.textContent = `${this.options[this.selectedIndex].text}`
})

document.querySelector('.form__icon-time').addEventListener('change', function(){
  document.querySelector('.overview__list-time').textContent = this.value;
})

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

let date, day, dayMonth
document.querySelector('.form__icon-date').addEventListener('change', function(){  
  date = new Date(this.value)
  day = date.getDay();
  dayMonth = date.toLocaleString('en-US', {       
    day: '2-digit',
    month: 'long',
  })
  document.querySelector('.overview__list-date').textContent = `${days[day]}, ${dayMonth}`;
})

//Parallax for images in gallary

// const allSections = document.querySelectorAll('.gallery__img')

// const revealSection = function(entries, observer){
//   const [entry] = entries;
//   if(!entry.isIntersecting) return;
//   entry.target.classList.remove('section--hidden');
//   observer.unobserve(entry.target)
// }

// const sectionObs = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.1,
// })
// allSections.forEach(function(section){
//   sectionObs.observe(section);
//   section.classList.add('section--hidden');
// })


let animItem = document.querySelectorAll('.anim');

if(animItem.length > 0){
  window.addEventListener('scroll', AnimScroll)
  function AnimScroll(){
    for(let i = 0; i < animItem.length; i++){
      const item = animItem[i];
      const itemHeight = item.offsetHeight;
      const itemOffset = offset(item).top;
      const itemStart = 4;

      let itemPoint = window.innerHeight - itemHeight / itemStart;

      if(itemHeight > window.innerHeight){
        itemPoint = window.innerHeight - window.innerHeight / itemStart;
      }

      if((pageYOffset > itemOffset - itemPoint) && pageYOffset < (itemOffset + itemHeight)){
        item.classList.add('_active');
      } else {
        if(!item.classList.contains('no_hide')){
          item.classList.remove('_active');
        }
      }
    }
  }
  function offset(el1) {
    const rect = el1.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  setTimeout(() => {
    AnimScroll()
  }, 300);
}
