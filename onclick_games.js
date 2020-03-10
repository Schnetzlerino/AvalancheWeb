var rl = document.getElementById("left");
var csgo = document.getElementById("center");
var lol = document.getElementById("right");
var icon1 = document.getElementById("lefticon");
var icon2 = document.getElementById("centericon");
var icon3 = document.getElementById("righticon");
var rlcontainer = document.getElementById("rlcon");
var csgocontainer = document.getElementById("csgocon");
var lolcontainer = document.getElementById("lolcon");
var rlcontentcenter = document.getElementById("hrlcc");
var rlcontentright = document.getElementById("hrlcr")
var csgocontentleft = document.getElementById("hcsgocl");
var csgocontentright = document.getElementById("hcsgocr");
var lolcontentleft = document.getElementById("hlolcl");
var lolcontentcenter = document.getElementById("hlolcc")
var expanded = false;
var rlimg = false;
var csgoimg = false;
var lolimg = false;
var bodybackground = false;
var gamecontent = false;

icon1.addEventListener("click", function(e){ 
  growshrinkchangerl(rl, [csgo, lol], [csgocontainer, rlcontainer, lolcontainer], [csgocontainer, rlcontainer, lolcontainer]); 
});

icon2.addEventListener("click", function(e){ 
  growshrinkchangecsgo(csgo, [lol, rl], [csgocontainer, rlcontainer, lolcontainer], [csgocontainer, rlcontainer, lolcontainer]); 
});

icon3.addEventListener("click", function(e){ 
  growshrinkchangelol(lol, [csgo, rl], [csgocontainer, rlcontainer, lolcontainer], [csgocontainer, rlcontainer, lolcontainer]); 
});

function growshrinkchangerl(grow, shrink, change){
  if(expanded, rlimg, bodybackground, gamecontent){
      lol.setAttribute("class", "content"); 
      csgo.setAttribute("class", "content");
      rl.setAttribute("class", "content");
      expanded = false;
      csgocontainer.style.backgroundImage = ("url('images/backgrounds/csgo_background.jpg')");
      rlcontainer.style.backgroundImage = ("url('images/backgrounds/rl_background.jpg')");
      lolcontainer.style.backgroundImage = ("url('images/backgrounds/lol_background.jpg')");
      rlimg = false;
      document.body.style.backgroundImage = ("url('images/backgrounds/mountain_wallpaper2.jpg')");
      bodybackground = false;
      rlcontentcenter.style.display = "none";
      rlcontentright.style.display = "none";
      gamecontent = false;
      return;
  }
  grow.setAttribute("class", "expanded");
  shrink.forEach(shrink => shrink.setAttribute("class", "shrunk"));
  change.forEach(change => change.style.backgroundColor = ("transparent"));
  change.forEach(change => change.style.backgroundImage = ("none"));
  document.body.style.backgroundImage = ("url('images/backgrounds/rl_background.jpg')");
  rlcontentcenter.style.display = "flex";
  rlcontentright.style.display = "flex";
  expanded = true;
  rlimg = true;
  bodybackground = true;
  gamecontent = true;
}

function growshrinkchangecsgo(grow, shrink, change){
  if(expanded, csgoimg, bodybackground, gamecontent){
      lol.setAttribute("class", "content"); 
      csgo.setAttribute("class", "content");
      rl.setAttribute("class", "content");
      expanded = false;
      csgocontainer.style.backgroundImage = ("url('images/backgrounds/csgo_background.jpg')");
      rlcontainer.style.backgroundImage = ("url('images/backgrounds/rl_background.jpg')");
      lolcontainer.style.backgroundImage = ("url('images/backgrounds/lol_background.jpg')");
      csgoimg = false;
      document.body.style.backgroundImage = ("url('images/backgrounds/mountain_wallpaper2.jpg')");
      bodybackground = false;
      csgocontentleft.style.display = "none";
      csgocontentright.style.display = "none";
      gamecontent = false;
      return;
  }
  grow.setAttribute("class", "expanded");
  shrink.forEach(shrink => shrink.setAttribute("class", "shrunk"));
  change.forEach(change => change.style.backgroundColor = ("transparent"));
  change.forEach(change => change.style.backgroundImage = ("none"));
  document.body.style.backgroundImage = ("url('images/backgrounds/csgo_background.jpg')");
  csgocontentleft.style.display = "flex";
  csgocontentright.style.display = "flex";
  expanded = true;
  csgoimg = true;
  bodybackground = true;
  gamecontent = true;
}

function growshrinkchangelol(grow, shrink, change){
  if(expanded, lolimg, bodybackground, gamecontent){
      lol.setAttribute("class", "content"); 
      csgo.setAttribute("class", "content");
      rl.setAttribute("class", "content");
      expanded = false;
      csgocontainer.style.backgroundImage = ("url('images/backgrounds/csgo_background.jpg')");
      rlcontainer.style.backgroundImage = ("url('images/backgrounds/rl_background.jpg')");
      lolcontainer.style.backgroundImage = ("url('images/backgrounds/lol_background.jpg')");
      lolimg = false;
      document.body.style.backgroundImage = ("url('images/backgrounds/mountain_wallpaper2.jpg')");
      bodybackground = false;
      lolcontentleft.style.display = "none";
      lolcontentcenter.style.display = "none";
      gamecontent = false;
      return;
  }
  grow.setAttribute("class", "expanded");
  shrink.forEach(shrink => shrink.setAttribute("class", "shrunk"));
  change.forEach(change => change.style.backgroundColor = ("transparent"));
  change.forEach(change => change.style.backgroundImage = ("none"));
  document.body.style.backgroundImage = ("url('images/backgrounds/lol_background.jpg')");
  lolcontentleft.style.display = "flex";
  lolcontentcenter.style.display = "flex";
  expanded = true;
  lolimg = true;
  bodybackground = true;
  gamecontent = true;
}