import{o as ye,a as ge}from"./disclose-version.Bcn4F3eb.js";import{d as de,c as ve,a as fe,s as y,p as ue,b as be,g as o,x as pe,t as b,j as p,z as ze,k as z,l as we,q as h,o as D,f as w,e as a,w as q,r as X,i as he}from"./custom-element.CeFvkdP3.js";import{i as Y}from"./if.D5-Gp2RN.js";import{s as ke}from"./slot.D54GySgE.js";import{a as xe}from"./css.b8BQ2uq1.js";import{s as u}from"./attributes.C5gmh--w.js";import{s as _e}from"./class.Cv4PWPG3.js";import{b as $}from"./this.D2__OfKJ.js";import{g as Ee,c as Ie}from"./index.CUXmp4cc.js";import{l as Le}from"./scrollLock.MPoPs3fP.js";var Ae=h('<button type="button" class="image-zoom-nav image-zoom-nav-prev svelte-1yby8l6">‹</button>'),Pe=h('<img class="image-zoom-content svelte-1yby8l6" loading="eager" decoding="async"/>'),Se=h('<p class="image-zoom-caption svelte-1yby8l6"> </p>'),Ye=h('<button type="button" class="image-zoom-nav image-zoom-nav-next svelte-1yby8l6">›</button>'),Me=h('<div class="image-zoom-wrapper svelte-1yby8l6"><!></div> <dialog><!> <button type="button" class="image-zoom-close svelte-1yby8l6">×</button> <!> <!> <!></dialog>',1);const Ce={hash:"svelte-1yby8l6",code:`image-zoom {display:block;margin:1.2rem auto;width:fit-content;max-width:100%;}.image-zoom-wrapper.svelte-1yby8l6 {display:block;max-width:100%;}image-zoom .image-zoom-trigger {cursor:zoom-in;transform-origin:center;transition:filter 0.2s ease,\r
      transform 0.2s ease;}image-zoom .image-zoom-trigger:hover {filter:brightness(0.96);transform:translateY(-1px) scale(1.01);}.image-zoom-overlay.svelte-1yby8l6 {position:fixed;inset:0;z-index:var(--z-fullscreen);display:grid;place-items:center;gap:0;width:100%;max-width:none;height:100%;max-height:none;border:0;margin:0;padding:2rem 1rem;box-sizing:border-box;background:var(--codeblock-overlay-bg, rgba(8, 10, 16, 0.72));backdrop-filter:blur(0.35rem);\r
    animation: svelte-1yby8l6-image-zoom-fade-in 220ms ease forwards;}.image-zoom-overlay.hidden.svelte-1yby8l6 {display:none;}.image-zoom-overlay.svelte-1yby8l6::backdrop {background:var(--codeblock-overlay-bg, rgba(8, 10, 16, 0.72));backdrop-filter:blur(0.35rem);}.image-zoom-overlay.closing.svelte-1yby8l6 {\r
    animation: svelte-1yby8l6-image-zoom-fade-out 220ms ease forwards;}.image-zoom-content.svelte-1yby8l6 {margin:0;max-width:min(92vw, 1100px);max-height:86vh;object-fit:contain;border-radius:0.5rem;box-shadow:0 0.75rem 2rem var(--grey-9-a15);cursor:zoom-out;\r
    animation: svelte-1yby8l6-image-zoom-scale-in 220ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards;}.image-zoom-overlay.closing.svelte-1yby8l6 .image-zoom-content:where(.svelte-1yby8l6) {\r
    animation: svelte-1yby8l6-image-zoom-scale-out 220ms cubic-bezier(0.4, 0, 0.2, 1) forwards;}.image-zoom-close.svelte-1yby8l6 {position:absolute;top:1rem;right:1rem;width:2.4rem;height:2.4rem;border:0;border-radius:50%;background:rgba(17, 25, 40, 0.58);color:#fff;font-size:1.5rem;line-height:1;cursor:pointer;transition:background-color 0.2s ease,\r
      transform 0.2s ease;\r
    animation: svelte-1yby8l6-image-zoom-ui-in 220ms ease forwards;}.image-zoom-overlay.closing.svelte-1yby8l6 .image-zoom-close:where(.svelte-1yby8l6) {\r
    animation: svelte-1yby8l6-image-zoom-ui-out 220ms ease forwards;}.image-zoom-close.svelte-1yby8l6:hover {background:rgba(17, 25, 40, 0.8);transform:scale(1.06);}.image-zoom-nav.svelte-1yby8l6 {position:absolute;top:50%;width:2.75rem;height:2.75rem;border:0;border-radius:999px;background:rgba(17, 25, 40, 0.58);color:#fff;font-size:2rem;line-height:1;cursor:pointer;transform:translateY(-50%);transition:background-color 0.2s ease,\r
      transform 0.2s ease;\r
    animation: svelte-1yby8l6-image-zoom-ui-in 220ms ease forwards;}.image-zoom-nav.svelte-1yby8l6:hover {background:rgba(17, 25, 40, 0.8);transform:translateY(-50%) scale(1.06);}.image-zoom-nav-prev.svelte-1yby8l6 {left:max(1rem, calc(50vw - min(46vw, 550px) - 3.75rem));}.image-zoom-nav-next.svelte-1yby8l6 {right:max(1rem, calc(50vw - min(46vw, 550px) - 3.75rem));}.image-zoom-caption.svelte-1yby8l6 {margin:0.8rem 0 0;font-size:0.9rem;color:var(--grey-1);text-align:center;max-width:min(92vw, 1100px);line-height:1.5;\r
    animation: svelte-1yby8l6-image-zoom-ui-in 220ms ease forwards;}.image-zoom-overlay.closing.svelte-1yby8l6 .image-zoom-caption:where(.svelte-1yby8l6) {\r
    animation: svelte-1yby8l6-image-zoom-ui-out 220ms ease forwards;}.image-zoom-overlay.closing.svelte-1yby8l6 .image-zoom-nav:where(.svelte-1yby8l6) {\r
    animation: svelte-1yby8l6-image-zoom-ui-out 220ms ease forwards;}\r
\r
  @keyframes svelte-1yby8l6-image-zoom-fade-in {\r
    from {\r
      opacity: 0;\r
    }\r
\r
    to {\r
      opacity: 1;\r
    }\r
  }\r
\r
  @keyframes svelte-1yby8l6-image-zoom-fade-out {\r
    from {\r
      opacity: 1;\r
    }\r
\r
    to {\r
      opacity: 0;\r
    }\r
  }\r
\r
  @keyframes svelte-1yby8l6-image-zoom-scale-in {\r
    from {\r
      opacity: 0;\r
      transform: scale(0.94) translateY(10px);\r
    }\r
\r
    to {\r
      opacity: 1;\r
      transform: scale(1) translateY(0);\r
    }\r
  }\r
\r
  @keyframes svelte-1yby8l6-image-zoom-scale-out {\r
    from {\r
      opacity: 1;\r
      transform: scale(1) translateY(0);\r
    }\r
\r
    to {\r
      opacity: 0;\r
      transform: scale(0.94) translateY(10px);\r
    }\r
  }\r
\r
  @keyframes svelte-1yby8l6-image-zoom-ui-in {\r
    from {\r
      opacity: 0;\r
      transform: translateY(-6px);\r
    }\r
\r
    to {\r
      opacity: 1;\r
      transform: translateY(0);\r
    }\r
  }\r
\r
  @keyframes svelte-1yby8l6-image-zoom-ui-out {\r
    from {\r
      opacity: 1;\r
      transform: translateY(0);\r
    }\r
\r
    to {\r
      opacity: 0;\r
      transform: translateY(-6px);\r
    }\r
  }\r
\r
  @media (prefers-reduced-motion: reduce) {image-zoom .image-zoom-trigger,\r
    .image-zoom-close.svelte-1yby8l6,\r
    .image-zoom-nav.svelte-1yby8l6 {transition:none;}.image-zoom-overlay.svelte-1yby8l6,\r
    .image-zoom-overlay.closing.svelte-1yby8l6,\r
    .image-zoom-content.svelte-1yby8l6,\r
    .image-zoom-overlay.closing.svelte-1yby8l6 .image-zoom-content:where(.svelte-1yby8l6),\r
    .image-zoom-caption.svelte-1yby8l6,\r
    .image-zoom-overlay.closing.svelte-1yby8l6 .image-zoom-caption:where(.svelte-1yby8l6),\r
    .image-zoom-nav.svelte-1yby8l6,\r
    .image-zoom-overlay.closing.svelte-1yby8l6 .image-zoom-nav:where(.svelte-1yby8l6),\r
    .image-zoom-overlay.closing.svelte-1yby8l6 .image-zoom-close:where(.svelte-1yby8l6) {\r
      animation: none;}\r
  }`};function Te(Z,B){fe(B,!0),xe(Z,Ce);let k=y(null),s=y(null),l=y(!1),x=y(""),v=y(""),g=y(ue([])),d=y(0),_=null,N=null,i=null,f=y(!1);const ee=220,E=Ee(Ie);let I=null;const O=()=>{I?.(),I=null},M=()=>{a(l,!1),a(f,!1),a(x,""),a(v,""),a(g,[],!0),a(d,0),i&&(clearTimeout(i),i=null),O()},L=()=>{if(!o(l)||o(f))return;const e=typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:ee;if(e===0){M();return}a(f,!0),i&&clearTimeout(i),i=setTimeout(()=>{M()},e)},C=()=>{const e=o(g)[o(d)];e&&(a(x,e.src,!0),a(v,e.alt,!0))},oe=e=>{const r=e.closest("[data-image-zoom-gallery]");return(r?Array.from(r.querySelectorAll("image-zoom img")):[e]).map(n=>({element:n,src:n.currentSrc||n.src,alt:n.alt||""})).filter(n=>!!n.src)},W=(e,r)=>{r?.preventDefault(),r?.stopPropagation();const t=oe(e);t.length!==0&&(i&&(clearTimeout(i),i=null),a(f,!1),a(g,t.map(({src:n,alt:S})=>({src:n,alt:S})),!0),a(d,Math.max(0,t.findIndex(n=>n.element===e)),!0),C(),a(l,!0),typeof document<"u"&&typeof window<"u"&&!I&&(I=Le(document,{innerWidth:window.innerWidth,getComputedPaddingInlineEnd:()=>window.getComputedStyle(document.body).paddingInlineEnd})))},A=()=>o(g).length>1,R=e=>{e?.preventDefault(),e?.stopPropagation(),A()&&(a(d,(o(d)-1+o(g).length)%o(g).length),C())},j=e=>{e?.preventDefault(),e?.stopPropagation(),A()&&(a(d,(o(d)+1)%o(g).length),C())};be(()=>{if(!(!o(s)||typeof o(s).showModal!="function")){if(o(l)&&!o(s).open){o(s).showModal();return}!o(l)&&o(s).open&&o(s).close()}});const K=()=>{_?.(),_=null;const t=(o(k)?.querySelector("slot")?.assignedElements({flatten:!0})??[]).find(c=>c.tagName==="IMG");if(!t)return;t.classList.add("image-zoom-trigger");const n=t.hasAttribute("role"),S=t.hasAttribute("tabindex");n||t.setAttribute("role","button"),S||t.setAttribute("tabindex","0");const U=c=>{W(t,c)},V=c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),W(t,c))};t.addEventListener("click",U),t.addEventListener("keydown",V),_=()=>{t.removeEventListener("click",U),t.removeEventListener("keydown",V),t.classList.remove("image-zoom-trigger"),n||t.removeAttribute("role"),S||t.removeAttribute("tabindex")}},re=e=>{const r=e.target;r?.closest(".image-zoom-content")||r?.closest(".image-zoom-close")||r?.closest(".image-zoom-nav")||L()},G=e=>{if(o(l)){if(e.key==="Escape"){L();return}if(e.key==="ArrowLeft"){R(e);return}e.key==="ArrowRight"&&j(e)}};ye(()=>{K();const e=o(k)?.querySelector("slot");if(e){const r=()=>{K()};e.addEventListener("slotchange",r),N=()=>{e.removeEventListener("slotchange",r)}}typeof window<"u"&&window.addEventListener("keydown",G)}),ge(()=>{N?.(),_?.(),i&&(clearTimeout(i),i=null),typeof window<"u"&&window.removeEventListener("keydown",G),O()});var F=Me(),P=pe(F),te=D(P);ke(te,B,"default",{}),q(P),$(P,e=>a(k,e),()=>o(k));var m=w(P,2),H=D(m);{var ae=e=>{var r=Ae();b(t=>u(r,"aria-label",t),[()=>E("imageZoom.previous")]),p("click",r,R),z(e,r)},ne=X(()=>A());Y(H,e=>{o(ne)&&e(ae)})}var T=w(H,2),J=w(T,2);{var ie=e=>{var r=Pe();b(()=>{u(r,"src",o(x)),u(r,"alt",o(v))}),z(e,r)};Y(J,e=>{o(x)&&e(ie)})}var Q=w(J,2);{var se=e=>{var r=Se(),t=D(r,!0);q(r),b(()=>he(t,o(v))),z(e,r)};Y(Q,e=>{o(v)&&e(se)})}var le=w(Q,2);{var me=e=>{var r=Ye();b(t=>u(r,"aria-label",t),[()=>E("imageZoom.next")]),p("click",r,j),z(e,r)},ce=X(()=>A());Y(le,e=>{o(ce)&&e(me)})}q(m),$(m,e=>a(s,e),()=>o(s)),b((e,r)=>{_e(m,1,`image-zoom-overlay ${o(l)?"":"hidden"} ${o(f)?"closing":""}`,"svelte-1yby8l6"),u(m,"aria-label",e),u(T,"aria-label",r)},[()=>o(v)||E("imageZoom.dialog"),()=>E("imageZoom.close")]),p("click",m,re),ze("close",m,()=>{(o(l)||o(f))&&M()}),p("keydown",m,e=>{(e.key==="Escape"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),L())}),p("click",T,L),z(Z,F),we()}de(["click","keydown"]);customElements.define("image-zoom",ve(Te,{},["default"],[],{mode:"open"}));export{Te as default};
