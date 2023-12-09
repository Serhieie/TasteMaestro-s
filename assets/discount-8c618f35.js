import{a as f,A as k}from"./vendor-f728e3bf.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerpolicy&&(e.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?e.credentials="include":o.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(o){if(o.ep)return;o.ep=!0;const e=n(o);fetch(o.href,e)}})();const v=document.querySelector(".btn-up");v.addEventListener("click",()=>{window.scrollTo(0,0)});window.onscroll=()=>{window.scrollY>600?(v.classList.remove("visually-hidden"),v.classList.remove("btn-up-hidden")):window.scrollY<600&&v.classList.add("visually-hidden")};document.querySelector(".loader");async function x(t){return await f.post("https://food-boutique.b.goit.study/api/subscription",t)}const m="/TasteMaestro-s/assets/sprite-2fd3930f.svg";function q({_id:t,name:s,img:n,desc:i,category:o,price:e,size:l,popularity:g}){return`<li id="${t}" class="product__list__card">
        <svg class="sticker_icon visually-hidden" width="60" height="60">
          <use xlink:href="${m}#shopping-cart#discount"></use>
        </svg>
        <div class="product__image__wraper">
          <img
            class="product__image"
            src="${n}"
            alt="${i}"
            width="140px"
            height="140px"
          />
        </div>
        <div class="product__description__wraper">
          <h3 class="product__title">${s}</h3>
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
          <p class="product__price">${"$"+e}</p>
          <button class="product__order__btn">
            <svg class="card-icon-product" width="18" height="18">
              <use xlink:href="${m}#shopping-cart"></use>
            </svg>
          </button>
        </div>
      </li>`}document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("filterForm"),s=document.getElementById("keywordInput"),n=document.getElementById("categorySelect"),i=document.querySelector(".category-list"),o=document.getElementById("productsList"),e={keyword:null,category:null,page:1,limit:6};let l=[];t.addEventListener("submit",async a=>{a.preventDefault(),e.keyword=s.value,e.category=_(),e.page=1}),s.addEventListener("input",()=>{e.keyword=s.value,e.page=1,u()}),i.addEventListener("click",a=>{if(a.target.classList.contains("category-item")){const p=_(a.target);e.category=p,e.page=1,console.log("Зміна категорії. Нова категорія:",p),u(),g(p),d()}});const g=a=>{n.textContent=a},_=a=>a?a.getAttribute("data-value"):null,d=()=>{i.classList.remove("show")};n.addEventListener("click",()=>{i.classList.toggle("show")});const u=async()=>{try{let a=`https://food-boutique.b.goit.study/api/products?page=${e.page}&limit=${e.limit}`;e.keyword&&(a+=`&keyword=${e.keyword}`),e.category&&e.category!=="Show all"&&(a+=`&category=${e.category}`);const y=(await f.get(a)).data;r(y.results)}catch(a){console.error("Error fetching products:",a)}},r=a=>{o.innerHTML='<ul class="product__list">'+a.map(p=>q(p)).join("")+"</ul>"},h=async()=>{try{l=[...(await f.get("https://food-boutique.b.goit.study/api/products/categories")).data,"Show all"],E(l)}catch(a){console.error("Error fetching categories:",a)}},E=a=>{const p=a.map(y=>{let b=y.replace(/_/g," ");return y==="Breads_&_Bakery"&&(b=b.replace(/&/g,"/")),`<li class="category-item" data-value="${y}">${b}</li>`}).join("");i.innerHTML=p};h(),u()});const c={backdrop:document.querySelector(".js-backdrop"),modalFirstCase:document.querySelector(".js-modal-first-case"),modalSecondCase:document.querySelector(".js-modal-second-case"),closeBtn:document.querySelectorAll(".js-close")};function $(){c.backdrop.classList.add("visually-hidden"),c.modalFirstCase.classList.add("visually-hidden")}function L(t){t.preventDefault(),t.key==="Escape"&&(c.backdrop.classList.add("visually-hidden"),c.modalFirstCase.classList.add("visually-hidden"),document.removeEventListener("keydown",L))}function S(){c.backdrop.classList.add("visually-hidden"),c.modalFirstCase.classList.add("visually-hidden")}console.log(c.closeBtn);function B(){c.backdrop.classList.remove("visually-hidden"),c.modalFirstCase.classList.remove("visually-hidden"),c.closeBtn[0].addEventListener("click",$),document.addEventListener("keydown",L),c.backdrop.addEventListener("click",S)}function M(){c.backdrop.classList.remove("visually-hidden"),c.modalSecondCase.classList.remove("visually-hidden"),c.closeBtn[1].addEventListener("click",$),document.addEventListener("keydown",L),c.backdrop.addEventListener("click",S)}const P=document.querySelector(".footer-form-js"),C=document.querySelector("#subscribe");P.addEventListener("submit",A);const w=document.querySelector(".loader-container"),T=/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,F={labels:{warning:"Warning"},icons:{warning:'<i class="fas fa-exclamation-triangle"></i>'},colors:{warning:"#FFA500"},maxNotifications:1,durations:{global:2e3}},j={labels:{warning:"Warning"},icons:{warning:'<i class="fas fa-exclamation-triangle"></i>'},colors:{warning:"#FFA500"},maxNotifications:1,durations:{global:4e3}};function A(t){t.preventDefault();const s=t.currentTarget.subscribe.value.trim().toLowerCase();if(!s.match(T)){C.style.borderColor="red",new k().warning("Please enter a correct email",F);return}C.style.borderColor="#e8e8e2";const n={email:s};w.classList.remove("visually-hidden"),x(n).then(i=>{i.status===201&&(w.classList.add("visually-hidden"),M(),console.log("Thanks for subscribing for nnew products"))}).catch(i=>{i.response.status===409?(w.classList.add("visually-hidden"),B(),console.log("This email address has already been entered")):new k().warning("Oops! Something went wrong!Your email address is incorrect. Please try again",j)}),t.target.reset()}let D=5;const I=document.querySelector(".popular-js");O();async function O(){try{const t=await f.get(`https://food-boutique.b.goit.study/api/products/popular?limit=${D}`);I.insertAdjacentHTML("beforeend",N(t))}catch{console.log("Упс! Щось пішло не так.")}}function N(t){return t.data.map(({img:s,name:n,category:i,size:o,popularity:e,_id:l})=>{const g=i.replace("_"," ");return`<li class="popular_list_card" data-id="${l}">
        <svg class="popular_discount_icon visually-hidden" width="60" height="60">
          <use xlink:href="${m}#Discount"></use>
        </svg>
        <div class="popular_image_container">
          <img
            class="popular_image"
            src="${s}"
            alt="${n}"
            width="56"
            height="56"
          />
        </div>
        <div class="popular_description_container">
          <h4 class="popular_product_title">${n}</h4>
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
                Popularity: <span class="popular_details_text">${e}</span>
              </p>
            </li>
            </div>
          </ul>
        </div>
        <div class="popular_order_container">
          <button class="popular_order_btn">
            <svg class="popular-icon" width="12" height="12">
              <use xlink:href="${m}#shopping-cart"></use>
            </svg>
          </button>
        </div>
      </li>`}).join("")}document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".pagination-section"),s=t.querySelector(".pagination-list"),n=t.querySelector(".pagination-btn.back"),i=t.querySelector(".pagination-btn.forward"),o=9;let e=1;function l(d){const u=`https://food-boutique.b.goit.study/api/products?page=${d}&limit=${o}`;fetch(u).then(r=>{if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return r.json()}).then(r=>g(r)).catch(r=>{console.error("Error fetching data:",r)})}function g(d){s.innerHTML="",d.forEach(u=>{const r=document.createElement("li");r.textContent=u,s.appendChild(r)}),_(d.currentPage,d.totalPages)}function _(d,u){s.innerHTML="";for(let r=1;r<=u;r++){const h=document.createElement("li");h.textContent=r,h.addEventListener("click",()=>{d=r,l(d)}),s.appendChild(h)}}n.addEventListener("click",()=>{}),i.addEventListener("click",()=>{}),l(e)});const H={discountCardList:document.querySelector(".discount-card-list")};W();async function W(){try{const t=await z(),s=Y(t);H.discountCardList.innerHTML=U(s)}catch(t){console.log(t)}}async function z(){const t="https://food-boutique.b.goit.study/api",s="products/discount";try{const{data:n}=await f.get(`${t}/${s}`);return n}catch(n){console.log(n)}}function U(t){return t.map(({name:s,img:n,price:i})=>`
  <li class="discount-card">
        <div class="img-field">
          <img
            class="discount-product-img"
            src="${n}"
            alt="products"
          />
        </div>
        <div class="discount-product-info">
          <p class="discount-product-name">${s}</p>
          <div class="discount-product-buy">
            <p class="discount-product-price">
              $<span class="js-discount-product-price">${i}</span>
            </p>
            <button class="discount-cart-btn" type="button">
              <svg class="discount-cart-icon" width="18" height="18">
                <use xlink:href="${m}#shopping-cart"></use>
              </svg>
            </button>
          </div>
        </div>
        <svg class="discount-label-icon" width="60" height="60">
          <use xlink:href="${m}#discount"></use>
        </svg>
      </li>`).join("")}function Y(t){const s=[...t],n=Math.floor(Math.random()*s.length),i=s[n];s.splice(n,1);const o=Math.floor(Math.random()*s.length),e=s[o];return[i,e]}
//# sourceMappingURL=discount-8c618f35.js.map
