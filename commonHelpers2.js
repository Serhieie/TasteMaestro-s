import{s as _,C as a}from"./assets/sprite-ed217468.js";import{a as k}from"./assets/vendor-f728e3bf.js";const h="cartItems",N=document.querySelector("main");N.addEventListener("click",D);function D(t){const e=t.target.closest(".add-to-cart"),s=t.target.closest(".product_item");if(!s||s.nodeName!=="LI")return;if(e===null){console.log("modal");return}const i=s.dataset.id,o=s.querySelector("#product__image").src,r=s.querySelector("#product__image").alt,c=s.querySelector("#product__title").textContent,n=s.querySelector("#product_category_name").textContent,l=s.querySelector("#product_size").textContent,g=s.querySelector("#product__price").textContent,y=s.querySelector(".card-icon-check"),v=s.querySelector(".card-icon-cart");if(!localStorage.getItem(h))E(h,[{id:i,img:o,imgDsc:r,title:c,category:n,price:g,size:l,quantity:1}]),v.style.display="none",y.style.display="block",C();else{const b=p(h),I=b.findIndex(z=>z.id===s.dataset.id);I!==-1?(b.splice(I,1),v.style.display="block",y.style.display="none"):(b.push({id:i,img:o,imgDsc:r,title:c,category:n,price:g,size:l,quantity:1}),v.style.display="none",y.style.display="block",console.log("ф-ція зміни картинки додати")),E(h,b),C()}}const E=(t,e)=>{try{const s=JSON.stringify(e);localStorage.setItem(t,s)}catch(s){console.error("Set state error: ",s.message)}},p=t=>{try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}};function C(){const t=document.querySelector(".header__js_span");p(h)?t.textContent=`CART (${p(h).length})`:t.textContent=`CART (${0})`}window.addEventListener("load",C);function A({_id:t,name:e,img:s,desc:i,category:o,price:r,size:c,popularity:n,is10PercentOff:l}){let g=[],y=-1;return p("cartItems")&&(g=p("cartItems"),y=g.findIndex(v=>v.id===t)),`<li data-id="${t}" class="product__list__card product_item">
        <svg class="sticker_icon ${l?"":"visually-hidden"}" width="60" height="60">
          <use xlink:href="${_}#discount"></use>
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
            <svg class="card-icon-cart" ${y===-1?"style = 'display:block'":"style = 'display:none'"}  width="18" height="18">
              <use xlink:href="${_}#shopping-cart"></use>
            </svg>
            <svg class="card-icon-check" ${y===-1?"style = 'display:none'":"style = 'display:block'"}  width="18" height="18">
              <use xlink:href="${_}#check"></use>
            </svg>
          </button>
        </div>
      </li>`}let $=a.filters.totalHits;a.paginationContainer.addEventListener("click",O);async function O(t){const e=parseInt(t.target.textContent);if(t.target.closest(".pagination-btn")){if(t.target.classList.contains("back")){if(a.filters.page===1)return;a.filters.page>0&&(a.filters.page-=1)}else if(t.target.classList.contains("forward")){if(a.filters.page===$){a.forward.setAttribute("disabled",!0);return}else a.filters.page<$&&a.forward.removeAttribute("disabled");a.filters.page+=1}f()}if(t.target.classList.contains("pagi_item_span")){if(t.target.textContent==="..."||e===a.filters.page)return;a.filters.page=e,f(),R()}}function R(){return document.querySelectorAll(".pagi_item").forEach(e=>{e.classList.remove("isActive"),parseInt(e.textContent)===a.filters.page&&e.classList.add("isActive")}),a.filters.page<=1?a.back.setAttribute("disabled",!0):a.back.removeAttribute("disabled"),a.filters.page===$?a.forward.setAttribute("disabled",!0):a.forward.removeAttribute("disabled")}function x(t,e){const s=e?"is-active":"",i=a.filters.page>=10?"py":"";return`<li class="pagi_item ${s} pagination_item"><span class="pagi_item_span ${i}">${t}</span></li>`}function P(){return'<li class="pagi_item pagination_item ellipsis"><span class="pagi_item_span pagi_item_span_ellipsis">...</span></li>'}function W(t,e){const s=Math.ceil(t);let i;window.innerWidth<768?i=1:i=2;const o=document.querySelector(".pagination-list");if(o.innerHTML="",s>1){let r="",c=1,n=s;s>5&&(c=Math.max(1,e-i),n=Math.min(s,e+i),c===1?window.innerWidth<768?n=3:n=5:n===s&&(c=s-4)),c>=2&&(r+=x(1,e===1),r+=P());for(let l=c;l<=n;l+=1)r+=x(l,l===e);n<s&&(r+=P(),r+=x(s,s===e)),o.innerHTML=r}}function F(t){t.length<a.filters.limit?a.paginationContainer.classList.add("visually-hidden"):a.paginationContainer.classList.remove("visually-hidden")}const J=document.getElementById("filterForm"),w=document.getElementById("keywordInput"),B=document.getElementById("categorySelect"),L=document.querySelector(".category-list"),u=document.getElementById("sortProducts"),S=document.querySelector(".sortProducts-list");document.getElementById("productsList");const q=document.querySelector(".product__list");let M=[];const f=async()=>{try{let t=`https://food-boutique.b.goit.study/api/products?page=${a.filters.page}&limit=${a.filters.limit}`;if(a.filters.keyword&&(t+=`&keyword=${a.filters.keyword}`),a.filters.category&&a.filters.category!=="Show all"&&(t+=`&category=${a.filters.category}`),a.filters.sort&&a.filters.sort!=="all")switch(a.filters.sort){case"alphabetical":t+="&byABC=true";break;case"reverse-alphabetical":t+="&byABC=false";break;case"cheap":t+="&byPrice=true";break;case"expensive":t+="&byPrice=false";break;case"popular":t+="&byPopularity=false";break;case"not-popular":t+="&byPopularity=true";break}const s=(await k.get(t)).data;a.filters.totalHits=s.totalPages,U(s.results),F(s.results),W(s.totalPages,a.filters.page)}catch(t){console.error("Error fetching products:",t)}},U=t=>{t.length===0?q.innerHTML='<div style="display: inline-flex; flex-direction: column; align-items: center; gap: 14px; width: 371px; height: 110px; margin: 0 auto;"><p style="color: #010101; display: inline-flex; justify-content: center; text-align: center; font-size: 20px;">Nothing was found for the selected <span style="color: #6D8434; padding-left: 4px;"> filters...</span></p><p style="color: rgba(1, 1, 1, 0.70); display: inline-flex; text-align: center; justify-content: center; font-size: 18px;">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p></div>':q.innerHTML=t.map(e=>A(e)).join("")},Z=async()=>{try{M=[...(await k.get("https://food-boutique.b.goit.study/api/products/categories")).data,"Show all"],G(M)}catch(t){console.error("Error fetching categories:",t)}},G=t=>{const e=t.map(s=>{let i=s.replace(/_/g," ");return s==="Breads_&_Bakery"&&(i=i.replace(/&/g,"/")),`<li class="category-item" data-value="${s}">${i}</li>`}).join("");L.innerHTML=e},K=t=>{switch(t){case"alphabetical":u.textContent="A to Z";break;case"reverse-alphabetical":u.textContent="Z to A";break;case"cheap":u.textContent="Cheap";break;case"expensive":u.textContent="Expensive";break;case"popular":u.textContent="Popular";break;case"not-popular":u.textContent="Not popular";break;case"all":u.textContent="Show all";break}},H=()=>{S.classList.remove("show")};u.addEventListener("click",()=>{S.classList.toggle("show")});const V=t=>{B.textContent=t},Y=t=>t?t.getAttribute("data-value"):null,j=()=>{L.classList.remove("show")};B.addEventListener("click",()=>{L.classList.toggle("show")});document.addEventListener("click",t=>{!t.target.matches("#sortProducts")&&!t.target.closest(".sortProducts-list")&&H()});document.addEventListener("click",t=>{!t.target.matches("#categorySelect")&&!t.target.closest(".category-list")&&j()});w.addEventListener("input",()=>{a.filters.keyword=w.value,a.filters.page=1,f()});J.addEventListener("submit",async t=>{t.preventDefault(),a.filters.keyword=w.value,a.filters.page=1,f()});L.addEventListener("click",t=>{if(t.target.classList.contains("category-item")){const e=Y(t.target);a.filters.category=e,a.filters.page=1,f(),V(e),j()}});S.addEventListener("click",t=>{if(t.target.classList.contains("category-item")){const e=t.target.getAttribute("data-value");a.filters.sort=e,a.filters.page=1,f(),K(e),H()}});Z();f();let Q=5;const X=document.querySelector(".popular-js");tt();async function tt(){try{const t=await k.get(`https://food-boutique.b.goit.study/api/products/popular?limit=${Q}`);X.insertAdjacentHTML("beforeend",et(t))}catch{console.log("Упс! Щось пішло не так.")}}function et(t){return t.data.map(e=>A(e)).join("")}const st={discountCardList:document.querySelector(".discount-card-list")};at();async function at(){try{const t=await it(),e=rt(t);st.discountCardList.innerHTML=ot(e)}catch(t){console.log(t)}}async function it(){const t="https://food-boutique.b.goit.study/api",e="products/discount";try{const{data:s}=await k.get(`${t}/${e}`);return s}catch(s){console.log(s)}}function rt(t){const e=[...t],s=Math.floor(Math.random()*e.length),i=e[s];e.splice(s,1);const o=Math.floor(Math.random()*e.length),r=e[o];return[i,r]}function ot(t){let e=[],s=-1;return p("cartItems")&&(e=p("cartItems"),s=e.findIndex(i=>i.id===t._id)),console.log(p("cartItems")),t.map(({_id:i,name:o,img:r,category:c,price:n,size:l,popularity:g})=>`
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
                      <use xlink:href="${_}#shopping-cart"></use>
                  </svg>
                  <svg class="card-icon-check discount-check-icon" ${s===-1?"style = 'display:none'":"style = 'display:block'"}  width="18" height="18">
                      <use xlink:href="${_}#check"></use>
                  </svg>
             </button>
           </div>
         </div>
         <svg class="discount-label-icon" width="60" height="60">
           <use xlink:href="${_}#discount"></use>
         </svg>
         <span id="product_category_name" class="visually-hidden">${c}</span>
         <span id="product_size" class="visually-hidden">${l}</span>
         <span class="product__description__span visually-hidden">${g}</span>
       </li>`).join("")}const ct=document.querySelector("#productsList"),d=document.querySelector(".js-modal-product-card"),m=document.querySelector(".js-backdrop"),T=document.querySelector(".loader-container");ct.addEventListener("click",nt);async function nt(t){if(t.target===t.currentTarget)return;const e=t.target.closest(".product__list__card");if(e===null)return;const s=e.dataset.id;if(t.target.closest(".add-to-cart"))return;T.classList.remove("visually-hidden"),await lt(s),d.innerHTML="";const i=dt(category,desc,img,name,popularity,price,size);d.innerHTML=i,T.classList.add("visually-hidden"),d.classList.remove("visually-hidden");const o=document.querySelector(".js-btn-close-card");o.addEventListener("click",r),m.addEventListener("click",c),document.addEventListener("keydown",n);function r(){m.classList.add("visually-hidden"),d.classList.add("visually-hidden"),d.innerHTML="",o.removeEventListener("click",r)}function c(){m.classList.add("visually-hidden"),d.classList.add("visually-hidden"),d.innerHTML="",m.removeEventListener("click",c)}function n(l){l.preventDefault(),l.key==="Escape"&&(m.classList.add("visually-hidden"),d.classList.add("visually-hidden"),d.innerHTML="",document.removeEventListener("keydown",n))}}async function lt(t){try{d.classList.remove("visually-hidden"),m.classList.remove("visually-hidden");const e="https://food-boutique.b.goit.study/api",s="products",{data:i}=await k.get(`${e}/${s}/${t}`);return i}catch(e){console.error(e)}}function dt(t,e,s,i,o,r,c){return`<div class="product-container">
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
