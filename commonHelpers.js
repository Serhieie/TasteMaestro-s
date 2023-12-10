import{s as o}from"./assets/sprite-842664a8.js";import"./assets/vendor-f728e3bf.js";const d="cartItems";document.querySelector(".js-cart");const u=document.querySelector(".header__js_span"),m=e=>{try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}};function C(){m(d)?u.textContent=`CART (${m(d).length})`:u.textContent=`CART (${0})`}window.addEventListener("load",C);const c=document.querySelector(".cart-order-list"),$=document.querySelector(".cart-filled-list"),S=document.querySelector(".cart-empty"),q=document.querySelector(".cart-clear-btn"),p=document.querySelector(".cart-count"),x=document.querySelector(".cart_total_order"),g=document.querySelector(".header__js_span"),L=document.getElementById("cart_total");let r=JSON.parse(localStorage.getItem("cartItems"))||[];function b(e){const t=e.target;t.closest(".cart-order-decr")?E(t):t.closest(".cart-order-incr")?_(t):t.classList.contains("cart-remove-btn")&&v(t)}function I(e){return e.map(t=>`
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
                  xlink:href="${o}#close-cross"
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
            <button class="cart-order-decr" type="button"><svg class="minus-icon" width="18" height="18">
                <use
                  class="cart-remove-svg"
                  xlink:href="${o}#minus"
                ></use>
              </svg></button>
            <span class="cart-order-quantity">${t.quantity}</span>
            <button class="cart-order-incr" type="button"><svg class="plus-icon" width="18" height="18">
                <use
                  class="cart-remove-svg"
                  xlink:href="${o}#plus"
                ></use>
              </svg></button>
          </div>
        </div>
      </div>
    </div>
  </li>
  `).join("")}function s(){r.length?c.innerHTML=I(r):(S.classList.remove("visually-hidden"),x.classList.add("visually-hidden"),$.classList.add("visually-hidden"))}function E(e){const t=e.closest(".cart-order-item"),a=Array.from(c.children).indexOf(t);r[a].quantity>1&&(r[a].quantity-=1,h(t,r[a]))}function _(e){const t=e.closest(".cart-order-item"),a=Array.from(c.children).indexOf(t);r[a].quantity+=1,h(t,r[a])}function v(e){const t=e.target.closest(".cart-order-item");if(t){const a=Array.from(c.children).indexOf(t);r.splice(a,1)[0],i(),t.remove(),n(),s(),l()}}c.addEventListener("click",e=>{e.target.closest(".cart-remove-btn")&&v(e)});function O(){r=[],c.innerHTML="",n(),i(),s(),l()}function h(e,t){const a=e.querySelector(".cart-order-price"),y=e.querySelector(".cart-order-quantity"),f=parseFloat(t.price.replace("$",""));a.textContent=`$${(f*t.quantity).toFixed(2)}`,y.textContent=t.quantity,n(),i()}function n(){const e=r.reduce((t,a)=>t+parseFloat(a.price.replace("$",""))*a.quantity,0);L.textContent=`$${Number(e.toFixed(2))}`}function i(){localStorage.setItem("cartItems",JSON.stringify(r))}document.addEventListener("DOMContentLoaded",()=>{s(),n(),l(),c.addEventListener("click",b),q.addEventListener("click",O)});function l(){r.length?(p.textContent=`Cart (${r.length})`,g.textContent=`Cart (${r.length})`):(g.textContent=`Cart (${0})`,p.textContent=`Cart (${0})`)}
//# sourceMappingURL=commonHelpers.js.map
