import"./assets/footer-de476a4c.js";import"./assets/vendor-f728e3bf.js";const o="cartItems",i=document.querySelector(".js-cart");i.addEventListener("click",d);function d(t){if(!t.target.closest(".item-plus"))return;const r=t.target.closest(".cart-order-item").dataset.id,n=s(o),a=n.findIndex(c=>c.id===r);n[a].quantity+=1,el.textContent=n[a].quantity,l(o,n)}const l=(t,e)=>{try{const r=JSON.stringify(e);localStorage.setItem(t,r)}catch(r){console.error("Set state error: ",r.message)}},s=t=>{try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}};function u(){const t=document.querySelector(".header__js_span");s(o)?t.textContent=`CART (${s(o).length})`:t.textContent=`CART (${0})`}window.addEventListener("load",u);
//# sourceMappingURL=commonHelpers.js.map
