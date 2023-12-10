import{s as u,C as a}from"./assets/sprite-8d7ad889.js";import{a as b}from"./assets/vendor-f728e3bf.js";const f="cartItems",B=document.querySelector("main");B.addEventListener("click",j);function j(t){const e=t.target.closest(".add-to-cart"),s=t.target.closest(".product_item");if(!s||s.nodeName!=="LI")return;if(e===null){console.log("modal");return}const r=s.dataset.id,n=s.querySelector("#product__image").src,i=s.querySelector("#product__image").alt,c=s.querySelector("#product__title").textContent,o=s.querySelector("#product_category_name").textContent,l=s.querySelector("#product_size").textContent,_=s.querySelector("#product__price").textContent,p=s.querySelector(".card-icon-check"),y=s.querySelector(".card-icon-cart");if(!localStorage.getItem(f))L(f,[{id:r,img:n,imgDsc:i,title:c,category:o,price:_,size:l,quantity:1}]),y.style.display="none",p.style.display="block",w();else{const h=m(f),x=h.findIndex(T=>T.id===s.dataset.id);console.log(x),x!==-1?(h.splice(x,1),y.style.display="block",p.style.display="none"):(h.push({id:r,img:n,imgDsc:i,title:c,category:o,price:_,size:l,quantity:1}),y.style.display="none",p.style.display="block",console.log("ф-ція зміни картинки додати")),L(f,h),w()}}const L=(t,e)=>{try{const s=JSON.stringify(e);localStorage.setItem(t,s)}catch(s){console.error("Set state error: ",s.message)}},m=t=>{try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}};function w(){const t=document.querySelector(".header__js_span");m(f)?t.textContent=`CART (${m(f).length})`:t.textContent=`CART (${0})`}window.addEventListener("load",w);function H({_id:t,name:e,img:s,desc:r,category:n,price:i,size:c,popularity:o,is10PercentOff:l}){let _=[],p=-1;return m("cartItems")&&(_=m("cartItems"),p=_.findIndex(y=>y.id===t)),`<li data-id="${t}" class="product__list__card product_item">
        <svg class="sticker_icon ${l?"":"visually-hidden"}" width="60" height="60">
          <use xlink:href="${u}#discount"></use>
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
                Size: <span id="product_size" class="product__description__span">${c}</span>
              </p>
            </li>
            <li>
              <p class="product__description__text">
                Popularity: <span class="product__description__span">${o}</span>
              </p>
            </li>
          </ul>
        </div>
        <div class="product__order__wraper">
          <p id="product__price" class="product__price">${"$"+i}</p>
          <button data-id="${t}" class="product__order__btn add-to-cart">
            <svg class="card-icon-cart" ${p===-1?"style = 'display:block'":"style = 'display:none'"}  width="18" height="18">
              <use xlink:href="${u}#shopping-cart"></use>
            </svg>
            <svg class="card-icon-check" ${p===-1?"style = 'display:none'":"style = 'display:block'"}  width="18" height="18">
              <use xlink:href="${u}#check"></use>
            </svg>
          </button>
        </div>
      </li>`}let C=a.filters.totalHits;a.paginationContainer.addEventListener("click",z);async function z(t){const e=parseInt(t.target.textContent);if(t.target.closest(".pagination-btn")){if(t.target.classList.contains("back")){if(a.filters.page===1)return;a.filters.page>0&&(a.filters.page-=1)}else if(t.target.classList.contains("forward")){if(a.filters.page===C){a.forward.setAttribute("disabled",!0);return}else a.filters.page<C&&a.forward.removeAttribute("disabled");a.filters.page+=1}g()}if(t.target.classList.contains("pagi_item_span")){if(t.target.textContent==="..."||e===a.filters.page)return;a.filters.page=e,g(),D()}}function D(){return document.querySelectorAll(".pagi_item").forEach(e=>{e.classList.remove("isActive"),parseInt(e.textContent)===a.filters.page&&e.classList.add("isActive")}),a.filters.page<=1?a.back.setAttribute("disabled",!0):a.back.removeAttribute("disabled"),a.filters.page===C?a.forward.setAttribute("disabled",!0):a.forward.removeAttribute("disabled")}function k(t,e){const s=e?"is-active":"",r=a.filters.page>=10?"py":"";return`<li class="pagi_item ${s} pagination_item"><span class="pagi_item_span ${r}">${t}</span></li>`}function I(){return'<li class="pagi_item pagination_item"><span class="pagi_item_span">...</span></li>'}function N(t,e){const s=Math.ceil(t);let r;window.innerWidth<768?r=1:r=2;const n=document.querySelector(".pagination-list");if(n.innerHTML="",s>1){let i="",c=1,o=s;s>5&&(c=Math.max(1,e-r),o=Math.min(s,e+r),c===1?window.innerWidth<768?o=3:o=5:o===s&&(c=s-4)),c>=2&&(i+=k(1,e===1),i+=I());for(let l=c;l<=o;l+=1)i+=k(l,l===e);o<s&&(i+=I(),i+=k(s,s===e)),n.innerHTML=i}}const O=document.getElementById("filterForm"),$=document.getElementById("keywordInput"),q=document.getElementById("categorySelect"),v=document.querySelector(".category-list"),d=document.getElementById("sortProducts"),S=document.querySelector(".sortProducts-list");document.getElementById("productsList");const P=document.querySelector(".product__list");let E=[];const g=async()=>{try{let t=`https://food-boutique.b.goit.study/api/products?page=${a.filters.page}&limit=${a.filters.limit}`;if(a.filters.keyword&&(t+=`&keyword=${a.filters.keyword}`),a.filters.category&&a.filters.category!=="Show all"&&(t+=`&category=${a.filters.category}`),a.filters.sort&&a.filters.sort!=="all")switch(a.filters.sort){case"alphabetical":t+="&byABC=true";break;case"reverse-alphabetical":t+="&byABC=false";break;case"cheap":t+="&byPrice=true";break;case"expensive":t+="&byPrice=false";break;case"popular":t+="&byPopularity=false";break;case"not-popular":t+="&byPopularity=true";break}const s=(await b.get(t)).data;a.filters.totalHits=s.totalPages,W(s.results),N(s.totalPages,a.filters.page)}catch(t){console.error("Error fetching products:",t)}},W=t=>{t.length===0?P.innerHTML='<div style="display: inline-flex; flex-direction: column; align-items: center; gap: 14px; width: 371px; height: 110px; margin: 0 auto;"><p style="color: #010101; display: inline-flex; justify-content: center; text-align: center; font-size: 20px;">Nothing was found for the selected <span style="color: #6D8434; padding-left: 4px;"> filters...</span></p><p style="color: rgba(1, 1, 1, 0.70); display: inline-flex; text-align: center; justify-content: center; font-size: 18px;">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p></div>':P.innerHTML=t.map(e=>H(e)).join("")},R=async()=>{try{E=[...(await b.get("https://food-boutique.b.goit.study/api/products/categories")).data,"Show all"],F(E)}catch(t){console.error("Error fetching categories:",t)}},F=t=>{const e=t.map(s=>{let r=s.replace(/_/g," ");return s==="Breads_&_Bakery"&&(r=r.replace(/&/g,"/")),`<li class="category-item" data-value="${s}">${r}</li>`}).join("");v.innerHTML=e},J=t=>{switch(t){case"alphabetical":d.textContent="A to Z";break;case"reverse-alphabetical":d.textContent="Z to A";break;case"cheap":d.textContent="Cheap";break;case"expensive":d.textContent="Expensive";break;case"popular":d.textContent="Popular";break;case"not-popular":d.textContent="Not popular";break;case"all":d.textContent="Show all";break}},M=()=>{S.classList.remove("show")};d.addEventListener("click",()=>{S.classList.toggle("show")});const Z=t=>{q.textContent=t},G=t=>t?t.getAttribute("data-value"):null,A=()=>{v.classList.remove("show")};q.addEventListener("click",()=>{v.classList.toggle("show")});document.addEventListener("click",t=>{!t.target.matches("#sortProducts")&&!t.target.closest(".sortProducts-list")&&M()});document.addEventListener("click",t=>{!t.target.matches("#categorySelect")&&!t.target.closest(".category-list")&&A()});$.addEventListener("input",()=>{a.filters.keyword=$.value,a.filters.page=1,g()});O.addEventListener("submit",async t=>{t.preventDefault(),a.filters.keyword=$.value,a.filters.page=1,g()});v.addEventListener("click",t=>{if(t.target.classList.contains("category-item")){const e=G(t.target);a.filters.category=e,a.filters.page=1,g(),Z(e),A()}});S.addEventListener("click",t=>{if(t.target.classList.contains("category-item")){const e=t.target.getAttribute("data-value");a.filters.sort=e,a.filters.page=1,g(),J(e),M()}});R();g();let K=5;const U=document.querySelector(".popular-js");V();async function V(){try{const t=await b.get(`https://food-boutique.b.goit.study/api/products/popular?limit=${K}`);U.insertAdjacentHTML("beforeend",Y(t))}catch{console.log("Упс! Щось пішло не так.")}}function Y(t){return t.data.map(({img:e,name:s,category:r,size:n,popularity:i,_id:c})=>{const o=r.replace("_"," ");return`<li class="popular_list_card" data-id="${c}">
        <svg class="popular_discount_icon visually-hidden" width="60" height="60">
          <use xlink:href="${u}#Discount"></use>
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
                Category: <span class="popular_details_text">${o}</span>
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
              <use xlink:href="${u}#shopping-cart"></use>
            </svg>
          </button>
        </div>
      </li>`}).join("")}const Q={discountCardList:document.querySelector(".discount-card-list")};X();async function X(){try{const t=await tt(),e=st(t);Q.discountCardList.innerHTML=et(e)}catch(t){console.log(t)}}async function tt(){const t="https://food-boutique.b.goit.study/api",e="products/discount";try{const{data:s}=await b.get(`${t}/${e}`);return s}catch(s){console.log(s)}}function et(t){return t.map(({name:e,img:s,price:r})=>`
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
                <use xlink:href="${u}#shopping-cart"></use>
              </svg>
            </button>
          </div>
        </div>
        <svg class="discount-label-icon" width="60" height="60">
          <use xlink:href="${u}#discount"></use>
        </svg>
      </li>`).join("")}function st(t){const e=[...t],s=Math.floor(Math.random()*e.length),r=e[s];e.splice(s,1);const n=Math.floor(Math.random()*e.length),i=e[n];return[r,i]}
//# sourceMappingURL=commonHelpers2.js.map
