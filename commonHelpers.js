import{s as i,a as w,c as E,h as k,b as A}from"./assets/sprite-c7735883.js";import{A as p}from"./assets/vendor-470c038c.js";const h="cartItems";document.querySelector(".js-cart");const y=document.querySelector(".header__js_span"),f=e=>{try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}};function O(){f(h)?y.textContent=`CART (${f(h).length})`:y.textContent=`CART (${0})`}window.addEventListener("load",O);const n=document.querySelector(".cart-order-list"),F=document.querySelector(".cart-filled-list"),_=document.querySelector(".cart-empty"),N=document.querySelector(".cart-clear-btn"),v=document.querySelector(".cart-count"),T=document.querySelector(".cart_total_order"),C=document.querySelector(".header__js_span"),z=document.getElementById("cart_total");let a=JSON.parse(localStorage.getItem("cartItems"))||[];function j(e){const t=e.target;t.closest(".cart-order-decr")?J(t):t.closest(".cart-order-incr")?M(t):t.classList.contains("cart-remove-btn")&&x(t)}function D(e){return e.map(t=>`
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
            <button class="cart-order-decr" type="button"><svg class="minus-icon" width="18" height="18">
                <use
                  class="cart-remove-svg"
                  xlink:href="${i}#minus"
                ></use>
              </svg></button>
            <span class="cart-order-quantity">${t.quantity}</span>
            <button class="cart-order-incr" type="button"><svg class="plus-icon" width="18" height="18">
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
  `).join("")}function l(){a.length?n.innerHTML=D(a):(_.classList.remove("visually-hidden"),T.classList.add("visually-hidden"),F.classList.add("visually-hidden"))}function J(e){const t=e.closest(".cart-order-item"),r=Array.from(n.children).indexOf(t);a[r].quantity>1&&(a[r].quantity-=1,b(t,a[r]))}function M(e){const t=e.closest(".cart-order-item"),r=Array.from(n.children).indexOf(t);a[r].quantity+=1,b(t,a[r])}function x(e){const t=e.target.closest(".cart-order-item");if(t){const r=Array.from(n.children).indexOf(t);a.splice(r,1)[0],d(),t.remove(),o(),l(),u()}}n.addEventListener("click",e=>{e.target.closest(".cart-remove-btn")&&x(e)});function $(){a=[],n.innerHTML="",o(),d(),l(),u()}function b(e,t){const r=e.querySelector(".cart-order-price"),m=e.querySelector(".cart-order-quantity"),s=parseFloat(t.price.replace("$",""));r.textContent=`$${(s*t.quantity).toFixed(2)}`,m.textContent=t.quantity,o(),d()}function o(){const e=a.reduce((t,r)=>t+parseFloat(r.price.replace("$",""))*r.quantity,0);z.textContent=`$${Number(e.toFixed(2))}`}function d(){localStorage.setItem("cartItems",JSON.stringify(a))}document.addEventListener("DOMContentLoaded",()=>{l(),o(),u(),n.addEventListener("click",j),N.addEventListener("click",$)});function u(){a.length?(v.textContent=`Cart (${a.length})`,C.textContent=`Cart (${a.length})`):(C.textContent=`Cart (${0})`,v.textContent=`Cart (${0})`)}const S=document.getElementById("checkoutForm");document.querySelector(".loader");S.addEventListener("submit",function(e){e.preventDefault();const t=document.querySelector(".cart-basket-input"),r=e.currentTarget.cartsubmit.value.trim().toLowerCase();if(!t.checkValidity()){alert("Будь ласка, введіть дійсну електронну адресу.");return}const s=/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;if(!r.match(s)){t.style.borderColor="red",new p().warning("Please enter a correct email",g);return}const g={labels:{warning:"Warning"},icons:{warning:'<i class="fas fa-exclamation-triangle"></i>'},colors:{warning:"#FFA500"},maxNotifications:1,durations:{global:2e3}};t.style.borderColor="#e8e8e2",w();const q=localStorage.getItem("cartItems"),L=JSON.parse(q).map(({id:c,quantity:I})=>({productId:c,amount:I}));E({email:r,products:L}).then(c=>{c.status===201&&(k(),$(),A(),S.reset())}).catch(c=>{console.log(c),new p().warning("Something went wrong",g)})});
//# sourceMappingURL=commonHelpers.js.map
