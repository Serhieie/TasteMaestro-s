import{s as o}from"./assets/sprite-b179ef56.js";import{A as x}from"./assets/vendor-f23f4c51.js";const u="cartItems";document.querySelector(".js-cart");const m=document.querySelector(".header__js_span"),g=e=>{try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}};function $(){g(u)?m.textContent=`CART (${g(u).length})`:m.textContent=`CART (${0})`}window.addEventListener("load",$);const n=document.querySelector(".cart-order-list"),S=document.querySelector(".cart-filled-list"),q=document.querySelector(".cart-empty"),b=document.querySelector(".cart-clear-btn"),p=document.querySelector(".cart-count"),L=document.querySelector(".cart_total_order"),h=document.querySelector(".header__js_span"),E=document.getElementById("cart_total");let a=JSON.parse(localStorage.getItem("cartItems"))||[];function I(e){const t=e.target;t.closest(".cart-order-decr")?A(t):t.closest(".cart-order-incr")?w(t):t.classList.contains("cart-remove-btn")&&y(t)}function k(e){return e.map(t=>`
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
  `).join("")}function s(){a.length?n.innerHTML=k(a):(q.classList.remove("visually-hidden"),L.classList.add("visually-hidden"),S.classList.add("visually-hidden"))}function A(e){const t=e.closest(".cart-order-item"),r=Array.from(n.children).indexOf(t);a[r].quantity>1&&(a[r].quantity-=1,f(t,a[r]))}function w(e){const t=e.closest(".cart-order-item"),r=Array.from(n.children).indexOf(t);a[r].quantity+=1,f(t,a[r])}function y(e){const t=e.target.closest(".cart-order-item");if(t){const r=Array.from(n.children).indexOf(t);a.splice(r,1)[0],i(),t.remove(),c(),s(),l()}}n.addEventListener("click",e=>{e.target.closest(".cart-remove-btn")&&y(e)});function F(){a=[],n.innerHTML="",c(),i(),s(),l()}function f(e,t){const r=e.querySelector(".cart-order-price"),d=e.querySelector(".cart-order-quantity"),C=parseFloat(t.price.replace("$",""));r.textContent=`$${(C*t.quantity).toFixed(2)}`,d.textContent=t.quantity,c(),i()}function c(){const e=a.reduce((t,r)=>t+parseFloat(r.price.replace("$",""))*r.quantity,0);E.textContent=`$${Number(e.toFixed(2))}`}function i(){localStorage.setItem("cartItems",JSON.stringify(a))}document.addEventListener("DOMContentLoaded",()=>{s(),c(),l(),n.addEventListener("click",I),b.addEventListener("click",F)});function l(){a.length?(p.textContent=`Cart (${a.length})`,h.textContent=`Cart (${a.length})`):(h.textContent=`Cart (${0})`,p.textContent=`Cart (${0})`)}const v=document.getElementById("checkoutForm");v.addEventListener("submit",function(e){e.preventDefault();const t=document.querySelector(".cart-basket-input"),r=t.value;t.checkValidity()||alert("Будь ласка, введіть дійсну електронну адресу."),r.match(_)||(t.style.borderColor="red",new x().warning("Please enter a correct email",O)),t.style.borderColor="#e8e8e2",v.reset()});const _=/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,O={labels:{warning:"Warning"},icons:{warning:'<i class="fas fa-exclamation-triangle"></i>'},colors:{warning:"#FFA500"},maxNotifications:1,durations:{global:2e3}};
//# sourceMappingURL=commonHelpers.js.map
