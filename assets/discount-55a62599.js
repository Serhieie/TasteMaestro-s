import{a as g,A as w}from"./vendor-f728e3bf.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();const f=document.querySelector(".btn-up");f.addEventListener("click",()=>{window.scrollTo(0,0)});window.onscroll=()=>{window.scrollY>600?(f.classList.remove("visually-hidden"),f.classList.remove("btn-up-hidden")):window.scrollY<600&&f.classList.add("visually-hidden")};const A="https://food-boutique.b.goit.study/api",q=document.querySelector(".loader"),M=document.querySelector(".container-pagination"),B=document.querySelector(".forward"),I=document.querySelector(".back");let T={keyword:null,category:null,page:1,limit:4},F=!1;const s={BASE_URL:A,loader:q,paginationContainer:M,forward:B,back:I,filters:T,isFetching:F};async function j(t){return await g.post("https://food-boutique.b.goit.study/api/subscription",t)}const p="/TasteMaestro-s/assets/sprite-2fd3930f.svg";function O({_id:t,name:e,img:a,desc:i,category:o,price:r,size:c,popularity:l}){return`<li id="${t}" class="product__list__card">
        <svg class="sticker_icon visually-hidden" width="60" height="60">
          <use xlink:href="${p}#shopping-cart#discount"></use>
        </svg>
        <div class="product__image__wraper">
          <img
            class="product__image"
            src="${a}"
            alt="${i}"
            width="140px"
            height="140px"
          />
        </div>
        <div class="product__description__wraper">
          <h3 class="product__title">${e}</h3>
          <ul class="product__details">
            <li>
              <p class="product__description__text">
                Category:
                <span class="product__description__span">${o.replace(/_/g," ")}</span>
              </p>
            </li>
            <li>
              <p class="product__description__text">
                Size: <span class="product__description__span">${c}</span>
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
          <p class="product__price">${"$"+r}</p>
          <button class="product__order__btn">
            <svg class="card-icon-product" width="18" height="18">
              <use xlink:href="${p}#shopping-cart"></use>
            </svg>
          </button>
        </div>
      </li>`}let H=s.filters.totalHits;s.filters.page||(forward.setAttribute("disabled",!0),back.setAttribute("disabled",!0));s.paginationContainer.addEventListener("click",N);async function N(t){const e=parseInt(t.target.textContent);if(t.target.classList.contains("pagination-btn")){if(t.target.classList.contains("back")){if(s.filters.page===1)return;s.filters.page>0&&(s.filters.page-=1)}else if(t.target.classList.contains("forward")){if(s.filters.page===lastPage){s.forward.setAttribute("disabled",!0);return}else s.filters.page<lastPage&&s.forward.removeAttribute("disabled");s.filters.page+=1}console.log("adwda"),await u()}if(t.target.classList.contains("pagi_item_span")){if(t.target.textContent==="..."||e===s.filters.page)return;s.filters.page=e,await u(),D()}}function D(){return document.querySelectorAll(".pagi_item").forEach(e=>{e.classList.remove("isActive"),parseInt(e.textContent)===s.filters.page&&e.classList.add("isActive")}),s.filters.page<=1?s.back.setAttribute("disabled",!0):s.back.removeAttribute("disabled"),s.filters.page===H?s.forward.setAttribute("disabled",!0):s.forward.removeAttribute("disabled")}function W(t,e){const a=Math.ceil(t),i=document.querySelector(".pagination-list");if(i.innerHTML="",a>1){let o="",r=1,c=a;a>5&&(r=Math.max(1,e-2),c=Math.min(a,e+2),r===1?c=5:c===a&&(r=a-4)),r>=2&&(o+=y(1,e===1),o+=k());for(let l=r;l<=c;l+=1)o+=y(l,l===e);c<a&&(o+=k(),o+=y(a,a===e)),i.innerHTML=o}}function y(t,e){const a=e?"isActive":"",i=s.filters.page>=10?"py":"";return`<li class="pagi_item ${a} pagination-item"><span class="pagi_item_span ${i}">${t}</span></li>`}function k(){return'<li class="pagi_item pagination-item"><span class="pagi_item_span">...</span></li>'}const z=document.getElementById("filterForm"),b=document.getElementById("keywordInput"),S=document.getElementById("categorySelect"),m=document.querySelector(".category-list"),d=document.getElementById("sortProducts"),_=document.querySelector(".sortProducts-list"),Z=document.getElementById("productsList");let L=[];const u=async()=>{try{let t=`https://food-boutique.b.goit.study/api/products?page=${s.filters.page}&limit=${s.filters.limit}`;if(s.filters.keyword&&(t+=`&keyword=${s.filters.keyword}`),s.filters.category&&s.filters.category!=="Show all"&&(t+=`&category=${s.filters.category}`),s.filters.sort&&s.filters.sort!=="all")switch(s.filters.sort){case"alphabetical":t+="&byABC=true";break;case"reverse-alphabetical":t+="&byABC=false";break;case"cheap":t+="&byPrice=true";break;case"expensive":t+="&byPrice=false";break;case"popular":t+="&byPopularity=false";break;case"not-popular":t+="&byPopularity=true";break}console.log(t);const a=(await g.get(t)).data;s.filters.totalHits=a.totalPages,console.log(a.totalPages,s.filters.limit,s.filters.page),console.log(a),W(a.totalPages,s.filters.limit,s.filters.page),R(a.results)}catch(t){console.error("Error fetching products:",t)}},R=t=>{Z.innerHTML='<ul class="product__list">'+t.map(e=>O(e)).join("")+"</ul>"},U=async()=>{try{L=[...(await g.get("https://food-boutique.b.goit.study/api/products/categories")).data,"Show all"],Y(L)}catch(t){console.error("Error fetching categories:",t)}},Y=t=>{const e=t.map(a=>{let i=a.replace(/_/g," ");return a==="Breads_&_Bakery"&&(i=i.replace(/&/g,"/")),`<li class="category-item" data-value="${a}">${i}</li>`}).join("");m.innerHTML=e},K=t=>{switch(t){case"alphabetical":d.textContent="A to Z";break;case"reverse-alphabetical":d.textContent="Z to A";break;case"cheap":d.textContent="Cheap";break;case"expensive":d.textContent="Expensive";break;case"popular":d.textContent="Popular";break;case"not-popular":d.textContent="Not popular";break;case"all":d.textContent="Show all";break}},$=()=>{_.classList.remove("show")};d.addEventListener("click",()=>{_.classList.toggle("show")});const V=t=>{S.textContent=t},G=t=>t?t.getAttribute("data-value"):null,x=()=>{m.classList.remove("show")};S.addEventListener("click",()=>{m.classList.toggle("show")});document.addEventListener("click",t=>{!t.target.matches("#sortProducts")&&!t.target.closest(".sortProducts-list")&&$()});document.addEventListener("click",t=>{!t.target.matches("#categorySelect")&&!t.target.closest(".category-list")&&x()});b.addEventListener("input",()=>{s.filters.keyword=b.value,s.filters.page=1,u()});z.addEventListener("submit",async t=>{t.preventDefault(),s.filters.keyword=b.value,s.filters.page=1,u()});m.addEventListener("click",t=>{if(t.target.classList.contains("category-item")){const e=G(t.target);s.filters.category=e,s.filters.page=1,u(),V(e),x()}});_.addEventListener("click",t=>{if(t.target.classList.contains("category-item")){const e=t.target.getAttribute("data-value");s.filters.sort=e,s.filters.page=1,u(),K(e),$()}});U();u();const n={backdrop:document.querySelector(".js-backdrop"),modalFirstCase:document.querySelector(".js-modal-first-case"),modalSecondCase:document.querySelector(".js-modal-second-case"),closeBtn:document.querySelectorAll(".js-close")};function E(){n.backdrop.classList.add("visually-hidden"),n.modalFirstCase.classList.add("visually-hidden")}function v(t){t.preventDefault(),t.key==="Escape"&&(n.backdrop.classList.add("visually-hidden"),n.modalFirstCase.classList.add("visually-hidden"),document.removeEventListener("keydown",v))}function P(){n.backdrop.classList.add("visually-hidden"),n.modalFirstCase.classList.add("visually-hidden")}console.log(n.closeBtn);function J(){n.backdrop.classList.remove("visually-hidden"),n.modalFirstCase.classList.remove("visually-hidden"),n.closeBtn[0].addEventListener("click",E),document.addEventListener("keydown",v),n.backdrop.addEventListener("click",P)}function Q(){n.backdrop.classList.remove("visually-hidden"),n.modalSecondCase.classList.remove("visually-hidden"),n.closeBtn[1].addEventListener("click",E),document.addEventListener("keydown",v),n.backdrop.addEventListener("click",P)}const X=document.querySelector(".footer-form-js"),C=document.querySelector("#subscribe");X.addEventListener("submit",at);const h=document.querySelector(".loader-container"),tt=/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,et={labels:{warning:"Warning"},icons:{warning:'<i class="fas fa-exclamation-triangle"></i>'},colors:{warning:"#FFA500"},maxNotifications:1,durations:{global:2e3}},st={labels:{warning:"Warning"},icons:{warning:'<i class="fas fa-exclamation-triangle"></i>'},colors:{warning:"#FFA500"},maxNotifications:1,durations:{global:4e3}};function at(t){t.preventDefault();const e=t.currentTarget.subscribe.value.trim().toLowerCase();if(!e.match(tt)){C.style.borderColor="red",new w().warning("Please enter a correct email",et);return}C.style.borderColor="#e8e8e2";const a={email:e};h.classList.remove("visually-hidden"),j(a).then(i=>{i.status===201&&(h.classList.add("visually-hidden"),Q(),console.log("Thanks for subscribing for nnew products"))}).catch(i=>{i.response.status===409?(h.classList.add("visually-hidden"),J(),console.log("This email address has already been entered")):new w().warning("Oops! Something went wrong!Your email address is incorrect. Please try again",st)}),t.target.reset()}let ot=5;const it=document.querySelector(".popular-js");rt();async function rt(){try{const t=await g.get(`https://food-boutique.b.goit.study/api/products/popular?limit=${ot}`);it.insertAdjacentHTML("beforeend",nt(t))}catch{console.log("Упс! Щось пішло не так.")}}function nt(t){return t.data.map(({img:e,name:a,category:i,size:o,popularity:r,_id:c})=>{const l=i.replace("_"," ");return`<li class="popular_list_card" data-id="${c}">
        <svg class="popular_discount_icon visually-hidden" width="60" height="60">
          <use xlink:href="${p}#Discount"></use>
        </svg>
        <div class="popular_image_container">
          <img
            class="popular_image"
            src="${e}"
            alt="${a}"
            width="56"
            height="56"
          />
        </div>
        <div class="popular_description_container">
          <h4 class="popular_product_title">${a}</h4>
          <ul class="popular_details">
            <li class="popular_details_item">
              <p class="popular_details_category">
                Category: <span class="popular_details_text">${l}</span>
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
                Popularity: <span class="popular_details_text">${r}</span>
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
      </li>`}).join("")}const ct={discountCardList:document.querySelector(".discount-card-list")};lt();async function lt(){try{const t=await dt(),e=pt(t);ct.discountCardList.innerHTML=ut(e)}catch(t){console.log(t)}}async function dt(){const t="https://food-boutique.b.goit.study/api",e="products/discount";try{const{data:a}=await g.get(`${t}/${e}`);return a}catch(a){console.log(a)}}function ut(t){return t.map(({name:e,img:a,price:i})=>`
  <li class="discount-card">
        <div class="img-field">
          <img
            class="discount-product-img"
            src="${a}"
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
                <use xlink:href="${p}#shopping-cart"></use>
              </svg>
            </button>
          </div>
        </div>
        <svg class="discount-label-icon" width="60" height="60">
          <use xlink:href="${p}#discount"></use>
        </svg>
      </li>`).join("")}function pt(t){const e=[...t],a=Math.floor(Math.random()*e.length),i=e[a];e.splice(a,1);const o=Math.floor(Math.random()*e.length),r=e[o];return[i,r]}
//# sourceMappingURL=discount-55a62599.js.map
