import{a as h,A as P}from"./vendor-f728e3bf.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();const b=document.querySelector(".btn-up");b.addEventListener("click",()=>{window.scrollTo(0,0)});window.onscroll=()=>{window.scrollY>600?(b.classList.remove("visually-hidden"),b.classList.remove("btn-up-hidden")):window.scrollY<600&&b.classList.add("visually-hidden")};const H="https://food-boutique.b.goit.study/api",D=document.querySelector(".loader"),W=document.querySelector(".container-pagination"),R=document.querySelector(".forward"),Z=document.querySelector(".back");let Y={keyword:null,category:null,page:1,limit:4},U=!1;const o={BASE_URL:H,loader:D,paginationContainer:W,forward:R,back:Z,filters:Y,isFetching:U};async function J(t){return await h.post("https://food-boutique.b.goit.study/api/subscription",t)}const u="/TasteMaestro-s/assets/sprite-2fd3930f.svg";console.log("asd");const f="cartItems",K=document.querySelector("main");K.addEventListener("click",G);function G(t){const e=t.target.closest(".add-to-cart"),s=t.target.closest(".product_item");if(!s||s.nodeName!=="LI")return;if(e===null){console.log("modal");return}const i=s.dataset.id,a=s.querySelector("#product__image").src,r=s.querySelector("#product__image").alt,n=s.querySelector("#product__title").textContent,l=s.querySelector("#product_category_name").textContent,_=s.querySelector("#product_size").textContent,w=s.querySelector("#product__price").textContent,g=s.querySelector(".card-icon-check"),y=s.querySelector(".card-icon-cart");if(!localStorage.getItem(f))A(f,[{id:i,img:a,imgDsc:r,title:n,category:l,price:w,size:_,quantity:1}]),console.log("ф-ція зміни картинки додати"),y.style.display="none",g.style.display="block",x();else{const m=v(f),L=m.findIndex(z=>z.id===s.dataset.id);console.log(L),L!==-1?(m.splice(L,1),console.log("ф-ція зміни картинки прибрати"),y.style.display="block",g.style.display="none"):(m.push({id:i,img:a,imgDsc:r,title:n,category:l,price:w,size:_,quantity:1}),y.style.display="none",g.style.display="block",console.log("ф-ція зміни картинки додати")),A(f,m),x()}}const A=(t,e)=>{try{const s=JSON.stringify(e);localStorage.setItem(t,s)}catch(s){console.error("Set state error: ",s.message)}},v=t=>{try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}};function x(){const t=document.querySelector(".header__js_span");v(f)?t.textContent=`CART (${v(f).length})`:t.textContent=`CART (${0})`}window.addEventListener("load",x);function V({_id:t,name:e,img:s,desc:i,category:a,price:r,size:n,popularity:l,is10PercentOff:_}){const g=v("cartItems").findIndex(y=>y.id===t);return`<li data-id="${t}" class="product__list__card product_item">
        <svg class="sticker_icon ${_?"":"visually-hidden"}" width="60" height="60">
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
                <span id="product_category_name" class="product__description__span"}>${a.replace(/_/g," ")}</span>
              </p>
            </li>
            <li>
              <p class="product__description__text">
                Size: <span id="product_size" class="product__description__span">${n}</span>
              </p>
            </li>
            <li>
              <p class="product__description__text">
                Popularity: <span class="product__description__span">${l}</span>
              </p>
            </li>
          </ul>
        </div>
        <div class="product__order__wraper">
          <p id="product__price" class="product__price">${"$"+r}</p>
          <button data-id="${t}" class="product__order__btn add-to-cart">
            <svg class="card-icon-cart" ${g===-1?"style = 'display:block'":"style = 'display:none'"}  width="18" height="18">
              <use xlink:href="${u}#shopping-cart"></use>
            </svg>
            <svg class="card-icon-check" ${g===-1?"style = 'display:none'":"style = 'display:block'"}  width="18" height="18">
              <use xlink:href="${u}#check"></use>
            </svg>
          </button>
        </div>
      </li>`}let Q=o.filters.totalHits;o.filters.page||(forward.setAttribute("disabled",!0),back.setAttribute("disabled",!0));o.paginationContainer.addEventListener("click",X);async function X(t){const e=parseInt(t.target.textContent);if(t.target.classList.contains("pagination-btn")){if(t.target.classList.contains("back")){if(o.filters.page===1)return;o.filters.page>0&&(o.filters.page-=1)}else if(t.target.classList.contains("forward")){if(o.filters.page===lastPage){o.forward.setAttribute("disabled",!0);return}else o.filters.page<lastPage&&o.forward.removeAttribute("disabled");o.filters.page+=1}console.log("adwda"),await p()}if(t.target.classList.contains("pagi_item_span")){if(t.target.textContent==="..."||e===o.filters.page)return;o.filters.page=e,await p(),tt()}}function tt(){return document.querySelectorAll(".pagi_item").forEach(e=>{e.classList.remove("isActive"),parseInt(e.textContent)===o.filters.page&&e.classList.add("isActive")}),o.filters.page<=1?o.back.setAttribute("disabled",!0):o.back.removeAttribute("disabled"),o.filters.page===Q?o.forward.setAttribute("disabled",!0):o.forward.removeAttribute("disabled")}function et(t,e){const s=Math.ceil(t),i=document.querySelector(".pagination-list");if(i.innerHTML="",s>1){let a="",r=1,n=s;s>5&&(r=Math.max(1,e-2),n=Math.min(s,e+2),r===1?n=5:n===s&&(r=s-4)),r>=2&&(a+=C(1,e===1),a+=I());for(let l=r;l<=n;l+=1)a+=C(l,l===e);n<s&&(a+=I(),a+=C(s,s===e)),i.innerHTML=a}}function C(t,e){const s=e?"isActive":"",i=o.filters.page>=10?"py":"";return`<li class="pagi_item ${s} pagination-item"><span class="pagi_item_span ${i}">${t}</span></li>`}function I(){return'<li class="pagi_item pagination-item"><span class="pagi_item_span">...</span></li>'}const st=document.getElementById("filterForm"),$=document.getElementById("keywordInput"),T=document.getElementById("categorySelect"),k=document.querySelector(".category-list"),d=document.getElementById("sortProducts"),E=document.querySelector(".sortProducts-list"),ot=document.getElementById("productsList");let M=[];const p=async()=>{try{let t=`https://food-boutique.b.goit.study/api/products?page=${o.filters.page}&limit=${o.filters.limit}`;if(o.filters.keyword&&(t+=`&keyword=${o.filters.keyword}`),o.filters.category&&o.filters.category!=="Show all"&&(t+=`&category=${o.filters.category}`),o.filters.sort&&o.filters.sort!=="all")switch(o.filters.sort){case"alphabetical":t+="&byABC=true";break;case"reverse-alphabetical":t+="&byABC=false";break;case"cheap":t+="&byPrice=true";break;case"expensive":t+="&byPrice=false";break;case"popular":t+="&byPopularity=false";break;case"not-popular":t+="&byPopularity=true";break}console.log(t);const s=(await h.get(t)).data;o.filters.totalHits=s.totalPages,console.log(s.totalPages,o.filters.limit,o.filters.page),console.log(s),et(s.totalPages,o.filters.limit,o.filters.page),at(s.results)}catch(t){console.error("Error fetching products:",t)}},at=t=>{ot.innerHTML='<ul class="product__list">'+t.map(e=>V(e)).join("")+"</ul>"},rt=async()=>{try{M=[...(await h.get("https://food-boutique.b.goit.study/api/products/categories")).data,"Show all"],it(M)}catch(t){console.error("Error fetching categories:",t)}},it=t=>{const e=t.map(s=>{let i=s.replace(/_/g," ");return s==="Breads_&_Bakery"&&(i=i.replace(/&/g,"/")),`<li class="category-item" data-value="${s}">${i}</li>`}).join("");k.innerHTML=e},nt=t=>{switch(t){case"alphabetical":d.textContent="A to Z";break;case"reverse-alphabetical":d.textContent="Z to A";break;case"cheap":d.textContent="Cheap";break;case"expensive":d.textContent="Expensive";break;case"popular":d.textContent="Popular";break;case"not-popular":d.textContent="Not popular";break;case"all":d.textContent="Show all";break}},F=()=>{E.classList.remove("show")};d.addEventListener("click",()=>{E.classList.toggle("show")});const ct=t=>{T.textContent=t},lt=t=>t?t.getAttribute("data-value"):null,j=()=>{k.classList.remove("show")};T.addEventListener("click",()=>{k.classList.toggle("show")});document.addEventListener("click",t=>{!t.target.matches("#sortProducts")&&!t.target.closest(".sortProducts-list")&&F()});document.addEventListener("click",t=>{!t.target.matches("#categorySelect")&&!t.target.closest(".category-list")&&j()});$.addEventListener("input",()=>{o.filters.keyword=$.value,o.filters.page=1,p()});st.addEventListener("submit",async t=>{t.preventDefault(),o.filters.keyword=$.value,o.filters.page=1,p()});k.addEventListener("click",t=>{if(t.target.classList.contains("category-item")){const e=lt(t.target);o.filters.category=e,o.filters.page=1,p(),ct(e),j()}});E.addEventListener("click",t=>{if(t.target.classList.contains("category-item")){const e=t.target.getAttribute("data-value");o.filters.sort=e,o.filters.page=1,p(),nt(e),F()}});rt();p();const c={backdrop:document.querySelector(".js-backdrop"),modalFirstCase:document.querySelector(".js-modal-first-case"),modalSecondCase:document.querySelector(".js-modal-second-case"),closeBtn:document.querySelectorAll(".js-close")};function N(){c.backdrop.classList.add("visually-hidden"),c.modalFirstCase.classList.add("visually-hidden")}function q(t){t.preventDefault(),t.key==="Escape"&&(c.backdrop.classList.add("visually-hidden"),c.modalFirstCase.classList.add("visually-hidden"),document.removeEventListener("keydown",q))}function O(){c.backdrop.classList.add("visually-hidden"),c.modalFirstCase.classList.add("visually-hidden")}console.log(c.closeBtn);function dt(){c.backdrop.classList.remove("visually-hidden"),c.modalFirstCase.classList.remove("visually-hidden"),c.closeBtn[0].addEventListener("click",N),document.addEventListener("keydown",q),c.backdrop.addEventListener("click",O)}function ut(){c.backdrop.classList.remove("visually-hidden"),c.modalSecondCase.classList.remove("visually-hidden"),c.closeBtn[1].addEventListener("click",N),document.addEventListener("keydown",q),c.backdrop.addEventListener("click",O)}const pt=document.querySelector(".footer-form-js"),B=document.querySelector("#subscribe");pt.addEventListener("submit",mt);const S=document.querySelector(".loader-container"),gt=/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,ft={labels:{warning:"Warning"},icons:{warning:'<i class="fas fa-exclamation-triangle"></i>'},colors:{warning:"#FFA500"},maxNotifications:1,durations:{global:2e3}},yt={labels:{warning:"Warning"},icons:{warning:'<i class="fas fa-exclamation-triangle"></i>'},colors:{warning:"#FFA500"},maxNotifications:1,durations:{global:4e3}};function mt(t){t.preventDefault();const e=t.currentTarget.subscribe.value.trim().toLowerCase();if(!e.match(gt)){B.style.borderColor="red",new P().warning("Please enter a correct email",ft);return}B.style.borderColor="#e8e8e2";const s={email:e};S.classList.remove("visually-hidden"),J(s).then(i=>{i.status===201&&(S.classList.add("visually-hidden"),ut(),console.log("Thanks for subscribing for nnew products"))}).catch(i=>{i.response.status===409?(S.classList.add("visually-hidden"),dt(),console.log("This email address has already been entered")):new P().warning("Oops! Something went wrong!Your email address is incorrect. Please try again",yt)}),t.target.reset()}let ht=5;const _t=document.querySelector(".popular-js");bt();async function bt(){try{const t=await h.get(`https://food-boutique.b.goit.study/api/products/popular?limit=${ht}`);_t.insertAdjacentHTML("beforeend",vt(t))}catch{console.log("Упс! Щось пішло не так.")}}function vt(t){return t.data.map(({img:e,name:s,category:i,size:a,popularity:r,_id:n})=>{const l=i.replace("_"," ");return`<li class="popular_list_card" data-id="${n}">
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
                Category: <span class="popular_details_text">${l}</span>
              </p>
            </li>
            <div class="popular_detail_wrap">
            <li class="popular_details_item">
              <p class="popular_details_category">
                Size: <span class="popular_details_text">${a}</span>
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
              <use xlink:href="${u}#shopping-cart"></use>
            </svg>
          </button>
        </div>
      </li>`}).join("")}const kt={discountCardList:document.querySelector(".discount-card-list")};wt();async function wt(){try{const t=await Lt(),e=St(t);kt.discountCardList.innerHTML=Ct(e)}catch(t){console.log(t)}}async function Lt(){const t="https://food-boutique.b.goit.study/api",e="products/discount";try{const{data:s}=await h.get(`${t}/${e}`);return s}catch(s){console.log(s)}}function Ct(t){return t.map(({name:e,img:s,price:i})=>`
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
                <use xlink:href="${u}#shopping-cart"></use>
              </svg>
            </button>
          </div>
        </div>
        <svg class="discount-label-icon" width="60" height="60">
          <use xlink:href="${u}#discount"></use>
        </svg>
      </li>`).join("")}function St(t){const e=[...t],s=Math.floor(Math.random()*e.length),i=e[s];e.splice(s,1);const a=Math.floor(Math.random()*e.length),r=e[a];return[i,r]}
//# sourceMappingURL=discount-6bdeb7ae.js.map
