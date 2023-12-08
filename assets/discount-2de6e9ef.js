import{a as u,A as g}from"./vendor-f728e3bf.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const p=document.querySelector(".btn-up");p.addEventListener("click",()=>{window.scrollTo(0,0)});window.onscroll=()=>{window.scrollY>600?(p.classList.remove("visually-hidden"),p.classList.remove("btn-up-hidden")):window.scrollY<600&&p.classList.add("visually-hidden")};document.querySelector(".loader");async function y(s){return await u.post("https://food-boutique.b.goit.study/api/subscription",s)}const l="/TasteMaestro-s/assets/sprite-05493043.svg";function v({_id:s,name:e,img:o,desc:i,category:t,price:r,size:n,popularity:d}){return`<li id="${s}" class="product__list__card">
        <svg class="sticker_icon visually-hidden" width="60" height="60">
          <use xlink:href="${l}#shopping-cart#discount"></use>
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
          <h3 class="product__title">${e}</h3>
          <ul class="product__details">
            <li>
              <p class="product__description__text">
                Category:
                <span class="product__description__span">${t.replace(/_/g," ")}</span>
              </p>
            </li>
            <li>
              <p class="product__description__text">
                Size: <span class="product__description__span">${n}</span>
              </p>
            </li>
            <li>
              <p class="product__description__text">
                Popularity: <span class="product__description__span">${d}</span>
              </p>
            </li>
          </ul>
        </div>
        <div class="product__order__wraper">
          <p class="product__price">${"$"+r}</p>
          <button class="product__order__btn">
            <svg class="card-icon-product" width="18" height="18">
              <use xlink:href="${l}#shopping-cart"></use>
            </svg>
          </button>
        </div>
      </li>`}document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("filterForm"),e=document.getElementById("keywordInput"),o=document.getElementById("categorySelect"),i=document.getElementById("productsList"),t={keyword:null,category:null,page:1,limit:6};let r=[];o.innerHTML='<option value="category-text" disabled selected>Categories</option>',s.addEventListener("submit",async a=>{a.preventDefault(),t.keyword=e.value,t.category=o.value===""?null:o.value,t.page=1,await n()}),e.addEventListener("input",()=>{t.keyword=e.value,t.page=1,n()}),o.addEventListener("change",()=>{t.category=o.value===""?null:o.value,t.page=1,n()});const n=async()=>{try{let a=`https://food-boutique.b.goit.study/api/products?page=${t.page}&limit=${t.limit}`;t.keyword&&(a+=`&keyword=${t.keyword}`),t.category&&t.category!=="Show all"&&(a+=`&category=${t.category}`);const m=(await u.get(a)).data;d(m.results)}catch(a){console.error("Error fetching products:",a)}},d=a=>{i.innerHTML='<ul class="product__list">'+a.map(c=>v(c)).join("")+"</ul>"},h=async()=>{try{r=["Show all",...(await u.get("https://food-boutique.b.goit.study/api/products/categories")).data],f(r)}catch(a){console.error("Error fetching categories:",a)}},f=a=>{o.innerHTML=a.map(c=>`<option value="${c}">${c.replace(/_/g," ")}</option>`).join("")};h(),n()});const w=document.querySelector(".footer-form-js"),_=document.querySelector("#subscribe");w.addEventListener("submit",x);const b=/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,$={labels:{warning:"Warning"},icons:{warning:'<i class="fas fa-exclamation-triangle"></i>'},colors:{warning:"#FFA500"},maxNotifications:1,durations:{global:2e3}},L={labels:{warning:"Warning"},icons:{warning:'<i class="fas fa-exclamation-triangle"></i>'},colors:{warning:"#FFA500"},maxNotifications:1,durations:{global:4e3}};function x(s){s.preventDefault();const e=s.currentTarget.subscribe.value.trim().toLowerCase();if(!e.match(b)){_.style.borderColor="red",new g().warning("Please enter a correct email",$);return}_.style.borderColor="#e8e8e2",y({email:e}).then(i=>{i.status===201&&console.log("Thanks for subscribing for nnew products")}).catch(i=>{i.response.status===409?console.log("This email address has already been entered"):new g().warning("Oops! Something went wrong!Your email address is incorrect. Please try again",L)}),s.target.reset()}let k=5;const S=document.querySelector(".popular-js");E();async function E(){try{const s=await u.get(`https://food-boutique.b.goit.study/api/products/popular?limit=${k}`);S.insertAdjacentHTML("beforeend",C(s))}catch{console.log("Упс! Щось пішло не так.")}}function C(s){return s.data.map(({img:e,name:o,category:i,size:t,popularity:r,_id:n})=>{const d=i.replace("_"," ");return`<li class="popular_list_card" data-id="${n}">
        <svg class="popular_discount_icon visually-hidden" width="60" height="60">
          <use xlink:href="${l}#Discount"></use>
        </svg>
        <div class="popular_image_container">
          <img
            class="popular_image"
            src="${e}"
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
                Category: <span class="popular_details_text">${d}</span>
              </p>
            </li>
            <div class="popular_detail_wrap">
            <li class="popular_details_item">
              <p class="popular_details_category">
                Size: <span class="popular_details_text">${t}</span>
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
              <use xlink:href="${l}#shopping-cart"></use>
            </svg>
          </button>
        </div>
      </li>`}).join("")}const M={discountCardList:document.querySelector(".discount-card-list")};T();async function T(){try{const s=await q(),e=I(s);M.discountCardList.innerHTML=A(e)}catch(s){console.log(s)}}async function q(){const s="https://food-boutique.b.goit.study/api",e="products/discount";try{const{data:o}=await u.get(`${s}/${e}`);return o}catch(o){console.log(o)}}function A(s){return s.map(({name:e,img:o,price:i})=>`
  <li class="discount-card">
        <div class="img-field">
          <img
            class="discount-product-img"
            src="${o}"
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
                <use xlink:href="${l}#shopping-cart"></use>
              </svg>
            </button>
          </div>
        </div>
        <svg class="discount-label-icon" width="60" height="60">
          <use xlink:href="${l}#discount"></use>
        </svg>
      </li>`).join("")}function I(s){const e=[...s],o=Math.floor(Math.random()*e.length),i=e[o];e.splice(o,1);const t=Math.floor(Math.random()*e.length),r=e[t];return[i,r]}
//# sourceMappingURL=discount-2de6e9ef.js.map
