import{s as y,C as a}from"./assets/sprite-6a4280e1.js";import{a as L,l as F}from"./assets/vendor-470c038c.js";const b="cartItems",R=document.querySelector("main");R.addEventListener("click",J);function J(t){const e=t.target.closest(".add-to-cart");console.log(e);const s=t.target.closest(".product_item");if(console.log(s),e===null){console.log("modal");return}const i=s.dataset.id,r=s.querySelector("#product__image").src,o=s.querySelector("#product__image").alt,n=s.querySelector("#product__title").textContent,c=s.querySelector("#product_category_name").textContent,l=s.querySelector("#product_size").textContent,d=s.querySelector("#product__price").textContent,p=s.querySelector(".card-icon-check"),g=s.querySelector(".card-icon-cart");if(!localStorage.getItem(b))A(b,[{id:i,img:r,imgDsc:o,title:n,category:c,price:d,size:l,quantity:1}]),g.style.display="none",p.style.display="block",E();else{const _=u(b),k=_.findIndex($=>$.id===s.dataset.id);k!==-1?(_.splice(k,1),g.style.display="block",p.style.display="none"):(_.push({id:i,img:r,imgDsc:o,title:n,category:c,price:d,size:l,quantity:1}),g.style.display="none",p.style.display="block",console.log("ф-ція зміни картинки додати")),A(b,_),E()}}const A=(t,e)=>{try{const s=JSON.stringify(e);localStorage.setItem(t,s)}catch(s){console.error("Set state error: ",s.message)}},u=t=>{try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}};function E(){const t=document.querySelector(".header__js_span");u(b)?t.textContent=`CART (${u(b).length})`:t.textContent=`CART (${0})`}window.addEventListener("load",E);function U({_id:t,name:e,img:s,desc:i,category:r,price:o,size:n,popularity:c,is10PercentOff:l}){let d=[],p=-1;return u("cartItems")&&(d=u("cartItems"),p=d.findIndex(g=>g.id===t)),`<li data-id="${t}" class="product__list__card product_item js-card">
        <svg class="sticker_icon ${l?"":"visually-hidden"}" width="60" height="60">
          <use xlink:href="${y}#discount"></use>
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
                <span id="product_category_name" class="product__description__span"}>${r.replace(/_/g," ")}</span>
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
          <p id="product__price" class="product__price">${"$"+o}</p>
          <button data-id="${t}" class="product__order__btn add-to-cart">
            <svg class="card-icon-cart" ${p===-1?"style = 'display:block'":"style = 'display:none'"}  width="18" height="18">
              <use xlink:href="${y}#shopping-cart"></use>
            </svg>
            <svg class="card-icon-check" ${p===-1?"style = 'display:none'":"style = 'display:block'"}  width="18" height="18">
              <use xlink:href="${y}#check"></use>
            </svg>
          </button>
        </div>
      </li>`}let P=a.filters.totalHits;a.paginationContainer.addEventListener("click",Z);async function Z(t){const e=parseInt(t.target.textContent);if(t.target.closest(".pagination-btn")){if(t.target.classList.contains("back")){if(a.filters.page===1)return;a.filters.page>0&&(a.filters.page-=1)}else if(t.target.classList.contains("forward")){if(a.filters.page===P){a.forward.setAttribute("disabled",!0);return}else a.filters.page<P&&a.forward.removeAttribute("disabled");a.filters.page+=1}h(a.filters.page)}if(t.target.classList.contains("pagi_item_span")){if(t.target.textContent==="..."||e===a.filters.page)return;a.filters.page=e,h(a.filters.page),G()}}function G(){return document.querySelectorAll(".pagi_item").forEach(e=>{e.classList.remove("isActive"),parseInt(e.textContent)===a.filters.page&&e.classList.add("isActive")}),a.filters.page<=1?a.back.setAttribute("disabled",!0):a.back.removeAttribute("disabled"),a.filters.page===P?a.forward.setAttribute("disabled",!0):a.forward.removeAttribute("disabled")}function I(t,e){const s=e?"is-active":"",i=a.filters.page>=10?"py":"";return`<li class="pagi_item ${s} pagination_item"><span class="pagi_item_span ${i}">${t}</span></li>`}function j(){return'<li class="pagi_item pagination_item ellipsis"><span class="pagi_item_span pagi_item_span_ellipsis">...</span></li>'}function K(t,e){V(t,e);const s=Math.ceil(t);let i;window.innerWidth<768?i=1:i=2;const r=document.querySelector(".pagination-list");if(r.innerHTML="",s>1){let o="",n=1,c=s;s>5&&(n=Math.max(1,e-i),c=Math.min(s,e+i),n===1?window.innerWidth<768?c=3:c=5:c===s&&(n=s-4)),n>=2&&(o+=I(1,e===1),o+=j());for(let l=n;l<=c;l+=1)o+=I(l,l===e);c<s&&(o+=j(),o+=I(s,s===e)),r.innerHTML=o}}function V(t,e){!e||t.length<=1?(a.paginationContainer.classList.add("visually-hidden"),a.back.classList.add("visually-hidden"),a.forward.classList.add("visually-hidden")):(a.paginationContainer.classList.remove("visually-hidden"),a.back.classList.remove("visually-hidden"),a.forward.classList.remove("visually-hidden"))}const Y=document.getElementById("filterForm"),q=document.getElementById("keywordInput"),D=document.getElementById("categorySelect"),S=document.querySelector(".category-list"),m=document.getElementById("sortProducts"),M=document.querySelector(".sortProducts-list"),Q=document.querySelector(".product__list"),X=document.querySelector(".container__products");let B=[];const z=()=>{localStorage.setItem("filters",JSON.stringify(a.filters))},N=()=>{const t=localStorage.getItem("filters");t&&(a.filters=JSON.parse(t))};N();console.log(a.filters);const h=async()=>{try{window.innerWidth>=1440?a.filters.limit=9:window.innerWidth<=1440&&window.innerWidth>=768?a.filters.limit=8:a.filters.limit=6;let t=`https://food-boutique.b.goit.study/api/products?page=${a.filters.page}&limit=${a.filters.limit}`;if(a.filters.keyword&&(t+=`&keyword=${a.filters.keyword}`),a.filters.category&&a.filters.category!=="Show all"&&(t+=`&category=${a.filters.category}`),a.filters.sort&&a.filters.sort!=="all")switch(a.filters.sort){case"alphabetical":t+="&byABC=true";break;case"reverse-alphabetical":t+="&byABC=false";break;case"cheap":t+="&byPrice=true";break;case"expensive":t+="&byPrice=false";break;case"popular":t+="&byPopularity=false";break;case"not-popular":t+="&byPopularity=true";break}const s=(await L.get(t)).data;a.filters.totalHits=s.totalPages,K(s.totalPages,a.filters.page),tt(s.results),z()}catch(t){console.error("Error fetching products:",t)}},tt=t=>{t.length===0?X.innerHTML='<div class="nothing-found-conteiner"><p class="nothing-found">Nothing was found for the selected <span class="nothing-found_filter"> filters...</span></p><p class="inf-nothing-found">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p></div>':Q.innerHTML=t.map(e=>U(e)).join("")},et=async()=>{try{B=[...(await L.get("https://food-boutique.b.goit.study/api/products/categories")).data,"Show all"],st(B)}catch(t){console.error("Error fetching categories:",t)}},st=t=>{const e=t.map(s=>{let i=s.replace(/_/g," ");return s==="Breads_&_Bakery"&&(i=i.replace(/&/g,"/")),`<li class="category-item" data-value="${s}">${i}</li>`}).join("");S.innerHTML=e},at=t=>{switch(t){case"alphabetical":m.textContent="A to Z";break;case"reverse-alphabetical":m.textContent="Z to A";break;case"cheap":m.textContent="Cheap";break;case"expensive":m.textContent="Expensive";break;case"popular":m.textContent="Popular";break;case"not-popular":m.textContent="Not popular";break;case"all":m.textContent="Show all";break}},O=()=>{M.classList.remove("show")};m.addEventListener("click",()=>{console.log(8),M.classList.toggle("show")});const it=t=>{D.textContent=t},ot=t=>t?t.getAttribute("data-value"):null,W=()=>{S.classList.remove("show")};D.addEventListener("click",()=>{event.preventDefault(),console.log(7),S.classList.toggle("show")});document.addEventListener("click",t=>{t.preventDefault(),console.log(6),!t.target.matches("#sortProducts")&&!t.target.closest(".sortProducts-list")&&O()});document.addEventListener("click",t=>{t.preventDefault(),console.log(20),!t.target.matches("#categorySelect")&&!t.target.closest(".category-list")&&W()});q.addEventListener("input",F(()=>{console.log(4),a.filters.keyword=q.value,a.filters.page=1,h()},1e3));Y.addEventListener("submit",async t=>{console.log(3),t.preventDefault(),a.filters.keyword=q.value,a.filters.page=1,h()});S.addEventListener("click",t=>{if(console.log(1),t.target.classList.contains("category-item")){const e=ot(t.target);a.filters.category=e,a.filters.page=1,h(),it(e),W(),z(),N(),console.log(a.filters)}});M.addEventListener("click",t=>{if(console.log(2),t.target.classList.contains("category-item")){const e=t.target.getAttribute("data-value");a.filters.sort=e,a.filters.page=1,h(),at(e),O()}});et();h();let rt=5;const ct=document.querySelector(".popular-js");nt();async function nt(){try{const t=await L.get(`https://food-boutique.b.goit.study/api/products/popular?limit=${rt}`);console.log(t.data.length),ct.insertAdjacentHTML("beforeend",lt(t))}catch(t){console.log(`Упс! Щось пішло не так. 
    ${"Error: "+t.message} `)}}function lt(t){return t.data.map(({_id:e,name:s,img:i,category:r,price:o,size:n,popularity:c})=>{const l=r.replace("_"," ");let d=[],p=-1;return u("cartItems")&&(d=u("cartItems"),p=d.findIndex(g=>g.id===e)),`<li data-id="${e}" class="popular_list_card product_item js-card">
         <svg class="popular_discount_icon visually-hidden" width="60" height="60">
          <use xlink:href="${y}#Discount"></use>
         </svg>
         <div class="popular_image_container">
           <img id="product__image"
             class="popular_image"
             src="${i}"
             alt="${s}"
             width="56"
             height="56"
           />
         </div>
        <div class="popular_description_container">
          <h3 id="product__title" class="popular_product_title">${s}</h3>
          <ul class="popular_details">
            <li class="popular_details_item">
              <p class="popular_details_category">
                Category:
                <span id="product_category_name" class="popular_details_text">${l}</span>
              </p>
            </li>
             <div class="popular_detail_wrap">
            <li class="popular_details_item">
              <p class="popular_details_category">
                Size: <span id="product_size" class="popular_details_text">${n}</span>
              </p>
            </li>
            <li class="popular_details_item">
              <p class="popular_details_category">
                Popularity: <span class="popular_details_text">${c}</span>
              </p>
            </li>
            </div>
          </ul>
        </div>
        <div class="popular_order_container">
          <p id="product__price" style = "display:none">${"$"+o}</p>
          <button data-id="${e}" class=" popular_order_btn add-to-cart">
            <svg class="card-icon-cart popular-icon" ${p===-1?"style = 'display:block'":"style = 'display:none'"}  width="12" height="12">
              <use xlink:href="${y}#shopping-cart"></use>
            </svg>
            <svg class="card-icon-check popular-icon-check" ${p===-1?"style = 'display:none'":"style = 'display:block'"}  width="12" height="12">
              <use xlink:href="${y}#check"></use>
            </svg>
          </button>
        </div>
      </li>`}).join("")}const dt={discountCardList:document.querySelector(".discount-card-list")};pt();async function pt(){try{const t=await ut(),e=gt(t);dt.discountCardList.innerHTML=yt(e)}catch(t){console.log(t)}}async function ut(){const t="https://food-boutique.b.goit.study/api",e="products/discount";try{const{data:s}=await L.get(`${t}/${e}`);return s}catch(s){console.log(s)}}function gt(t){const e=[...t],s=Math.floor(Math.random()*e.length),i=e[s];e.splice(s,1);const r=Math.floor(Math.random()*e.length),o=e[r];return[i,o]}function yt(t){let e=[],s=-1;return u("cartItems")&&(e=u("cartItems"),s=e.findIndex(i=>i.id===t._id)),console.log(u("cartItems")),t.map(({_id:i,name:r,img:o,category:n,price:c,size:l,popularity:d})=>`
      <li data-id="${i}" class="discount-card product_item js-card">
         <div class="img-field">
         <img
            id="product__image"
             class="discount-product-img"
             src="${o}"
             alt="${r}"
           />
         </div>
         <div class="discount-product-info">
           <p id="product__title" class="discount-product-name">${r}</p>
           <div class="discount-product-buy">
             <p id="product__price" class="discount-product-price">
               $<span class="js-discount-product-price">${c}</span>
             </p>
             <button data-id="${i}" class="discount-cart-btn add-to-cart" type="button">
                <svg class="card-icon-cart discount-cart-icon" ${s===-1?"style = 'display:block'":"style = 'display:none'"}  width="18" height="18">
                      <use xlink:href="${y}#shopping-cart"></use>
                  </svg>
                  <svg class="card-icon-check discount-check-icon" ${s===-1?"style = 'display:none'":"style = 'display:block'"}  width="18" height="18">
                      <use xlink:href="${y}#check"></use>
                  </svg>
             </button>
           </div>
         </div>
         <svg class="discount-label-icon" width="60" height="60">
           <use xlink:href="${y}#discount"></use>
         </svg>
         <span id="product_category_name" class="visually-hidden">${n}</span>
         <span id="product_size" class="visually-hidden">${l}</span>
         <span class="product__description__span visually-hidden">${d}</span>
       </li>`).join("")}const f=document.querySelector(".js-modal-product-card"),v=document.querySelector(".js-backdrop"),H=document.querySelector(".loader-container"),ft=document.querySelector(".father_div"),C=document.querySelector("body");ft.addEventListener("click",mt);async function mt(t){if(t.target===t.currentTarget)return;const e=t.target.closest(".js-card");if(e===null)return;const s=e.dataset.id;if(t.target.closest(".add-to-cart"))return;H.classList.remove("visually-hidden"),C.classList.add("modal-is-open");const i=await _t(s);f.innerHTML="";const{_id:r,category:o,desc:n,img:c,name:l,popularity:d,price:p,size:g}=i,_=ht(r,o,n,c,l,d,p,g);f.innerHTML=_,H.classList.add("visually-hidden"),f.classList.remove("visually-hidden");const k=document.querySelector(".js-btn-close-card");k.addEventListener("click",$),v.addEventListener("click",T),document.addEventListener("keydown",w);function $(){v.classList.add("visually-hidden"),f.classList.add("visually-hidden"),C.classList.remove("modal-is-open"),f.innerHTML="",k.removeEventListener("click",$),document.removeEventListener("keydown",w)}function T(x){console.log("backdrop"),!x.target.closest(".product_item")&&(v.classList.add("visually-hidden"),f.classList.add("visually-hidden"),C.classList.remove("modal-is-open"),f.innerHTML="",v.removeEventListener("click",T),document.removeEventListener("keydown",w))}function w(x){x.preventDefault(),x.key==="Escape"&&(v.classList.add("visually-hidden"),f.classList.add("visually-hidden"),C.classList.remove("modal-is-open"),f.innerHTML="",document.removeEventListener("keydown",w))}}async function _t(t){try{f.classList.remove("visually-hidden"),v.classList.remove("visually-hidden");const e="https://food-boutique.b.goit.study/api",s="products",{data:i}=await L.get(`${e}/${s}/${t}`);return i}catch(e){console.error(e)}}function ht(t,e,s,i,r,o,n,c){let l=[],d=-1;return u("cartItems")&&(l=u("cartItems"),d=l.findIndex(g=>g.id===t)),`<div data-id="${t}" class="product_item">
  <div class="product-container">
    <div class="product-image-box">
        <img id="product__image" class="product-image" src="${i!==null?i:"./img/image-placeholder.png"}" alt="${r}">
    </div>
    <div class="product-descr">
        <h4 id="product__title" class="product-title">${r}</h4>
        <ul class="product-details-list">
            <li id="product_category_name" class="product-details-text"><span class="span-details-text">Category: </span>${e}</li>
            <li id="product_size" class="product-details-text"><span class="span-details-text">Size: </span>${c}</li>
            <li class="product-details-text"><span class="span-details-text">Popularity: </span>${o}</li>
        </ul>
        <p class="product-text">${s}</p>
    </div>
    </div>
    <div class="product-wraper">
    <span id="product__price" class="product-price">$${n}</span>
    <button class="product-btn-shopping-cart add-to-cart" type="button">
        <span ${d===-1?"style = 'display:block'":"style = 'display:none'"} class="card-icon-cart">Add to</span>
        <span ${d===-1?"style = 'display:none'":"style = 'display:block'"} class="card-icon-check">Remove from</span>
        <svg class="product-cart-icon" width="18" height="18">
            <use xlink:href="${y}#shopping-cart"></use>
        </svg>
    </button>
    </div>
    <button class="modal-btn-close js-btn-close-card" type="button">
    <svg class="icon-close">
        <use xlink:href="${y}#close-cross"></use>
      </svg>
    </button>
    </div>`}
//# sourceMappingURL=commonHelpers2.js.map
