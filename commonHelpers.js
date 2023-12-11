import{C as o,s as l,c as E,a as k}from"./assets/sprite-1d71935a.js";import{A as p}from"./assets/vendor-470c038c.js";function O(){o.loader.classList.remove("visually-hidden"),o.isFetching=!0}function F(){o.loader.classList.add("visually-hidden"),o.isFetching=!0}const y="cartItems";document.querySelector(".js-cart");const f=document.querySelector(".header__js_span"),v=e=>{try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}};function A(){v(y)?f.textContent=`CART (${v(y).length})`:f.textContent=`CART (${0})`}window.addEventListener("load",A);const n=document.querySelector(".cart-order-list"),_=document.querySelector(".cart-filled-list"),N=document.querySelector(".cart-empty"),T=document.querySelector(".cart-clear-btn"),C=document.querySelector(".cart-count"),z=document.querySelector(".cart_total_order"),S=document.querySelector(".header__js_span"),M=document.getElementById("cart_total");let a=JSON.parse(localStorage.getItem("cartItems"))||[];function j(e){const t=e.target;t.closest(".cart-order-decr")?J(t):t.closest(".cart-order-incr")?P(t):t.classList.contains("cart-remove-btn")&&$(t)}function D(e){return e.map(t=>`
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
                  xlink:href="${l}#close-cross"
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
                  xlink:href="${l}#minus"
                ></use>
              </svg></button>
            <span class="cart-order-quantity">${t.quantity}</span>
            <button class="cart-order-incr" type="button"><svg class="plus-icon" width="18" height="18">
                <use
                  class="cart-remove-svg"
                  xlink:href="${l}#plus"
                ></use>
              </svg></button>
          </div>
        </div>
      </div>
    </div>
  </li>
  `).join("")}function d(){a.length?n.innerHTML=D(a):(N.classList.remove("visually-hidden"),z.classList.add("visually-hidden"),_.classList.add("visually-hidden"))}function J(e){const t=e.closest(".cart-order-item"),r=Array.from(n.children).indexOf(t);a[r].quantity>1&&(a[r].quantity-=1,b(t,a[r]))}function P(e){const t=e.closest(".cart-order-item"),r=Array.from(n.children).indexOf(t);a[r].quantity+=1,b(t,a[r])}function $(e){const t=e.target.closest(".cart-order-item");if(t){const r=Array.from(n.children).indexOf(t);a.splice(r,1)[0],u(),t.remove(),s(),d(),m()}}n.addEventListener("click",e=>{e.target.closest(".cart-remove-btn")&&$(e)});function q(){a=[],n.innerHTML="",s(),u(),d(),m()}function b(e,t){const r=e.querySelector(".cart-order-price"),g=e.querySelector(".cart-order-quantity"),i=parseFloat(t.price.replace("$",""));r.textContent=`$${(i*t.quantity).toFixed(2)}`,g.textContent=t.quantity,s(),u()}function s(){const e=a.reduce((t,r)=>t+parseFloat(r.price.replace("$",""))*r.quantity,0);M.textContent=`$${Number(e.toFixed(2))}`}function u(){localStorage.setItem("cartItems",JSON.stringify(a))}document.addEventListener("DOMContentLoaded",()=>{d(),s(),m(),n.addEventListener("click",j),T.addEventListener("click",q)});function m(){a.length?(C.textContent=`Cart (${a.length})`,S.textContent=`Cart (${a.length})`):(S.textContent=`Cart (${0})`,C.textContent=`Cart (${0})`)}const x=document.getElementById("checkoutForm");document.querySelector(".loader");x.addEventListener("submit",function(e){e.preventDefault();const t=document.querySelector(".cart-basket-input"),r=e.currentTarget.cartsubmit.value.trim().toLowerCase();if(!t.checkValidity()){alert("Будь ласка, введіть дійсну електронну адресу.");return}const i=/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;if(!r.match(i)){t.style.borderColor="red",new p().warning("Please enter a correct email",h);return}const h={labels:{warning:"Warning"},icons:{warning:'<i class="fas fa-exclamation-triangle"></i>'},colors:{warning:"#FFA500"},maxNotifications:1,durations:{global:2e3}};t.style.borderColor="#e8e8e2",O();const L=localStorage.getItem("cartItems"),I=JSON.parse(L).map(({id:c,quantity:w})=>({productId:c,amount:w}));E({email:r,products:I}).then(c=>{c.status===201&&(F(),q(),k(),x.reset())}).catch(c=>{console.log(c),new p().warning("Something went wrong",h)})});
//# sourceMappingURL=commonHelpers.js.map
