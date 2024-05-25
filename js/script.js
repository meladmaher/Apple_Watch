
       // start Menu
let ulMenu = document.getElementById("ulMenu");
function ShowMenu() {
  ulMenu.style.cssText = `
      position: absolute;
      display: flex;
      flex-direction: column;
      top: 100%;
      background: #9e9e9ebf;
      width: 100%;
      height: 490px;
  `;
}

let cardsHading = document.querySelectorAll(".shopping .cards , #ulMenu ");
window.addEventListener("mouseup" , function () {
  cardsHading.forEach(function (ele) {
    if (event.target != ele) {
      ele.style.display = "none";
    };
  });
});

//                   End Menu
//                    shopping
let shopping = document.querySelector(".shopping i");
let cards = document.querySelector(".shopping .cards");
shopping.onclick = function () {
  cards.style.display = "flex";
};
//                 Changing_straps
function changeImg(img) {
  let imgChangie = document.querySelector("#imgChangie");
  imgChangie.setAttribute("src", img);
}
//                Changing_straps
//                   Paragraph
let contant = document.querySelector("#Contant");
let imgeParagraph_1 = document.querySelector(".Paragraph > img");
function Paragraph() {
  contant.style.opacity = "100%";
  contant.style.transform = "translateX(0%)";
  imgeParagraph_1.style.opacity = "100%";
  imgeParagraph_1.style.transform = "translateX(0%)";
}

//                      ScrolllY UP
let upArrow = document.getElementById("upArrow");
function upArrow14PX() {
  upArrow.style.right = "14px";
}
function upArrow40PX() {
  upArrow.style.right = "-40px";
}
upArrow.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
//                     End ScrolllY UP
let spans = document.querySelectorAll(".colorWatch span");
//               If Condition Scroll
window.onscroll = function () {
  if (scrollY >= 300) {
    upArrow14PX();
  } else if (scrollY <= 300) {
    upArrow40PX();
  }
  // if (scrollY >= 700 ) {
  //   Paragraph(); // //section_11.offsetTop
  // }
  let section_2 = document.querySelector(".section_2")
  if (window.scrollY >= section_2.offsetTop) {
    Paragraph();
  }
  let section_3 = document.querySelector(".section_3")

  let spans = document.querySelectorAll(".colorWatch span");
  if (scrollY >= 1700) {
    spans[0].style.width = "80%";
    spans[1].style.width = "20%";
    spans[2].style.width = "40%";
    spans[3].style.width = "60%";
  }

  ShowWatch();
  //                          section_5 Video
  if (scrollY >= 3572) {
    textVideo();
  } else {


  }

  //                       End  section_5 Video
  //                    Start  section_6 Table Text
  if (scrollY >= 4221) {
    TableTitile_One();
  }

  //                         section_8
  let container = document.querySelector(".section_8 .container");
  let switchImges = document.querySelectorAll(".section_8 img");
  let p = document.querySelectorAll(".section_8 p");
  let h1 = document.querySelectorAll(".section_8 h1");
  if (scrollY >= 5957) {
    switchImges[0].style.transform = "translateX(0%)";
    p[0].style.transform = "translateX(0%)";
    h1[0].style.transform = "translateY(0%)";
  } else {
    switchImges[0].style.transform = "translateX(-250%)";
    p[0].style.transform = "translateX(200%)";
    h1[0].style.transform = "translateX(-250%)";
  }
  if (scrollY >= 7380) {
    switchImges[0].style.transform = "translateX(-250%)";
    p[0].style.transform = "translateX(200%)";
    h1[0].style.transform = "translateY(-250%)";
    switchImges[1].style.transform = "translateX(0%)";
    p[1].style.transform = "translateX(0%)";
    h1[1].style.transform = "translateY(0%)";
  } else {
    switchImges[1].style.transform = "translateX(-250%)";
    p[1].style.transform = "translateX(200%)";
    h1[1].style.transform = "translateY(-250%)";
  }

  if (scrollY >= 8380) {
    switchImges[2].style.transform = "translateX(0%)";
    p[2].style.transform = "translateX(0%)";
    h1[2].style.transform = "translateY(0%)";
    switchImges[1].style.transform = "translateX(-250%)";
    p[1].style.transform = "translateX(200%)";
    h1[1].style.transform = "translateY(-250%)";
  } else {
    switchImges[2].style.transform = "translateX(-250%)";
    p[2].style.transform = "translateX(200%)";
    h1[2].style.transform = "translateY(-250%)";
  }
  if (scrollY >= 9380) {
    switchImges[2].style.transform = "translateX(-250%)";
    p[2].style.transform = "translateX(200%)";
    h1[2].style.transform = "translateY(-250%)";
    switchImges[3].style.transform = "translateX(0%)";
    p[3].style.transform = "translateX(0%)";
    h1[3].style.transform = "translateY(0%)";
  } else {
    switchImges[3].style.transform = "translateX(-250%)";
    p[3].style.transform = "translateX(200%)";
    h1[3].style.transform = "translateY(-250%)";
  }
  if (scrollY >= 10380) {
    switchImges[3].style.transform = "translateX(-250%)";
    p[3].style.transform = "translateX(200%)";
    h1[3].style.transform = "translateY(-250%)";
    switchImges[4].style.transform = "translateX(0%)";
    p[4].style.transform = "translateX(0%)";
    h1[4].style.transform = "translateY(0%)";
  } else {
    switchImges[4].style.transform = "translateX(-250%)";
    p[4].style.transform = "translateX(200%)";
    h1[4].style.transform = "translateY(-250%)";
  }

  //                   section_12
  let section_11 = document.querySelector(".section_11");

  let logoAndPAndText = document.querySelectorAll('.section_12 h1 , .section_12 p , .section_12 .logo_Apple img')

if (scrollY >= section_11.offsetTop) {
    document.body.style.background = "black";
}else {
  document.body.style.background = "#ffffff";
}
if (scrollY >= section_11.offsetTop + 300 ) {
          logoAndPAndText.forEach(function (ele) {
            ele.style.transform = "translateY(0%)";
          });
}else {
  logoAndPAndText.forEach(function (ele) {
    ele.style.transform = "translateY(309%)";
  });
}


//                   section_7


let sections = document.querySelectorAll(".section_2 ,  section_3 , section_4 , section_5 , section_6 , section_7 , section_8 , section_10 , section_10 , section_13 ,footer ")
let titleHeader  = document.querySelectorAll(".TitleHeader");
if (scrollY >= sections[0].offsetTop - 500) {
  titleHeader.forEach((i) => {
    i.style.opacity = "1"
  });

}


};
//           Start Section 4
//            Photo Gallery

let imgesSlider = document.querySelector(".slider .imges img");
let imgeButton = document.querySelector(".slider .imgeButton img");
function Next(imgNext) {
  imgesSlider.setAttribute("src", `images/photoGallery/${imgNext}.jpg`);
}


function ShowWatch() {
  let paragraph_2 = document.querySelector("#paragraph_2");
  let img_paragraph_2 = document.querySelector(
    ".section_4 .container .imge img"
  );
  if (scrollY >= 2642) {
    paragraph_2.style.opacity = "100%";
    paragraph_2.style.left = "0%";
    img_paragraph_2.style.opacity = "100%";
    img_paragraph_2.style.right = "0%";
  }
}

//                 Start Video Section_5
let video = document.querySelector("video");
let play_stop = document.querySelectorAll(".playVideo > *");
let movePlayAndStop = document.querySelector(".movePlayAndStop");
let screen_Video = document.querySelector(".screen");
function fa_play() {
  video.play();
  movePlayAndStop.style.transform = "translateX(0%)";
  screen_Video.style.opacity = "0%";
}
function fa_stop() {
  video.pause();
  movePlayAndStop.style.transform = "translateX(-20%)";
  screen_Video.style.opacity = "100%";
}
//                    Next Video And back Video
function NextVideo(next) {
  video.src = next;
  fa_stop();
}
function backtVideo(back) {
  video.src = back;
  fa_stop();
}
// اول ما الفيديو يخلص يشغل فانكشن الاستوب
video.addEventListener("ended", function () {
  fa_stop();
});

//                     Next Video And back Video

//                          volume Video
let volumeicon = document.querySelectorAll(".volume > i");

function volumeX() {
  video.volume = 1;
  volumeicon[0].style.display = "none";
  volumeicon[1].style.display = "block";
}
function volume() {
  video.volume = 0;
  volumeicon[1].style.display = "none";
  volumeicon[0].style.display = "block";
}

//                         volume Video

let text_Video = document.querySelectorAll(".section_5 .text p , .section_5 .text h1");
function textVideo() {
  text_Video[0].style.transform = "translateY(0%)";
  text_Video[1].style.transform = "translateY(0%)";
}

//                         End Video Section_5
//                        Statr section_6 Table
//                           text  Table 1
function TableTitile_One() {
  let tableTitile = document.querySelectorAll(".section_6 .text h1");
  tableTitile[0].style.transform = "translateY(-20%)";
  tableTitile[1].style.transform = "translateY(-20%)";
}
//                       End text  Table 1
//                     Statr section_6 Table

//                        start section_7
//                   Start Change Color Watchs
let imageChangColor = document.querySelector("#imagesss");
function changeColorWatchs(img) {
  imageChangColor.setAttribute("src", `images/ChangeColor/${img}.png`);
}



//                            End section_7
//                       End Change Color Watchs


window.addEventListener("load" , function () {
  let backgroundIgeAndContant = document.querySelectorAll(".background , .section_1 .contant");
    backgroundIgeAndContant.forEach((item) => {
      item.style.opacity = "1"
    });

    let text_buttonContant = document.querySelectorAll(".text_button >* ")
    text_buttonContant.forEach((i) => {
      i.style.transform = "translateY(0)";
    });

})
