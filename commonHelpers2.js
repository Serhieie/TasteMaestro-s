import{s as m,C as a}from"./assets/sprite-b179ef56.js";import{a as L}from"./assets/vendor-f23f4c51.js";const v="cartItems",O=document.querySelector("main");O.addEventListener("click",R);function R(t){const e=t.target.closest(".add-to-cart"),s=t.target.closest(".product_item");if(!s||s.nodeName!=="LI")return;if(e===null){console.log("modal");return}const r=s.dataset.id,n=s.querySelector("#product__image").src,i=s.querySelector("#product__image").alt,o=s.querySelector("#product__title").textContent,c=s.querySelector("#product_category_name").textContent,l=s.querySelector("#product_size").textContent,y=s.querySelector("#product__price").textContent,p=s.querySelector(".card-icon-check"),f=s.querySelector(".card-icon-cart");if(!localStorage.getItem(v))M(v,[{id:r,img:n,imgDsc:i,title:o,category:c,price:y,size:l,quantity:1}]),f.style.display="none",p.style.display="block",$();else{const u=k(v),b=u.findIndex(x=>x.id===s.dataset.id);b!==-1?(u.splice(b,1),f.style.display="block",p.style.display="none"):(u.push({id:r,img:n,imgDsc:i,title:o,category:c,price:y,size:l,quantity:1}),f.style.display="none",p.style.display="block",console.log("ф-ція зміни картинки додати")),M(v,u),$()}}const M=(t,e)=>{try{const s=JSON.stringify(e);localStorage.setItem(t,s)}catch(s){console.error("Set state error: ",s.message)}},k=t=>{try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}};function $(){const t=document.querySelector(".header__js_span");k(v)?t.textContent=`CART (${k(v).length})`:t.textContent=`CART (${0})`}window.addEventListener("load",$);function W({_id:t,name:e,img:s,desc:r,category:n,price:i,size:o,popularity:c,is10PercentOff:l}){let y=[],p=-1;return k("cartItems")&&(y=k("cartItems"),p=y.findIndex(f=>f.id===t)),`<li data-id="${t}" class="product__list__card product_item">
        <svg class="sticker_icon ${l?"":"visually-hidden"}" width="60" height="60">
          <use xlink:href="${m}#discount"></use>
        </svg>
        <div class="product__image__wraper">
          <img
          id="product__image"
            class="product__image"
            src="${s}"
            alt="${e}"
            width="140px"
            height="140px"
          />
        </div>
        <div class="product__description__wraper">
          <h3 id="product__title" class="product__title">${e}</h3>
          <ul class="product__details">
            <li>
              <p class="product__description__text">
                Category:
                <span id="product_category_name" class="product__description__span"}>${n.replace(/_/g," ")}</span>
              </p>
            </li>
            <li>
              <p class="product__description__text">
                Size: <span id="product_size" class="product__description__span">${o}</span>
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
          <p id="product__price" class="product__price">${"$"+i}</p>
          <button data-id="${t}" class="product__order__btn add-to-cart">
            <svg class="card-icon-cart" ${p===-1?"style = 'display:block'":"style = 'display:none'"}  width="18" height="18">
              <use xlink:href="${m}#shopping-cart"></use>
            </svg>
            <svg class="card-icon-check" ${p===-1?"style = 'display:none'":"style = 'display:block'"}  width="18" height="18">
              <use xlink:href="${m}#check"></use>
            </svg>
          </button>
        </div>
      </li>`}let S=a.filters.totalHits;a.paginationContainer.addEventListener("click",F);async function F(t){const e=parseInt(t.target.textContent);if(t.target.closest(".pagination-btn")){if(t.target.classList.contains("back")){if(a.filters.page===1)return;a.filters.page>0&&(a.filters.page-=1)}else if(t.target.classList.contains("forward")){if(a.filters.page===S){a.forward.setAttribute("disabled",!0);return}else a.filters.page<S&&a.forward.removeAttribute("disabled");a.filters.page+=1}h()}if(t.target.classList.contains("pagi_item_span")){if(t.target.textContent==="..."||e===a.filters.page)return;a.filters.page=e,h(),J()}}function J(){return document.querySelectorAll(".pagi_item").forEach(e=>{e.classList.remove("isActive"),parseInt(e.textContent)===a.filters.page&&e.classList.add("isActive")}),a.filters.page<=1?a.back.setAttribute("disabled",!0):a.back.removeAttribute("disabled"),a.filters.page===S?a.forward.setAttribute("disabled",!0):a.forward.removeAttribute("disabled")}function C(t,e){const s=e?"is-active":"",r=a.filters.page>=10?"py":"";return`<li class="pagi_item ${s} pagination_item"><span class="pagi_item_span ${r}">${t}</span></li>`}function T(){return'<li class="pagi_item pagination_item"><span class="pagi_item_span">...</span></li>'}function U(t,e){const s=Math.ceil(t);let r;window.innerWidth<768?r=1:r=2;const n=document.querySelector(".pagination-list");if(n.innerHTML="",s>1){let i="",o=1,c=s;s>5&&(o=Math.max(1,e-r),c=Math.min(s,e+r),o===1?window.innerWidth<768?c=3:c=5:c===s&&(o=s-4)),o>=2&&(i+=C(1,e===1),i+=T());for(let l=o;l<=c;l+=1)i+=C(l,l===e);c<s&&(i+=T(),i+=C(s,s===e)),n.innerHTML=i}}const Z=document.getElementById("filterForm"),I=document.getElementById("keywordInput"),z=document.getElementById("categorySelect"),w=document.querySelector(".category-list"),g=document.getElementById("sortProducts"),E=document.querySelector(".sortProducts-list");document.getElementById("productsList");const A=document.querySelector(".product__list");let B=[];const h=async()=>{try{let t=`https://food-boutique.b.goit.study/api/products?page=${a.filters.page}&limit=${a.filters.limit}`;if(a.filters.keyword&&(t+=`&keyword=${a.filters.keyword}`),a.filters.category&&a.filters.category!=="Show all"&&(t+=`&category=${a.filters.category}`),a.filters.sort&&a.filters.sort!=="all")switch(a.filters.sort){case"alphabetical":t+="&byABC=true";break;case"reverse-alphabetical":t+="&byABC=false";break;case"cheap":t+="&byPrice=true";break;case"expensive":t+="&byPrice=false";break;case"popular":t+="&byPopularity=false";break;case"not-popular":t+="&byPopularity=true";break}const s=(await L.get(t)).data;a.filters.totalHits=s.totalPages,G(s.results),U(s.totalPages,a.filters.page)}catch(t){console.error("Error fetching products:",t)}},G=t=>{t.length===0?A.innerHTML='<div style="display: inline-flex; flex-direction: column; align-items: center; gap: 14px; width: 371px; height: 110px; margin: 0 auto;"><p style="color: #010101; display: inline-flex; justify-content: center; text-align: center; font-size: 20px;">Nothing was found for the selected <span style="color: #6D8434; padding-left: 4px;"> filters...</span></p><p style="color: rgba(1, 1, 1, 0.70); display: inline-flex; text-align: center; justify-content: center; font-size: 18px;">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p></div>':A.innerHTML=t.map(e=>W(e)).join("")},K=async()=>{try{B=[...(await L.get("https://food-boutique.b.goit.study/api/products/categories")).data,"Show all"],V(B)}catch(t){console.error("Error fetching categories:",t)}},V=t=>{const e=t.map(s=>{let r=s.replace(/_/g," ");return s==="Breads_&_Bakery"&&(r=r.replace(/&/g,"/")),`<li class="category-item" data-value="${s}">${r}</li>`}).join("");w.innerHTML=e},Y=t=>{switch(t){case"alphabetical":g.textContent="A to Z";break;case"reverse-alphabetical":g.textContent="Z to A";break;case"cheap":g.textContent="Cheap";break;case"expensive":g.textContent="Expensive";break;case"popular":g.textContent="Popular";break;case"not-popular":g.textContent="Not popular";break;case"all":g.textContent="Show all";break}},D=()=>{E.classList.remove("show")};g.addEventListener("click",()=>{E.classList.toggle("show")});const Q=t=>{z.textContent=t},X=t=>t?t.getAttribute("data-value"):null,N=()=>{w.classList.remove("show")};z.addEventListener("click",()=>{w.classList.toggle("show")});document.addEventListener("click",t=>{!t.target.matches("#sortProducts")&&!t.target.closest(".sortProducts-list")&&D()});document.addEventListener("click",t=>{!t.target.matches("#categorySelect")&&!t.target.closest(".category-list")&&N()});I.addEventListener("input",()=>{a.filters.keyword=I.value,a.filters.page=1,h()});Z.addEventListener("submit",async t=>{t.preventDefault(),a.filters.keyword=I.value,a.filters.page=1,h()});w.addEventListener("click",t=>{if(t.target.classList.contains("category-item")){const e=X(t.target);a.filters.category=e,a.filters.page=1,h(),Q(e),N()}});E.addEventListener("click",t=>{if(t.target.classList.contains("category-item")){const e=t.target.getAttribute("data-value");a.filters.sort=e,a.filters.page=1,h(),Y(e),D()}});K();h();let tt=5;const et=document.querySelector(".popular-js");st();async function st(){try{const t=await L.get(`https://food-boutique.b.goit.study/api/products/popular?limit=${tt}`);et.insertAdjacentHTML("beforeend",at(t))}catch{console.log("Упс! Щось пішло не так.")}}function at(t){return t.data.map(({img:e,name:s,category:r,size:n,popularity:i,_id:o})=>{const c=r.replace("_"," ");return`<li class="popular_list_card" data-id="${o}">
        <svg class="popular_discount_icon visually-hidden" width="60" height="60">
          <use xlink:href="${m}#Discount"></use>
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
                Category: <span class="popular_details_text">${c}</span>
              </p>
            </li>
            <div class="popular_detail_wrap">
            <li class="popular_details_item">
              <p class="popular_details_category">
                Size: <span class="popular_details_text">${n}</span>
              </p>
            </li>
            <li class="popular_details_item">
              <p class="popular_details_category">
                Popularity: <span class="popular_details_text">${i}</span>
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
      </li>`}).join("")}const rt={discountCardList:document.querySelector(".discount-card-list")};it();async function it(){try{const t=await ot(),e=nt(t);rt.discountCardList.innerHTML=ct(e)}catch(t){console.log(t)}}async function ot(){const t="https://food-boutique.b.goit.study/api",e="products/discount";try{const{data:s}=await L.get(`${t}/${e}`);return s}catch(s){console.log(s)}}function ct(t){return t.map(({name:e,img:s,price:r})=>`
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
              $<span class="js-discount-product-price">${r}</span>
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
      </li>`).join("")}function nt(t){const e=[...t],s=Math.floor(Math.random()*e.length),r=e[s];e.splice(s,1);const n=Math.floor(Math.random()*e.length),i=e[n];return[r,i]}const lt=document.querySelector("#productsList"),d=document.querySelector(".js-modal-product-card"),_=document.querySelector(".js-backdrop"),H=document.querySelector(".loader-container"),j=document.querySelector(".add-to-cart");lt.addEventListener("click",dt);async function dt(t){if(t.target===t.currentTarget)return;const e=t.target.closest(".product__list__card");if(e===null)return;const s=e.dataset.id;if(H.classList.remove("visually-hidden"),e===j){console.log(j);return}const r=await pt(s),{category:n,desc:i,img:o,name:c,popularity:l,price:y,size:p}=r;d.innerHTML="";const f=ut(n,i,o,c,l,y,p);d.innerHTML=f,H.classList.add("visually-hidden"),d.classList.remove("visually-hidden");const u=document.querySelector(".js-btn-close-card");u.addEventListener("click",b),_.addEventListener("click",x),document.addEventListener("keydown",P);function b(){_.classList.add("visually-hidden"),d.classList.add("visually-hidden"),d.innerHTML="",u.removeEventListener("click",b)}function x(){_.classList.add("visually-hidden"),d.classList.add("visually-hidden"),d.innerHTML="",_.removeEventListener("click",x)}function P(q){q.preventDefault(),q.key==="Escape"&&(_.classList.add("visually-hidden"),d.classList.add("visually-hidden"),d.innerHTML="",document.removeEventListener("keydown",P))}}async function pt(t){try{d.classList.remove("visually-hidden"),_.classList.remove("visually-hidden");const e="https://food-boutique.b.goit.study/api",s="products",{data:r}=await L.get(`${e}/${s}/${t}`);return r}catch(e){console.error(e)}}function ut(t,e,s,r,n,i,o){return`<div class="product-container">
    <div class="product-image-box">
        <img class="product-image" src="${s!==null?s:"./img/image-placeholder.png"}" alt="${r}">
    </div>
    <div class="product-descr">
        <h4 class="product-title">${r}</h4>
        <ul class="product-details-list">
            <li class="product-details-text"><span class="span-details-text">Category: </span>${t}</li>
            <li class="product-details-text"><span class="span-details-text">Size: </span>${o}</li>
            <li class="product-details-text"><span class="span-details-text">Popularity: </span>${n}</li>
        </ul>
        <p class="product-text">${e}</p>
    </div>
    </div>
    <div class="product-wraper">
    <span class="product-price">$${i}</span>
    <button class="product-btn-shopping-cart" type="submit">
        <span>Add to</span>
        <svg class="product-cart-icon" width="18" height="18">
            <use href="./img/sprite.svg#shopping-cart"></use>
        </svg>
    </button>
    </div>
    <button class="modal-btn-close js-btn-close-card" type="button">
    <svg class="icon-close">
        <use href="./img/sprite.svg#close-cross"></use>
      </svg>
    </button>`}
//# sourceMappingURL=commonHelpers2.js.map
