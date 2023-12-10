import{s as f}from"./assets/sprite-223b7e65.js";import"./assets/vendor-f728e3bf.js";const o="cartItems";document.querySelector(".js-cart");const u=document.querySelector(".header__js_span"),s=e=>{try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}};function v(){const e=document.querySelector(".header__js_span");s(o)?(u.textContent=`CART (${s(o).length})`,e.textContent=`CART (${s(o).length})`):(u.textContent=`CART (${0})`,e.textContent=`CART (${0})`)}window.addEventListener("load",v);const c=document.querySelector(".cart-order-list"),S=document.querySelector(".cart-filled-list"),q=document.querySelector(".cart-empty"),$=document.querySelector(".cart-clear-btn"),m=document.querySelector(".cart-count"),x=document.querySelector(".cart_total_order"),p=document.querySelector(".header__js_span");let r=JSON.parse(localStorage.getItem("cartItems"))||[];function L(e){const t=e.target;t.classList.contains("cart-order-decr")?_(t):t.classList.contains("cart-order-incr")?I(t):t.classList.contains("cart-remove-btn")&&y(t)}function b(e){return e.map(t=>`
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
                  xlink:href="${f}#close-cross"
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
  `).join("")}function i(){r.length?c.innerHTML=b(r):(q.classList.remove("visually-hidden"),x.classList.add("visually-hidden"),S.classList.add("visually-hidden"))}function _(e){const t=e.closest(".cart-order-item"),n=Array.from(c.children).indexOf(t);r[n].quantity>1&&(r[n].quantity-=1,g(t,r[n]))}function I(e){const t=e.closest(".cart-order-item"),n=Array.from(c.children).indexOf(t);r[n].quantity+=1,g(t,r[n])}function y(e){const t=e.target.closest(".cart-order-item");if(t){const n=Array.from(c.children).indexOf(t);r.splice(n,1)[0],l(),t.remove(),a(),i(),d()}}c.addEventListener("click",e=>{e.target.closest(".cart-remove-btn")&&y(e)});const E=document.querySelector(".header__js_span");function T(){r=[],c.innerHTML="",a(),l(),i(),d(),E.textContent=`CART (${0})`}function g(e,t){const n=e.querySelector(".cart-order-price"),C=e.querySelector(".cart-order-quantity"),h=parseFloat(t.price.replace("$",""));n.textContent=`$${(h*t.quantity).toFixed(2)}`,C.textContent=t.quantity,a(),l()}function a(){const e=r.reduce((t,n)=>t+parseFloat(n.price.replace("$",""))*n.quantity,0);Number(e.toFixed(2))}function l(){localStorage.setItem("cartItems",JSON.stringify(r))}document.addEventListener("DOMContentLoaded",()=>{i(),a(),d(),c.addEventListener("click",L),$.addEventListener("click",T)});function d(){r.length?(m.textContent=`Cart (${r.length})`,p.textContent=`Cart (${r.length})`):(p.textContent=`Cart (${0})`,m.textContent=`Cart (${0})`)}
//# sourceMappingURL=commonHelpers.js.map
