import"./animate-b41a42d0.js";let i=document.getElementById("gamburger-menu-icon"),l=document.querySelector(".bottom-line-nav"),e=document.querySelector("nav");i.addEventListener("click",()=>{l.style.display==="flex"?(l.style.display="none",e.classList.add("animate__fadeOutLeft"),setTimeout(()=>{e.classList.remove("active"),e.classList.remove("animate__fadeOutLeft")},500),e.classList.remove("animate__fadeInLeft"),i.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M14 3H2V4H14V3Z" fill="#2A254B"/>
                          <path d="M14 12H2V13H14V12Z" fill="#2A254B"/>
                          <path d="M14 6H2V7H14V6Z" fill="#2A254B"/>
                          <path d="M14 9H2V10H14V9Z" fill="#2A254B"/>
                        </svg>`):(l.style.display="flex",e.classList.add("active"),e.classList.add("animate__fadeInLeft"),i.innerHTML='<ion-icon name="close-outline" class="close-nav"></ion-icon>')});document.addEventListener("DOMContentLoaded",function(){let a=document.getElementsByClassName("link-item");for(let t=0;t<a.length;t++){let n=a[t];n.addEventListener("click",function(o){let s=n.getAttribute("data-category"),d=n.getAttribute("href")+"?category="+encodeURIComponent(s);window.location.href=d,o.preventDefault()})}});