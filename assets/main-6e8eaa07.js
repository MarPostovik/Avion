import"./animate-94c0c353.js";let o=document.getElementById("gamburger-menu-icon"),s=document.querySelector(".bottom-line-nav"),e=document.querySelector("nav");o.addEventListener("click",()=>{s.style.display==="flex"?(s.style.display="none",e.classList.add("animate__fadeOutLeft"),setTimeout(()=>{e.classList.remove("active"),e.classList.remove("animate__fadeOutLeft")},500),e.classList.remove("animate__fadeInLeft"),o.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M14 3H2V4H14V3Z" fill="#2A254B"/>
                          <path d="M14 12H2V13H14V12Z" fill="#2A254B"/>
                          <path d="M14 6H2V7H14V6Z" fill="#2A254B"/>
                          <path d="M14 9H2V10H14V9Z" fill="#2A254B"/>
                        </svg>`):(s.style.display="flex",e.classList.add("active"),e.classList.add("animate__fadeInLeft"),o.innerHTML='<ion-icon name="close-outline" class="close-nav"></ion-icon>')});document.addEventListener("DOMContentLoaded",function(){let d=document.getElementsByClassName("link-item");for(let n=0;n<d.length;n++){let t=d[n];t.addEventListener("click",function(r){let i=t.getAttribute("data-category"),l=t.getAttribute("data-sort");if(i!=null){let a=t.getAttribute("href")+"?category="+encodeURIComponent(i);window.location.href=a,r.preventDefault()}else if(l!=null){let a=t.getAttribute("href")+"?sortOption="+encodeURIComponent(l);window.location.href=a,r.preventDefault()}})}});
