
function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()

var clutter = "";

document.querySelector("#page2>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page2>h1").innerHTML = clutter;
})

gsap.to("#page2>h1>span",{
    scrollTrigger:{
        trigger:`#page2>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#fff`
})

function canvas(){
    const canvas = document.querySelector("#page3>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
    ./1000.png
    ./1001.png
    ./1002.png
    ./1003.png
    ./1004.png
    ./1005.png
    ./1006.png
    ./1007.png
    ./1008.png
    ./1009.png
    ./1010.png
    ./1011.png
    ./1012.png
    ./1013.png
    ./1014.png
    ./1015.png
    ./1016.png
    ./1017.png
    ./1018.png
    ./1019.png
    ./1020.png
    ./1021.png
    ./1022.png
    ./1023.png
    ./1024.png
    ./1025.png
    ./1026.png
    ./1027.png
    ./1028.png
    ./1029.png
    ./1030.png
    ./1031.png
    ./1032.png
    ./1033.png
    ./1034.png
    ./1035.png
    ./1036.png
    ./1037.png
    ./1038.png
    ./1039.png
    ./1040.png
    ./1041.png
    ./1042.png
    ./1043.png
    ./1044.png
    ./1045.png
    ./1046.png
    ./1047.png
    ./1048.png
    ./1049.png
    ./1050.png
    ./1051.png
    ./1052.png
    ./1053.png
    ./1054.png
    ./1055.png
    ./1056.png
    ./1057.png
    ./1058.png
    ./1059.png
    ./1060.png
    ./1061.png
    ./1062.png
    ./1063.png
    ./1064.png
    ./1065.png
    ./1066.png
    ./1067.png
    ./1068.png
    ./1069.png
    ./1070.png
    ./1071.png
    ./1072.png
    ./1073.png
    ./1074.png
    ./1075.png
    ./1076.png
    ./1077.png
    ./1078.png
    ./1079.png
    ./1080.png
    ./1081.png
    ./1082.png
    ./1083.png
    ./1084.png
    ./1085.png
    ./1086.png
    ./1087.png
    ./1088.png
    ./1089.png
    ./1090.png
    ./1091.png
 `;
  return data.split("\n")[index];
}

const frameCount = 91;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page3`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page3",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
});
}
canvas()


var clutter = "";
document.querySelector("#page4>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page4>h1").innerHTML = clutter;
})

gsap.to("#page4>h1>span",{
    scrollTrigger:{
        trigger:`#page4>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#fff`
})



function canvas1(){
    const canvas = document.querySelector("#page5>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  ./scene00001.png
./scene00002.png
./scene00003.png
./scene00004.png
./scene00005.png
./scene00006.png
./scene00007.png
./scene00008.png
./scene00009.png
./scene00010.png
./scene00011.png
./scene00012.png
./scene00013.png
./scene00014.png
./scene00015.png
./scene00016.png
./scene00017.png
./scene00018.png
./scene00019.png
./scene00020.png
./scene00021.png
./scene00022.png
./scene00023.png
./scene00024.png
./scene00025.png
./scene00026.png
./scene00027.png
./scene00028.png
./scene00029.png
./scene00030.png
./scene00031.png
./scene00032.png
./scene00033.png
./scene00034.png
./scene00035.png
./scene00036.png
./scene00037.png
./scene00038.png
./scene00039.png
./scene00040.png
./scene00041.png
./scene00042.png
./scene00043.png
./scene00044.png
./scene00045.png
./scene00046.png
./scene00047.png
./scene00048.png
./scene00049.png
./scene00050.png
./scene00051.png
./scene00052.png
./scene00053.png
./scene00054.png
./scene00055.png
./scene00056.png
./scene00057.png
./scene00058.png
./scene00059.png
./scene00060.png
./scene00061.png
./scene00062.png
./scene00063.png
./scene00064.png
./scene00065.png
./scene00066.png
./scene00067.png
./scene00068.png
./scene00069.png
./scene00070.png
./scene00071.png
./scene00072.png
 `;
  return data.split("\n")[index];
}

const frameCount = 72;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page5`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page5",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
});
}
canvas1()

var clutter = "";
document.querySelector("#page6>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page6>h1").innerHTML = clutter;
})

gsap.to("#page6>h1>span",{
    scrollTrigger:{
        trigger:`#page6>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#fff`
})

function canvas2(){
    const canvas = document.querySelector("#page7>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  ./333011.png
./333012.png
./333013.png
./333014.png
./333015.png
./333016.png
./333017.png
./333018.png
./333019.png
./333020.png
./333021.png
./333022.png
./333023.png
./333024.png
./333025.png
./333026.png
./333027.png
./333028.png
./333029.png
./333030.png
./333031.png
./333032.png
./333033.png
./333034.png
./333035.png
./333036.png
./333037.png
./333038.png
./333039.png
./333040.png
./333041.png
./333042.png
./333043.png
./333044.png
./333045.png
./333046.png
./333047.png
./333048.png
./333049.png
./333050.png
./333051.png
./333052.png
./333053.png
./333054.png
./333055.png
./333056.png
./333057.png
./333058.png
./333059.png
./333060.png
./333061.png
./333062.png
./333063.png
./333064.png
./333065.png
./333066.png
./333067.png
./333068.png
./333069.png
./333070.png
./333071.png
./333072.png
./333073.png
./333074.png
./333075.png
./333076.png
./333077.png
./333078.png
./333079.png
./333080.png
./333081.png
./333082.png
./333083.png
./333084.png
./333085.png
./333086.png
./333087.png
./333088.png
./333089.png
./333090.png
./333091.png
./333092.png
./333093.png
./333094.png
./333095.png
./333096.png
./333097.png
./333098.png
./333099.png
./333100.png
./333101.png
./333102.png
./333103.png
./333104.png
./333105.png
./333106.png
./333107.png
./333108.png
./333109.png
./333110.png
./333111.png
./333112.png
./333113.png
./333114.png
./333115.png
./333116.png
./333117.png
./333118.png
./333119.png
./333120.png
./333121.png
./333122.png
./333123.png
./333124.png
./333125.png
./333126.png
./333127.png
./333128.png
./333129.png
./333130.png
./333131.png
./333132.png
./333133.png
./333134.png
./333135.png
./333136.png
./333137.png
./333138.png
./333139.png
./333140.png
./333141.png
./333142.png
./333143.png
./333144.png
./333145.png
./333146.png
./333147.png
./333148.png
./333149.png
./333150.png
./333151.png
./333152.png
./333153.png
./333154.png
./333155.png
./333156.png
./333157.png
./333158.png
./333159.png
./333160.png
./333161.png
./333162.png
./333163.png
./333164.png
./333165.png
./333166.png
./333167.png
./333168.png
./333169.png
./333170.png
./333171.png
./333172.png
./333173.png
./333174.png
./333175.png
./333176.png
./333177.png
./333178.png
./333179.png
./333180.png
./333181.png
./333182.png
./333183.png
./333184.png
./333185.png
./333186.png
./333187.png
./333188.png
./333189.png
./333190.png
./333191.png
./333192.png
./333193.png
./333194.png
./333195.png
./333196.png
./333197.png
./333198.png
./333199.png
./333200.png
./333201.png
./333202.png
./333203.png
./333204.png
./333205.png
./333206.png
./333207.png
./333208.png
./333209.png
./333210.png
./333211.png
 `;
  return data.split("\n")[index];
}

const frameCount = 200;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page7`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page7",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
});
}
canvas2()

function gototest(){
  var newpage="testdrive.html";

    window.location.href=newpage;
}

function gototwitter(){
  var newpage="https://twitter.com/Porsche?";

    window.location.href=newpage;
}