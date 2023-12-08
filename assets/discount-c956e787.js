import{a as f,A as v}from"./vendor-f728e3bf.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerpolicy&&(t.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?t.credentials="include":s.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(s){if(s.ep)return;s.ep=!0;const t=n(s);fetch(s.href,t)}})();const y=document.querySelector(".btn-up");y.addEventListener("click",()=>{window.scrollTo(0,0)});window.onscroll=()=>{window.scrollY>600?(y.classList.remove("visually-hidden"),y.classList.remove("btn-up-hidden")):window.scrollY<600&&y.classList.add("visually-hidden")};document.querySelector(".loader");async function $(o){return await f.post("https://food-boutique.b.goit.study/api/subscription",o)}const g="/TasteMaestro-s/assets/sprite-2fd3930f.svg";function k({_id:o,name:e,img:n,desc:i,category:s,price:t,size:c,popularity:p}){return`<li id="${o}" class="product__list__card">
        <svg class="sticker_icon visually-hidden" width="60" height="60">
          <use xlink:href="${g}#shopping-cart#discount"></use>
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
          <h3 class="product__title">${e}</h3>
          <ul class="product__details">
            <li>
              <p class="product__description__text">
                Category:
                <span class="product__description__span">${s.replace(/_/g," ")}</span>
              </p>
            </li>
            <li>
              <p class="product__description__text">
                Size: <span class="product__description__span">${c}</span>
              </p>
            </li>
            <li>
              <p class="product__description__text">
                Popularity: <span class="product__description__span">${p}</span>
              </p>
            </li>
          </ul>
        </div>
        <div class="product__order__wraper">
          <p class="product__price">${"$"+t}</p>
          <button class="product__order__btn">
            <svg class="card-icon-product" width="18" height="18">
              <use xlink:href="${g}#shopping-cart"></use>
            </svg>
          </button>
        </div>
      </li>`}document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("filterForm"),e=document.getElementById("keywordInput"),n=document.getElementById("categorySelect"),i=document.querySelector(".category-list"),s=document.getElementById("productsList"),t={keyword:null,category:null,page:1,limit:6};let c=[];o.addEventListener("submit",async r=>{r.preventDefault(),t.keyword=e.value,t.category=m(),t.page=1}),e.addEventListener("input",()=>{t.keyword=e.value,t.page=1,d()}),i.addEventListener("click",r=>{if(r.target.classList.contains("category-item")){const u=m(r.target);t.category=u,t.page=1,console.log("Зміна категорії. Нова категорія:",u),d(),p(u),l()}});const p=r=>{n.textContent=r},m=r=>r?r.getAttribute("data-value"):null,l=()=>{i.classList.remove("show")};n.addEventListener("click",()=>{i.classList.toggle("show")});const d=async()=>{try{let r=`https://food-boutique.b.goit.study/api/products?page=${t.page}&limit=${t.limit}`;t.keyword&&(r+=`&keyword=${t.keyword}`),t.category&&t.category!=="Show all"&&(r+=`&category=${t.category}`);const _=(await f.get(r)).data;a(_.results)}catch(r){console.error("Error fetching products:",r)}},a=r=>{s.innerHTML='<ul class="product__list">'+r.map(u=>k(u)).join("")+"</ul>"},h=async()=>{try{c=[...(await f.get("https://food-boutique.b.goit.study/api/products/categories")).data,"Show all"],L(c)}catch(r){console.error("Error fetching categories:",r)}},L=r=>{const u=r.map(_=>{let w=_.replace(/_/g," ");return _==="Breads_&_Bakery"&&(w=w.replace(/&/g,"/")),`<li class="category-item" data-value="${_}">${w}</li>`}).join("");i.innerHTML=u};h(),d()});const x=document.querySelector(".footer-form-js"),b=document.querySelector("#subscribe");x.addEventListener("submit",q);const E=/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,S={labels:{warning:"Warning"},icons:{warning:'<i class="fas fa-exclamation-triangle"></i>'},colors:{warning:"#FFA500"},maxNotifications:1,durations:{global:2e3}},C={labels:{warning:"Warning"},icons:{warning:'<i class="fas fa-exclamation-triangle"></i>'},colors:{warning:"#FFA500"},maxNotifications:1,durations:{global:4e3}};function q(o){o.preventDefault();const e=o.currentTarget.subscribe.value.trim().toLowerCase();if(!e.match(E)){b.style.borderColor="red",new v().warning("Please enter a correct email",S);return}b.style.borderColor="#e8e8e2",$({email:e}).then(i=>{i.status===201&&console.log("Thanks for subscribing for nnew products")}).catch(i=>{i.response.status===409?console.log("This email address has already been entered"):new v().warning("Oops! Something went wrong!Your email address is incorrect. Please try again",C)}),o.target.reset()}let M=5;const P=document.querySelector(".popular-js");T();async function T(){try{const o=await f.get(`https://food-boutique.b.goit.study/api/products/popular?limit=${M}`);P.insertAdjacentHTML("beforeend",A(o))}catch{console.log("Упс! Щось пішло не так.")}}function A(o){return o.data.map(({img:e,name:n,category:i,size:s,popularity:t,_id:c})=>{const p=i.replace("_"," ");return`<li class="popular_list_card" data-id="${c}">
        <svg class="popular_discount_icon visually-hidden" width="60" height="60">
          <use xlink:href="${g}#Discount"></use>
        </svg>
        <div class="popular_image_container">
          <img
            class="popular_image"
            src="${e}"
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
                Category: <span class="popular_details_text">${p}</span>
              </p>
            </li>
            <div class="popular_detail_wrap">
            <li class="popular_details_item">
              <p class="popular_details_category">
                Size: <span class="popular_details_text">${s}</span>
              </p>
            </li>
            <li class="popular_details_item">
              <p class="popular_details_category">
                Popularity: <span class="popular_details_text">${t}</span>
              </p>
            </li>
            </div>
          </ul>
        </div>
        <div class="popular_order_container">
          <button class="popular_order_btn">
            <svg class="popular-icon" width="12" height="12">
              <use xlink:href="${g}#shopping-cart"></use>
            </svg>
          </button>
        </div>
      </li>`}).join("")}document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".pagination-section"),e=o.querySelector(".pagination-list"),n=o.querySelector(".pagination-btn.back"),i=o.querySelector(".pagination-btn.forward"),s=9;let t=1;function c(l){const d=`https://food-boutique.b.goit.study/api/products?page=${l}&limit=${s}`;fetch(d).then(a=>{if(!a.ok)throw new Error(`HTTP error! Status: ${a.status}`);return a.json()}).then(a=>p(a)).catch(a=>{console.error("Error fetching data:",a)})}function p(l){e.innerHTML="",l.forEach(d=>{const a=document.createElement("li");a.textContent=d,e.appendChild(a)}),m(l.currentPage,l.totalPages)}function m(l,d){e.innerHTML="";for(let a=1;a<=d;a++){const h=document.createElement("li");h.textContent=a,h.addEventListener("click",()=>{l=a,c(l)}),e.appendChild(h)}}n.addEventListener("click",()=>{}),i.addEventListener("click",()=>{}),c(t)});const I={discountCardList:document.querySelector(".discount-card-list")};B();async function B(){try{const o=await D(),e=j(o);I.discountCardList.innerHTML=O(e)}catch(o){console.log(o)}}async function D(){const o="https://food-boutique.b.goit.study/api",e="products/discount";try{const{data:n}=await f.get(`${o}/${e}`);return n}catch(n){console.log(n)}}function O(o){return o.map(({name:e,img:n,price:i})=>`
  <li class="discount-card">
        <div class="img-field">
          <img
            class="discount-product-img"
            src="${n}"
            alt="products"
          />
        </div>
        <div class="discount-product-info">
          <p class="discount-product-name">${e}</p>
          <div class="discount-product-buy">
            <p class="discount-product-price">
              $<span class="js-discount-product-price">${i}</span>
            </p>
            <button class="discount-cart-btn" type="button">
              <svg class="discount-cart-icon" width="18" height="18">
                <use xlink:href="${g}#shopping-cart"></use>
              </svg>
            </button>
          </div>
        </div>
        <svg class="discount-label-icon" width="60" height="60">
          <use xlink:href="${g}#discount"></use>
        </svg>
      </li>`).join("")}function j(o){const e=[...o],n=Math.floor(Math.random()*e.length),i=e[n];e.splice(n,1);const s=Math.floor(Math.random()*e.length),t=e[s];return[i,t]}
//# sourceMappingURL=discount-c956e787.js.map
