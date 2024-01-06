import"./SearchModal-704d17e1.js";import"./addingToCart-3ffcca3f.js";let L=document.getElementById("gamburger-menu-icon"),f=document.querySelector(".bottom-line-nav"),s=document.querySelector("nav");L.addEventListener("click",()=>{f.style.display==="flex"?(f.style.display="none",s.classList.add("animate__fadeOutLeft"),setTimeout(()=>{s.classList.remove("active"),s.classList.remove("animate__fadeOutLeft")},500),s.classList.remove("animate__fadeInLeft"),L.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M14 3H2V4H14V3Z" fill="#2A254B"/>
                          <path d="M14 12H2V13H14V12Z" fill="#2A254B"/>
                          <path d="M14 6H2V7H14V6Z" fill="#2A254B"/>
                          <path d="M14 9H2V10H14V9Z" fill="#2A254B"/>
                        </svg>`):(f.style.display="flex",s.classList.add("active"),s.classList.add("animate__fadeInLeft"),L.innerHTML='<ion-icon name="close-outline" class="close-nav"></ion-icon>')});window.addEventListener("resize",function(){f.style.display==="flex"&&(f.style.display="none",s.classList.add("animate__fadeOutLeft"),setTimeout(()=>{s.classList.remove("active"),s.classList.remove("animate__fadeOutLeft")},500),s.classList.remove("animate__fadeInLeft"),L.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M14 3H2V4H14V3Z" fill="#2A254B"/>
                          <path d="M14 12H2V13H14V12Z" fill="#2A254B"/>
                          <path d="M14 6H2V7H14V6Z" fill="#2A254B"/>
                          <path d="M14 9H2V10H14V9Z" fill="#2A254B"/>
                        </svg>`)});document.addEventListener("DOMContentLoaded",function(){let e=document.getElementsByClassName("link-item");for(let c=0;c<e.length;c++){let t=e[c];t.addEventListener("click",function(o){let l=t.getAttribute("data-category"),i=t.getAttribute("data-sort");if(l!=null){let a=t.getAttribute("href")+"?category="+encodeURIComponent(l);window.location.href=a,o.preventDefault()}else if(i!=null){let a=t.getAttribute("href")+"?sortOption="+encodeURIComponent(i);window.location.href=a,o.preventDefault()}})}});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".products-added-to-cart"),c=document.getElementById("total-price"),t=document.querySelectorAll(".cart-count");let o=JSON.parse(localStorage.getItem("cart"))||[];function l(){e&&(e.innerHTML="");const a=document.getElementById("checkout-btn");o.length===0&&(a.setAttribute("disabled",""),a.style.background="rgb(174 172 172)");let r=0;o.forEach((n,g)=>{const d=document.createElement("div");d.classList.add("product-item"),d.innerHTML=`
                   <div class="product-photo-in-cart">
                     <img src="${n.photo}" alt="product">
                   </div>
                   <div class="product-text">
                       <p class="product-name">${n.title}</p>
                       <p class="product-desc">${n.description}</p>
                       <p class="product-price">£<span>${n.price}</span></p>
                  </div>
                   <div class="product-quantity">
                    <span class="value">${n.quantity}</span>
                    <button class="remove-quantity">-</button>
                    <button class="add-quantity">+</button>
                  </div>
                  <p class="product-price-right">£<span>${n.wholePrice}</span></p>
                 
                  `;const S=d.querySelector(".add-quantity"),E=d.querySelector(".remove-quantity");S.addEventListener("click",function(){n.quantity=n.quantity+1,n.wholePrice=n.quantity*n.price,i(),l(),u()}),E.addEventListener("click",function(){n.quantity>1&&(n.quantity=n.quantity-1,n.wholePrice=n.quantity*n.price,i(),l(),u())});const y=document.createElement("button");y.classList.add("delete-btn"),y.textContent="DELETE",y.addEventListener("click",()=>{o.splice(g,1),l(),i(),u(),t.forEach(b=>{b.textContent=o.length,o.length===0&&(e.innerHTML='<p class="product-name" id="empty-cart">The cart is empty</p>')})}),d.appendChild(y),e.appendChild(d),document.querySelector(".checkout-form").addEventListener("submit",function(){o.splice(0,o.length),l(),i(),u(),e.innerHTML='<p class="product-name" id="empty-cart">The cart is empty</p>'});const _=parseFloat(n.wholePrice);r+=_});let p=document.querySelectorAll(".total-price-checkout");c&&(c.textContent=r),p[0].innerText=r,p[1].innerText=r}function i(){let a=0;o.forEach(r=>{const p=parseFloat(r.wholePrice);a+=p}),c&&(c.textContent=a)}function u(){localStorage.setItem("cart",JSON.stringify(o))}l(),i(),document.querySelectorAll(".addToCardBtn").forEach(a=>{a.addEventListener("click",()=>{const r=this.parentElement.parentElement.parentElement.parentElement;let p=r.querySelector(".product-photo img").getAttribute("src"),n=r.querySelector(".product-name").innerHTML,g=r.querySelector(".product-price").innerHTML.slice(1),d=r.querySelector(".product__description").innerHTML,S=Number(r.querySelector(".product-quantity .value").innerText);o.push({productName:n,productPhoto:p,productQuantity:S,productDescription:d,productPrice:g}),l(),i(),u()})}),t[0].innerText==0&&(e.innerHTML='<p class="product-name" id="empty-cart">The cart is empty</p>')});let w=document.querySelector(".searchBtn");w.addEventListener("click",function(){let e=document.getElementById("searchInput"),c=document.getElementById("searchInput").value.toLowerCase();c.trim()===""?(document.querySelector(".warning").style.display="block",e.style.border="1px solid red"):(window.location.href="/avion/product-listing.html?search="+c,document.querySelector(".warning").innerHTML.style.display="none",e.style.border="none")});function k(e){document.querySelectorAll(e).forEach(t=>{t.value=""})}let h=document.getElementById("SubsribtionModal"),q=document.querySelectorAll(".subscribtionForm");for(let e=0;e<q.length;e++){let c=document.getElementById("close-Subsribtion-Modal");q[e].addEventListener("submit",function(t){t.preventDefault(),k(".sign-up-email"),setTimeout(function(){h.style.display="flex",h.querySelector(".search-modal__container").classList.add("animate__animated"),h.querySelector(".search-modal__container").classList.add("animate__backInDown")},500)}),c.addEventListener("click",()=>{h.style.display="none"})}window.addEventListener("DOMContentLoaded",function(){let e=JSON.parse(localStorage.getItem("userInformation"))||[];if(e.length!=0&&e.userInfo.registered){let t=e.userInfo.userPhoto,o;t!=null&&t!=null?o=`<img  class="selected-image" src="${t}" alt="user photo">`:o='<svg class="default-photo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c39.77 0 72 32.24 72 72S295.8 272 256 272c-39.76 0-72-32.24-72-72S216.2 128 256 128zM256 448c-52.93 0-100.9-21.53-135.7-56.29C136.5 349.9 176.5 320 224 320h64c47.54 0 87.54 29.88 103.7 71.71C356.9 426.5 308.9 448 256 448z"/></svg>';let l=document.querySelector(".user");l.innerHTML=o}});let M=document.querySelector("#closeCheckoutForm"),m=document.querySelector(".checkout"),B=document.getElementById("checkout-btn");M.addEventListener("click",function(){m.style.display="none"});B.addEventListener("click",function(){m.style.display="flex",m.querySelector(".checkout__content").classList.add("animate__animated"),m.querySelector(".checkout__content").classList.add("animate__fadeIn")});let H=document.querySelector(".checkout__reset-btn");H.addEventListener("click",function(){m.style.display="none"});let T=document.querySelector(".checkout-form");T.addEventListener("submit",function(e){e.preventDefault(),m.style.display="none",C(),setTimeout(function(){v.style.display="flex",v.querySelector(".second-modal__wrapper").classList.add("animate__animated"),v.querySelector(".second-modal__wrapper").classList.add("animate__backInDown")},500)});let I=document.querySelector("#closeSecondModal"),v=document.querySelector(".second-modal");I.addEventListener("click",function(){v.style.display="none"});function C(){const e=document.querySelectorAll(".checkout input");document.querySelectorAll(".form__input").forEach(t=>{t.checked=!1}),e.forEach(t=>{t.value=""})}
