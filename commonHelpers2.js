import{s as h,C as a}from"./assets/sprite-842664a8.js";import{a as x}from"./assets/vendor-f728e3bf.js";const b="cartItems",N=document.querySelector("main");N.addEventListener("click",O);function O(t){const e=t.target.closest(".add-to-cart"),s=t.target.closest(".product_item");if(!s||s.nodeName!=="LI")return;if(e===null){console.log("modal");return}const i=s.dataset.id,n=s.querySelector("#product__image").src,r=s.querySelector("#product__image").alt,o=s.querySelector("#product__title").textContent,c=s.querySelector("#product_category_name").textContent,l=s.querySelector("#product_size").textContent,g=s.querySelector("#product__price").textContent,d=s.querySelector(".card-icon-check"),y=s.querySelector(".card-icon-cart");if(!localStorage.getItem(b))M(b,[{id:i,img:n,imgDsc:r,title:o,category:c,price:g,size:l,quantity:1}]),y.style.display="none",d.style.display="block",$();else{const p=k(b),_=p.findIndex(L=>L.id===s.dataset.id);console.log(_),_!==-1?(p.splice(_,1),y.style.display="block",d.style.display="none"):(p.push({id:i,img:n,imgDsc:r,title:o,category:c,price:g,size:l,quantity:1}),y.style.display="none",d.style.display="block",console.log("ф-ція зміни картинки додати")),M(b,p),$()}}const M=(t,e)=>{try{const s=JSON.stringify(e);localStorage.setItem(t,s)}catch(s){console.error("Set state error: ",s.message)}},k=t=>{try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}};function $(){const t=document.querySelector(".header__js_span");k(b)?t.textContent=`CART (${k(b).length})`:t.textContent=`CART (${0})`}window.addEventListener("load",$);function R({_id:t,name:e,img:s,desc:i,category:n,price:r,size:o,popularity:c,is10PercentOff:l}){let g=[],d=-1;return k("cartItems")&&(g=k("cartItems"),d=g.findIndex(y=>y.id===t)),`<li data-id="${t}" class="product__list__card product_item">
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
      </li>`}let S=a.filters.totalHits;a.paginationContainer.addEventListener("click",W);async function W(t){const e=parseInt(t.target.textContent);if(t.target.closest(".pagination-btn")){if(t.target.classList.contains("back")){if(a.filters.page===1)return;a.filters.page>0&&(a.filters.page-=1)}else if(t.target.classList.contains("forward")){if(a.filters.page===S){a.forward.setAttribute("disabled",!0);return}else a.filters.page<S&&a.forward.removeAttribute("disabled");a.filters.page+=1}m()}if(t.target.classList.contains("pagi_item_span")){if(t.target.textContent==="..."||e===a.filters.page)return;a.filters.page=e,m(),F()}}function F(){return document.querySelectorAll(".pagi_item").forEach(e=>{e.classList.remove("isActive"),parseInt(e.textContent)===a.filters.page&&e.classList.add("isActive")}),a.filters.page<=1?a.back.setAttribute("disabled",!0):a.back.removeAttribute("disabled"),a.filters.page===S?a.forward.setAttribute("disabled",!0):a.forward.removeAttribute("disabled")}function C(t,e){const s=e?"is-active":"",i=a.filters.page>=10?"py":"";return`<li class="pagi_item ${s} pagination_item"><span class="pagi_item_span ${i}">${t}</span></li>`}function A(){return'<li class="pagi_item pagination_item"><span class="pagi_item_span">...</span></li>'}function J(t,e){const s=Math.ceil(t);let i;window.innerWidth<768?i=1:i=2;const n=document.querySelector(".pagination-list");if(n.innerHTML="",s>1){let r="",o=1,c=s;s>5&&(o=Math.max(1,e-i),c=Math.min(s,e+i),o===1?window.innerWidth<768?c=3:c=5:c===s&&(o=s-4)),o>=2&&(r+=C(1,e===1),r+=A());for(let l=o;l<=c;l+=1)r+=C(l,l===e);c<s&&(r+=A(),r+=C(s,s===e)),n.innerHTML=r}}const U=document.getElementById("filterForm"),I=document.getElementById("keywordInput"),H=document.getElementById("categorySelect"),w=document.querySelector(".category-list"),u=document.getElementById("sortProducts"),E=document.querySelector(".sortProducts-list");document.getElementById("productsList");const T=document.querySelector(".product__list");let B=[];const m=async()=>{try{let t=`https://food-boutique.b.goit.study/api/products?page=${a.filters.page}&limit=${a.filters.limit}`;if(a.filters.keyword&&(t+=`&keyword=${a.filters.keyword}`),a.filters.category&&a.filters.category!=="Show all"&&(t+=`&category=${a.filters.category}`),a.filters.sort&&a.filters.sort!=="all")switch(a.filters.sort){case"alphabetical":t+="&byABC=true";break;case"reverse-alphabetical":t+="&byABC=false";break;case"cheap":t+="&byPrice=true";break;case"expensive":t+="&byPrice=false";break;case"popular":t+="&byPopularity=false";break;case"not-popular":t+="&byPopularity=true";break}const s=(await x.get(t)).data;a.filters.totalHits=s.totalPages,Z(s.results),J(s.totalPages,a.filters.page)}catch(t){console.error("Error fetching products:",t)}},Z=t=>{t.length===0?T.innerHTML='<div style="display: inline-flex; flex-direction: column; align-items: center; gap: 14px; width: 371px; height: 110px; margin: 0 auto;"><p style="color: #010101; display: inline-flex; justify-content: center; text-align: center; font-size: 20px;">Nothing was found for the selected <span style="color: #6D8434; padding-left: 4px;"> filters...</span></p><p style="color: rgba(1, 1, 1, 0.70); display: inline-flex; text-align: center; justify-content: center; font-size: 18px;">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p></div>':T.innerHTML=t.map(e=>R(e)).join("")},G=async()=>{try{B=[...(await x.get("https://food-boutique.b.goit.study/api/products/categories")).data,"Show all"],K(B)}catch(t){console.error("Error fetching categories:",t)}},K=t=>{const e=t.map(s=>{let i=s.replace(/_/g," ");return s==="Breads_&_Bakery"&&(i=i.replace(/&/g,"/")),`<li class="category-item" data-value="${s}">${i}</li>`}).join("");w.innerHTML=e},V=t=>{switch(t){case"alphabetical":u.textContent="A to Z";break;case"reverse-alphabetical":u.textContent="Z to A";break;case"cheap":u.textContent="Cheap";break;case"expensive":u.textContent="Expensive";break;case"popular":u.textContent="Popular";break;case"not-popular":u.textContent="Not popular";break;case"all":u.textContent="Show all";break}},z=()=>{E.classList.remove("show")};u.addEventListener("click",()=>{E.classList.toggle("show")});const Y=t=>{H.textContent=t},Q=t=>t?t.getAttribute("data-value"):null,D=()=>{w.classList.remove("show")};H.addEventListener("click",()=>{w.classList.toggle("show")});document.addEventListener("click",t=>{!t.target.matches("#sortProducts")&&!t.target.closest(".sortProducts-list")&&z()});document.addEventListener("click",t=>{!t.target.matches("#categorySelect")&&!t.target.closest(".category-list")&&D()});I.addEventListener("input",()=>{a.filters.keyword=I.value,a.filters.page=1,m()});U.addEventListener("submit",async t=>{t.preventDefault(),a.filters.keyword=I.value,a.filters.page=1,m()});w.addEventListener("click",t=>{if(t.target.classList.contains("category-item")){const e=Q(t.target);a.filters.category=e,a.filters.page=1,m(),Y(e),D()}});E.addEventListener("click",t=>{if(t.target.classList.contains("category-item")){const e=t.target.getAttribute("data-value");a.filters.sort=e,a.filters.page=1,m(),V(e),z()}});G();m();let X=5;const tt=document.querySelector(".popular-js");et();async function et(){try{const t=await x.get(`https://food-boutique.b.goit.study/api/products/popular?limit=${X}`);tt.insertAdjacentHTML("beforeend",st(t))}catch{console.log("Упс! Щось пішло не так.")}}function st(t){return t.data.map(({img:e,name:s,category:i,size:n,popularity:r,_id:o})=>{const c=i.replace("_"," ");return`<li class="popular_list_card" data-id="${o}">
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
                Size: <span class="popular_details_text">${n}</span>
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
      </li>`}).join("")}const at={discountCardList:document.querySelector(".discount-card-list")};it();async function it(){try{const t=await rt(),e=ct(t);at.discountCardList.innerHTML=ot(e)}catch(t){console.log(t)}}async function rt(){const t="https://food-boutique.b.goit.study/api",e="products/discount";try{const{data:s}=await x.get(`${t}/${e}`);return s}catch(s){console.log(s)}}function ot(t){return t.map(({name:e,img:s,price:i})=>`
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
              $<span class="js-discount-product-price">${i}</span>
            </p>
            <button class="discount-cart-btn" type="button">
              <svg class="discount-cart-icon" width="18" height="18">
                <use xlink:href="${h}#shopping-cart"></use>
              </svg>
            </button>
          </div>
        </div>
        <svg class="discount-label-icon" width="60" height="60">
          <use xlink:href="${h}#discount"></use>
        </svg>
      </li>`).join("")}function ct(t){const e=[...t],s=Math.floor(Math.random()*e.length),i=e[s];e.splice(s,1);const n=Math.floor(Math.random()*e.length),r=e[n];return[i,r]}const nt=document.querySelector("#productsList"),f=document.querySelector(".js-modal-product-card"),v=document.querySelector(".js-backdrop"),j=document.querySelector(".loader-container");nt.addEventListener("click",lt);f.classList.add("visually-hidden");async function lt(t){if(t.target===t.currentTarget)return;const e=t.target.closest(".product__list__card");if(e===null)return;const s=e.id;j.classList.remove("visually-hidden");const i=await dt(s),{category:n,desc:r,img:o,name:c,popularity:l,price:g,size:d}=i,y=pt(n,r,o,c,l,g,d);f.innerHTML=y,j.classList.add("visually-hidden"),f.classList.remove("visually-hidden");const p=document.querySelector(".js-btn-close-card");p.addEventListener("click",_),v.addEventListener("click",L),document.addEventListener("keydown",P);function _(){v.classList.add("visually-hidden"),f.classList.add("visually-hidden"),p.removeEventListener("click",_)}function L(){v.classList.add("visually-hidden"),f.classList.add("visually-hidden"),v.removeEventListener("click",L)}function P(q){q.preventDefault(),q.key==="Escape"&&(v.classList.add("visually-hidden"),f.classList.add("visually-hidden"),document.removeEventListener("keydown",P))}}async function dt(t){try{f.classList.remove("visually-hidden"),v.classList.remove("visually-hidden");const e="https://food-boutique.b.goit.study/api",s="products",{data:i}=await x.get(`${e}/${s}/${t}`);return i}catch(e){console.error(e)}}function pt(t,e,s,i,n,r,o){return`<div class="product-container">
    <div class="product-image-box">
        <img class="product-image" src="${s!==null?s:"./img/image-placeholder.png"}" alt="${i}">
    </div>
    <div class="product-descr">
        <h4 class="product-title">${i}</h4>
        <ul class="product-details-list">
            <li class="product-details-text"><span class="span-details-text">Category: </span>${t}</li>
            <li class="product-details-text"><span class="span-details-text">Size: </span>${o}</li>
            <li class="product-details-text"><span class="span-details-text">Popularity: </span>${n}</li>
        </ul>
        <p class="product-text">${e}</p>
    </div>
    </div>
    <div class="product-wraper">
    <span class="product-price">${r}</span>
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
