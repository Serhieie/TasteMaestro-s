import{s as f,C as a}from"./assets/sprite-ed217468.js";import{a as L}from"./assets/vendor-f728e3bf.js";const b="cartItems",O=document.querySelector("main");O.addEventListener("click",R);function R(t){const e=t.target.closest(".add-to-cart"),s=t.target.closest(".product_item");if(!s||s.nodeName!=="LI")return;if(e===null){console.log("modal");return}const i=s.dataset.id,o=s.querySelector("#product__image").src,r=s.querySelector("#product__image").alt,c=s.querySelector("#product__title").textContent,n=s.querySelector("#product_category_name").textContent,l=s.querySelector("#product_size").textContent,u=s.querySelector("#product__price").textContent,p=s.querySelector(".card-icon-check"),h=s.querySelector(".card-icon-cart");if(!localStorage.getItem(b))M(b,[{id:i,img:o,imgDsc:r,title:c,category:n,price:u,size:l,quantity:1}]),h.style.display="none",p.style.display="block",w();else{const g=m(b),k=g.findIndex(x=>x.id===s.dataset.id);k!==-1?(g.splice(k,1),h.style.display="block",p.style.display="none"):(g.push({id:i,img:o,imgDsc:r,title:c,category:n,price:u,size:l,quantity:1}),h.style.display="none",p.style.display="block",console.log("ф-ція зміни картинки додати")),M(b,g),w()}}const M=(t,e)=>{try{const s=JSON.stringify(e);localStorage.setItem(t,s)}catch(s){console.error("Set state error: ",s.message)}},m=t=>{try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}};function w(){const t=document.querySelector(".header__js_span");m(b)?t.textContent=`CART (${m(b).length})`:t.textContent=`CART (${0})`}window.addEventListener("load",w);function j({_id:t,name:e,img:s,desc:i,category:o,price:r,size:c,popularity:n,is10PercentOff:l}){let u=[],p=-1;return m("cartItems")&&(u=m("cartItems"),p=u.findIndex(h=>h.id===t)),`<li data-id="${t}" class="product__list__card product_item">
        <svg class="sticker_icon ${l?"":"visually-hidden"}" width="60" height="60">
          <use xlink:href="${f}#discount"></use>
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
                Size: <span id="product_size" class="product__description__span">${c}</span>
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
          <p id="product__price" class="product__price">${"$"+r}</p>
          <button data-id="${t}" class="product__order__btn add-to-cart">
            <svg class="card-icon-cart" ${p===-1?"style = 'display:block'":"style = 'display:none'"}  width="18" height="18">
              <use xlink:href="${f}#shopping-cart"></use>
            </svg>
            <svg class="card-icon-check" ${p===-1?"style = 'display:none'":"style = 'display:block'"}  width="18" height="18">
              <use xlink:href="${f}#check"></use>
            </svg>
          </button>
        </div>
      </li>`}let S=a.filters.totalHits;a.paginationContainer.addEventListener("click",W);async function W(t){const e=parseInt(t.target.textContent);if(t.target.closest(".pagination-btn")){if(t.target.classList.contains("back")){if(a.filters.page===1)return;a.filters.page>0&&(a.filters.page-=1)}else if(t.target.classList.contains("forward")){if(a.filters.page===S){a.forward.setAttribute("disabled",!0);return}else a.filters.page<S&&a.forward.removeAttribute("disabled");a.filters.page+=1}_()}if(t.target.classList.contains("pagi_item_span")){if(t.target.textContent==="..."||e===a.filters.page)return;a.filters.page=e,_(),F()}}function F(){return document.querySelectorAll(".pagi_item").forEach(e=>{e.classList.remove("isActive"),parseInt(e.textContent)===a.filters.page&&e.classList.add("isActive")}),a.filters.page<=1?a.back.setAttribute("disabled",!0):a.back.removeAttribute("disabled"),a.filters.page===S?a.forward.setAttribute("disabled",!0):a.forward.removeAttribute("disabled")}function C(t,e){const s=e?"is-active":"",i=a.filters.page>=10?"py":"";return`<li class="pagi_item ${s} pagination_item"><span class="pagi_item_span ${i}">${t}</span></li>`}function T(){return'<li class="pagi_item pagination_item ellipsis"><span class="pagi_item_span pagi_item_span_ellipsis">...</span></li>'}function J(t,e){const s=Math.ceil(t);let i;window.innerWidth<768?i=1:i=2;const o=document.querySelector(".pagination-list");if(o.innerHTML="",s>1){let r="",c=1,n=s;s>5&&(c=Math.max(1,e-i),n=Math.min(s,e+i),c===1?window.innerWidth<768?n=3:n=5:n===s&&(c=s-4)),c>=2&&(r+=C(1,e===1),r+=T());for(let l=c;l<=n;l+=1)r+=C(l,l===e);n<s&&(r+=T(),r+=C(s,s===e)),o.innerHTML=r}}function U(t){t.length<a.filters.limit?a.paginationContainer.classList.add("visually-hidden"):a.paginationContainer.classList.remove("visually-hidden")}const Z=document.getElementById("filterForm"),I=document.getElementById("keywordInput"),z=document.getElementById("categorySelect"),$=document.querySelector(".category-list"),y=document.getElementById("sortProducts"),E=document.querySelector(".sortProducts-list");document.getElementById("productsList");const A=document.querySelector(".product__list");let B=[];const _=async()=>{try{let t=`https://food-boutique.b.goit.study/api/products?page=${a.filters.page}&limit=${a.filters.limit}`;if(a.filters.keyword&&(t+=`&keyword=${a.filters.keyword}`),a.filters.category&&a.filters.category!=="Show all"&&(t+=`&category=${a.filters.category}`),a.filters.sort&&a.filters.sort!=="all")switch(a.filters.sort){case"alphabetical":t+="&byABC=true";break;case"reverse-alphabetical":t+="&byABC=false";break;case"cheap":t+="&byPrice=true";break;case"expensive":t+="&byPrice=false";break;case"popular":t+="&byPopularity=false";break;case"not-popular":t+="&byPopularity=true";break}const s=(await L.get(t)).data;a.filters.totalHits=s.totalPages,G(s.results),U(s.results),J(s.totalPages,a.filters.page)}catch(t){console.error("Error fetching products:",t)}},G=t=>{t.length===0?A.innerHTML='<div style="display: inline-flex; flex-direction: column; align-items: center; gap: 14px; width: 371px; height: 110px; margin: 0 auto;"><p style="color: #010101; display: inline-flex; justify-content: center; text-align: center; font-size: 20px;">Nothing was found for the selected <span style="color: #6D8434; padding-left: 4px;"> filters...</span></p><p style="color: rgba(1, 1, 1, 0.70); display: inline-flex; text-align: center; justify-content: center; font-size: 18px;">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p></div>':A.innerHTML=t.map(e=>j(e)).join("")},K=async()=>{try{B=[...(await L.get("https://food-boutique.b.goit.study/api/products/categories")).data,"Show all"],V(B)}catch(t){console.error("Error fetching categories:",t)}},V=t=>{const e=t.map(s=>{let i=s.replace(/_/g," ");return s==="Breads_&_Bakery"&&(i=i.replace(/&/g,"/")),`<li class="category-item" data-value="${s}">${i}</li>`}).join("");$.innerHTML=e},Y=t=>{switch(t){case"alphabetical":y.textContent="A to Z";break;case"reverse-alphabetical":y.textContent="Z to A";break;case"cheap":y.textContent="Cheap";break;case"expensive":y.textContent="Expensive";break;case"popular":y.textContent="Popular";break;case"not-popular":y.textContent="Not popular";break;case"all":y.textContent="Show all";break}},N=()=>{E.classList.remove("show")};y.addEventListener("click",()=>{E.classList.toggle("show")});const Q=t=>{z.textContent=t},X=t=>t?t.getAttribute("data-value"):null,D=()=>{$.classList.remove("show")};z.addEventListener("click",()=>{$.classList.toggle("show")});document.addEventListener("click",t=>{!t.target.matches("#sortProducts")&&!t.target.closest(".sortProducts-list")&&N()});document.addEventListener("click",t=>{!t.target.matches("#categorySelect")&&!t.target.closest(".category-list")&&D()});I.addEventListener("input",()=>{a.filters.keyword=I.value,a.filters.page=1,_()});Z.addEventListener("submit",async t=>{t.preventDefault(),a.filters.keyword=I.value,a.filters.page=1,_()});$.addEventListener("click",t=>{if(t.target.classList.contains("category-item")){const e=X(t.target);a.filters.category=e,a.filters.page=1,_(),Q(e),D()}});E.addEventListener("click",t=>{if(t.target.classList.contains("category-item")){const e=t.target.getAttribute("data-value");a.filters.sort=e,a.filters.page=1,_(),Y(e),N()}});K();_();let tt=5;const et=document.querySelector(".popular-js");st();async function st(){try{const t=await L.get(`https://food-boutique.b.goit.study/api/products/popular?limit=${tt}`);et.insertAdjacentHTML("beforeend",at(t))}catch{console.log("Упс! Щось пішло не так.")}}function at(t){return t.data.map(e=>j(e)).join("")}const it={discountCardList:document.querySelector(".discount-card-list")};rt();async function rt(){try{const t=await ot(),e=ct(t);it.discountCardList.innerHTML=nt(e)}catch(t){console.log(t)}}async function ot(){const t="https://food-boutique.b.goit.study/api",e="products/discount";try{const{data:s}=await L.get(`${t}/${e}`);return s}catch(s){console.log(s)}}function ct(t){const e=[...t],s=Math.floor(Math.random()*e.length),i=e[s];e.splice(s,1);const o=Math.floor(Math.random()*e.length),r=e[o];return[i,r]}function nt(t){let e=[],s=-1;return m("cartItems")&&(e=m("cartItems"),s=e.findIndex(i=>i.id===t._id)),console.log(m("cartItems")),t.map(({_id:i,name:o,img:r,category:c,price:n,size:l,popularity:u})=>`
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
               $<span class="js-discount-product-price">${n}</span>
             </p>
             <button data-id="${i}" class="discount-cart-btn add-to-cart" type="button">
                <svg class="card-icon-cart discount-cart-icon" ${s===-1?"style = 'display:block'":"style = 'display:none'"}  width="18" height="18">
                      <use xlink:href="${f}#shopping-cart"></use>
                  </svg>
                  <svg class="card-icon-check discount-check-icon" ${s===-1?"style = 'display:none'":"style = 'display:block'"}  width="18" height="18">
                      <use xlink:href="${f}#check"></use>
                  </svg>
             </button>
           </div>
         </div>
         <svg class="discount-label-icon" width="60" height="60">
           <use xlink:href="${f}#discount"></use>
         </svg>
         <span id="product_category_name" class="visually-hidden">${c}</span>
         <span id="product_size" class="visually-hidden">${l}</span>
         <span class="product__description__span visually-hidden">${u}</span>
       </li>`).join("")}const lt=document.querySelector("#productsList"),d=document.querySelector(".js-modal-product-card"),v=document.querySelector(".js-backdrop"),H=document.querySelector(".loader-container");lt.addEventListener("click",dt);async function dt(t){if(t.target===t.currentTarget)return;const e=t.target.closest(".product__list__card");if(e===null)return;const s=e.dataset.id;if(t.target.closest(".add-to-cart"))return;H.classList.remove("visually-hidden");const i=await ut(s);d.innerHTML="";const{category:o,desc:r,img:c,name:n,popularity:l,price:u,size:p}=i,h=pt(o,r,c,n,l,u,p);d.innerHTML=h,H.classList.add("visually-hidden"),d.classList.remove("visually-hidden");const g=document.querySelector(".js-btn-close-card");g.addEventListener("click",k),v.addEventListener("click",x),document.addEventListener("keydown",P);function k(){v.classList.add("visually-hidden"),d.classList.add("visually-hidden"),d.innerHTML="",g.removeEventListener("click",k)}function x(){v.classList.add("visually-hidden"),d.classList.add("visually-hidden"),d.innerHTML="",v.removeEventListener("click",x)}function P(q){q.preventDefault(),q.key==="Escape"&&(v.classList.add("visually-hidden"),d.classList.add("visually-hidden"),d.innerHTML="",document.removeEventListener("keydown",P))}}async function ut(t){try{d.classList.remove("visually-hidden"),v.classList.remove("visually-hidden");const e="https://food-boutique.b.goit.study/api",s="products",{data:i}=await L.get(`${e}/${s}/${t}`);return i}catch(e){console.error(e)}}function pt(t,e,s,i,o,r,c){return`<div class="product-container">
    <div class="product-image-box">
        <img class="product-image" src="${s!==null?s:"./img/image-placeholder.png"}" alt="${i}">
    </div>
    <div class="product-descr">
        <h4 class="product-title">${i}</h4>
        <ul class="product-details-list">
            <li class="product-details-text"><span class="span-details-text">Category: </span>${t}</li>
            <li class="product-details-text"><span class="span-details-text">Size: </span>${c}</li>
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
            <use href="${f}#shopping-cart"></use>
        </svg>
    </button>
    </div>
    <button class="modal-btn-close js-btn-close-card" type="button">
    <svg class="icon-close">
        <use href="${f}#close-cross"></use>
      </svg>
    </button>`}
//# sourceMappingURL=commonHelpers2.js.map
