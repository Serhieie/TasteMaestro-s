import{a as y,A as C}from"./vendor-f728e3bf.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const f=document.querySelector(".btn-up");f.addEventListener("click",()=>{window.scrollTo(0,0)});window.onscroll=()=>{window.scrollY>600?(f.classList.remove("visually-hidden"),f.classList.remove("btn-up-hidden")):window.scrollY<600&&f.classList.add("visually-hidden")};document.querySelector(".loader");async function M(t){return await y.post("https://food-boutique.b.goit.study/api/subscription",t)}const p="/TasteMaestro-s/assets/sprite-2fd3930f.svg";function T({_id:t,name:e,img:s,desc:a,category:o,price:r,size:l,popularity:g}){return`<li id="${t}" class="product__list__card">
        <svg class="sticker_icon visually-hidden" width="60" height="60">
          <use xlink:href="${p}#shopping-cart#discount"></use>
        </svg>
        <div class="product__image__wraper">
          <img
            class="product__image"
            src="${s}"
            alt="${a}"
            width="140px"
            height="140px"
          />
        </div>
        <div class="product__description__wraper">
          <h3 class="product__title">${e}</h3>
          <ul class="product__details">
            <li>
              <p class="product__description__text">
                Category:
                <span class="product__description__span">${o.replace(/_/g," ")}</span>
              </p>
            </li>
            <li>
              <p class="product__description__text">
                Size: <span class="product__description__span">${l}</span>
              </p>
            </li>
            <li>
              <p class="product__description__text">
                Popularity: <span class="product__description__span">${g}</span>
              </p>
            </li>
          </ul>
        </div>
        <div class="product__order__wraper">
          <p class="product__price">${"$"+r}</p>
          <button class="product__order__btn">
            <svg class="card-icon-product" width="18" height="18">
              <use xlink:href="${p}#shopping-cart"></use>
            </svg>
          </button>
        </div>
      </li>`}const F=document.getElementById("filterForm"),w=document.getElementById("keywordInput"),$=document.getElementById("categorySelect"),_=document.querySelector(".category-list"),u=document.getElementById("sortProducts"),k=document.querySelector(".sortProducts-list"),j=document.getElementById("productsList"),n={keyword:null,category:null,page:1,limit:6};let S=[];const m=async()=>{try{let t=`https://food-boutique.b.goit.study/api/products?page=${n.page}&limit=${n.limit}`;if(n.keyword&&(t+=`&keyword=${n.keyword}`),n.category&&n.category!=="Show all"&&(t+=`&category=${n.category}`),n.sort&&n.sort!=="all")switch(n.sort){case"alphabetical":t+="&byABC=true";break;case"reverse-alphabetical":t+="&byABC=false";break;case"cheap":t+="&byPrice=true";break;case"expensive":t+="&byPrice=false";break;case"popular":t+="&byPopularity=false";break;case"not-popular":t+="&byPopularity=true";break}console.log(t);const s=(await y.get(t)).data;I(s.results)}catch(t){console.error("Error fetching products:",t)}},I=t=>{j.innerHTML='<ul class="product__list">'+t.map(e=>T(e)).join("")+"</ul>"},D=async()=>{try{S=[...(await y.get("https://food-boutique.b.goit.study/api/products/categories")).data,"Show all"],O(S)}catch(t){console.error("Error fetching categories:",t)}},O=t=>{const e=t.map(s=>{let a=s.replace(/_/g," ");return s==="Breads_&_Bakery"&&(a=a.replace(/&/g,"/")),`<li class="category-item" data-value="${s}">${a}</li>`}).join("");_.innerHTML=e},N=t=>{switch(t){case"alphabetical":u.textContent="A to Z";break;case"reverse-alphabetical":u.textContent="Z to A";break;case"cheap":u.textContent="Cheap";break;case"expensive":u.textContent="Expensive";break;case"popular":u.textContent="Popular";break;case"not-popular":u.textContent="Not popular";break;case"all":u.textContent="Show all";break}},x=()=>{k.classList.remove("show")};u.addEventListener("click",()=>{k.classList.toggle("show")});const H=t=>{$.textContent=t},W=t=>t?t.getAttribute("data-value"):null,P=()=>{_.classList.remove("show")};$.addEventListener("click",()=>{_.classList.toggle("show")});document.addEventListener("click",t=>{!t.target.matches("#sortProducts")&&!t.target.closest(".sortProducts-list")&&x()});document.addEventListener("click",t=>{!t.target.matches("#categorySelect")&&!t.target.closest(".category-list")&&P()});w.addEventListener("input",()=>{n.keyword=w.value,n.page=1,m()});F.addEventListener("submit",async t=>{t.preventDefault(),n.keyword=w.value,n.page=1,m()});_.addEventListener("click",t=>{if(t.target.classList.contains("category-item")){const e=W(t.target);n.category=e,n.page=1,m(),H(e),P()}});k.addEventListener("click",t=>{if(t.target.classList.contains("category-item")){const e=t.target.getAttribute("data-value");n.sort=e,n.page=1,m(),N(e),x()}});D();m();const c={backdrop:document.querySelector(".js-backdrop"),modalFirstCase:document.querySelector(".js-modal-first-case"),modalSecondCase:document.querySelector(".js-modal-second-case"),closeBtn:document.querySelectorAll(".js-close")};function q(){c.backdrop.classList.add("visually-hidden"),c.modalFirstCase.classList.add("visually-hidden")}function L(t){t.preventDefault(),t.key==="Escape"&&(c.backdrop.classList.add("visually-hidden"),c.modalFirstCase.classList.add("visually-hidden"),document.removeEventListener("keydown",L))}function B(){c.backdrop.classList.add("visually-hidden"),c.modalFirstCase.classList.add("visually-hidden")}console.log(c.closeBtn);function z(){c.backdrop.classList.remove("visually-hidden"),c.modalFirstCase.classList.remove("visually-hidden"),c.closeBtn[0].addEventListener("click",q),document.addEventListener("keydown",L),c.backdrop.addEventListener("click",B)}function Z(){c.backdrop.classList.remove("visually-hidden"),c.modalSecondCase.classList.remove("visually-hidden"),c.closeBtn[1].addEventListener("click",q),document.addEventListener("keydown",L),c.backdrop.addEventListener("click",B)}const U=document.querySelector(".footer-form-js"),E=document.querySelector("#subscribe");U.addEventListener("submit",V);const b=document.querySelector(".loader-container"),Y=/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,R={labels:{warning:"Warning"},icons:{warning:'<i class="fas fa-exclamation-triangle"></i>'},colors:{warning:"#FFA500"},maxNotifications:1,durations:{global:2e3}},K={labels:{warning:"Warning"},icons:{warning:'<i class="fas fa-exclamation-triangle"></i>'},colors:{warning:"#FFA500"},maxNotifications:1,durations:{global:4e3}};function V(t){t.preventDefault();const e=t.currentTarget.subscribe.value.trim().toLowerCase();if(!e.match(Y)){E.style.borderColor="red",new C().warning("Please enter a correct email",R);return}E.style.borderColor="#e8e8e2";const s={email:e};b.classList.remove("visually-hidden"),M(s).then(a=>{a.status===201&&(b.classList.add("visually-hidden"),Z(),console.log("Thanks for subscribing for nnew products"))}).catch(a=>{a.response.status===409?(b.classList.add("visually-hidden"),z(),console.log("This email address has already been entered")):new C().warning("Oops! Something went wrong!Your email address is incorrect. Please try again",K)}),t.target.reset()}let G=5;const J=document.querySelector(".popular-js");Q();async function Q(){try{const t=await y.get(`https://food-boutique.b.goit.study/api/products/popular?limit=${G}`);J.insertAdjacentHTML("beforeend",X(t))}catch{console.log("Упс! Щось пішло не так.")}}function X(t){return t.data.map(({img:e,name:s,category:a,size:o,popularity:r,_id:l})=>{const g=a.replace("_"," ");return`<li class="popular_list_card" data-id="${l}">
        <svg class="popular_discount_icon visually-hidden" width="60" height="60">
          <use xlink:href="${p}#Discount"></use>
        </svg>
        <div class="popular_image_container">
          <img
            class="popular_image"
            src="${e}"
            alt="${s}"
            width="56"
            height="56"
          />
        </div>
        <div class="popular_description_container">
          <h4 class="popular_product_title">${s}</h4>
          <ul class="popular_details">
            <li class="popular_details_item">
              <p class="popular_details_category">
                Category: <span class="popular_details_text">${g}</span>
              </p>
            </li>
            <div class="popular_detail_wrap">
            <li class="popular_details_item">
              <p class="popular_details_category">
                Size: <span class="popular_details_text">${o}</span>
              </p>
            </li>
            <li class="popular_details_item">
              <p class="popular_details_category">
                Popularity: <span class="popular_details_text">${r}</span>
              </p>
            </li>
            </div>
          </ul>
        </div>
        <div class="popular_order_container">
          <button class="popular_order_btn">
            <svg class="popular-icon" width="12" height="12">
              <use xlink:href="${p}#shopping-cart"></use>
            </svg>
          </button>
        </div>
      </li>`}).join("")}document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".pagination-section"),e=t.querySelector(".pagination-list"),s=t.querySelector(".pagination-btn.back"),a=t.querySelector(".pagination-btn.forward"),o=9;let r=1;function l(d){const h=`https://food-boutique.b.goit.study/api/products?page=${d}&limit=${o}`;fetch(h).then(i=>{if(!i.ok)throw new Error(`HTTP error! Status: ${i.status}`);return i.json()}).then(i=>g(i)).catch(i=>{console.error("Error fetching data:",i)})}function g(d){e.innerHTML="",d.forEach(h=>{const i=document.createElement("li");i.textContent=h,e.appendChild(i)}),A(d.currentPage,d.totalPages)}function A(d,h){e.innerHTML="";for(let i=1;i<=h;i++){const v=document.createElement("li");v.textContent=i,v.addEventListener("click",()=>{d=i,l(d)}),e.appendChild(v)}}s.addEventListener("click",()=>{}),a.addEventListener("click",()=>{}),l(r)});const tt={discountCardList:document.querySelector(".discount-card-list")};et();async function et(){try{const t=await st(),e=at(t);tt.discountCardList.innerHTML=ot(e)}catch(t){console.log(t)}}async function st(){const t="https://food-boutique.b.goit.study/api",e="products/discount";try{const{data:s}=await y.get(`${t}/${e}`);return s}catch(s){console.log(s)}}function ot(t){return t.map(({name:e,img:s,price:a})=>`
  <li class="discount-card">
        <div class="img-field">
          <img
            class="discount-product-img"
            src="${s}"
            alt="products"
          />
        </div>
        <div class="discount-product-info">
          <p class="discount-product-name">${e}</p>
          <div class="discount-product-buy">
            <p class="discount-product-price">
              $<span class="js-discount-product-price">${a}</span>
            </p>
            <button class="discount-cart-btn" type="button">
              <svg class="discount-cart-icon" width="18" height="18">
                <use xlink:href="${p}#shopping-cart"></use>
              </svg>
            </button>
          </div>
        </div>
        <svg class="discount-label-icon" width="60" height="60">
          <use xlink:href="${p}#discount"></use>
        </svg>
      </li>`).join("")}function at(t){const e=[...t],s=Math.floor(Math.random()*e.length),a=e[s];e.splice(s,1);const o=Math.floor(Math.random()*e.length),r=e[o];return[a,r]}
//# sourceMappingURL=discount-000f3498.js.map
