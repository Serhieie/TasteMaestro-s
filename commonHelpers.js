import{s as i,a as k,c as A,h,b as O}from"./assets/sprite-1f485dfc.js";import{A as y}from"./assets/vendor-f728e3bf.js";const f="cartItems";document.querySelector(".js-cart");const v=document.querySelector(".header__js_span"),C=e=>{try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}};function F(){C(f)?v.textContent=`CART (${C(f).length})`:v.textContent=`CART (${0})`}window.addEventListener("load",F);const n=document.querySelector(".cart-order-list"),_=document.querySelector(".cart-filled-list"),N=document.querySelector(".cart-empty"),T=document.querySelector(".cart-clear-btn"),b=document.querySelector(".cart-count"),z=document.querySelector(".cart_total_order"),S=document.querySelector(".header__js_span"),M=document.getElementById("cart_total");let a=JSON.parse(localStorage.getItem("cartItems"))||[];function l(){localStorage.setItem("cartItems",JSON.stringify(a))}document.addEventListener("DOMContentLoaded",()=>{u(),o(),d(),n.addEventListener("click",P),T.addEventListener("click",$)});function d(){a.length?(b.textContent=`Cart (${a.length})`,S.textContent=`Cart (${a.length})`):(S.textContent=`Cart (${0})`,b.textContent=`Cart (${0})`)}function J(e){return e.map(t=>`
  <li class="cart-order-item">
    <div class="cart-item-content">
      <div class="cart-order-img-cont">
        <img
          class="cart-order-img"
          src="${t.img}"
          alt="${t.imgDsc}"
           aria-label="product"
        />
      </div>
      <div class="cart-order-desc">
        <div class="cart-order-title-btn">
          <h3 class="cart-order-title">${t.title}</h3>
          <button class="cart-remove-btn" type="button"  aria-label="remove-product">
            <span class="cart-remove-span">
              <svg class="cart-remove-icon" width="18" height="18">
                <use
                  class="cart-remove-svg"
                  xlink:href="${i}#close-cross"
                ></use>
              </svg>
            </span>
          </button>
        </div>
        <p class="cart-order-text">
          <span class="cart-order-span">Category:</span>${t.category}
          <span class="cart-order-span cart-gap">Size:</span>
          ${t.size}
        </p>
        <div class="cart-order-total-price">
          <span class="cart-order-price">$${(parseFloat(t.price.replace("$",""))*t.quantity).toFixed(2)}</span>
          <div class="cart-order-amount">
            <button class="cart-order-decr" type="button" aria-label="decrement"><svg class="minus-icon" width="18" height="18" aria-label="minus">
                <use
                  class="cart-remove-svg"
                  xlink:href="${i}#minus"
                  
                ></use>
              </svg></button>
            <span class="cart-order-quantity">${t.quantity}</span>
            <button class="cart-order-incr" type="button" aria-label="increment"><svg class="plus-icon" width="18" height="18" aria-label="plus">
                <use
                  class="cart-remove-svg"
                  xlink:href="${i}#plus"
                ></use>
              </svg></button>
          </div>
        </div>
      </div>
    </div>
  </li>
  `).join("")}function u(){a.length?n.innerHTML=J(a):(N.classList.remove("visually-hidden"),z.classList.add("visually-hidden"),_.classList.add("visually-hidden"))}function j(e){const t=e.closest(".cart-order-item"),r=Array.from(n.children).indexOf(t);a[r].quantity>1&&(a[r].quantity-=1,L(t,a[r]))}function D(e){const t=e.closest(".cart-order-item"),r=Array.from(n.children).indexOf(t);a[r].quantity+=1,L(t,a[r])}function x(e){const t=e.target.closest(".cart-order-item");if(t){const r=Array.from(n.children).indexOf(t);a.splice(r,1)[0],l(),t.remove(),o(),u(),d()}}n.addEventListener("click",e=>{e.target.closest(".cart-remove-btn")&&x(e)});function $(){a=[],n.innerHTML="",o(),l(),u(),d()}function P(e){const t=e.target;t.closest(".cart-order-decr")?j(t):t.closest(".cart-order-incr")?D(t):t.classList.contains("cart-remove-btn")&&x(t)}function L(e,t){const r=e.querySelector(".cart-order-price"),m=e.querySelector(".cart-order-quantity"),s=parseFloat(t.price.replace("$",""));r.textContent=`$${(s*t.quantity).toFixed(2)}`,m.textContent=t.quantity,o(),l()}function o(){const e=a.reduce((t,r)=>t+parseFloat(r.price.replace("$",""))*r.quantity,0);M.textContent=`$${Number(e.toFixed(2))}`}const q=document.getElementById("checkoutForm");document.querySelector(".loader");const R=document.querySelector(".modal-cart-img");q.addEventListener("submit",function(e){e.preventDefault();const t=document.querySelector(".cart-basket-input"),r=e.currentTarget.cartsubmit.value.trim().toLowerCase();if(!t.checkValidity()){alert("Будь ласка, введіть дійсну електронну адресу.");return}const s=/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;if(!r.match(s)){t.style.borderColor="red",new y().warning("Please enter a correct email",g);return}const g={labels:{warning:"Warning"},icons:{warning:'<i class="fas fa-exclamation-triangle"></i>'},colors:{warning:"#FFA500"},maxNotifications:1,durations:{global:2e3}};t.style.borderColor="#e8e8e2",k();const p=localStorage.getItem("cartItems"),I=JSON.parse(p);R.setAttribute("src",I[0].img);const w=JSON.parse(p).map(({id:c,quantity:E,img:V})=>({productId:c,amount:E}));A({email:r,products:w}).then(c=>{c.status===201&&(h(),$(),O(),q.reset())}).catch(c=>{h(),new y().warning("Something went wrong",g)})});
//# sourceMappingURL=commonHelpers.js.map
