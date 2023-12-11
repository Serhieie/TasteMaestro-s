import{s,a as x}from"./assets/sprite-5ad82457.js";import{A as $}from"./assets/vendor-470c038c.js";const m="cartItems";document.querySelector(".js-cart");const g=document.querySelector(".header__js_span"),p=e=>{try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}};function S(){p(m)?g.textContent=`CART (${p(m).length})`:g.textContent=`CART (${0})`}window.addEventListener("load",S);const n=document.querySelector(".cart-order-list"),q=document.querySelector(".cart-filled-list"),b=document.querySelector(".cart-empty"),L=document.querySelector(".cart-clear-btn"),h=document.querySelector(".cart-count"),E=document.querySelector(".cart_total_order"),v=document.querySelector(".header__js_span"),I=document.getElementById("cart_total");let a=JSON.parse(localStorage.getItem("cartItems"))||[];function k(e){const t=e.target;t.closest(".cart-order-decr")?A(t):t.closest(".cart-order-incr")?F(t):t.classList.contains("cart-remove-btn")&&f(t)}function w(e){return e.map(t=>`
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
                  xlink:href="${s}#close-cross"
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
                  xlink:href="${s}#minus"
                ></use>
              </svg></button>
            <span class="cart-order-quantity">${t.quantity}</span>
            <button class="cart-order-incr" type="button"><svg class="plus-icon" width="18" height="18">
                <use
                  class="cart-remove-svg"
                  xlink:href="${s}#plus"
                ></use>
              </svg></button>
          </div>
        </div>
      </div>
    </div>
  </li>
  `).join("")}function i(){a.length?n.innerHTML=w(a):(b.classList.remove("visually-hidden"),E.classList.add("visually-hidden"),q.classList.add("visually-hidden"))}function A(e){const t=e.closest(".cart-order-item"),r=Array.from(n.children).indexOf(t);a[r].quantity>1&&(a[r].quantity-=1,C(t,a[r]))}function F(e){const t=e.closest(".cart-order-item"),r=Array.from(n.children).indexOf(t);a[r].quantity+=1,C(t,a[r])}function f(e){const t=e.target.closest(".cart-order-item");if(t){const r=Array.from(n.children).indexOf(t);a.splice(r,1)[0],l(),t.remove(),c(),i(),d()}}n.addEventListener("click",e=>{e.target.closest(".cart-remove-btn")&&f(e)});function _(){a=[],n.innerHTML="",c(),l(),i(),d()}function C(e,t){const r=e.querySelector(".cart-order-price"),u=e.querySelector(".cart-order-quantity"),o=parseFloat(t.price.replace("$",""));r.textContent=`$${(o*t.quantity).toFixed(2)}`,u.textContent=t.quantity,c(),l()}function c(){const e=a.reduce((t,r)=>t+parseFloat(r.price.replace("$",""))*r.quantity,0);I.textContent=`$${Number(e.toFixed(2))}`}function l(){localStorage.setItem("cartItems",JSON.stringify(a))}document.addEventListener("DOMContentLoaded",()=>{i(),c(),d(),n.addEventListener("click",k),L.addEventListener("click",_)});function d(){a.length?(h.textContent=`Cart (${a.length})`,v.textContent=`Cart (${a.length})`):(v.textContent=`Cart (${0})`,h.textContent=`Cart (${0})`)}const y=document.getElementById("checkoutForm");y.addEventListener("submit",function(e){e.preventDefault();const t=document.querySelector(".cart-basket-input"),r=t.value;if(!t.checkValidity()){alert("Будь ласка, введіть дійсну електронну адресу.");return}const o=/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;if(!r.match(o)){t.style.borderColor="red",new $().warning("Please enter a correct email",O);return}t.style.borderColor="#e8e8e2",x(),y.reset()});const O={labels:{warning:"Warning"},icons:{warning:'<i class="fas fa-exclamation-triangle"></i>'},colors:{warning:"#FFA500"},maxNotifications:1,durations:{global:2e3}};
//# sourceMappingURL=commonHelpers.js.map
