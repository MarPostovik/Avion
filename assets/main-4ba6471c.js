import"./SearchModal-f36a9c89.js";let r=document.getElementById("gamburger-menu-icon"),s=document.querySelector(".bottom-line-nav"),t=document.querySelector("nav");r.addEventListener("click",()=>{s.style.display==="flex"?(s.style.display="none",t.classList.add("animate__fadeOutLeft"),setTimeout(()=>{t.classList.remove("active"),t.classList.remove("animate__fadeOutLeft")},500),t.classList.remove("animate__fadeInLeft"),r.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M14 3H2V4H14V3Z" fill="#2A254B"/>
                          <path d="M14 12H2V13H14V12Z" fill="#2A254B"/>
                          <path d="M14 6H2V7H14V6Z" fill="#2A254B"/>
                          <path d="M14 9H2V10H14V9Z" fill="#2A254B"/>
                        </svg>`):(s.style.display="flex",t.classList.add("active"),t.classList.add("animate__fadeInLeft"),r.innerHTML='<ion-icon name="close-outline" class="close-nav"></ion-icon>')});document.addEventListener("DOMContentLoaded",function(){let n=document.getElementsByClassName("link-item");for(let e=0;e<n.length;e++){let l=n[e];l.addEventListener("click",function(d){let i=l.getAttribute("data-category"),o=l.getAttribute("data-sort");if(i!=null){let a=l.getAttribute("href")+"?category="+encodeURIComponent(i);window.location.href=a,d.preventDefault()}else if(o!=null){let a=l.getAttribute("href")+"?sortOption="+encodeURIComponent(o);window.location.href=a,d.preventDefault()}})}});let u=document.querySelector(".searchBtn");u.addEventListener("click",function(){let n=document.getElementById("searchInput"),e=document.getElementById("searchInput").value.toLowerCase();e.trim()===""?(document.querySelector(".warning").style.display="block",n.style.border="1px solid red"):(window.location.href="/avion/product-listing.html?search="+e,document.querySelector(".warning").innerHTML.style.display="none",n.style.border="none")});
