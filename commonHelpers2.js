import{s as g,C as a}from"./assets/sprite-ded05666.js";import{a as k,l as O}from"./assets/vendor-470c038c.js";window.addEventListener("load",E);const v="cartItems",F=document.querySelector("main");F.addEventListener("click",W);function W(t){const e=t.target.closest(".add-to-cart"),s=t.target.closest(".product_item");if(e===null)return;const i=t.target.closest(".add-to-cart").dataset.id,r=s.dataset.id,o=s.querySelector("#product__image").src,n=s.querySelector("#product__image").alt,c=s.querySelector("#product__title").textContent,l=s.querySelector("#product_category_name").textContent,d=s.querySelector("#product_size").textContent,p=s.querySelector("#product__price").textContent;if(s.querySelector(".card-icon-check"),s.querySelector(".card-icon-cart"),!localStorage.getItem(v))j(v,[{id:r,img:o,imgDsc:n,title:c,category:l,price:p,size:d,quantity:1}]),E(),I(i);else{const u=y(v),b=u.findIndex($=>$.id===s.dataset.id);b!==-1?(u.splice(b,1),I(i)):(u.push({id:r,img:o,imgDsc:n,title:c,category:l,price:p,size:d,quantity:1}),console.log("ф-ція зміни картинки додати"),I(i)),j(v,u),E()}}const j=(t,e)=>{try{const s=JSON.stringify(e);localStorage.setItem(t,s)}catch(s){console.error("Set state error: ",s.message)}},y=t=>{try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}};function E(){const t=document.querySelector(".header__js_span");y(v)?t.textContent=`CART (${y(v).length})`:t.textContent=`CART (${0})`}function I(t){const e=document.querySelectorAll(`.add-to-cart[data-id="${t}"]`);console.log(e),e.forEach(s=>{console.log("change icon");const i=s.querySelector(".card-icon-cart"),r=s.querySelector(".card-icon-check");i.style.display==="block"?(console.log("ON"),i.style.display="none",r.style.display="block"):(console.log("OFF"),i.style.display="block",r.style.display="none")})}function R({_id:t,name:e,img:s,desc:i,category:r,price:o,size:n,popularity:c,is10PercentOff:l}){let d=[],p=-1;return y("cartItems")&&(d=y("cartItems"),p=d.findIndex(u=>u.id===t)),`<li data-id="${t}" class="product__list__card product_item js-card">
        <svg class="sticker_icon ${l?"":"visually-hidden"}" width="60" height="60">
          <use xlink:href="${g}#discount"></use>
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
              <use xlink:href="${g}#shopping-cart"></use>
            </svg>
            <svg class="card-icon-check" ${p===-1?"style = 'display:none'":"style = 'display:block'"}  width="18" height="18">
              <use xlink:href="${g}#check"></use>
            </svg>
          </button>
        </div>
      </li>`}a.paginationContainer.addEventListener("click",J);async function J(t){const e=parseInt(t.target.textContent);if(t.target.closest(".pagination-btn")){if(t.target.classList.contains("back")){if(a.filters.page===1)return;a.filters.page>0&&(a.filters.page-=1)}else if(t.target.classList.contains("forward")){if(a.filters.page>=a.filters.totalPages)return;a.filters.page<a.filters.totalPages&&(a.filters.page+=1)}h(a.filters.page)}if(t.target.classList.contains("pagi_item_span")){if(t.target.textContent==="..."||e===a.filters.page)return;a.filters.page=e,h(a.filters.page),U()}}function U(){document.querySelectorAll(".pagi_item").forEach(e=>{e.classList.remove("isActive"),parseInt(e.textContent)===a.filters.page&&e.classList.add("isActive")})}function P(t,e){const s=e?"is-active":"",i=a.filters.page>=10?"py":"";return`<li class="pagi_item ${s} pagination_item"><span class="pagi_item_span ${i}">${t}</span></li>`}function B(){return'<li class="pagi_item pagination_item ellipsis"><span class="pagi_item_span pagi_item_span_ellipsis">...</span></li>'}function V(t,e){Z(t),a.filters.page<=1?a.back.setAttribute("disabled",!0):a.back.removeAttribute("disabled"),a.filters.page>=a.filters.totalPages?a.forward.setAttribute("disabled",!0):a.forward.removeAttribute("disabled");const s=Math.ceil(t);let i;window.innerWidth<768?i=1:i=2;const r=document.querySelector(".pagination-list");if(r.innerHTML="",s>1){let o="",n=1,c=s;s>5&&(n=Math.max(1,e-i),c=Math.min(s,e+i),n===1?window.innerWidth<768?c=3:c=5:c===s&&(n=s-4)),n>=2&&(o+=P(1,e===1),o+=B());for(let l=n;l<=c;l+=1)o+=P(l,l===e);c<s&&(o+=B(),o+=P(s,s===e)),r.innerHTML=o}}function Z(t){t<=1?a.paginationContainer.classList.add("visually-hidden"):a.paginationContainer.classList.remove("visually-hidden")}const G=document.querySelector(".filters-from"),S=document.getElementById("keywordInput"),q=document.getElementById("categorySelect"),C=document.querySelector(".category-list"),_=document.getElementById("sortProducts"),M=document.querySelector(".sortProducts-list"),K=document.querySelector(".product__list"),Y=document.querySelector(".container__products");let N=[];const Q=()=>{localStorage.setItem("filters",JSON.stringify(a.filters))},D=()=>{const t=JSON.parse(localStorage.getItem("filters"));console.log(t),t&&(t&&(t.keyword&&(S.value=t.keyword),a.filters=t),t.category!==null&&t.sort!==null&&(H(t.sort),q.textContent=t.category))};D();async function h(){try{window.innerWidth>=1440?a.filters.limit=9:window.innerWidth<=1440&&window.innerWidth>=768?a.filters.limit=8:a.filters.limit=6;let t=`${a.BASE_URL}/products?page=${a.filters.page}&limit=${a.filters.limit}`;if(a.filters.keyword&&(t+=`&keyword=${a.filters.keyword}`),a.filters.category&&a.filters.category!=="Show all"&&(a.filters.category.includes("&")&&(a.filters.category=a.filters.category.replace(/&/g,"%26")),t+=`&category=${a.filters.category}`),a.filters.sort&&a.filters.sort!=="all")switch(a.filters.sort){case"alphabetical":t+="&byABC=true";break;case"reverse-alphabetical":t+="&byABC=false";break;case"cheap":t+="&byPrice=true";break;case"expensive":t+="&byPrice=false";break;case"popular":t+="&byPopularity=false";break;case"not-popular":t+="&byPopularity=true";break}const s=(await k.get(t)).data;a.filters.totalPages=s.totalPages,V(s.totalPages,a.filters.page),X(s.results),Q()}catch(t){console.error("Error fetching products:",t)}}const X=t=>{K.innerHTML=t.map(e=>R(e)).join(""),t||(Y.innerHTML='<div class="nothing-found-conteiner"><p class="nothing-found">Nothing was found for the selected <span class="nothing-found_filter"> filters...</span></p><p class="inf-nothing-found">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p></div>')},tt=async()=>{try{N=[...(await k.get("https://food-boutique.b.goit.study/api/products/categories")).data,"Show all"],et(N)}catch(t){console.error("Error fetching categories:",t)}},et=t=>{const e=t.map(s=>{let i=s.replace(/_/g," ");return s==="Breads_&_Bakery"&&(i=i.replace(/&/g,"/")),`<li class="category-item" data-value="${s}">${i}</li>`}).join("");C.innerHTML=e};function H(t){switch(t){case"alphabetical":_.textContent="A to Z";break;case"reverse-alphabetical":_.textContent="Z to A";break;case"cheap":_.textContent="Cheap";break;case"expensive":_.textContent="Expensive";break;case"popular":_.textContent="Popular";break;case"not-popular":_.textContent="Not popular";break;case"all":_.textContent="Show all";break}}const st=()=>{M.classList.remove("show")};_.addEventListener("click",t=>{t.preventDefault(),M.classList.toggle("show")});const at=t=>{q.textContent=t},it=t=>t?t.getAttribute("data-value"):null,rt=t=>t?t.getAttribute("data-value"):null,ot=()=>{C.classList.remove("show")};q.addEventListener("click",t=>{t.preventDefault(),C.classList.toggle("show")});S.addEventListener("input",O(()=>{a.filters.keyword=S.value,a.filters.page=1,h()},1500));G.addEventListener("submit",async t=>{t.preventDefault(),a.filters.keyword=S.value,a.filters.page=1,h()});C.addEventListener("click",t=>{if(t.target.classList.contains("category-item")){const e=it(t.target);a.filters.category=e,a.filters.page=1,at(e),h(),ot()}});M.addEventListener("click",t=>{if(t.target.classList.contains("category-item")){const e=rt(t.target);a.filters.sort=e,a.filters.page=1,H(e),h(),st()}});tt();h();D();let ct=5;const nt=document.querySelector(".popular-js");lt();async function lt(){try{const t=await k.get(`https://food-boutique.b.goit.study/api/products/popular?limit=${ct}`);nt.insertAdjacentHTML("beforeend",dt(t))}catch(t){console.log(`Упс! Щось пішло не так. 
    ${"Error: "+t.message} `)}}function dt(t){return t.data.map(({_id:e,name:s,img:i,category:r,price:o,size:n,popularity:c})=>{const l=r.replace("_"," ");let d=[],p=-1;return y("cartItems")&&(d=y("cartItems"),p=d.findIndex(u=>u.id===e)),`<li data-id="${e}" class="popular_list_card product_item js-card">
         <svg class="popular_discount_icon visually-hidden" width="60" height="60">
          <use xlink:href="${g}#Discount"></use>
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
              <use xlink:href="${g}#shopping-cart"></use>
            </svg>
            <svg class="card-icon-check popular-icon-check" ${p===-1?"style = 'display:none'":"style = 'display:block'"}  width="12" height="12">
              <use xlink:href="${g}#check"></use>
            </svg>
          </button>
        </div>
      </li>`}).join("")}const pt={discountCardList:document.querySelector(".discount-card-list")};ut();async function ut(){try{const t=await gt(),e=yt(t);pt.discountCardList.innerHTML=ft(e)}catch(t){console.log(t)}}async function gt(){const t="https://food-boutique.b.goit.study/api",e="products/discount";try{const{data:s}=await k.get(`${t}/${e}`);return s}catch(s){console.log(s)}}function yt(t){const e=[...t],s=Math.floor(Math.random()*e.length),i=e[s];e.splice(s,1);const r=Math.floor(Math.random()*e.length),o=e[r];return[i,o]}function ft(t){let e=[],s=-1;return y("cartItems")&&(e=y("cartItems"),s=e.findIndex(i=>i.id===t._id)),t.map(({_id:i,name:r,img:o,category:n,price:c,size:l,popularity:d})=>`
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
       </li>`).join("")}const f=document.querySelector(".js-modal-product-card"),m=document.querySelector(".js-backdrop"),z=document.querySelector(".loader-container"),_t=document.querySelector(".father_div"),x=document.querySelector("body");_t.addEventListener("click",ht);async function ht(t){if(t.target===t.currentTarget)return;const e=t.target.closest(".js-card");if(e===null)return;const s=e.dataset.id;if(t.target.closest(".add-to-cart"))return;z.classList.remove("visually-hidden"),x.classList.add("modal-is-open");const i=await mt(s);f.innerHTML="";const{_id:r,category:o,desc:n,img:c,name:l,popularity:d,price:p,size:u}=i,b=vt(r,o,n,c,l,d,p,u);f.innerHTML=b,z.classList.add("visually-hidden"),f.classList.remove("visually-hidden");const $=document.querySelector(".js-btn-close-card");$.addEventListener("click",T),m.addEventListener("click",A),document.addEventListener("keydown",L);function T(){m.classList.add("visually-hidden"),f.classList.add("visually-hidden"),x.classList.remove("modal-is-open"),f.innerHTML="",$.removeEventListener("click",T),document.removeEventListener("keydown",L)}function A(w){w.target.closest(".product_item")||(m.classList.add("visually-hidden"),f.classList.add("visually-hidden"),x.classList.remove("modal-is-open"),f.innerHTML="",m.removeEventListener("click",A),document.removeEventListener("keydown",L))}function L(w){w.preventDefault(),w.key==="Escape"&&(m.classList.add("visually-hidden"),f.classList.add("visually-hidden"),x.classList.remove("modal-is-open"),f.innerHTML="",document.removeEventListener("keydown",L))}}async function mt(t){try{f.classList.remove("visually-hidden"),m.classList.remove("visually-hidden");const e="https://food-boutique.b.goit.study/api",s="products",{data:i}=await k.get(`${e}/${s}/${t}`);return i}catch(e){console.error(e)}}function vt(t,e,s,i,r,o,n,c){let l=[],d=-1;return y("cartItems")&&(l=y("cartItems"),d=l.findIndex(u=>u.id===t)),`<div data-id="${t}" class="product_item">
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
    <button class="product-btn-shopping-cart add-to-cart" type="button" data-id="${t}">
        <span ${d===-1?"style = 'display:block'":"style = 'display:none'"} class="card-icon-cart">Add to</span>
        <span ${d===-1?"style = 'display:none'":"style = 'display:block'"} class="card-icon-check">Remove from</span>
        <svg class="product-cart-icon" width="18" height="18">
            <use xlink:href="${g}#shopping-cart"></use>
        </svg>
    </button>
    </div>
    <button class="modal-btn-close js-btn-close-card" type="button">
    <svg class="icon-close">
        <use xlink:href="${g}#close-cross"></use>
      </svg>
    </button>
    </div>`}
//# sourceMappingURL=commonHelpers2.js.map
