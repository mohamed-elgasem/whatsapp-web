let bars = document.querySelector(".bars");
let links_open = document.querySelector(".links");
bars.onclick = () => {
  links_open.classList.toggle("open");
};
//======================================================\\
let gear = document.querySelector(".setting-gear");
let control = document.querySelector(".control");
gear.onclick = function () {
  control.classList.toggle("hide");
  gear.children[0].classList.toggle("fa-spin");
};
//======================================================\\


//======================================================\\
let headFixed = document.querySelector(".landing .container");
let skillProgress = document.querySelectorAll(".skills li .prog-div .progress");
let skillSection = document.querySelector(".skills");
let scroling = document.querySelector(".scroller");
let scrollProgress = document.querySelectorAll(".scroll-progress ul li");
let toTopPage = document.querySelector(".upArrow");
let fixedHead = document.querySelectorAll(".control .fixed-header ul li");
let progSpan = document.querySelector(".scroller");
//======================================================\\
if (localStorage.getItem("progess")) {
  let storageProgress = localStorage.getItem("progess");
  if (storageProgress == "yes") {
    progSpan.classList.remove("no-prog");
    scrollProgress.forEach((prog) => {
      prog.classList.remove("active");
    });
    scrollProgress[0].classList.add("active");
  } else if (storageProgress == "no") {
    progSpan.classList.add("no-prog");
    scrollProgress.forEach((prog) => {
      prog.classList.remove("active");
    });
    scrollProgress[1].classList.add("active");
  }
}
if (localStorage.getItem("headFix")) {
  if (localStorage.getItem("headFix") == "yes") {
    fixedHead.forEach((li) => {
      li.classList.remove("active");
      headFixed.classList.add("fixed");
      fixedHead[0].classList.add("active");
    });
  } else if (localStorage.getItem("headFix") == "no") {
    fixedHead.forEach((li) => {
      li.classList.remove("active");
      fixedHead[1].classList.add("active");
    });
  }
}
//======================================================\\
// let bars = document.querySelector(".landing .header .bars");
window.onscroll = () => {
    if (window.scrollY >= skillSection.offsetTop - 350) {
      skillProgress.forEach((span) => {
        span.style.width = span.dataset.width;
      });
    } else
      skillProgress.forEach((span) => {
        span.style.width = 0;
      });
  
    if (window.scrollY > 0) {
      scroling.style.cssText = `max-width:100%`;
      let width =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let top = document.documentElement.scrollTop;
      scroling.style.width = `${(top / width) * 100}%`;
    } else scroling.style.width = `0px`;
  
    if (window.scrollY >= 900) {
      toTopPage.style.display = "block";
    } else toTopPage.style.display = "none";
  
    toTopPage.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
  
    if (window.scrollY >= 900) {
      headFixed.classList.add("bg");
    } else if (window.scrollY <= 10) {
      headFixed.classList.remove("bg");
    }
  };
  scrollProgress.forEach((li) => {
    li.addEventListener("click", (e) => {
      e.target.parentElement.querySelectorAll(".active").forEach((elem) => {
        elem.classList.remove("active");
        e.target.classList.add("active");
        localStorage.setItem("progess", e.target.dataset.scroll);
        if (e.target.dataset.scroll == "no") {
          progSpan.classList.add("no-prog");
        } else progSpan.classList.remove("no-prog");
      });
    });
  });
  fixedHead.forEach((li) => {
    li.addEventListener("click", (e) => {
      if (e.target.classList.contains("yes")) {
        e.target.parentElement.querySelectorAll(".active").forEach((el) => {
          el.classList.remove("active");
          e.target.classList.add("active");
          headFixed.classList.add("fixed");
          localStorage.setItem("headFix", "yes");
        });
      } else if (e.target.classList.contains("no")) {
        e.target.parentElement.querySelectorAll(".active").forEach((el) => {
          el.classList.remove("active");
          e.target.classList.add("active");
          headFixed.classList.remove("fixed");
          localStorage.setItem("headFix", "no");
        });
      }
    });
  });
  
  