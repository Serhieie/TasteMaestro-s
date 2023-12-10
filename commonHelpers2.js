import{s as b,C as a}from"./assets/sprite-222330c4.js";import{a as L}from"./assets/vendor-f728e3bf.js";const v="cartItems",R=document.querySelector("main");R.addEventListener("click",W);function W(t){const e=t.target.closest(".add-to-cart"),s=t.target.closest(".product_item");if(!s||s.nodeName!=="LI")return;if(e===null){console.log("modal");return}const i=s.dataset.id,o=s.querySelector("#product__image").src,r=s.querySelector("#product__image").alt,n=s.querySelector("#product__title").textContent,c=s.querySelector("#product_category_name").textContent,l=s.querySelector("#product_size").textContent,p=s.querySelector("#product__price").textContent,d=s.querySelector(".card-icon-check"),g=s.querySelector(".card-icon-cart");if(!localStorage.getItem(v))M(v,[{id:i,img:o,imgDsc:r,title:n,category:c,price:p,size:l,quantity:1}]),g.style.display="none",d.style.display="block",w();else{const y=m(v),k=y.findIndex(x=>x.id===s.dataset.id);k!==-1?(y.splice(k,1),g.style.display="block",d.style.display="none"):(y.push({id:i,img:o,imgDsc:r,title:n,category:c,price:p,size:l,quantity:1}),g.style.display="none",d.style.display="block",console.log("ф-ція зміни картинки додати")),M(v,y),w()}}const M=(t,e)=>{try{const s=JSON.stringify(e);localStorage.setItem(t,s)}catch(s){console.error("Set state error: ",s.message)}},m=t=>{try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}};function w(){const t=document.querySelector(".header__js_span");m(v)?t.textContent=`CART (${m(v).length})`:t.textContent=`CART (${0})`}window.addEventListener("load",w);function z({_id:t,name:e,img:s,desc:i,category:o,price:r,size:n,popularity:c,is10PercentOff:l}){let p=[],d=-1;return m("cartItems")&&(p=m("cartItems"),d=p.findIndex(g=>g.id===t)),`<li data-id="${t}" class="product__list__card product_item">
        <svg class="sticker_icon ${l?"":"visually-hidden"}" width="60" height="60">
          <use xlink:href="${b}#discount"></use>
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
          <p id="product__price" class="product__price">${"$"+r}</p>
          <button data-id="${t}" class="product__order__btn add-to-cart">
            <svg class="card-icon-cart" ${d===-1?"style = 'display:block'":"style = 'display:none'"}  width="18" height="18">
              <use xlink:href="${b}#shopping-cart"></use>
            </svg>
            <svg class="card-icon-check" ${d===-1?"style = 'display:none'":"style = 'display:block'"}  width="18" height="18">
              <use xlink:href="${b}#check"></use>
            </svg>
          </button>
        </div>
      </li>`}let S=a.filters.totalHits;a.paginationContainer.addEventListener("click",F);async function F(t){const e=parseInt(t.target.textContent);if(t.target.closest(".pagination-btn")){if(t.target.classList.contains("back")){if(a.filters.page===1)return;a.filters.page>0&&(a.filters.page-=1)}else if(t.target.classList.contains("forward")){if(a.filters.page===S){a.forward.setAttribute("disabled",!0);return}else a.filters.page<S&&a.forward.removeAttribute("disabled");a.filters.page+=1}h()}if(t.target.classList.contains("pagi_item_span")){if(t.target.textContent==="..."||e===a.filters.page)return;a.filters.page=e,h(),J()}}function J(){return document.querySelectorAll(".pagi_item").forEach(e=>{e.classList.remove("isActive"),parseInt(e.textContent)===a.filters.page&&e.classList.add("isActive")}),a.filters.page<=1?a.back.setAttribute("disabled",!0):a.back.removeAttribute("disabled"),a.filters.page===S?a.forward.setAttribute("disabled",!0):a.forward.removeAttribute("disabled")}function $(t,e){const s=e?"is-active":"",i=a.filters.page>=10?"py":"";return`<li class="pagi_item ${s} pagination_item"><span class="pagi_item_span ${i}">${t}</span></li>`}function T(){return'<li class="pagi_item pagination_item"><span class="pagi_item_span">...</span></li>'}function U(t,e){const s=Math.ceil(t);let i;window.innerWidth<768?i=1:i=2;const o=document.querySelector(".pagination-list");if(o.innerHTML="",s>1){let r="",n=1,c=s;s>5&&(n=Math.max(1,e-i),c=Math.min(s,e+i),n===1?window.innerWidth<768?c=3:c=5:c===s&&(n=s-4)),n>=2&&(r+=$(1,e===1),r+=T());for(let l=n;l<=c;l+=1)r+=$(l,l===e);c<s&&(r+=T(),r+=$(s,s===e)),o.innerHTML=r}}function Z(t){t.length<a.filters.limit?a.paginationContainer.classList.add("visually-hidden"):a.paginationContainer.classList.remove("visually-hidden")}const G=document.getElementById("filterForm"),I=document.getElementById("keywordInput"),D=document.getElementById("categorySelect"),C=document.querySelector(".category-list"),f=document.getElementById("sortProducts"),P=document.querySelector(".sortProducts-list");document.getElementById("productsList");const A=document.querySelector(".product__list");let B=[];const h=async()=>{try{let t=`https://food-boutique.b.goit.study/api/products?page=${a.filters.page}&limit=${a.filters.limit}`;if(a.filters.keyword&&(t+=`&keyword=${a.filters.keyword}`),a.filters.category&&a.filters.category!=="Show all"&&(t+=`&category=${a.filters.category}`),a.filters.sort&&a.filters.sort!=="all")switch(a.filters.sort){case"alphabetical":t+="&byABC=true";break;case"reverse-alphabetical":t+="&byABC=false";break;case"cheap":t+="&byPrice=true";break;case"expensive":t+="&byPrice=false";break;case"popular":t+="&byPopularity=false";break;case"not-popular":t+="&byPopularity=true";break}const s=(await L.get(t)).data;a.filters.totalHits=s.totalPages,K(s.results),Z(s.results),U(s.totalPages,a.filters.page)}catch(t){console.error("Error fetching products:",t)}},K=t=>{t.length===0?A.innerHTML='<div style="display: inline-flex; flex-direction: column; align-items: center; gap: 14px; width: 371px; height: 110px; margin: 0 auto;"><p style="color: #010101; display: inline-flex; justify-content: center; text-align: center; font-size: 20px;">Nothing was found for the selected <span style="color: #6D8434; padding-left: 4px;"> filters...</span></p><p style="color: rgba(1, 1, 1, 0.70); display: inline-flex; text-align: center; justify-content: center; font-size: 18px;">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p></div>':A.innerHTML=t.map(e=>z(e)).join("")},V=async()=>{try{B=[...(await L.get("https://food-boutique.b.goit.study/api/products/categories")).data,"Show all"],Y(B)}catch(t){console.error("Error fetching categories:",t)}},Y=t=>{const e=t.map(s=>{let i=s.replace(/_/g," ");return s==="Breads_&_Bakery"&&(i=i.replace(/&/g,"/")),`<li class="category-item" data-value="${s}">${i}</li>`}).join("");C.innerHTML=e},Q=t=>{switch(t){case"alphabetical":f.textContent="A to Z";break;case"reverse-alphabetical":f.textContent="Z to A";break;case"cheap":f.textContent="Cheap";break;case"expensive":f.textContent="Expensive";break;case"popular":f.textContent="Popular";break;case"not-popular":f.textContent="Not popular";break;case"all":f.textContent="Show all";break}},N=()=>{P.classList.remove("show")};f.addEventListener("click",()=>{P.classList.toggle("show")});const X=t=>{D.textContent=t},tt=t=>t?t.getAttribute("data-value"):null,O=()=>{C.classList.remove("show")};D.addEventListener("click",()=>{C.classList.toggle("show")});document.addEventListener("click",t=>{!t.target.matches("#sortProducts")&&!t.target.closest(".sortProducts-list")&&N()});document.addEventListener("click",t=>{!t.target.matches("#categorySelect")&&!t.target.closest(".category-list")&&O()});I.addEventListener("input",()=>{a.filters.keyword=I.value,a.filters.page=1,h()});G.addEventListener("submit",async t=>{t.preventDefault(),a.filters.keyword=I.value,a.filters.page=1,h()});C.addEventListener("click",t=>{if(t.target.classList.contains("category-item")){const e=tt(t.target);a.filters.category=e,a.filters.page=1,h(),X(e),O()}});P.addEventListener("click",t=>{if(t.target.classList.contains("category-item")){const e=t.target.getAttribute("data-value");a.filters.sort=e,a.filters.page=1,h(),Q(e),N()}});V();h();let et=5;const st=document.querySelector(".popular-js");at();async function at(){try{const t=await L.get(`https://food-boutique.b.goit.study/api/products/popular?limit=${et}`);st.insertAdjacentHTML("beforeend",it(t))}catch{console.log("Упс! Щось пішло не так.")}}function it(t){return t.data.map(e=>z(e)).join("")}const rt={discountCardList:document.querySelector(".discount-card-list")};ot();async function ot(){try{const t=await ct(),e=nt(t);rt.discountCardList.innerHTML=lt(e)}catch(t){console.log(t)}}async function ct(){const t="https://food-boutique.b.goit.study/api",e="products/discount";try{const{data:s}=await L.get(`${t}/${e}`);return s}catch(s){console.log(s)}}function nt(t){const e=[...t],s=Math.floor(Math.random()*e.length),i=e[s];e.splice(s,1);const o=Math.floor(Math.random()*e.length),r=e[o];return[i,r]}function lt(t){let e=[],s=-1;return m("cartItems")&&(e=m("cartItems"),s=e.findIndex(i=>i.id===_id),console.log(s)),t.map(({_id:i,name:o,img:r,imgDsc:n,category:c,price:l,size:p,popularity:d,is10PercentOff:g})=>`
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
               $<span class="js-discount-product-price">${l}</span>
             </p>
             <button data-id="${i}" class="discount-cart-btn add-to-cart" type="button">
                <svg class="card-icon-cart discount-cart-icon" ${s===-1?"style = 'display:block'":"style = 'display:none'"}  width="18" height="18">
                      <use xlink:href="${b}#shopping-cart"></use>
                  </svg>
                  <svg class="card-icon-check discount-check-icon" ${s===-1?"style = 'display:none'":"style = 'display:block'"}  width="18" height="18">
                      <use xlink:href="${b}#check"></use>
                  </svg>
             </button>
           </div>
         </div>
         <svg class="discount-label-icon" width="60" height="60">
           <use xlink:href="${b}#discount"></use>
         </svg>
         <span id="product_category_name" class="visually-hidden">${c}</span>
         <span id="product_size" class="visually-hidden">${p}</span>

       </li>`).join("")}const dt=document.querySelector("#productsList"),u=document.querySelector(".js-modal-product-card"),_=document.querySelector(".js-backdrop"),H=document.querySelector(".loader-container"),j=document.querySelector(".add-to-cart");dt.addEventListener("click",ut);async function ut(t){if(t.target===t.currentTarget)return;const e=t.target.closest(".product__list__card");if(e===null)return;const s=e.dataset.id;if(H.classList.remove("visually-hidden"),e===j){console.log(j);return}const i=await pt(s),{category:o,desc:r,img:n,name:c,popularity:l,price:p,size:d}=i;u.innerHTML="";const g=gt(o,r,n,c,l,p,d);u.innerHTML=g,H.classList.add("visually-hidden"),u.classList.remove("visually-hidden");const y=document.querySelector(".js-btn-close-card");y.addEventListener("click",k),_.addEventListener("click",x),document.addEventListener("keydown",E);function k(){_.classList.add("visually-hidden"),u.classList.add("visually-hidden"),u.innerHTML="",y.removeEventListener("click",k)}function x(){_.classList.add("visually-hidden"),u.classList.add("visually-hidden"),u.innerHTML="",_.removeEventListener("click",x)}function E(q){q.preventDefault(),q.key==="Escape"&&(_.classList.add("visually-hidden"),u.classList.add("visually-hidden"),u.innerHTML="",document.removeEventListener("keydown",E))}}async function pt(t){try{u.classList.remove("visually-hidden"),_.classList.remove("visually-hidden");const e="https://food-boutique.b.goit.study/api",s="products",{data:i}=await L.get(`${e}/${s}/${t}`);return i}catch(e){console.error(e)}}function gt(t,e,s,i,o,r,n){return`<div class="product-container">
    <div class="product-image-box">
        <img class="product-image" src="${s!==null?s:"./img/image-placeholder.png"}" alt="${i}">
    </div>
    <div class="product-descr">
        <h4 class="product-title">${i}</h4>
        <ul class="product-details-list">
            <li class="product-details-text"><span class="span-details-text">Category: </span>${t}</li>
            <li class="product-details-text"><span class="span-details-text">Size: </span>${n}</li>
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
