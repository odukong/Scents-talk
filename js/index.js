/* 상단 메뉴 스크롤 변화*/
const menu_bar=document.querySelector('.menu');
window.addEventListener('mousewheel', e=>{
    const direction = e.deltaY > 0 ? "Down" : "Up";
    if(direction==="Down"){
        menu_bar.style.background="thistle";
        menu_bar.style.transition="background 1s";
    }else{
        menu_bar.style.background="white";
        menu_bar.style.transition="background 1s";
    }
});

/* first content animation */
const title1=document.querySelector('.content_1 > .content_title > .main_title');
const sub_title1=document.querySelector('.content_1 > .content_title > .sub_title');
const img1=document.querySelector('.content_1 > img');
title1.style.animation="fadeInLeft 2s";
sub_title1.style.animation="fadeInLeft 2.5s forwards";
img1.style.animation="fadeInRight 2.5s";

const title2=document.querySelector('.content_2> .content_title > .main_title');
const sub_title2=document.querySelector('.content_2>.content_title > .sub_title');
const img2=document.querySelector('.content_2 > img');
title2.style.animation="fadeInRight 2s";
sub_title2.style.animation="fadeInRight 2.5s forwards";
img2.style.animation="fadeInLeft 2.5s";


window.addEventListener('scroll',function(){
    //const distanceFromHtml=title1.getBoundingClientRect().top;
    const scrollY=window.scrollY;
    
    if(scrollY<250){
        title1.style.animation="fadeInLeft 2s";
        sub_title1.style.animation="fadeInLeft 2.5s forwards";
        img1.style.animation="fadeInRight 2.5s";
    }else if(scrollY<1000){
        title2.style.animation="fadeInRight 2s";
        sub_title2.style.animation="fadeInRight 2.5s";
        img2.style.animation="fadeInLeft 2.5s";
    }else{
        title1.style.removeProperty('animation');
        sub_title1.style.removeProperty('animation');
        img1.style.removeProperty('animation');

        title2.style.removeProperty('animation');
        sub_title2.style.removeProperty('animation');
        img2.style.removeProperty('animation');
    }    
})

let index=0;
let index2=0;

function wait(ms){
    return new Promise(res=>setTimeout(res,ms));
}
const typing=async(text,content)=>{
    while(index<content.length){
        await wait(80);
        text.innerHTML+=content[index].replace(/(\n|\r\n)/g, "<br>");
        index++;
    }
    index=0;
}


const textClick=document.querySelector('#clickButton');
const text1=document.querySelector('.story1');
const content1="세상엔 셀 수도 없이 많은 향들이 만들어지고 또는 사라진다.\n우리는 그런 향들을 현실 속에서 지나쳐왔고,\n 기억 한 켠 추억으로 남겨두기 위해 병 안에 담아두었다 다시금 꺼내본다.\n 당신에게도 당신만의 간직하고 싶은 향이 있는가? \n지금부터 당신의 이야기를 들려주세요.";

textClick.addEventListener('click',()=>{
    textClick.style.display="none";
    typing(text1,content1);
})

const textClick2=document.querySelector('#clickButton2');
const text2=document.querySelector('.story2');
const content2="Scent. 향수라는 뜻이다.\n 흔히 향수라는 단어를 모두가 perfume이라고 인식하고 있을 것이다.\n 물론 대중적으로 사용되는 단어는 Perfume이 맞다. 하지만 지금 \n말하고 싶은 향수는 우리 주변에서 자연스럽게 깃들어 있는 향들을 담은 향수이다.\n 그런 향수를 의미하는 것이 Scent이다. 지금부터 Scent’ stalk(향수의 줄기), \n향수의 근본에서 시작하는 Scent’s talk(향수의 이야기) 해보려 한다.\n";

textClick2.addEventListener('click',()=>{
    textClick2.style.display="none";
    typing(text2,content2);
})

/*const typing2=async()=>{
    while(index<content2.length){
        await wait(80);
        text2.innerHTML+=content2[index].replace(/(\n|\r\n)/g, "<br/>");
        index2++;
    }
    index2=0;
}*/


/** Slider */

document.addEventListener('DOMContentLoaded', () => {

    const cards = document.querySelectorAll(".card");
    
    for(const card of cards) {
        card.addEventListener("click", flipper); 
    }
    
    function flipper (event) {
        const target = event.currentTarget
        target.style.transform = "rotateY(180deg) translateY(0px)"
        cardStyler(flipper,target,180);
        target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.bottle').src=target.querySelector('.front>img').src;
        target.addEventListener("click", innerFlipper)
    }

    function innerFlipper (event) {
        const target = event.currentTarget
        target.style.transform = "rotateY(0deg) translateY(0px)"
        cardStyler(innerFlipper,target,0);
        target.addEventListener("click", flipper)
        target.removeEventListener("click", innerFlipper)
    }

    function cardStyler(type,target,rotate){
        if(type==="flipper"){
            target.addEventListener("mouseenter",()=>{
                target.style.transform = `translateY(-15px) rotateY(${rotate}deg)`;
            })
            target.addEventListener("mouseleave",()=>{
                target.style.transform = `translateY(0px) rotateY(${rotate}deg)`;
            })
        }else{
            target.addEventListener("mouseenter",()=>{
                target.style.transform = `translateY(-15px) rotateY(${rotate}deg)`;
                target.querySelector('.back').style.boxShadow="0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)";
            })
            target.addEventListener("mouseleave",()=>{
                target.style.transform = `translateY(0px) rotateY(${rotate}deg)`;
                target.querySelector('.back').style.boxShadow="none";
            })
        }
    }
});


const github=document.querySelector(".contact>img");
github.addEventListener('mouseenter',()=>{
    github.style.cursor="pointer";
})
github.addEventListener('click',()=>{
    location.href="https://github.com/odukong";    
})