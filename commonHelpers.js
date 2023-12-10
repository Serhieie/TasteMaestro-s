import"./assets/footer-f9b4350d.js";import"./assets/vendor-f728e3bf.js";const l="cartItems";document.querySelector(".js-cart");const d=e=>{try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}};function v(){const e=document.querySelector(".header__js_span");d(l)?e.textContent=`CART (${d(l).length})`:e.textContent=`CART (${0})`}window.addEventListener("load",v);const n=document.querySelector(".cart-order-list"),f=document.querySelector(".cart-filled-list"),h=document.querySelector(".cart-empty"),C=document.querySelector(".cart-clear-btn"),u=document.querySelector(".cart-count"),S=document.querySelector(".cart_total_order");let c=JSON.parse(localStorage.getItem("cartItems"))||[];function q(e){const t=e.target;t.classList.contains("cart-order-decr")?x(t):t.classList.contains("cart-order-incr")?$(t):t.classList.contains("cart-remove-btn")&&m(t)}function L(e){return e.map(t=>`
  <li class="cart-order-item">
    <div class="cart-item-content">
      <div class="cart-order-img-cont">
        <img
          class="cart-order-img"
          src="${t.img}"
          alt="${t.imgDsc}"
        />
      </div>
      <div class="cart-order-desc">
        <div class="cart-order-title-btn">
          <h3 class="cart-order-title">${t.title}</h3>
          <button class="cart-remove-btn" type="button">
            <span class="cart-remove-span">
              <svg class="cart-remove-icon" width="18" height="18">
                <use
                  class="cart-remove-svg"
                  xlink:href="./img/sprite.svg#close-cross"
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
            <button class="cart-order-decr" type="button">-</button>
            <span class="cart-order-quantity">${t.quantity}</span>
            <button class="cart-order-incr" type="button">+</button>
          </div>
        </div>
      </div>
    </div>
  </li>
  `).join("")}function o(){c.length?n.innerHTML=L(c):(h.classList.remove("visually-hidden"),S.classList.add("visually-hidden"),f.classList.add("visually-hidden"))}function x(e){const t=e.closest(".cart-order-item"),r=Array.from(n.children).indexOf(t);c[r].quantity>1&&(c[r].quantity-=1,p(t,c[r]))}function $(e){const t=e.closest(".cart-order-item"),r=Array.from(n.children).indexOf(t);c[r].quantity+=1,p(t,c[r])}function m(e){const t=e.target.closest(".cart-order-item");if(t){const r=Array.from(n.children).indexOf(t);c.splice(r,1)[0],s(),t.remove(),a(),o(),i()}}n.addEventListener("click",e=>{e.target.closest(".cart-remove-btn")&&m(e)});const b=document.querySelector(".header__js_span");function I(){c=[],n.innerHTML="",a(),s(),o(),i(),b.textContent=`CART (${0})`}function p(e,t){const r=e.querySelector(".cart-order-price"),y=e.querySelector(".cart-order-quantity"),g=parseFloat(t.price.replace("$",""));r.textContent=`$${(g*t.quantity).toFixed(2)}`,y.textContent=t.quantity,a(),s()}function a(){const e=c.reduce((t,r)=>t+parseFloat(r.price.replace("$",""))*r.quantity,0);Number(e.toFixed(2))}function s(){localStorage.setItem("cartItems",JSON.stringify(c))}document.addEventListener("DOMContentLoaded",()=>{o(),a(),i(),n.addEventListener("click",q),C.addEventListener("click",I)});function i(){c.length?u.textContent=`Cart (${c.length})`:u.textContent=`Cart (${0})`}
//# sourceMappingURL=commonHelpers.js.map
