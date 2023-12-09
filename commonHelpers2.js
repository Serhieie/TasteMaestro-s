import{C as a}from"./assets/footer-1f24a41b.js";import{a as h}from"./assets/vendor-f728e3bf.js";const p="/TasteMaestro-s/assets/sprite-2fd3930f.svg",M=document.querySelector("main");M.addEventListener("click",T);function T(t){const e=t.target.closest(".add-to-cart"),s=t.target.closest(".product_item");if(!s||s.nodeName!=="LI")return;if(e===null){console.log("modal");return}const r=s.dataset.id,o=s.querySelector("#product__image").src,i=s.querySelector("#product__image").alt,c=s.querySelector("#product__title").textContent,n=s.querySelector("#product_category_name").textContent,m=s.querySelector("#product_size").textContent,_=s.querySelector("#product__price").textContent,d=s.querySelector(".card-icon-check"),f=s.querySelector(".card-icon-cart");if(localStorage.getItem(KEY)){const g=y(KEY),v=g.findIndex(A=>A.id===s.dataset.id);console.log(v),v!==-1?(g.splice(v,1),console.log("ф-ція зміни картинки прибрати"),f.style.display="block",d.style.display="none"):(g.push({id:r,img:o,imgDsc:i,title:c,category:n,price:_,size:m,quantity:1}),f.style.display="none",d.style.display="block",console.log("ф-ція зміни картинки додати")),S(KEY,g),C()}else{const g=[{id:r,img:o,imgDsc:i,title:c,category:n,price:_,size:m,quantity:1}];S(KEY,g),console.log("ф-ція зміни картинки додати"),f.style.display="none",d.style.display="block",C()}}const S=(t,e)=>{try{const s=JSON.stringify(e);localStorage.setItem(t,s)}catch(s){console.error("Set state error: ",s.message)}},y=t=>{try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}};function C(){const t=document.querySelector(".header__js_span");y(KEY)?t.textContent=`CART (${y(KEY).length})`:t.textContent=`CART (${0})`}window.addEventListener("load",C);function B({_id:t,name:e,img:s,desc:r,category:o,price:i,size:c,popularity:n,is10PercentOff:m}){let _=[],d=-1;return y("cartItems")&&(_=y("cartItems"),d=_.findIndex(f=>f.id===t)),`<li data-id="${t}" class="product__list__card product_item">
        <svg class="sticker_icon ${m?"":"visually-hidden"}" width="60" height="60">
          <use xlink:href="${p}#discount"></use>
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
          <p id="product__price" class="product__price">${"$"+i}</p>
          <button data-id="${t}" class="product__order__btn add-to-cart">
            <svg class="card-icon-cart" ${d===-1?"style = 'display:block'":"style = 'display:none'"}  width="18" height="18">
              <use xlink:href="${p}#shopping-cart"></use>
            </svg>
            <svg class="card-icon-check" ${d===-1?"style = 'display:none'":"style = 'display:block'"}  width="18" height="18">
              <use xlink:href="${p}#check"></use>
            </svg>
          </button>
        </div>
      </li>`}let w=a.filters.totalHits;a.paginationContainer.addEventListener("click",H);async function H(t){const e=parseInt(t.target.textContent);if(t.target.closest(".pagination-btn")){if(t.target.classList.contains("back")){if(a.filters.page===1)return;a.filters.page>0&&(a.filters.page-=1)}else if(t.target.classList.contains("forward")){if(a.filters.page===w){a.forward.setAttribute("disabled",!0);return}else a.filters.page<w&&a.forward.removeAttribute("disabled");a.filters.page+=1}u()}if(t.target.classList.contains("pagi_item_span")){if(t.target.textContent==="..."||e===a.filters.page)return;a.filters.page=e,u(),j()}}function j(){return document.querySelectorAll(".pagi_item").forEach(e=>{e.classList.remove("isActive"),parseInt(e.textContent)===a.filters.page&&e.classList.add("isActive")}),a.filters.page<=1?a.back.setAttribute("disabled",!0):a.back.removeAttribute("disabled"),a.filters.page===w?a.forward.setAttribute("disabled",!0):a.forward.removeAttribute("disabled")}function k(t,e){const s=e?"isActive":"",r=a.filters.page>=10?"py":"";return`<li class="pagi_item ${s} pagination_item"><span class="pagi_item_span ${r}">${t}</span></li>`}function L(){return'<li class="pagi_item pagination_item"><span class="pagi_item_span">...</span></li>'}function z(t,e){const s=Math.ceil(t),r=document.querySelector(".pagination-list");if(r.innerHTML="",s>1){let o="",i=1,c=s;s>5&&(i=Math.max(1,e-2),c=Math.min(s,e+2),i===1?c=5:c===s&&(i=s-4)),i>=2&&(o+=k(1,e===1),o+=L());for(let n=i;n<=c;n+=1)o+=k(n,n===e);c<s&&(o+=L(),o+=k(s,s===e)),r.innerHTML=o}}const D=document.getElementById("filterForm"),x=document.getElementById("keywordInput"),I=document.getElementById("categorySelect"),b=document.querySelector(".category-list"),l=document.getElementById("sortProducts"),$=document.querySelector(".sortProducts-list");document.getElementById("productsList");const N=document.querySelector(".product__list");let E=[];const u=async()=>{try{let t=`https://food-boutique.b.goit.study/api/products?page=${a.filters.page}&limit=${a.filters.limit}`;if(a.filters.keyword&&(t+=`&keyword=${a.filters.keyword}`),a.filters.category&&a.filters.category!=="Show all"&&(t+=`&category=${a.filters.category}`),a.filters.sort&&a.filters.sort!=="all")switch(a.filters.sort){case"alphabetical":t+="&byABC=true";break;case"reverse-alphabetical":t+="&byABC=false";break;case"cheap":t+="&byPrice=true";break;case"expensive":t+="&byPrice=false";break;case"popular":t+="&byPopularity=false";break;case"not-popular":t+="&byPopularity=true";break}const s=(await h.get(t)).data;a.filters.totalHits=s.totalPages,K(s.results),z(s.totalPages,a.filters.page)}catch(t){console.error("Error fetching products:",t)}},K=t=>{N.innerHTML=t.map(e=>B(e)).join("")},O=async()=>{try{E=[...(await h.get("https://food-boutique.b.goit.study/api/products/categories")).data,"Show all"],Y(E)}catch(t){console.error("Error fetching categories:",t)}},Y=t=>{const e=t.map(s=>{let r=s.replace(/_/g," ");return s==="Breads_&_Bakery"&&(r=r.replace(/&/g,"/")),`<li class="category-item" data-value="${s}">${r}</li>`}).join("");b.innerHTML=e},R=t=>{switch(t){case"alphabetical":l.textContent="A to Z";break;case"reverse-alphabetical":l.textContent="Z to A";break;case"cheap":l.textContent="Cheap";break;case"expensive":l.textContent="Expensive";break;case"popular":l.textContent="Popular";break;case"not-popular":l.textContent="Not popular";break;case"all":l.textContent="Show all";break}},P=()=>{$.classList.remove("show")};l.addEventListener("click",()=>{$.classList.toggle("show")});const W=t=>{I.textContent=t},F=t=>t?t.getAttribute("data-value"):null,q=()=>{b.classList.remove("show")};I.addEventListener("click",()=>{b.classList.toggle("show")});document.addEventListener("click",t=>{!t.target.matches("#sortProducts")&&!t.target.closest(".sortProducts-list")&&P()});document.addEventListener("click",t=>{!t.target.matches("#categorySelect")&&!t.target.closest(".category-list")&&q()});x.addEventListener("input",()=>{a.filters.keyword=x.value,a.filters.page=1,u()});D.addEventListener("submit",async t=>{t.preventDefault(),a.filters.keyword=x.value,a.filters.page=1,u()});b.addEventListener("click",t=>{if(t.target.classList.contains("category-item")){const e=F(t.target);a.filters.category=e,a.filters.page=1,u(),W(e),q()}});$.addEventListener("click",t=>{if(t.target.classList.contains("category-item")){const e=t.target.getAttribute("data-value");a.filters.sort=e,a.filters.page=1,u(),R(e),P()}});O();u();let J=5;const Z=document.querySelector(".popular-js");G();async function G(){try{const t=await h.get(`https://food-boutique.b.goit.study/api/products/popular?limit=${J}`);Z.insertAdjacentHTML("beforeend",U(t))}catch{console.log("Упс! Щось пішло не так.")}}function U(t){return t.data.map(({img:e,name:s,category:r,size:o,popularity:i,_id:c})=>{const n=r.replace("_"," ");return`<li class="popular_list_card" data-id="${c}">
        <svg class="popular_discount_icon visually-hidden" width="60" height="60">
          <use xlink:href="${p}#Discount"></use>
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
                Category: <span class="popular_details_text">${n}</span>
              </p>
            </li>
            <div class="popular_detail_wrap">
            <li class="popular_details_item">
              <p class="popular_details_category">
                Size: <span class="popular_details_text">${o}</span>
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
              <use xlink:href="${p}#shopping-cart"></use>
            </svg>
          </button>
        </div>
      </li>`}).join("")}const V={discountCardList:document.querySelector(".discount-card-list")};Q();async function Q(){try{const t=await X(),e=et(t);V.discountCardList.innerHTML=tt(e)}catch(t){console.log(t)}}async function X(){const t="https://food-boutique.b.goit.study/api",e="products/discount";try{const{data:s}=await h.get(`${t}/${e}`);return s}catch(s){console.log(s)}}function tt(t){return t.map(({name:e,img:s,price:r})=>`
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
                <use xlink:href="${p}#shopping-cart"></use>
              </svg>
            </button>
          </div>
        </div>
        <svg class="discount-label-icon" width="60" height="60">
          <use xlink:href="${p}#discount"></use>
        </svg>
      </li>`).join("")}function et(t){const e=[...t],s=Math.floor(Math.random()*e.length),r=e[s];e.splice(s,1);const o=Math.floor(Math.random()*e.length),i=e[o];return[r,i]}
//# sourceMappingURL=commonHelpers2.js.map
