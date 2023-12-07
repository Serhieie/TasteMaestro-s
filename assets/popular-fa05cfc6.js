import{a as c}from"./vendor-4d3d87e9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const a=document.querySelector(".btn-up");a.addEventListener("click",()=>{window.scrollTo(0,0)});window.onscroll=()=>{window.scrollY>600?(a.classList.remove("visually-hidden"),a.classList.remove("btn-up-hidden")):window.scrollY<600&&a.classList.add("visually-hidden")};document.querySelector(".loader");async function p(s){return await c.post("https://food-boutique.b.goit.study/api/subscription",s)}const d=document.querySelector(".footer-form-js"),n=document.querySelector("#subscribe");d.addEventListener("submit",g);const f=/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}/;function g(s){s.preventDefault();const o=s.currentTarget.subscribe.value.trim().toLowerCase();if(!o.match(f)){n.style.borderColor="red";return}n.style.borderColor="#e8e8e2",p({email:o}).then(r=>{r.status===201&&console.log("Thanks for subscribing for nnew products")}).catch(r=>{r.response.status===409?console.log("This email address has already been entered"):console.log("Oops! Something went wrong!Your email address is incorrect")}),s.target.reset()}let m=5;const h=document.querySelector(".popular-js");_();async function _(){try{const s=await c.get(`https://food-boutique.b.goit.study/api/products/popular?limit=${m}`);h.insertAdjacentHTML("beforeend",y(s))}catch{console.log("Упс! Щось пішло не так.")}}function y(s){return s.data.map(({img:o,name:i,category:r,size:e,popularity:t,_id:l})=>{const u=r.replace("_"," ");return`<li class="popular_list_card" data-id="${l}">
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
                Category: <span class="popular_details_text">${u}</span>
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
//# sourceMappingURL=popular-fa05cfc6.js.map
