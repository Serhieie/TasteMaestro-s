import{s as g,C as a}from"./assets/sprite-1d71935a.js";import{a as k,l as U}from"./assets/vendor-470c038c.js";window.addEventListener("load",E);const v="cartItems",V=document.querySelector("main");V.addEventListener("click",Z);function Z(t){const e=t.target.closest(".add-to-cart"),s=t.target.closest(".product_item");if(e===null)return;const i=t.target.closest(".add-to-cart").dataset.id,r=s.dataset.id,o=s.querySelector("#product__image").src,n=s.querySelector("#product__image").alt,c=s.querySelector("#product__title").textContent,l=s.querySelector("#product_category_name").textContent,d=s.querySelector("#product_size").textContent,p=s.querySelector("#product__price").textContent;if(s.querySelector(".card-icon-check"),s.querySelector(".card-icon-cart"),!localStorage.getItem(v))A(v,[{id:r,img:o,imgDsc:n,title:c,category:l,price:p,size:d,quantity:1}]),E(),I(i);else{const u=y(v),b=u.findIndex($=>$.id===s.dataset.id);b!==-1?(u.splice(b,1),I(i)):(u.push({id:r,img:o,imgDsc:n,title:c,category:l,price:p,size:d,quantity:1}),I(i)),A(v,u),E()}}const A=(t,e)=>{try{const s=JSON.stringify(e);localStorage.setItem(t,s)}catch(s){console.error("Set state error: ",s.message)}},y=t=>{try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}};function E(){const t=document.querySelector(".header__js_span");y(v)?t.textContent=`CART (${y(v).length})`:t.textContent=`CART (${0})`}function I(t){document.querySelectorAll(`.add-to-cart[data-id="${t}"]`).forEach(s=>{const i=s.querySelector(".card-icon-cart"),r=s.querySelector(".card-icon-check");i.style.display==="block"?(i.style.display="none",r.style.display="block"):(i.style.display="block",r.style.display="none")})}function G({_id:t,name:e,img:s,desc:i,category:r,price:o,size:n,popularity:c,is10PercentOff:l}){let d=[],p=-1;return y("cartItems")&&(d=y("cartItems"),p=d.findIndex(u=>u.id===t)),`<li data-id="${t}" class="product__list__card product_item js-card">
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
      </li>`}a.paginationContainer.addEventListener("click",K);async function K(t){const e=parseInt(t.target.textContent);if(t.target.closest(".pagination-btn")){if(t.target.classList.contains("back")){if(a.filters.page===1)return;a.filters.page>0&&(a.filters.page-=1)}else if(t.target.classList.contains("forward")){if(a.filters.page>=a.filters.totalPages)return;a.filters.page<a.filters.totalPages&&(a.filters.page+=1)}m(a.filters.page)}if(t.target.classList.contains("pagi_item_span")){if(t.target.textContent==="..."||e===a.filters.page)return;a.filters.page=e,m(a.filters.page),Y()}}function Y(){document.querySelectorAll(".pagi_item").forEach(e=>{e.classList.remove("isActive"),parseInt(e.textContent)===a.filters.page&&e.classList.add("isActive")})}function P(t,e){const s=e?"is-active":"",i=a.filters.page>=10?"py":"";return`<li class="pagi_item ${s} pagination_item"><span class="pagi_item_span ${i}">${t}</span></li>`}function j(){return'<li class="pagi_item pagination_item ellipsis"><span class="pagi_item_span pagi_item_span_ellipsis">...</span></li>'}function Q(t,e){X(t),a.filters.page<=1?a.back.setAttribute("disabled",!0):a.back.removeAttribute("disabled"),a.filters.page>=a.filters.totalPages?a.forward.setAttribute("disabled",!0):a.forward.removeAttribute("disabled");const s=Math.ceil(t);let i;window.innerWidth<768?i=1:i=2;const r=document.querySelector(".pagination-list");if(r.innerHTML="",s>1){let o="",n=1,c=s;s>5&&(n=Math.max(1,e-i),c=Math.min(s,e+i),n===1?window.innerWidth<768?c=3:c=5:c===s&&(n=s-4)),n>=2&&(o+=P(1,e===1),o+=j());for(let l=n;l<=c;l+=1)o+=P(l,l===e);c<s&&(o+=j(),o+=P(s,s===e)),r.innerHTML=o}}function X(t){t<=1?a.paginationContainer.classList.add("visually-hidden"):a.paginationContainer.classList.remove("visually-hidden")}const tt=document.querySelector(".filters-from"),x=document.getElementById("keywordInput"),H=document.getElementById("categorySelect"),C=document.querySelector(".category-list"),_=document.getElementById("sortProducts"),q=document.querySelector(".sortProducts-list"),B=document.querySelector(".product__list"),N=document.querySelector(".svg__category"),O=document.querySelector(".svg__category_use");let z=[];const et=()=>{localStorage.setItem("filters",JSON.stringify(a.filters))},W=()=>{const t=JSON.parse(localStorage.getItem("filters"));t&&(t&&(t.keyword&&(x.value=t.keyword),a.filters=t),t.category!==null&&t.sort!==null&&R(t.sort))};W();async function m(){try{window.innerWidth>=1440?a.filters.limit=9:window.innerWidth<=1440&&window.innerWidth>=768?a.filters.limit=8:a.filters.limit=6;let t=`${a.BASE_URL}/products?page=${a.filters.page}&limit=${a.filters.limit}`;if(a.filters.keyword&&(t+=`&keyword=${a.filters.keyword}`),a.filters.category&&a.filters.category!=="Show all"&&(a.filters.category.includes("&")&&(a.filters.category=a.filters.category.replace(/&/g,"%26")),t+=`&category=${a.filters.category}`),a.filters.sort&&a.filters.sort!=="all")switch(a.filters.sort){case"alphabetical":t+="&byABC=true";break;case"reverse-alphabetical":t+="&byABC=false";break;case"cheap":t+="&byPrice=true";break;case"expensive":t+="&byPrice=false";break;case"popular":t+="&byPopularity=false";break;case"not-popular":t+="&byPopularity=true";break}const s=(await k.get(t)).data;a.filters.totalPages=s.totalPages,Q(s.totalPages,a.filters.page),st(s.results),et()}catch(t){console.error("Error fetching products:",t)}}const st=t=>{B.innerHTML=t.map(e=>G(e)).join(""),t.length||(B.innerHTML='<div class="nothing-found-conteiner"><p class="nothing-found">Nothing was found for the selected <span class="nothing-found_filter"> filters...</span></p><p class="inf-nothing-found">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p></div>')},at=async()=>{try{z=[...(await k.get("https://food-boutique.b.goit.study/api/products/categories")).data,"Show all"],it(z)}catch(t){console.error("Error fetching categories:",t)}};function it(t){const e=t.map(s=>{let i=s.replace(/_/g," ");return s==="Breads_&_Bakery"&&(i=i.replace(/&/g,"/")),`<li class="category-item" data-value="${s}">${i}</li>`}).join("");C.innerHTML=e}function R(t){switch(t){case"alphabetical":_.textContent="A to Z";break;case"reverse-alphabetical":_.textContent="Z to A";break;case"cheap":_.textContent="Cheap";break;case"expensive":_.textContent="Expensive";break;case"popular":_.textContent="Popular";break;case"not-popular":_.textContent="Not popular";break;case"all":_.textContent="Show all";break}}_.addEventListener("click",t=>{t.preventDefault(),q.classList.toggle("show"),O.classList.toggle("rotate-sort")});const rt=t=>{H.textContent=t},ot=t=>t?t.getAttribute("data-value"):null,ct=t=>t?t.getAttribute("data-value"):null,F=()=>{C.classList.remove("show")},J=()=>{q.classList.remove("show")};H.addEventListener("click",t=>{t.preventDefault(),C.classList.toggle("show"),N.classList.toggle("rotate-category")});document.addEventListener("click",t=>{!t.target.matches("#sortProducts")&&!t.target.closest(".sortProducts-list")&&J()});document.addEventListener("click",t=>{!t.target.matches("#categorySelect")&&!t.target.closest(".category-list")&&F()});x.addEventListener("input",U(()=>{a.filters.keyword=x.value,a.filters.page=1,m()},1500));tt.addEventListener("submit",async t=>{t.preventDefault(),a.filters.keyword=x.value,a.filters.page=1,m()});C.addEventListener("click",t=>{if(t.target.classList.contains("category-item")){const e=ot(t.target);let s=e.replace(/[%\d_]+/g," ").trim();a.filters.category=e,a.filters.page=1,rt(s),N.classList.toggle("rotate-category"),m(),F()}});q.addEventListener("click",t=>{if(t.target.classList.contains("category-item")){const e=ct(t.target);a.filters.sort=e,a.filters.page=1,R(e),O.classList.toggle("rotate-sort"),m(),J()}});at();m();W();let nt=5;const lt=document.querySelector(".popular-js");dt();async function dt(){try{const t=await k.get(`https://food-boutique.b.goit.study/api/products/popular?limit=${nt}`);lt.insertAdjacentHTML("beforeend",pt(t))}catch(t){console.log(`Упс! Щось пішло не так. 
    ${"Error: "+t.message} `)}}function pt(t){return t.data.map(({_id:e,name:s,img:i,category:r,price:o,size:n,popularity:c})=>{const l=r.replace("_"," ");let d=[],p=-1;return y("cartItems")&&(d=y("cartItems"),p=d.findIndex(u=>u.id===e)),`<li data-id="${e}" class="popular_list_card product_item js-card">
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
      </li>`}).join("")}const ut={discountCardList:document.querySelector(".discount-card-list")};gt();async function gt(){try{const t=await yt(),e=ft(t);ut.discountCardList.innerHTML=_t(e)}catch(t){console.log(t)}}async function yt(){const t="https://food-boutique.b.goit.study/api",e="products/discount";try{const{data:s}=await k.get(`${t}/${e}`);return s}catch(s){console.log(s)}}function ft(t){const e=[...t],s=Math.floor(Math.random()*e.length),i=e[s];e.splice(s,1);const r=Math.floor(Math.random()*e.length),o=e[r];return[i,o]}function _t(t){let e=[],s=-1;return y("cartItems")&&(e=y("cartItems"),s=e.findIndex(i=>i.id===t._id)),t.map(({_id:i,name:r,img:o,category:n,price:c,size:l,popularity:d})=>`
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
       </li>`).join("")}const f=document.querySelector(".js-modal-product-card"),h=document.querySelector(".js-backdrop"),D=document.querySelector(".loader-container"),mt=document.querySelector(".father_div"),S=document.querySelector("body");mt.addEventListener("click",ht);async function ht(t){if(t.target===t.currentTarget)return;const e=t.target.closest(".js-card");if(e===null)return;const s=e.dataset.id;if(t.target.closest(".add-to-cart"))return;D.classList.remove("visually-hidden"),S.classList.add("modal-is-open");const i=await vt(s);f.innerHTML="";const{_id:r,category:o,desc:n,img:c,name:l,popularity:d,price:p,size:u}=i,b=kt(r,o,n,c,l,d,p,u);f.innerHTML=b,D.classList.add("visually-hidden"),f.classList.remove("visually-hidden");const $=document.querySelector(".js-btn-close-card");$.addEventListener("click",M),h.addEventListener("click",T),document.addEventListener("keydown",L);function M(){h.classList.add("visually-hidden"),f.classList.add("visually-hidden"),S.classList.remove("modal-is-open"),f.innerHTML="",$.removeEventListener("click",M),document.removeEventListener("keydown",L)}function T(w){w.target.closest(".product_item")||(h.classList.add("visually-hidden"),f.classList.add("visually-hidden"),S.classList.remove("modal-is-open"),f.innerHTML="",h.removeEventListener("click",T),document.removeEventListener("keydown",L))}function L(w){w.preventDefault(),w.key==="Escape"&&(h.classList.add("visually-hidden"),f.classList.add("visually-hidden"),S.classList.remove("modal-is-open"),f.innerHTML="",document.removeEventListener("keydown",L))}}async function vt(t){try{f.classList.remove("visually-hidden"),h.classList.remove("visually-hidden");const e="https://food-boutique.b.goit.study/api",s="products",{data:i}=await k.get(`${e}/${s}/${t}`);return i}catch(e){console.error(e)}}function kt(t,e,s,i,r,o,n,c){let l=[],d=-1;return y("cartItems")&&(l=y("cartItems"),d=l.findIndex(u=>u.id===t)),`<div data-id="${t}" class="product_item">
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
