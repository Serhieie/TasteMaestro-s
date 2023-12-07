import{a as p}from"./vendor-a61d8330.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d=document.querySelector(".btn-up");d.addEventListener("click",()=>{window.scrollTo(0,0)});window.onscroll=()=>{window.scrollY>600?(d.classList.remove("visually-hidden"),d.classList.remove("btn-up-hidden")):window.scrollY<600&&d.classList.add("visually-hidden")};document.querySelector(".loader");async function m(s){return await p.post("https://food-boutique.b.goit.study/api/subscription",s)}function f({_id:s,name:r,img:o,desc:a,category:e,price:t,size:c,popularity:n}){return`<li id="${s}" class="product__list__card">
        <svg class="sticker_icon visually-hidden" width="60" height="60">
          <use xlink:href="./img/sprite.svg#discount"></use>
        </svg>
        <div class="product__image__wraper">
          <img
            class="product__image"
            src="${o}"
            alt="${a}"
            width="140px"
            height="140px"
          />
        </div>
        <div class="product__description__wraper">
          <h3 class="product__title">${r}</h3>
          <ul class="product__details">
            <li>
              <p class="product__description__text">
                Category:
                <span class="product__description__span">${e}</span>
              </p>
            </li>
            <li>
              <p class="product__description__text">
                Size: <span class="product__description__span">${c}</span>
              </p>
            </li>
            <li>
              <p class="product__description__text">
                Popularity: <span class="product__description__span">${n}</span>
              </p>
            </li>
          </ul>
        </div>
        <div class="product__order__wraper">
          <p class="product__price">${"$"+t}</p>
          <button class="product__order__btn">
            <svg class="card-icon" width="18" height="18">
              <use href="../../img/sprite.svg#shopping-cart"></use>
            </svg>
          </button>
        </div>
      </li>`}document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("filterForm"),r=document.getElementById("keywordInput"),o=document.getElementById("categorySelect"),a=document.getElementById("productsList"),e={keyword:null,category:null,page:1,limit:6};let t=[];o.innerHTML='<option value="category-text" disabled selected>Categories</option>',s.addEventListener("submit",async i=>{i.preventDefault(),e.keyword=r.value,e.category=o.value===""?null:o.value,e.page=1,await c()}),r.addEventListener("input",()=>{e.keyword=r.value,e.page=1,c()}),o.addEventListener("change",()=>{e.category=o.value===""?null:o.value,e.page=1,c()});const c=async()=>{try{let i=`https://food-boutique.b.goit.study/api/products?page=${e.page}&limit=${e.limit}`;e.keyword&&(i+=`&keyword=${e.keyword}`),e.category&&e.category!=="Show all"&&(i+=`&category=${e.category}`);const y=(await p.get(i)).data;n(y.results)}catch(i){console.error("Error fetching products:",i)}},n=i=>{a.innerHTML='<ul class="product__list">'+i.map(l=>f(l)).join("")+"</ul>"},g=async()=>{try{t=["Show all",...(await p.get("https://food-boutique.b.goit.study/api/products/categories")).data],_(t)}catch(i){console.error("Error fetching categories:",i)}},_=i=>{o.innerHTML=i.map(l=>`<option value="${l}">${l}</option>`).join("")};g(),c()});const h=document.querySelector(".footer-form-js"),u=document.querySelector("#subscribe");h.addEventListener("submit",w);const v=/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}/;function w(s){s.preventDefault();const r=s.currentTarget.subscribe.value.trim().toLowerCase();if(!r.match(v)){u.style.borderColor="red";return}u.style.borderColor="#e8e8e2",m({email:r}).then(a=>{a.status===201&&console.log("Thanks for subscribing for nnew products")}).catch(a=>{a.response.status===409?console.log("This email address has already been entered"):console.log("Oops! Something went wrong!Your email address is incorrect")}),s.target.reset()}let b=5;const L=document.querySelector(".popular-js");$();async function $(){try{const s=await p.get(`https://food-boutique.b.goit.study/api/products/popular?limit=${b}`);L.insertAdjacentHTML("beforeend",k(s))}catch{console.log("Упс! Щось пішло не так.")}}function k(s){return s.data.map(({img:r,name:o,category:a,size:e,popularity:t,_id:c})=>{const n=a.replace("_"," ");return`<li class="popular_list_card" data-id="${c}">
        <svg class="sticker_icon visually-hidden" width="60" height="60">
          <use xlink:href="./img/sprite.svg#discount"></use>
        </svg>
        <div class="popular_image_container">
          <img
            class="popular_image"
            src="${r}"
            alt="${o}"
            width="56"
            height="56"
          />
        </div>
        <div class="popular_description_container">
          <h4 class="popular_product_title">${o}</h4>
          <ul class="popular_details">
            <li class="popular_details_item">
              <p class="popular_details_category">
                Category: <span class="popular_details_text">${n}</span>
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
//# sourceMappingURL=popular-aa38fb31.js.map
