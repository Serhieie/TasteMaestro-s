import{s as y,C as a}from"./assets/sprite-7df77d99.js";import{a as $,l as F}from"./assets/vendor-470c038c.js";const b="cartItems",R=document.querySelector("main");R.addEventListener("click",J);function J(t){const e=t.target.closest(".add-to-cart");console.log(e);const s=t.target.closest(".product_item");if(console.log(s),e===null){console.log("modal");return}const o=s.dataset.id,r=s.querySelector("#product__image").src,i=s.querySelector("#product__image").alt,n=s.querySelector("#product__title").textContent,c=s.querySelector("#product_category_name").textContent,l=s.querySelector("#product_size").textContent,d=s.querySelector("#product__price").textContent,p=s.querySelector(".card-icon-check"),g=s.querySelector(".card-icon-cart");if(!localStorage.getItem(b))A(b,[{id:o,img:r,imgDsc:i,title:n,category:c,price:d,size:l,quantity:1}]),g.style.display="none",p.style.display="block",E();else{const m=u(b),k=m.findIndex(L=>L.id===s.dataset.id);k!==-1?(m.splice(k,1),g.style.display="block",p.style.display="none"):(m.push({id:o,img:r,imgDsc:i,title:n,category:c,price:d,size:l,quantity:1}),g.style.display="none",p.style.display="block",console.log("ф-ція зміни картинки додати")),A(b,m),E()}}const A=(t,e)=>{try{const s=JSON.stringify(e);localStorage.setItem(t,s)}catch(s){console.error("Set state error: ",s.message)}},u=t=>{try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}};function E(){const t=document.querySelector(".header__js_span");u(b)?t.textContent=`CART (${u(b).length})`:t.textContent=`CART (${0})`}window.addEventListener("load",E);function U({_id:t,name:e,img:s,desc:o,category:r,price:i,size:n,popularity:c,is10PercentOff:l}){let d=[],p=-1;return u("cartItems")&&(d=u("cartItems"),p=d.findIndex(g=>g.id===t)),`<li data-id="${t}" class="product__list__card product_item js-card">
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
          <p id="product__price" class="product__price">${"$"+i}</p>
          <button data-id="${t}" class="product__order__btn add-to-cart">
            <svg class="card-icon-cart" ${p===-1?"style = 'display:block'":"style = 'display:none'"}  width="18" height="18">
              <use xlink:href="${y}#shopping-cart"></use>
            </svg>
            <svg class="card-icon-check" ${p===-1?"style = 'display:none'":"style = 'display:block'"}  width="18" height="18">
              <use xlink:href="${y}#check"></use>
            </svg>
          </button>
        </div>
      </li>`}let P=a.filters.totalHits;a.paginationContainer.addEventListener("click",Z);async function Z(t){const e=parseInt(t.target.textContent);if(t.target.closest(".pagination-btn")){if(t.target.classList.contains("back")){if(a.filters.page===1)return;a.filters.page>0&&(a.filters.page-=1)}else if(t.target.classList.contains("forward")){if(a.filters.page===P){a.forward.setAttribute("disabled",!0);return}else a.filters.page<P&&a.forward.removeAttribute("disabled");a.filters.page+=1}h(a.filters.page)}if(t.target.classList.contains("pagi_item_span")){if(t.target.textContent==="..."||e===a.filters.page)return;a.filters.page=e,h(a.filters.page),G()}}function G(){return document.querySelectorAll(".pagi_item").forEach(e=>{e.classList.remove("isActive"),parseInt(e.textContent)===a.filters.page&&e.classList.add("isActive")}),a.filters.page<=1?a.back.setAttribute("disabled",!0):a.back.removeAttribute("disabled"),a.filters.page===P?a.forward.setAttribute("disabled",!0):a.forward.removeAttribute("disabled")}function I(t,e){const s=e?"is-active":"",o=a.filters.page>=10?"py":"";return`<li class="pagi_item ${s} pagination_item"><span class="pagi_item_span ${o}">${t}</span></li>`}function j(){return'<li class="pagi_item pagination_item ellipsis"><span class="pagi_item_span pagi_item_span_ellipsis">...</span></li>'}function K(t,e){const s=Math.ceil(t);let o;window.innerWidth<768?o=1:o=2;const r=document.querySelector(".pagination-list");if(r.innerHTML="",s>1){let i="",n=1,c=s;s>5&&(n=Math.max(1,e-o),c=Math.min(s,e+o),n===1?window.innerWidth<768?c=3:c=5:c===s&&(n=s-4)),n>=2&&(i+=I(1,e===1),i+=j());for(let l=n;l<=c;l+=1)i+=I(l,l===e);c<s&&(i+=j(),i+=I(s,s===e)),r.innerHTML=i}}const V=document.getElementById("filterForm"),q=document.getElementById("keywordInput"),D=document.getElementById("categorySelect"),S=document.querySelector(".category-list"),_=document.getElementById("sortProducts"),M=document.querySelector(".sortProducts-list"),Y=document.querySelector(".product__list"),Q=document.querySelector(".container__products");let H=[];const z=()=>{localStorage.setItem("filters",JSON.stringify(a.filters))},N=()=>{const t=localStorage.getItem("filters");t&&(a.filters=JSON.parse(t))};N();console.log(a.filters);const h=async()=>{try{window.innerWidth>=1440?a.filters.limit=9:window.innerWidth<=1440&&window.innerWidth>=768?a.filters.limit=8:a.filters.limit=6;let t=`https://food-boutique.b.goit.study/api/products?page=${a.filters.page}&limit=${a.filters.limit}`;if(a.filters.keyword&&(t+=`&keyword=${a.filters.keyword}`),a.filters.category&&a.filters.category!=="Show all"&&(t+=`&category=${a.filters.category}`),a.filters.sort&&a.filters.sort!=="all")switch(a.filters.sort){case"alphabetical":t+="&byABC=true";break;case"reverse-alphabetical":t+="&byABC=false";break;case"cheap":t+="&byPrice=true";break;case"expensive":t+="&byPrice=false";break;case"popular":t+="&byPopularity=false";break;case"not-popular":t+="&byPopularity=true";break}const s=(await $.get(t)).data;a.filters.totalHits=s.totalPages,K(s.totalPages,a.filters.page),X(s.results),z()}catch(t){console.error("Error fetching products:",t)}},X=t=>{t.length===0?Q.innerHTML='<div class="nothing-found-conteiner"><p class="nothing-found">Nothing was found for the selected <span class="nothing-found_filter"> filters...</span></p><p class="inf-nothing-found">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p></div>':Y.innerHTML=t.map(e=>U(e)).join("")},tt=async()=>{try{H=[...(await $.get("https://food-boutique.b.goit.study/api/products/categories")).data,"Show all"],et(H)}catch(t){console.error("Error fetching categories:",t)}},et=t=>{const e=t.map(s=>{let o=s.replace(/_/g," ");return s==="Breads_&_Bakery"&&(o=o.replace(/&/g,"/")),`<li class="category-item" data-value="${s}">${o}</li>`}).join("");S.innerHTML=e},st=t=>{switch(t){case"alphabetical":_.textContent="A to Z";break;case"reverse-alphabetical":_.textContent="Z to A";break;case"cheap":_.textContent="Cheap";break;case"expensive":_.textContent="Expensive";break;case"popular":_.textContent="Popular";break;case"not-popular":_.textContent="Not popular";break;case"all":_.textContent="Show all";break}},O=()=>{M.classList.remove("show")};_.addEventListener("click",()=>{console.log(8),M.classList.toggle("show")});const at=t=>{D.textContent=t},ot=t=>t?t.getAttribute("data-value"):null,W=()=>{S.classList.remove("show")};D.addEventListener("click",()=>{event.preventDefault(),console.log(7),S.classList.toggle("show")});document.addEventListener("click",t=>{t.preventDefault(),console.log(6),!t.target.matches("#sortProducts")&&!t.target.closest(".sortProducts-list")&&O()});document.addEventListener("click",t=>{t.preventDefault(),console.log(20),!t.target.matches("#categorySelect")&&!t.target.closest(".category-list")&&W()});q.addEventListener("input",F(()=>{console.log(4),a.filters.keyword=q.value,a.filters.page=1,h()},1e3));V.addEventListener("submit",async t=>{console.log(3),t.preventDefault(),a.filters.keyword=q.value,a.filters.page=1,h()});S.addEventListener("click",t=>{if(console.log(1),t.target.classList.contains("category-item")){const e=ot(t.target);a.filters.category=e,a.filters.page=1,h(),at(e),W(),z(),N(),console.log(a.filters)}});M.addEventListener("click",t=>{if(console.log(2),t.target.classList.contains("category-item")){const e=t.target.getAttribute("data-value");a.filters.sort=e,a.filters.page=1,h(),st(e),O()}});tt();h();let it=5;const rt=document.querySelector(".popular-js");ct();async function ct(){try{const t=await $.get(`https://food-boutique.b.goit.study/api/products/popular?limit=${it}`);console.log(t.data.length),rt.insertAdjacentHTML("beforeend",nt(t))}catch(t){console.log(`Упс! Щось пішло не так. 
    ${"Error: "+t.message} `)}}function nt(t){return t.data.map(({_id:e,name:s,img:o,category:r,price:i,size:n,popularity:c})=>{const l=r.replace("_"," ");let d=[],p=-1;return u("cartItems")&&(d=u("cartItems"),p=d.findIndex(g=>g.id===e)),`<li data-id="${e}" class="popular_list_card product_item js-card">
         <svg class="popular_discount_icon visually-hidden" width="60" height="60">
          <use xlink:href="${y}#Discount"></use>
         </svg>
         <div class="popular_image_container">
           <img id="product__image"
             class="popular_image"
             src="${o}"
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
          <p id="product__price" style = "display:none">${"$"+i}</p>
          <button data-id="${e}" class=" popular_order_btn add-to-cart">
            <svg class="card-icon-cart popular-icon" ${p===-1?"style = 'display:block'":"style = 'display:none'"}  width="12" height="12">
              <use xlink:href="${y}#shopping-cart"></use>
            </svg>
            <svg class="card-icon-check popular-icon-check" ${p===-1?"style = 'display:none'":"style = 'display:block'"}  width="12" height="12">
              <use xlink:href="${y}#check"></use>
            </svg>
          </button>
        </div>
      </li>`}).join("")}const lt={discountCardList:document.querySelector(".discount-card-list")};dt();async function dt(){try{const t=await pt(),e=ut(t);lt.discountCardList.innerHTML=gt(e)}catch(t){console.log(t)}}async function pt(){const t="https://food-boutique.b.goit.study/api",e="products/discount";try{const{data:s}=await $.get(`${t}/${e}`);return s}catch(s){console.log(s)}}function ut(t){const e=[...t],s=Math.floor(Math.random()*e.length),o=e[s];e.splice(s,1);const r=Math.floor(Math.random()*e.length),i=e[r];return[o,i]}function gt(t){let e=[],s=-1;return u("cartItems")&&(e=u("cartItems"),s=e.findIndex(o=>o.id===t._id)),console.log(u("cartItems")),t.map(({_id:o,name:r,img:i,category:n,price:c,size:l,popularity:d})=>`
      <li data-id="${o}" class="discount-card product_item js-card">
         <div class="img-field">
         <img
            id="product__image"
             class="discount-product-img"
             src="${i}"
             alt="${r}"
           />
         </div>
         <div class="discount-product-info">
           <p id="product__title" class="discount-product-name">${r}</p>
           <div class="discount-product-buy">
             <p id="product__price" class="discount-product-price">
               $<span class="js-discount-product-price">${c}</span>
             </p>
             <button data-id="${o}" class="discount-cart-btn add-to-cart" type="button">
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
       </li>`).join("")}const f=document.querySelector(".js-modal-product-card"),v=document.querySelector(".js-backdrop"),B=document.querySelector(".loader-container"),yt=document.querySelector(".father_div"),C=document.querySelector("body");yt.addEventListener("click",ft);async function ft(t){if(t.target===t.currentTarget)return;const e=t.target.closest(".js-card");if(e===null)return;const s=e.dataset.id;if(t.target.closest(".add-to-cart"))return;B.classList.remove("visually-hidden"),C.classList.add("modal-is-open");const o=await _t(s);f.innerHTML="";const{_id:r,category:i,desc:n,img:c,name:l,popularity:d,price:p,size:g}=o,m=mt(r,i,n,c,l,d,p,g);f.innerHTML=m,B.classList.add("visually-hidden"),f.classList.remove("visually-hidden");const k=document.querySelector(".js-btn-close-card");k.addEventListener("click",L),v.addEventListener("click",T),document.addEventListener("keydown",w);function L(){v.classList.add("visually-hidden"),f.classList.add("visually-hidden"),C.classList.remove("modal-is-open"),f.innerHTML="",k.removeEventListener("click",L),document.removeEventListener("keydown",w)}function T(x){console.log("backdrop"),!x.target.closest(".product_item")&&(v.classList.add("visually-hidden"),f.classList.add("visually-hidden"),C.classList.remove("modal-is-open"),f.innerHTML="",v.removeEventListener("click",T),document.removeEventListener("keydown",w))}function w(x){x.preventDefault(),x.key==="Escape"&&(v.classList.add("visually-hidden"),f.classList.add("visually-hidden"),C.classList.remove("modal-is-open"),f.innerHTML="",document.removeEventListener("keydown",w))}}async function _t(t){try{f.classList.remove("visually-hidden"),v.classList.remove("visually-hidden");const e="https://food-boutique.b.goit.study/api",s="products",{data:o}=await $.get(`${e}/${s}/${t}`);return o}catch(e){console.error(e)}}function mt(t,e,s,o,r,i,n,c){let l=[],d=-1;return u("cartItems")&&(l=u("cartItems"),d=l.findIndex(g=>g.id===t)),`<div data-id="${t}" class="product_item">
  <div class="product-container">
    <div class="product-image-box">
        <img id="product__image" class="product-image" src="${o!==null?o:"./img/image-placeholder.png"}" alt="${r}">
    </div>
    <div class="product-descr">
        <h4 id="product__title" class="product-title">${r}</h4>
        <ul class="product-details-list">
            <li id="product_category_name" class="product-details-text"><span class="span-details-text">Category: </span>${e}</li>
            <li id="product_size" class="product-details-text"><span class="span-details-text">Size: </span>${c}</li>
            <li class="product-details-text"><span class="span-details-text">Popularity: </span>${i}</li>
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
