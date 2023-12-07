import{a as p,A as u}from"./vendor-f728e3bf.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d=document.querySelector(".btn-up");d.addEventListener("click",()=>{window.scrollTo(0,0)});window.onscroll=()=>{window.scrollY>600?(d.classList.remove("visually-hidden"),d.classList.remove("btn-up-hidden")):window.scrollY<600&&d.classList.add("visually-hidden")};document.querySelector(".loader");async function y(s){return await p.post("https://food-boutique.b.goit.study/api/subscription",s)}function h({_id:s,name:r,img:o,desc:a,category:e,price:t,size:n,popularity:c}){return`<li id="${s}" class="product__list__card">
        <svg class="sticker_icon visually-hidden" width="60" height="60">
          <use xlink:href="/img/sprite.svg#discount"></use>
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
            <svg class="card-icon" width="18" height="18">
              <use href="/img/sprite.svg#shopping-cart"></use>
            </svg>
          </button>
        </div>
      </li>`}document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("filterForm"),r=document.getElementById("keywordInput"),o=document.getElementById("categorySelect"),a=document.getElementById("productsList"),e={keyword:null,category:null,page:1,limit:6};let t=[];o.innerHTML='<option value="category-text" disabled selected>Categories</option>',s.addEventListener("submit",async i=>{i.preventDefault(),e.keyword=r.value,e.category=o.value===""?null:o.value,e.page=1,await n()}),r.addEventListener("input",()=>{e.keyword=r.value,e.page=1,n()}),o.addEventListener("change",()=>{e.category=o.value===""?null:o.value,e.page=1,n()});const n=async()=>{try{let i=`https://food-boutique.b.goit.study/api/products?page=${e.page}&limit=${e.limit}`;e.keyword&&(i+=`&keyword=${e.keyword}`),e.category&&e.category!=="Show all"&&(i+=`&category=${e.category}`);const f=(await p.get(i)).data;c(f.results)}catch(i){console.error("Error fetching products:",i)}},c=i=>{a.innerHTML='<ul class="product__list">'+i.map(l=>h(l)).join("")+"</ul>"},_=async()=>{try{t=["Show all",...(await p.get("https://food-boutique.b.goit.study/api/products/categories")).data],m(t)}catch(i){console.error("Error fetching categories:",i)}},m=i=>{o.innerHTML=i.map(l=>`<option value="${l}">${l}</option>`).join("")};_(),n()});const w=document.querySelector(".footer-form-js"),g=document.querySelector("#subscribe");w.addEventListener("submit",$);const v=/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}/,b={labels:{warning:"Warning"},icons:{warning:'<i class="fas fa-exclamation-triangle"></i>'},colors:{warning:"#FFA500"},maxNotifications:1,durations:{global:2e3}},L={labels:{warning:"Warning"},icons:{warning:'<i class="fas fa-exclamation-triangle"></i>'},colors:{warning:"#FFA500"},maxNotifications:1,durations:{global:4e3}};function $(s){s.preventDefault();const r=s.currentTarget.subscribe.value.trim().toLowerCase();if(!r.match(v)){g.style.borderColor="red",new u().warning("Please enter a correct email",b);return}g.style.borderColor="#e8e8e2",y({email:r}).then(a=>{a.status===201&&console.log("Thanks for subscribing for nnew products")}).catch(a=>{a.response.status===409?console.log("This email address has already been entered"):(new u().warning("Oops! Something went wrong!Your email address is incorrect. Please try again",L),console.log("Oops! Something went wrong!Your email address is incorrect"))}),s.target.reset()}let k=5;const x=document.querySelector(".popular-js");S();async function S(){try{const s=await p.get(`https://food-boutique.b.goit.study/api/products/popular?limit=${k}`);x.insertAdjacentHTML("beforeend",E(s))}catch{console.log("Упс! Щось пішло не так.")}}function E(s){return s.data.map(({img:r,name:o,category:a,size:e,popularity:t,_id:n})=>{const c=a.replace("_"," ");return`<li class="popular_list_card" data-id="${n}">
        <svg class="sticker_icon visually-hidden" width="60" height="60">
          <use xlink:href="/img/sprite.svg#discount"></use>
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
            <svg class="card-icon" width="12" height="12">
              <use href="/img/sprite.svg#shopping-cart"></use>
            </svg>
          </button>
        </div>
      </li>`}).join("")}
//# sourceMappingURL=popular-6250a297.js.map
