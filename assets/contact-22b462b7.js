import"./SearchModal-606c704d.js";let r=document.getElementById("gamburger-menu-icon"),s=document.querySelector(".page-links"),l=document.querySelector("nav");r.addEventListener("click",()=>{s.style.display==="flex"?(s.style.display="none",l.classList.add("animate__fadeOutLeft"),setTimeout(()=>{l.classList.remove("active"),l.classList.remove("animate__fadeOutLeft")},500),l.classList.remove("animate__fadeInLeft"),r.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M14 3H2V4H14V3Z" fill="#2A254B"/>
                          <path d="M14 12H2V13H14V12Z" fill="#2A254B"/>
                          <path d="M14 6H2V7H14V6Z" fill="#2A254B"/>
                          <path d="M14 9H2V10H14V9Z" fill="#2A254B"/>
                        </svg>`):(s.style.display="flex",l.classList.add("active"),l.classList.add("animate__fadeInLeft"),r.innerHTML='<ion-icon name="close-outline" class="close-nav"></ion-icon>')});window.addEventListener("resize",function(){s.style.display==="flex"&&(s.style.display="none",l.classList.add("animate__fadeOutLeft"),setTimeout(()=>{l.classList.remove("active"),l.classList.remove("animate__fadeOutLeft")},500),l.classList.remove("animate__fadeInLeft"),r.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M14 3H2V4H14V3Z" fill="#2A254B"/>
                          <path d="M14 12H2V13H14V12Z" fill="#2A254B"/>
                          <path d="M14 6H2V7H14V6Z" fill="#2A254B"/>
                          <path d="M14 9H2V10H14V9Z" fill="#2A254B"/>
                        </svg>`)});let y=document.getElementById("close-pop-up__btn"),g=document.querySelector(".pop-up");y.addEventListener("click",()=>{g.style.display="none"});document.addEventListener("DOMContentLoaded",function(){let e=document.getElementsByClassName("link-item");for(let n=0;n<e.length;n++){let t=e[n];t.addEventListener("click",function(o){let i=t.getAttribute("data-category"),c=t.getAttribute("data-sort");if(i!=null){let u=t.getAttribute("href")+"?category="+encodeURIComponent(i);window.location.href=u,o.preventDefault()}else if(c!=null){let u=t.getAttribute("href")+"?sortOption="+encodeURIComponent(c);window.location.href=u,o.preventDefault()}})}});let h=document.querySelector(".searchBtn");h.addEventListener("click",function(){let e=document.getElementById("searchInput"),n=document.getElementById("searchInput").value.toLowerCase();n.trim()===""?(document.querySelector(".warning").style.display="block",e.style.border="1px solid red"):(window.location.href="/avion/product-listing.html?search="+n,document.querySelector(".warning").innerHTML.style.display="none",e.style.border="none")});let v=document.querySelector(".contacts__form"),d=document.getElementById("successful-contact-form"),L=document.getElementById("close-successful-contact-form");v.addEventListener("submit",function(e){e.preventDefault(),m(".contacts__input"),m(".contacts__textarea"),setTimeout(function(){d.style.display="flex",d.querySelector(".search-modal__container").classList.add("animate__animated"),d.querySelector(".search-modal__container").classList.add("animate__backInDown")},500)});L.addEventListener("click",()=>{d.style.display="none"});function m(e){document.querySelectorAll(e).forEach(t=>{t.value=""})}let a=document.getElementById("SubsribtionModal"),f=document.querySelectorAll(".subscribtionForm");for(let e=0;e<f.length;e++){let n=document.getElementById("close-Subsribtion-Modal");f[e].addEventListener("submit",function(t){t.preventDefault(),m(".sign-up-email"),setTimeout(function(){a.style.display="flex",a.querySelector(".search-modal__container").classList.add("animate__animated"),a.querySelector(".search-modal__container").classList.add("animate__backInDown")},500)}),n.addEventListener("click",()=>{a.style.display="none"})}window.addEventListener("DOMContentLoaded",function(){let e=JSON.parse(localStorage.getItem("userInformation"))||[];if(e.length!=0&&e.userInfo.registered){let t=e.userInfo.userPhoto,o;t!=null&&t!=null?o=`<img  class="selected-image" src="${t}" alt="user photo">`:o='<svg class="default-photo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c39.77 0 72 32.24 72 72S295.8 272 256 272c-39.76 0-72-32.24-72-72S216.2 128 256 128zM256 448c-52.93 0-100.9-21.53-135.7-56.29C136.5 349.9 176.5 320 224 320h64c47.54 0 87.54 29.88 103.7 71.71C356.9 426.5 308.9 448 256 448z"/></svg>';let i=document.querySelector(".user");i.innerHTML=o}});
