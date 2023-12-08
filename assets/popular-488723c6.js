import{a as d,A as u}from"./vendor-f728e3bf.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p=document.querySelector(".btn-up");p.addEventListener("click",()=>{window.scrollTo(0,0)});window.onscroll=()=>{window.scrollY>600?(p.classList.remove("visually-hidden"),p.classList.remove("btn-up-hidden")):window.scrollY<600&&p.classList.add("visually-hidden")};document.querySelector(".loader");async function h(s){return await d.post("https://food-boutique.b.goit.study/api/subscription",s)}function w({_id:s,name:r,img:o,desc:i,category:e,price:t,size:n,popularity:c}){return`<li id="${s}" class="product__list__card">
        <svg class="sticker_icon visually-hidden" width="60" height="60">
          <use href="./img/sprite.svg#shopping-cart#discount"></use>
        </svg>
        <div class="product__image__wraper">
          <img
            class="product__image"
            src="${o}"
            alt="${i}"
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
                Size: <span class="product__description__span">${n}</span>
              </p>
            </li>
            <li>
              <p class="product__description__text">
                Popularity: <span class="product__description__span">${c}</span>
              </p>
            </li>
          </ul>
        </div>
        <div class="product__order__wraper">
          <p class="product__price">${"$"+t}</p>
          <button class="product__order__btn">
            <svg class="card-icon-product" width="18" height="18">
              <use href="./img/sprite.svg#shopping-cart"></use>
            </svg>
          </button>
        </div>
      </li>`}document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("filterForm"),r=document.getElementById("keywordInput"),o=document.getElementById("categorySelect"),i=document.getElementById("productsList"),e={keyword:null,category:null,page:1,limit:6};let t=[];o.innerHTML='<option value="category-text" disabled selected>Categories</option>',s.addEventListener("submit",async a=>{a.preventDefault(),e.keyword=r.value,e.category=o.value===""?null:o.value,e.page=1,await n()}),r.addEventListener("input",()=>{e.keyword=r.value,e.page=1,n()}),o.addEventListener("change",()=>{e.category=o.value===""?null:o.value,e.page=1,n()});const n=async()=>{try{let a=`https://food-boutique.b.goit.study/api/products?page=${e.page}&limit=${e.limit}`;e.keyword&&(a+=`&keyword=${e.keyword}`),e.category&&e.category!=="Show all"&&(a+=`&category=${e.category}`);const y=(await d.get(a)).data;c(y.results)}catch(a){console.error("Error fetching products:",a)}},c=a=>{i.innerHTML='<ul class="product__list">'+a.map(l=>w(l)).join("")+"</ul>"},f=async()=>{try{t=["Show all",...(await d.get("https://food-boutique.b.goit.study/api/products/categories")).data],m(t)}catch(a){console.error("Error fetching categories:",a)}},m=a=>{o.innerHTML=a.map(l=>`<option value="${l}">${l}</option>`).join("")};f(),n()});const v=document.querySelector(".footer-form-js"),g=document.querySelector("#subscribe");v.addEventListener("submit",x);const b=/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,$={labels:{warning:"Warning"},icons:{warning:'<i class="fas fa-exclamation-triangle"></i>'},colors:{warning:"#FFA500"},maxNotifications:1,durations:{global:2e3}},L={labels:{warning:"Warning"},icons:{warning:'<i class="fas fa-exclamation-triangle"></i>'},colors:{warning:"#FFA500"},maxNotifications:1,durations:{global:4e3}};function x(s){s.preventDefault();const r=s.currentTarget.subscribe.value.trim().toLowerCase();if(!r.match(b)){g.style.borderColor="red",new u().warning("Please enter a correct email",$);return}g.style.borderColor="#e8e8e2",h({email:r}).then(i=>{i.status===201&&console.log("Thanks for subscribing for nnew products")}).catch(i=>{i.response.status===409?console.log("This email address has already been entered"):new u().warning("Oops! Something went wrong!Your email address is incorrect. Please try again",L)}),s.target.reset()}const _="/TasteMaestro-s/assets/sprite-05493043.svg";let k=5;const S=document.querySelector(".popular-js");E();async function E(){try{const s=await d.get(`https://food-boutique.b.goit.study/api/products/popular?limit=${k}`);S.insertAdjacentHTML("beforeend",C(s))}catch{console.log("Упс! Щось пішло не так.")}}function C(s){return s.data.map(({img:r,name:o,category:i,size:e,popularity:t,_id:n})=>{const c=i.replace("_"," ");return`<li class="popular_list_card" data-id="${n}">
        <svg class="popular_discount_icon visually-hidden" width="60" height="60">
          <use xlink:href="${_}#Discount"></use>
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
                Category: <span class="popular_details_text">${c}</span>
              </p>
            </li>
            <div class="popular_detail_wrap">
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
            </div>
          </ul>
        </div>
        <div class="popular_order_container">
          <button class="popular_order_btn">
            <svg class="popular-icon" width="12" height="12">
              <use xlink:href="${_}#shopping-cart"></use>
            </svg>
          </button>
        </div>
      </li>`}).join("")}
//# sourceMappingURL=popular-488723c6.js.map
