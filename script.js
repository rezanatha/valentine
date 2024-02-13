const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const titleImage = document.querySelectorAll('.title-image-div');
const mainImage = document.querySelector('#main-image');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

var text = "Thank you, my little fluffy cat 😘🥰😍🩵🩵🩵";
const emojis = ["💗","🧡","🥹","🥰","😘","🫶","❤️","🤍","🐈"]

yesBtn.addEventListener('click', () => {
    question.innerHTML = text;

    titleImage.forEach(i => {
        i.innerHTML = "<img src='./img/happy_cat.gif' class='title-image'>";
    });

    mainImage.setAttribute('src', './img/happyvday2.gif')

    text += emojis[Math.floor(Math.random() * emojis.length)];
});

noBtn.addEventListener('click', () => {
    question.innerHTML = "Are you sure?";
});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});
