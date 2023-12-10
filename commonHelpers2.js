import{s as u,C as a}from"./assets/sprite-908387bf.js";import{a as $,l as z}from"./assets/vendor-470c038c.js";const b="cartItems",D=document.querySelector("main");D.addEventListener("click",O);function O(t){const e=t.target.closest(".add-to-cart"),s=t.target.closest(".product_item");if(!s||s.nodeName!=="LI")return;if(e===null){console.log("modal");return}const i=s.dataset.id,o=s.querySelector("#product__image").src,r=s.querySelector("#product__image").alt,c=s.querySelector("#product__title").textContent,n=s.querySelector("#product_category_name").textContent,l=s.querySelector("#product_size").textContent,p=s.querySelector("#product__price").textContent,d=s.querySelector(".card-icon-check"),f=s.querySelector(".card-icon-cart");if(!localStorage.getItem(b))M(b,[{id:i,img:o,imgDsc:r,title:c,category:n,price:p,size:l,quantity:1}]),f.style.display="none",d.style.display="block",C();else{const h=y(b),k=h.findIndex(L=>L.id===s.dataset.id);k!==-1?(h.splice(k,1),f.style.display="block",d.style.display="none"):(h.push({id:i,img:o,imgDsc:r,title:c,category:n,price:p,size:l,quantity:1}),f.style.display="none",d.style.display="block",console.log("ф-ція зміни картинки додати")),M(b,h),C()}}const M=(t,e)=>{try{const s=JSON.stringify(e);localStorage.setItem(t,s)}catch(s){console.error("Set state error: ",s.message)}},y=t=>{try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}};function C(){const t=document.querySelector(".header__js_span");y(b)?t.textContent=`CART (${y(b).length})`:t.textContent=`CART (${0})`}window.addEventListener("load",C);function W({_id:t,name:e,img:s,desc:i,category:o,price:r,size:c,popularity:n,is10PercentOff:l}){let p=[],d=-1;return y("cartItems")&&(p=y("cartItems"),d=p.findIndex(f=>f.id===t)),`<li data-id="${t}" class="product__list__card product_item js-card">
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
            <svg class="card-icon-cart" ${d===-1?"style = 'display:block'":"style = 'display:none'"}  width="18" height="18">
              <use xlink:href="${u}#shopping-cart"></use>
            </svg>
            <svg class="card-icon-check" ${d===-1?"style = 'display:none'":"style = 'display:block'"}  width="18" height="18">
              <use xlink:href="${u}#check"></use>
            </svg>
          </button>
        </div>
      </li>`}let S=a.filters.totalHits;a.paginationContainer.addEventListener("click",F);async function F(t){const e=parseInt(t.target.textContent);if(t.target.closest(".pagination-btn")){if(t.target.classList.contains("back")){if(a.filters.page===1)return;a.filters.page>0&&(a.filters.page-=1)}else if(t.target.classList.contains("forward")){if(a.filters.page===S){a.forward.setAttribute("disabled",!0);return}else a.filters.page<S&&a.forward.removeAttribute("disabled");a.filters.page+=1}m(a.filters.page)}if(t.target.classList.contains("pagi_item_span")){if(t.target.textContent==="..."||e===a.filters.page)return;a.filters.page=e,m(a.filters.page),R()}}function R(){return document.querySelectorAll(".pagi_item").forEach(e=>{e.classList.remove("isActive"),parseInt(e.textContent)===a.filters.page&&e.classList.add("isActive")}),a.filters.page<=1?a.back.setAttribute("disabled",!0):a.back.removeAttribute("disabled"),a.filters.page===S?a.forward.setAttribute("disabled",!0):a.forward.removeAttribute("disabled")}function x(t,e){const s=e?"is-active":"",i=a.filters.page>=10?"py":"";return`<li class="pagi_item ${s} pagination_item"><span class="pagi_item_span ${i}">${t}</span></li>`}function T(){return'<li class="pagi_item pagination_item ellipsis"><span class="pagi_item_span pagi_item_span_ellipsis">...</span></li>'}function J(t,e){const s=Math.ceil(t);let i;window.innerWidth<768?i=1:i=2;const o=document.querySelector(".pagination-list");if(o.innerHTML="",s>1){let r="",c=1,n=s;s>5&&(c=Math.max(1,e-i),n=Math.min(s,e+i),c===1?window.innerWidth<768?n=3:n=5:n===s&&(c=s-4)),c>=2&&(r+=x(1,e===1),r+=T());for(let l=c;l<=n;l+=1)r+=x(l,l===e);n<s&&(r+=T(),r+=x(s,s===e)),o.innerHTML=r}}const U=document.getElementById("filterForm"),I=document.getElementById("keywordInput"),H=document.getElementById("categorySelect"),w=document.querySelector(".category-list"),_=document.getElementById("sortProducts"),E=document.querySelector(".sortProducts-list"),Z=document.querySelector(".product__list"),G=document.querySelector(".container__products");let A=[];const K=()=>{localStorage.setItem("filters",JSON.stringify(a.filters))},V=()=>{const t=localStorage.getItem("filters");t&&(a.filters=JSON.parse(t))};V();const m=async()=>{try{window.innerWidth>=1440?a.filters.limit=9:window.innerWidth<=1440&&window.innerWidth>=768?a.filters.limit=8:a.filters.limit=6;let t=`https://food-boutique.b.goit.study/api/products?page=${a.filters.page}&limit=${a.filters.limit}`;if(a.filters.keyword&&(t+=`&keyword=${a.filters.keyword}`),a.filters.category&&a.filters.category!=="Show all"&&(t+=`&category=${a.filters.category}`),a.filters.sort&&a.filters.sort!=="all")switch(a.filters.sort){case"alphabetical":t+="&byABC=true";break;case"reverse-alphabetical":t+="&byABC=false";break;case"cheap":t+="&byPrice=true";break;case"expensive":t+="&byPrice=false";break;case"popular":t+="&byPopularity=false";break;case"not-popular":t+="&byPopularity=true";break}const s=(await $.get(t)).data;a.filters.totalHits=s.totalPages,J(s.totalPages,a.filters.limit,a.filters.page),Y(s.results),K()}catch(t){console.error("Error fetching products:",t)}},Y=t=>{t.length===0?G.innerHTML='<div class="nothing-found-conteiner"><p class="nothing-found">Nothing was found for the selected <span class="nothing-found_filter"> filters...</span></p><p class="inf-nothing-found">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p></div>':Z.innerHTML=t.map(e=>W(e)).join("")},Q=async()=>{try{A=[...(await $.get("https://food-boutique.b.goit.study/api/products/categories")).data,"Show all"],X(A)}catch(t){console.error("Error fetching categories:",t)}},X=t=>{const e=t.map(s=>{let i=s.replace(/_/g," ");return s==="Breads_&_Bakery"&&(i=i.replace(/&/g,"/")),`<li class="category-item" data-value="${s}">${i}</li>`}).join("");w.innerHTML=e},tt=t=>{switch(t){case"alphabetical":_.textContent="A to Z";break;case"reverse-alphabetical":_.textContent="Z to A";break;case"cheap":_.textContent="Cheap";break;case"expensive":_.textContent="Expensive";break;case"popular":_.textContent="Popular";break;case"not-popular":_.textContent="Not popular";break;case"all":_.textContent="Show all";break}},B=()=>{E.classList.remove("show")};_.addEventListener("click",()=>{E.classList.toggle("show")});const et=t=>{H.textContent=t},st=t=>t?t.getAttribute("data-value"):null,N=()=>{w.classList.remove("show")};H.addEventListener("click",()=>{w.classList.toggle("show")});document.addEventListener("click",t=>{!t.target.matches("#sortProducts")&&!t.target.closest(".sortProducts-list")&&B()});document.addEventListener("click",t=>{!t.target.matches("#categorySelect")&&!t.target.closest(".category-list")&&N()});I.addEventListener("input",z(()=>{a.filters.keyword=I.value,a.filters.page=1,m()},1e3));U.addEventListener("submit",async t=>{t.preventDefault(),a.filters.keyword=I.value,a.filters.page=1,m()});w.addEventListener("click",t=>{if(t.target.classList.contains("category-item")){const e=st(t.target);a.filters.category=e,a.filters.page=1,m(),et(e),N()}});E.addEventListener("click",t=>{if(t.target.classList.contains("category-item")){const e=t.target.getAttribute("data-value");a.filters.sort=e,a.filters.page=1,m(),tt(e),B()}});Q();m();let at=5;const it=document.querySelector(".popular-js");rt();async function rt(){try{const t=await $.get(`https://food-boutique.b.goit.study/api/products/popular?limit=${at}`);console.log(t.data.length),it.insertAdjacentHTML("beforeend",ot(t))}catch(t){console.log(`Упс! Щось пішло не так. 
    ${"Error: "+t.message} `)}}function ot(t){return t.data.map(({_id:e,name:s,img:i,category:o,price:r,size:c,popularity:n})=>{const l=o.replace("_"," ");let p=[],d=-1;return y("cartItems")&&(p=y("cartItems"),d=p.findIndex(f=>f.id===e)),`<li data-id="${e}" class="popular_list_card product_item js-card">
         <svg class="popular_discount_icon visually-hidden" width="60" height="60">
          <use xlink:href="${u}#Discount"></use>
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
                Size: <span id="product_size" class="popular_details_text">${c}</span>
              </p>
            </li>
            <li class="popular_details_item">
              <p class="popular_details_category">
                Popularity: <span class="popular_details_text">${n}</span>
              </p>
            </li>
            </div>
          </ul>
        </div>
        <div class="popular_order_container">
          <p id="product__price" style = "display:none">${"$"+r}</p>
          <button data-id="${e}" class=" popular_order_btn add-to-cart">
            <svg class="card-icon-cart popular-icon" ${d===-1?"style = 'display:block'":"style = 'display:none'"}  width="12" height="12">
              <use xlink:href="${u}#shopping-cart"></use>
            </svg>
            <svg class="card-icon-check popular-icon-check" ${d===-1?"style = 'display:none'":"style = 'display:block'"}  width="12" height="12">
              <use xlink:href="${u}#check"></use>
            </svg>
          </button>
        </div>
      </li>`}).join("")}const ct={discountCardList:document.querySelector(".discount-card-list")};nt();async function nt(){try{const t=await lt(),e=dt(t);ct.discountCardList.innerHTML=pt(e)}catch(t){console.log(t)}}async function lt(){const t="https://food-boutique.b.goit.study/api",e="products/discount";try{const{data:s}=await $.get(`${t}/${e}`);return s}catch(s){console.log(s)}}function dt(t){const e=[...t],s=Math.floor(Math.random()*e.length),i=e[s];e.splice(s,1);const o=Math.floor(Math.random()*e.length),r=e[o];return[i,r]}function pt(t){let e=[],s=-1;return y("cartItems")&&(e=y("cartItems"),s=e.findIndex(i=>i.id===t._id)),console.log(y("cartItems")),t.map(({_id:i,name:o,img:r,category:c,price:n,size:l,popularity:p})=>`
      <li data-id="${i}" class="discount-card product_item js-card">
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
                      <use xlink:href="${u}#shopping-cart"></use>
                  </svg>
                  <svg class="card-icon-check discount-check-icon" ${s===-1?"style = 'display:none'":"style = 'display:block'"}  width="18" height="18">
                      <use xlink:href="${u}#check"></use>
                  </svg>
             </button>
           </div>
         </div>
         <svg class="discount-label-icon" width="60" height="60">
           <use xlink:href="${u}#discount"></use>
         </svg>
         <span id="product_category_name" class="visually-hidden">${c}</span>
         <span id="product_size" class="visually-hidden">${l}</span>
         <span class="product__description__span visually-hidden">${p}</span>
       </li>`).join("")}const g=document.querySelector(".js-modal-product-card"),v=document.querySelector(".js-backdrop"),j=document.querySelector(".loader-container"),ut=document.querySelector(".father_div");ut.addEventListener("click",gt);async function gt(t){if(t.target===t.currentTarget)return;const e=t.target.closest(".js-card");if(e===null)return;const s=e.dataset.id;if(t.target.closest(".add-to-cart"))return;j.classList.remove("visually-hidden");const i=await yt(s);g.innerHTML="";const{category:o,desc:r,img:c,name:n,popularity:l,price:p,size:d}=i,f=ft(o,r,c,n,l,p,d);g.innerHTML=f,j.classList.add("visually-hidden"),g.classList.remove("visually-hidden");const h=document.querySelector(".js-btn-close-card");h.addEventListener("click",k),v.addEventListener("click",L),document.addEventListener("keydown",P);function k(){v.classList.add("visually-hidden"),g.classList.add("visually-hidden"),g.innerHTML="",h.removeEventListener("click",k)}function L(){v.classList.add("visually-hidden"),g.classList.add("visually-hidden"),g.innerHTML="",v.removeEventListener("click",L)}function P(q){q.preventDefault(),q.key==="Escape"&&(v.classList.add("visually-hidden"),g.classList.add("visually-hidden"),g.innerHTML="",document.removeEventListener("keydown",P))}}async function yt(t){try{g.classList.remove("visually-hidden"),v.classList.remove("visually-hidden");const e="https://food-boutique.b.goit.study/api",s="products",{data:i}=await $.get(`${e}/${s}/${t}`);return i}catch(e){console.error(e)}}function ft(t,e,s,i,o,r,c){return`<div class="product-container">
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
            <use xlink:href="${u}#shopping-cart"></use>
        </svg>
    </button>
    </div>
    <button class="modal-btn-close js-btn-close-card" type="button">
    <svg class="icon-close">
        <use xlink:href="${u}#close-cross"></use>
      </svg>
    </button>`}
//# sourceMappingURL=commonHelpers2.js.map
