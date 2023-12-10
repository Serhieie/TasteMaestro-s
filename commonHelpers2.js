import{s as h,C as a}from"./assets/sprite-f1c3bb92.js";import{a as x}from"./assets/vendor-f23f4c51.js";const b="cartItems",O=document.querySelector("main");O.addEventListener("click",R);function R(t){const e=t.target.closest(".add-to-cart"),s=t.target.closest(".product_item");if(!s||s.nodeName!=="LI")return;if(e===null){console.log("modal");return}const i=s.dataset.id,o=s.querySelector("#product__image").src,r=s.querySelector("#product__image").alt,n=s.querySelector("#product__title").textContent,c=s.querySelector("#product_category_name").textContent,l=s.querySelector("#product_size").textContent,u=s.querySelector("#product__price").textContent,d=s.querySelector(".card-icon-check"),g=s.querySelector(".card-icon-cart");if(!localStorage.getItem(b))M(b,[{id:i,img:o,imgDsc:r,title:n,category:c,price:u,size:l,quantity:1}]),g.style.display="none",d.style.display="block",C();else{const y=_(b),k=y.findIndex(L=>L.id===s.dataset.id);k!==-1?(y.splice(k,1),g.style.display="block",d.style.display="none"):(y.push({id:i,img:o,imgDsc:r,title:n,category:c,price:u,size:l,quantity:1}),g.style.display="none",d.style.display="block",console.log("ф-ція зміни картинки додати")),M(b,y),C()}}const M=(t,e)=>{try{const s=JSON.stringify(e);localStorage.setItem(t,s)}catch(s){console.error("Set state error: ",s.message)}},_=t=>{try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}};function C(){const t=document.querySelector(".header__js_span");_(b)?t.textContent=`CART (${_(b).length})`:t.textContent=`CART (${0})`}window.addEventListener("load",C);function W({_id:t,name:e,img:s,desc:i,category:o,price:r,size:n,popularity:c,is10PercentOff:l}){let u=[],d=-1;return _("cartItems")&&(u=_("cartItems"),d=u.findIndex(g=>g.id===t)),`<li data-id="${t}" class="product__list__card product_item">
        <svg class="sticker_icon ${l?"":"visually-hidden"}" width="60" height="60">
          <use xlink:href="${h}#discount"></use>
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
                <span id="product_category_name" class="product__description__span"}>${o.replace(/_/g," ")}</span>
              </p>
            </li>
            <li>
              <p class="product__description__text">
                Size: <span id="product_size" class="product__description__span">${n}</span>
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
          <p id="product__price" class="product__price">${"$"+r}</p>
          <button data-id="${t}" class="product__order__btn add-to-cart">
            <svg class="card-icon-cart" ${d===-1?"style = 'display:block'":"style = 'display:none'"}  width="18" height="18">
              <use xlink:href="${h}#shopping-cart"></use>
            </svg>
            <svg class="card-icon-check" ${d===-1?"style = 'display:none'":"style = 'display:block'"}  width="18" height="18">
              <use xlink:href="${h}#check"></use>
            </svg>
          </button>
        </div>
      </li>`}let S=a.filters.totalHits;a.paginationContainer.addEventListener("click",F);async function F(t){const e=parseInt(t.target.textContent);if(t.target.closest(".pagination-btn")){if(t.target.classList.contains("back")){if(a.filters.page===1)return;a.filters.page>0&&(a.filters.page-=1)}else if(t.target.classList.contains("forward")){if(a.filters.page===S){a.forward.setAttribute("disabled",!0);return}else a.filters.page<S&&a.forward.removeAttribute("disabled");a.filters.page+=1}m()}if(t.target.classList.contains("pagi_item_span")){if(t.target.textContent==="..."||e===a.filters.page)return;a.filters.page=e,m(),J()}}function J(){return document.querySelectorAll(".pagi_item").forEach(e=>{e.classList.remove("isActive"),parseInt(e.textContent)===a.filters.page&&e.classList.add("isActive")}),a.filters.page<=1?a.back.setAttribute("disabled",!0):a.back.removeAttribute("disabled"),a.filters.page===S?a.forward.setAttribute("disabled",!0):a.forward.removeAttribute("disabled")}function w(t,e){const s=e?"is-active":"",i=a.filters.page>=10?"py":"";return`<li class="pagi_item ${s} pagination_item"><span class="pagi_item_span ${i}">${t}</span></li>`}function T(){return'<li class="pagi_item pagination_item"><span class="pagi_item_span">...</span></li>'}function U(t,e){const s=Math.ceil(t);let i;window.innerWidth<768?i=1:i=2;const o=document.querySelector(".pagination-list");if(o.innerHTML="",s>1){let r="",n=1,c=s;s>5&&(n=Math.max(1,e-i),c=Math.min(s,e+i),n===1?window.innerWidth<768?c=3:c=5:c===s&&(n=s-4)),n>=2&&(r+=w(1,e===1),r+=T());for(let l=n;l<=c;l+=1)r+=w(l,l===e);c<s&&(r+=T(),r+=w(s,s===e)),o.innerHTML=r}}const Z=document.getElementById("filterForm"),I=document.getElementById("keywordInput"),z=document.getElementById("categorySelect"),$=document.querySelector(".category-list"),f=document.getElementById("sortProducts"),E=document.querySelector(".sortProducts-list");document.getElementById("productsList");const A=document.querySelector(".product__list");let B=[];const m=async()=>{try{let t=`https://food-boutique.b.goit.study/api/products?page=${a.filters.page}&limit=${a.filters.limit}`;if(a.filters.keyword&&(t+=`&keyword=${a.filters.keyword}`),a.filters.category&&a.filters.category!=="Show all"&&(t+=`&category=${a.filters.category}`),a.filters.sort&&a.filters.sort!=="all")switch(a.filters.sort){case"alphabetical":t+="&byABC=true";break;case"reverse-alphabetical":t+="&byABC=false";break;case"cheap":t+="&byPrice=true";break;case"expensive":t+="&byPrice=false";break;case"popular":t+="&byPopularity=false";break;case"not-popular":t+="&byPopularity=true";break}const s=(await x.get(t)).data;a.filters.totalHits=s.totalPages,G(s.results),U(s.totalPages,a.filters.page)}catch(t){console.error("Error fetching products:",t)}},G=t=>{t.length===0?A.innerHTML='<div style="display: inline-flex; flex-direction: column; align-items: center; gap: 14px; width: 371px; height: 110px; margin: 0 auto;"><p style="color: #010101; display: inline-flex; justify-content: center; text-align: center; font-size: 20px;">Nothing was found for the selected <span style="color: #6D8434; padding-left: 4px;"> filters...</span></p><p style="color: rgba(1, 1, 1, 0.70); display: inline-flex; text-align: center; justify-content: center; font-size: 18px;">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p></div>':A.innerHTML=t.map(e=>W(e)).join("")},K=async()=>{try{B=[...(await x.get("https://food-boutique.b.goit.study/api/products/categories")).data,"Show all"],V(B)}catch(t){console.error("Error fetching categories:",t)}},V=t=>{const e=t.map(s=>{let i=s.replace(/_/g," ");return s==="Breads_&_Bakery"&&(i=i.replace(/&/g,"/")),`<li class="category-item" data-value="${s}">${i}</li>`}).join("");$.innerHTML=e},Y=t=>{switch(t){case"alphabetical":f.textContent="A to Z";break;case"reverse-alphabetical":f.textContent="Z to A";break;case"cheap":f.textContent="Cheap";break;case"expensive":f.textContent="Expensive";break;case"popular":f.textContent="Popular";break;case"not-popular":f.textContent="Not popular";break;case"all":f.textContent="Show all";break}},D=()=>{E.classList.remove("show")};f.addEventListener("click",()=>{E.classList.toggle("show")});const Q=t=>{z.textContent=t},X=t=>t?t.getAttribute("data-value"):null,N=()=>{$.classList.remove("show")};z.addEventListener("click",()=>{$.classList.toggle("show")});document.addEventListener("click",t=>{!t.target.matches("#sortProducts")&&!t.target.closest(".sortProducts-list")&&D()});document.addEventListener("click",t=>{!t.target.matches("#categorySelect")&&!t.target.closest(".category-list")&&N()});I.addEventListener("input",()=>{a.filters.keyword=I.value,a.filters.page=1,m()});Z.addEventListener("submit",async t=>{t.preventDefault(),a.filters.keyword=I.value,a.filters.page=1,m()});$.addEventListener("click",t=>{if(t.target.classList.contains("category-item")){const e=X(t.target);a.filters.category=e,a.filters.page=1,m(),Q(e),N()}});E.addEventListener("click",t=>{if(t.target.classList.contains("category-item")){const e=t.target.getAttribute("data-value");a.filters.sort=e,a.filters.page=1,m(),Y(e),D()}});K();m();let tt=5;const et=document.querySelector(".popular-js");st();async function st(){try{const t=await x.get(`https://food-boutique.b.goit.study/api/products/popular?limit=${tt}`);et.insertAdjacentHTML("beforeend",at(t))}catch{console.log("Упс! Щось пішло не так.")}}function at(t){return t.data.map(({img:e,name:s,category:i,size:o,popularity:r,_id:n})=>{const c=i.replace("_"," ");return`<li class="popular_list_card" data-id="${n}">
        <svg class="popular_discount_icon visually-hidden" width="60" height="60">
          <use xlink:href="${h}#Discount"></use>
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
                Size: <span class="popular_details_text">${o}</span>
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
              <use xlink:href="${h}#shopping-cart"></use>
            </svg>
          </button>
        </div>
      </li>`}).join("")}const it={discountCardList:document.querySelector(".discount-card-list")};rt();async function rt(){try{const t=await ot(),e=ct(t);it.discountCardList.innerHTML=nt(e)}catch(t){console.log(t)}}async function ot(){const t="https://food-boutique.b.goit.study/api",e="products/discount";try{const{data:s}=await x.get(`${t}/${e}`);return s}catch(s){console.log(s)}}function ct(t){const e=[...t],s=Math.floor(Math.random()*e.length),i=e[s];e.splice(s,1);const o=Math.floor(Math.random()*e.length),r=e[o];return[i,r]}function nt(t){let e=[],s=-1;return _("cartItems")&&(e=_("cartItems"),s=e.findIndex(i=>i.id===_id),console.log(s)),t.map(({_id:i,name:o,img:r,imgDsc:n,category:c,price:l,size:u,popularity:d,is10PercentOff:g})=>`
      <li data-id="${i}" class="discount-card product_item">
         <div class="img-field">
         <img
            id="product__image"
             class="discount-product-img"
             src="${r}"
             alt="${o}"
           />
         </div>
         <div class="discount-product-info">
           <p id="product__title" class="discount-product-name">${o}</p>
           <div class="discount-product-buy">
             <p id="product__price" class="discount-product-price">
               $<span class="js-discount-product-price">${l}</span>
             </p>
             <button data-id="${i}" class="discount-cart-btn add-to-cart" type="button">
                <svg class="card-icon-cart discount-cart-icon" ${s===-1?"style = 'display:block'":"style = 'display:none'"}  width="18" height="18">
                      <use xlink:href="${h}#shopping-cart"></use>
                  </svg>
                  <svg class="card-icon-check discount-check-icon" ${s===-1?"style = 'display:none'":"style = 'display:block'"}  width="18" height="18">
                      <use xlink:href="${h}#check"></use>
                  </svg>
             </button>
           </div>
         </div>
         <svg class="discount-label-icon" width="60" height="60">
           <use xlink:href="${h}#discount"></use>
         </svg>
         <span id="product_category_name" class="visually-hidden">${c}</span>
         <span id="product_size" class="visually-hidden">${u}</span>

       </li>`).join("")}const lt=document.querySelector("#productsList"),p=document.querySelector(".js-modal-product-card"),v=document.querySelector(".js-backdrop"),H=document.querySelector(".loader-container"),j=document.querySelector(".add-to-cart");lt.addEventListener("click",dt);async function dt(t){if(t.target===t.currentTarget)return;const e=t.target.closest(".product__list__card");if(e===null)return;const s=e.dataset.id;if(H.classList.remove("visually-hidden"),e===j){console.log(j);return}const i=await pt(s),{category:o,desc:r,img:n,name:c,popularity:l,price:u,size:d}=i;p.innerHTML="";const g=ut(o,r,n,c,l,u,d);p.innerHTML=g,H.classList.add("visually-hidden"),p.classList.remove("visually-hidden");const y=document.querySelector(".js-btn-close-card");y.addEventListener("click",k),v.addEventListener("click",L),document.addEventListener("keydown",P);function k(){v.classList.add("visually-hidden"),p.classList.add("visually-hidden"),p.innerHTML="",y.removeEventListener("click",k)}function L(){v.classList.add("visually-hidden"),p.classList.add("visually-hidden"),p.innerHTML="",v.removeEventListener("click",L)}function P(q){q.preventDefault(),q.key==="Escape"&&(v.classList.add("visually-hidden"),p.classList.add("visually-hidden"),p.innerHTML="",document.removeEventListener("keydown",P))}}async function pt(t){try{p.classList.remove("visually-hidden"),v.classList.remove("visually-hidden");const e="https://food-boutique.b.goit.study/api",s="products",{data:i}=await x.get(`${e}/${s}/${t}`);return i}catch(e){console.error(e)}}function ut(t,e,s,i,o,r,n){return`<div class="product-container">
    <div class="product-image-box">
        <img class="product-image" src="${s!==null?s:"./img/image-placeholder.png"}" alt="${i}">
    </div>
    <div class="product-descr">
        <h4 class="product-title">${i}</h4>
        <ul class="product-details-list">
            <li class="product-details-text"><span class="span-details-text">Category: </span>${t}</li>
            <li class="product-details-text"><span class="span-details-text">Size: </span>${n}</li>
            <li class="product-details-text"><span class="span-details-text">Popularity: </span>${o}</li>
        </ul>
        <p class="product-text">${e}</p>
    </div>
    </div>
    <div class="product-wraper">
    <span class="product-price">$${r}</span>
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
