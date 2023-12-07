import{a as n}from"./vendor-a61d8330.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const l=document.querySelector(".btn-up");l.addEventListener("click",()=>{window.scrollTo(0,0)});window.onscroll=()=>{window.scrollY>600?(l.classList.remove("visually-hidden"),l.classList.remove("btn-up-hidden")):window.scrollY<600&&l.classList.add("visually-hidden")};document.querySelector(".loader");async function u(s){return await n.post("https://food-boutique.b.goit.study/api/subscription",s)}const p=document.querySelector(".footer-form-js");p.addEventListener("submit",f);const d=/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}/;function f(s){s.preventDefault();const o=s.currentTarget.subscribe.value.trim().toLowerCase();if(!o.match(d))return;u({email:o}).then(r=>{r.status===201&&console.log("Thanks for subscribing for nnew products")}).catch(r=>{r.response.status===409&&console.log("This email address has already been entered")}),s.target.reset()}let g=5;const m=document.querySelector(".popular-js");_();async function _(){try{const s=await n.get(`https://food-boutique.b.goit.study/api/products/popular?limit=${g}`);m.insertAdjacentHTML("beforeend",h(s))}catch{console.log("Упс! Щось пішло не так.")}}function h(s){return s.data.map(({img:o,name:i,category:r,size:e,popularity:t,_id:a})=>{const c=r.replace("_"," ");return`<li class="popular_list_card" data-id="${a}">
        <svg class="sticker_icon visually-hidden" width="60" height="60">
          <use xlink:href="./img/sprite.svg#discount"></use>
        </svg>
        <div class="popular_image_container">
          <img
            class="popular_image"
            src="${o}"
            alt="${i}"
            width="56"
            height="56"
          />
        </div>
        <div class="popular_description_container">
          <h4 class="popular_product_title">${i}</h4>
          <ul class="popular_details">
            <li class="popular_details_item">
              <p class="popular_details_category">
                Category: <span class="popular_details_text">${c}</span>
              </p>
            </li>
            <li class="popular_details_item">
              <p class="popular_details_category">
                Size: <span class="popular_details_text">${e}</span>
              </p>
            </li>
            <li class="popular_details_item">
              <p class="popular_details_category">
                Popularity: <span class="popular_details_text">${t}</span>
              </p>
            </li>
          </ul>
        </div>
        <div class="popular_order_container">
          <button class="popular_order_btn">
            <svg class="card-icon" width="12" height="12">
              <use href="./img/sprite.svg#shopping-cart"></use>
            </svg>
          </button>
        </div>
      </li>`}).join("")}
//# sourceMappingURL=popular-2ce2a8c0.js.map
