import{a as p,A as f}from"./vendor-f728e3bf.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(o){if(o.ep)return;o.ep=!0;const t=i(o);fetch(o.href,t)}})();const g=document.querySelector(".btn-up");g.addEventListener("click",()=>{window.scrollTo(0,0)});window.onscroll=()=>{window.scrollY>600?(g.classList.remove("visually-hidden"),g.classList.remove("btn-up-hidden")):window.scrollY<600&&g.classList.add("visually-hidden")};document.querySelector(".loader");async function L(s){return await p.post("https://food-boutique.b.goit.study/api/subscription",s)}const l="/TasteMaestro-s/assets/sprite-2fd3930f.svg";function k({_id:s,name:e,img:i,desc:a,category:o,price:t,size:n,popularity:d}){return`<li id="${s}" class="product__list__card">
        <svg class="sticker_icon visually-hidden" width="60" height="60">
          <use xlink:href="${l}#shopping-cart#discount"></use>
        </svg>
        <div class="product__image__wraper">
          <img
            class="product__image"
            src="${i}"
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
          <p class="product__price">${"$"+t}</p>
          <button class="product__order__btn">
            <svg class="card-icon-product" width="18" height="18">
              <use xlink:href="${l}#shopping-cart"></use>
            </svg>
          </button>
        </div>
      </li>`}document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("filterForm"),e=document.getElementById("keywordInput"),i=document.getElementById("categorySelect"),a=document.querySelector(".category-list"),o=document.getElementById("productsList"),t={keyword:null,category:null,page:1,limit:6};let n=[];s.addEventListener("submit",async r=>{r.preventDefault(),t.keyword=e.value,t.category=y(),t.page=1}),e.addEventListener("input",()=>{t.keyword=e.value,t.page=1,_()}),a.addEventListener("click",r=>{if(r.target.classList.contains("category-item")){const c=y(r.target);t.category=c,t.page=1,console.log("Зміна категорії. Нова категорія:",c),_(),d(c),w()}});const d=r=>{i.textContent=r},y=r=>r?r.getAttribute("data-value"):null,w=()=>{a.classList.remove("show")};i.addEventListener("click",()=>{a.classList.toggle("show")});const _=async()=>{try{let r=`https://food-boutique.b.goit.study/api/products?page=${t.page}&limit=${t.limit}`;t.keyword&&(r+=`&keyword=${t.keyword}`),t.category&&t.category!=="Show all"&&(r+=`&category=${t.category}`);const u=(await p.get(r)).data;v(u.results)}catch(r){console.error("Error fetching products:",r)}},v=r=>{o.innerHTML='<ul class="product__list">'+r.map(c=>k(c)).join("")+"</ul>"},b=async()=>{try{n=[...(await p.get("https://food-boutique.b.goit.study/api/products/categories")).data,"Show all"],$(n)}catch(r){console.error("Error fetching categories:",r)}},$=r=>{const c=r.map(u=>{let h=u.replace(/_/g," ");return u==="Breads_&_Bakery"&&(h=h.replace(/&/g,"/")),`<li class="category-item" data-value="${u}">${h}</li>`}).join("");a.innerHTML=c};b(),_()});const x=document.querySelector(".footer-form-js"),m=document.querySelector("#subscribe");x.addEventListener("submit",M);const C=/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,S={labels:{warning:"Warning"},icons:{warning:'<i class="fas fa-exclamation-triangle"></i>'},colors:{warning:"#FFA500"},maxNotifications:1,durations:{global:2e3}},E={labels:{warning:"Warning"},icons:{warning:'<i class="fas fa-exclamation-triangle"></i>'},colors:{warning:"#FFA500"},maxNotifications:1,durations:{global:4e3}};function M(s){s.preventDefault();const e=s.currentTarget.subscribe.value.trim().toLowerCase();if(!e.match(C)){m.style.borderColor="red",new f().warning("Please enter a correct email",S);return}m.style.borderColor="#e8e8e2",L({email:e}).then(a=>{a.status===201&&console.log("Thanks for subscribing for nnew products")}).catch(a=>{a.response.status===409?console.log("This email address has already been entered"):new f().warning("Oops! Something went wrong!Your email address is incorrect. Please try again",E)}),s.target.reset()}let q=5;const T=document.querySelector(".popular-js");A();async function A(){try{const s=await p.get(`https://food-boutique.b.goit.study/api/products/popular?limit=${q}`);T.insertAdjacentHTML("beforeend",I(s))}catch{console.log("Упс! Щось пішло не так.")}}function I(s){return s.data.map(({img:e,name:i,category:a,size:o,popularity:t,_id:n})=>{const d=a.replace("_"," ");return`<li class="popular_list_card" data-id="${n}">
        <svg class="popular_discount_icon visually-hidden" width="60" height="60">
          <use xlink:href="${l}#Discount"></use>
        </svg>
        <div class="popular_image_container">
          <img
            class="popular_image"
            src="${e}"
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
                Category: <span class="popular_details_text">${d}</span>
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
                Popularity: <span class="popular_details_text">${t}</span>
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
      </li>`}).join("")}const P={discountCardList:document.querySelector(".discount-card-list")};B();async function B(){try{const s=await O(),e=D(s);P.discountCardList.innerHTML=j(e)}catch(s){console.log(s)}}async function O(){const s="https://food-boutique.b.goit.study/api",e="products/discount";try{const{data:i}=await p.get(`${s}/${e}`);return i}catch(i){console.log(i)}}function j(s){return s.map(({name:e,img:i,price:a})=>`
  <li class="discount-card">
        <div class="img-field">
          <img
            class="discount-product-img"
            src="${i}"
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
                <use xlink:href="${l}#shopping-cart"></use>
              </svg>
            </button>
          </div>
        </div>
        <svg class="discount-label-icon" width="60" height="60">
          <use xlink:href="${l}#discount"></use>
        </svg>
      </li>`).join("")}function D(s){const e=[...s],i=Math.floor(Math.random()*e.length),a=e[i];e.splice(i,1);const o=Math.floor(Math.random()*e.length),t=e[o];return[a,t]}
//# sourceMappingURL=discount-7d9808eb.js.map
