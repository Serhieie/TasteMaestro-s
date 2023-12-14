import{s as g,C as a,d as Z,e as G}from"./assets/sprite-b1e609fd.js";import{a as b}from"./assets/vendor-f728e3bf.js";window.addEventListener("load",M);const v="cartItems",K=document.querySelector("main");K.addEventListener("click",Y);function Y(t){const e=t.target.closest(".add-to-cart"),s=t.target.closest(".product_item");if(e===null)return;const i=t.target.closest(".add-to-cart").dataset.id,r=s.dataset.id,o=s.querySelector("#product__image").src,n=s.querySelector("#product__image").alt,c=s.querySelector("#product__title").textContent,l=s.querySelector("#product_category_name").textContent,d=s.querySelector("#product_size").textContent,u=s.querySelector("#product__price").textContent;if(s.querySelector(".card-icon-check"),s.querySelector(".card-icon-cart"),!localStorage.getItem(v))B(v,[{id:r,img:o,imgDsc:n,title:c,category:l,price:u,size:d,quantity:1}]),M(),E(i);else{const p=y(v),k=p.findIndex(L=>L.id===s.dataset.id);k!==-1?(p.splice(k,1),E(i)):(p.push({id:r,img:o,imgDsc:n,title:c,category:l,price:u,size:d,quantity:1}),E(i)),B(v,p),M()}}const B=(t,e)=>{try{const s=JSON.stringify(e);localStorage.setItem(t,s)}catch(s){console.error("Set state error: ",s.message)}},y=t=>{try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}};function M(){const t=document.querySelector(".header__js_span");y(v)?t.textContent=`CART (${y(v).length})`:t.textContent=`CART (${0})`}function E(t){document.querySelectorAll(`.add-to-cart[data-id="${t}"]`).forEach(s=>{const i=s.querySelector(".card-icon-cart"),r=s.querySelector(".card-icon-check");i.style.display==="block"?(i.style.display="none",r.style.display="block"):(i.style.display="block",r.style.display="none")})}function Q({_id:t,name:e,img:s,desc:i,category:r,price:o,size:n,popularity:c,is10PercentOff:l}){let d=[],u=-1;return y("cartItems")&&(d=y("cartItems"),u=d.findIndex(p=>p.id===t)),`<li data-id="${t}" class="product__list__card product_item js-card">
        <svg class="sticker_icon ${l?"":"visually-hidden"}" width="60" height="60" aria-label="discount">
          <use xlink:href="${g}#discount"></use>
        </svg>
        <div class="product__image__wraper">
          <img
          id="product__image"
            class="product__image"
            src="${s}"
            alt="${e}"
            width="140"
            height="140"
            aria-label="product"
          />
        </div>
        <div class="product__description__wraper">
          <h3 id="product__title" class="product__title">${e}</h3>
          <ul class="product__details">
            <li class="product-description-item">
              <p class="product__description__text">
                Category:
                <span id="product_category_name" class="product__description__span">${r.replace(/_/g," ")}</span>
              </p>
            </li>
            <li class="product-description-item">
              <p class="product__description__text">
                Size: <span id="product_size" class="product__description__span">${n}</span>
              </p>
            </li>
            <li class="product-description-item">
              <p class="product__description__text">
                Popularity: <span class="product__description__span">${c}</span>
              </p>
            </li>
          </ul>
        </div>
        <div class="product__order__wraper">
          <p id="product__price" class="product__price">${"$"+o}</p>
          <button type="button" data-id="${t}" class="product__order__btn add-to-cart" aria-label="add-cart">
            <svg class="card-icon-cart" ${u===-1?"style = 'display:block'":"style = 'display:none'"}  width="18" height="18" aria-label="cart">
              <use xlink:href="${g}#shopping-cart"></use>
            </svg>
            <svg class="card-icon-check" ${u===-1?"style = 'display:none'":"style = 'display:block'"}  width="18" height="18" aria-label="cart">
              <use xlink:href="${g}#check"></use>
            </svg>
          </button>
        </div>
      </li>`}a.paginationContainer.addEventListener("click",X);async function X(t){const e=parseInt(t.target.textContent);if(!a.isFetching){if(t.target.closest(".pagination-btn")){if(t.target.classList.contains("back")){if(a.filters.page===1)return;a.filters.page>0&&(a.filters.page-=1)}else if(t.target.classList.contains("forward")){if(a.filters.page>=a.filters.totalPages)return;a.filters.page<a.filters.totalPages&&(a.filters.page+=1)}_(a.filters.page)}if(t.target.classList.contains("pagi_item_span")){if(t.target.textContent==="..."||e===a.filters.page)return;a.filters.page=e,_(a.filters.page),tt()}}}function tt(){document.querySelectorAll(".pagi_item").forEach(e=>{e.classList.remove("isActive"),parseInt(e.textContent)===a.filters.page&&e.classList.add("isActive")})}function q(t,e){const s=e?"is-active":"",i=a.filters.page>=10?"py":"";return`<li class="pagi_item ${s} pagination_item"><span class="pagi_item_span ${i}">${t}</span></li>`}function D(){return'<li class="pagi_item pagination_item ellipsis"><span class="pagi_item_span pagi_item_span_ellipsis">...</span></li>'}function et(t,e){st(t),a.filters.page<=1?a.back.setAttribute("disabled",!0):a.back.removeAttribute("disabled"),a.filters.page>=a.filters.totalPages?a.forward.setAttribute("disabled",!0):a.forward.removeAttribute("disabled");const s=Math.ceil(t);let i;window.innerWidth<768?i=1:i=2;const r=document.querySelector(".pagination-list");if(r.innerHTML="",s>1){let o="",n=1,c=s;s>5&&(n=Math.max(1,e-i),c=Math.min(s,e+i),n===1?window.innerWidth<768?c=3:c=5:c===s&&(n=s-4)),n>=2&&(o+=q(1,e===1),o+=D());for(let l=n;l<=c;l+=1)o+=q(l,l===e);c<s&&(o+=D(),o+=q(s,s===e)),r.innerHTML=o}}function st(t){t<=1?a.paginationContainer.classList.add("visually-hidden"):a.paginationContainer.classList.remove("visually-hidden")}const at=document.querySelector(".filters-from"),C=document.getElementById("keywordInput"),T=document.getElementById("categorySelect"),P=document.querySelector(".category-list"),m=document.getElementById("sortProducts"),A=document.querySelector(".sortProducts-list"),H=document.querySelector(".product__list"),x=document.querySelector(".svg__category"),I=document.querySelector(".svg__category_use");let N=[];const it=()=>{localStorage.setItem("filters",JSON.stringify(a.filters))},R=()=>{const t=JSON.parse(localStorage.getItem("filters"));if(!t||(t&&(t.keyword&&(C.value=t.keyword),a.filters=t),t.category===null)||t.sort===null)return;let e=t.category.replace(/_/g," ");t.category.includes("%26")&&(e=e.replace(/%26/g,"&")),F(t.sort),T.textContent=e.replace(/_/g," ")};window.addEventListener("resize",W);function W(){window.innerWidth>=1440?a.filters.limit=9:window.innerWidth<=1440&&window.innerWidth>=768?a.filters.limit=8:a.filters.limit=6}R();async function _(){try{W();let t=`${a.BASE_URL}/products?page=${a.filters.page}&limit=${a.filters.limit}`;if(a.filters.keyword&&(t+=`&keyword=${a.filters.keyword}`),a.filters.category&&a.filters.category!=="Show all"&&(a.filters.category.includes("&")&&(a.filters.category=a.filters.category.replace(/&/g,"%26")),t+=`&category=${a.filters.category}`),a.filters.sort&&a.filters.sort!=="all")switch(a.filters.sort){case"alphabetical":t+="&byABC=true";break;case"reverse-alphabetical":t+="&byABC=false";break;case"cheap":t+="&byPrice=true";break;case"expensive":t+="&byPrice=false";break;case"popular":t+="&byPopularity=false";break;case"not-popular":t+="&byPopularity=true";break}Z();const s=(await b.get(t)).data;a.filters.totalPages=s.totalPages,et(s.totalPages,a.filters.page),rt(s.results),it(),G()}catch(t){console.error("Error fetching products:",t)}}const rt=t=>{H.innerHTML=t.map(e=>Q(e)).join(""),t.length||(H.innerHTML='<div class="nothing-found-conteiner"><p class="nothing-found">Nothing was found for the selected <span class="nothing-found_filter"> filters...</span></p><p class="inf-nothing-found">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p></div>')},ot=async()=>{try{N=[...(await b.get("https://food-boutique.b.goit.study/api/products/categories")).data,"Show all"],ct(N)}catch(t){console.error("Error fetching categories:",t)}};function ct(t){const e=t.map(s=>{let i=s.replace(/_/g," ");return s==="Breads_&_Bakery"&&(i=i.replace(/&/g,"/")),`<li class="category-item" data-value="${s}">${i}</li>`}).join("");P.innerHTML=e}function F(t){switch(t){case"alphabetical":m.textContent="A to Z";break;case"reverse-alphabetical":m.textContent="Z to A";break;case"cheap":m.textContent="Cheap";break;case"expensive":m.textContent="Expensive";break;case"popular":m.textContent="Popular";break;case"not-popular":m.textContent="Not popular";break;case"all":m.textContent="Show all";break}}m.addEventListener("click",t=>{t.preventDefault(),A.classList.toggle("show"),I.classList.toggle("rotate-sort")});const nt=t=>{T.textContent=t},lt=t=>t?t.getAttribute("data-value"):null,dt=t=>t?t.getAttribute("data-value"):null,J=()=>{P.classList.remove("show")},U=()=>{A.classList.remove("show")};T.addEventListener("click",t=>{t.preventDefault(),P.classList.toggle("show"),x.classList.toggle("rotate-category")});document.addEventListener("click",t=>{!t.target.matches("#sortProducts")&&!t.target.closest(".sortProducts-list")&&(U(),I.classList.contains("rotate-sort")&&I.classList.toggle("rotate-sort"))});document.addEventListener("click",t=>{!t.target.matches("#categorySelect")&&!t.target.closest(".category-list")&&(J(),x.classList.contains("rotate-category")&&x.classList.toggle("rotate-category"))});C.addEventListener("input",()=>{a.filters.keyword=C.value,a.filters.page=1,a.filters.keyword===""&&_()});at.addEventListener("submit",async t=>{t.preventDefault(),!(a.isFetching||!a.filters.keyword)&&(a.filters.keyword=C.value,a.filters.page=1,_())});P.addEventListener("click",t=>{if(t.target.classList.contains("category-item")){const e=lt(t.target);let s=e.replace(/[%\d_]+/g," ").trim();a.filters.category=e,a.filters.page=1,nt(s),x.classList.toggle("rotate-category"),_(),J()}});A.addEventListener("click",t=>{if(t.target.classList.contains("category-item")){const e=dt(t.target);a.filters.sort=e,a.filters.page=1,F(e),I.classList.toggle("rotate-sort"),_(),U()}});ot();_();R();let ut=5;const pt=document.querySelector(".popular-js");gt();async function gt(){try{const t=await b.get(`https://food-boutique.b.goit.study/api/products/popular?limit=${ut}`);pt.insertAdjacentHTML("beforeend",yt(t))}catch(t){console.log(`Упс! Щось пішло не так. 
    ${"Error: "+t.message} `)}}function yt(t){return t.data.map(({_id:e,name:s,img:i,category:r,price:o,size:n,popularity:c})=>{const l=r.replace("_"," ");let d=[],u=-1;return y("cartItems")&&(d=y("cartItems"),u=d.findIndex(p=>p.id===e)),`<li id="product_${e}" data-id="${e}" class="popular_list_card product_item js-card">
         <svg class="popular_discount_icon visually-hidden" width="60" height="60" alt="Discount" aria-hidden="true"
  role="img"  >
          <use xlink:href="${g}#Discount"></use>
         </svg>
         <div class="popular_image_container">
           <img id="product__image"
             class="popular_image"
             src="${i}"
             alt="Image of ${s}"
             width="56"
             height="56"
            aria-label="product_${e}_image"
           />
         </div>
        <div class="popular_description_container">
          <h3 id="product__title" class="popular_product_title" aria-label="product_${e}_title">${s}</h3>
          <div class="popular_details">
            <div class="popular_details_item">
              <p class="popular_details_category">
                Category:
                <span id="product_category_name" class="popular_details_text">${l}</span>
              </p>
            </div>
             <div class="popular_detail_wrap">
            <div class="popular_details_item">
              <p class="popular_details_category">
                Size: <span id="product_size" class="popular_details_text">${n}</span>
              </p>
            </div>
            <div class="popular_details_item">
              <p class="popular_details_category">
                Popularity: <span class="popular_details_text">${c}</span>
              </p>
            </div>
            </div>
          </div>
        </div>
        <div class="popular_order_container">
          <p id="product__price" style = "display:none">${"$"+o}</p>
          <button data-id="${e}" class=" popular_order_btn add-to-cart" aria-label="Add product to cart">
            <svg class="card-icon-cart popular-icon" ${u===-1?"style = 'display:block'":"style = 'display:none'"}  width="12" height="12" aria-hidden="true" role="img">
              <use xlink:href="${g}#shopping-cart"></use>
            </svg>
            <svg class="card-icon-check popular-icon-check" ${u===-1?"style = 'display:none'":"style = 'display:block'"}  width="12" height="12" aria-hidden="true" role="img">
              <use xlink:href="${g}#check"></use>
            </svg>
          </button>
        </div>
      </li>`}).join("")}const ft={discountCardList:document.querySelector(".discount-card-list")};V();setInterval(V,1e4);async function V(){try{const t=await mt(),e=_t(t);ft.discountCardList.innerHTML=ht(e)}catch(t){console.log(t)}}async function mt(){const t="https://food-boutique.b.goit.study/api",e="products/discount";try{const{data:s}=await b.get(`${t}/${e}`);return s}catch(s){console.log(s)}}function _t(t){const e=[...t],s=Math.floor(Math.random()*e.length),i=e[s];e.splice(s,1);const r=Math.floor(Math.random()*e.length),o=e[r];return[i,o]}function ht(t){let e=[],s=-1;return y("cartItems")&&(e=y("cartItems"),s=e.findIndex(i=>i.id===t._id)),t.map(({_id:i,name:r,img:o,category:n,price:c,size:l,popularity:d})=>`
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
             <button data-id="${i}" class="discount-cart-btn add-to-cart" aria-label="discount-cart-btn" type="button">
                <svg class="card-icon-cart discount-cart-icon" ${s===-1?"style = 'display:block'":"style = 'display:none'"}  width="18" height="18">
                      <use xlink:href="${g}#shopping-cart"></use>
                  </svg>
                  <svg class="card-icon-check discount-check-icon" ${s===-1?"style = 'display:none'":"style = 'display:block'"}  width="18" height="18">
                      <use xlink:href="${g}#check"></use>
                  </svg>
             </button>
           </div>
         </div>
         <svg class="discount-label-icon" width="60" height="60">
           <use xlink:href="${g}#discount"></use>
         </svg>
         <span id="product_category_name" class="visually-hidden">${n}</span>
         <span id="product_size" class="visually-hidden">${l}</span>
         <span class="product__description__span visually-hidden">${d}</span>
       </li>`).join("")}const f=document.querySelector(".js-modal-product-card"),h=document.querySelector(".js-backdrop"),O=document.querySelector(".loader-container"),vt=document.querySelector(".father_div"),S=document.querySelector("body"),bt=document.querySelector(".btn-up");vt.addEventListener("click",kt);async function kt(t){if(t.target===t.currentTarget)return;const e=t.target.closest(".js-card");if(e===null)return;const s=e.dataset.id;if(t.target.closest(".add-to-cart"))return;O.classList.remove("visually-hidden"),S.classList.add("modal-is-open");const i=await Lt(s);f.innerHTML="";const{_id:r,category:o,desc:n,img:c,name:l,popularity:d,price:u,size:p}=i,k=$t(r,o,n,c,l,d,u,p);f.innerHTML=k,O.classList.add("visually-hidden"),f.classList.remove("visually-hidden");const L=document.querySelector(".js-btn-close-card");L.addEventListener("click",j),h.addEventListener("click",z),document.addEventListener("keydown",$);function j(){h.classList.add("visually-hidden"),f.classList.add("visually-hidden"),S.classList.remove("modal-is-open"),f.innerHTML="",L.removeEventListener("click",j),document.removeEventListener("keydown",$)}function z(w){w.target.closest(".product_item")||(h.classList.add("visually-hidden"),f.classList.add("visually-hidden"),S.classList.remove("modal-is-open"),f.innerHTML="",h.removeEventListener("click",z),document.removeEventListener("keydown",$))}function $(w){w.preventDefault(),w.key==="Escape"&&(h.classList.add("visually-hidden"),f.classList.add("visually-hidden"),S.classList.remove("modal-is-open"),f.innerHTML="",document.removeEventListener("keydown",$))}}async function Lt(t){try{f.classList.remove("visually-hidden"),h.classList.remove("visually-hidden"),bt.classList.add("visually-hidden");const e="https://food-boutique.b.goit.study/api",s="products",{data:i}=await b.get(`${e}/${s}/${t}`);return i}catch(e){console.error(e)}}function $t(t,e,s,i,r,o,n,c){let l=[],d=-1;return y("cartItems")&&(l=y("cartItems"),d=l.findIndex(p=>p.id===t)),`<div data-id="${t}" class="product_item modal-product-div">
  <div class="product-container">
    <div class="product-image-box">
      <img id="product__image" class="product-image" src="${i!==null?i:"./img/image-placeholder.png"}" alt="${r}" aria-labelledby="product__title" aria-describedby="product_category_name product_size" />
    </div>
    <div class="product-descr">
      <h3 id="product__title" class="product-title">${r}</h3>
      <ul class="product-details-list">
        <li id="product_category_name" class="product-details-text product-details-item"><span class="span-details-text">Category: </span>${e.replace(/_/g," ")}</li>
        <li id="product_size" class="product-details-text product-details-item"><span class="span-details-text">Size: </span>${c}</li>
        <li class="product-details-text col-md-3"><span class="span-details-text product-details-item">Popularity: </span>${o}</li>
      </ul>
      <p class="product-text">${s}</p>
    </div>
  </div>
  <div class="product-wraper">
    <span id="product__price" class="product-price">$${n}</span>
    <button class="product-btn-shopping-cart add-to-cart" type="button" data-id="${t}" aria-label="add-cart">
      <span ${d===-1?"style = 'display:block'":"style = 'display:none'"} class="card-icon-cart">Add to</span>
      <span ${d===-1?"style = 'display:none'":"style = 'display:block'"} class="card-icon-check">Remove from</span>
      <svg class="product-cart-icon" width="18" height="18" aria-label="remove-cart">
        <use xlink:href="${g}#shopping-cart" ></use>
      </svg>
    </button>
  </div>
  <button class="modal-btn-close js-btn-close-card" type="button" aria-label="close-modal">
    <svg class="icon-close" aria-label="cart"> 
      <use xlink:href="${g}#close-cross"></use>
    </svg>
  </button>
</div>`}
//# sourceMappingURL=commonHelpers2.js.map
