const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const titleImage = document.querySelectorAll('.title-image-div');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

var text = "I love you, my little fluffy cat 😘🥰😍🩵🩵🩵";
const emojis = ["💗","🧡","🥹","🥰","😘","🫶","❤️","🤍","🐈"]

yesBtn.addEventListener('click', () => {
    question.innerHTML = text;

    titleImage.forEach(i => {
        i.innerHTML = "<img src='./img/happy_cat.gif' class='title-image'>";
    });

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
