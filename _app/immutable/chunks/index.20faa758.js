function E(){}function G(t,e){for(const n in e)t[n]=e[n];return t}function M(t){return t()}function T(){return Object.create(null)}function g(t){t.forEach(M)}function q(t){return typeof t=="function"}function lt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let b;function ot(t,e){return b||(b=document.createElement("a")),b.href=e,t===b.href}function I(t){return Object.keys(t).length===0}function J(t,...e){if(t==null)return E;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function st(t,e,n){t.$$.on_destroy.push(J(e,n))}function ft(t,e,n,i){if(t){const r=B(t,e,n,i);return t[0](r)}}function B(t,e,n,i){return t[1]&&i?G(n.ctx.slice(),t[1](i(e))):n.ctx}function at(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],c=Math.max(e.dirty.length,r.length);for(let o=0;o<c;o+=1)s[o]=e.dirty[o]|r[o];return s}return e.dirty|r}return e.dirty}function _t(t,e,n,i,r,s){if(r){const c=B(e,n,i,s);t.p(c,r)}}function dt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let w=!1;function K(){w=!0}function L(){w=!1}function R(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let l=0;l<e.length;l++){const a=e[l];a.claim_order!==void 0&&u.push(a)}e=u}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let u=0;u<e.length;u++){const l=e[u].claim_order,a=(r>0&&e[n[r]].claim_order<=l?r+1:R(1,r,x=>e[n[x]].claim_order,l))-1;i[u]=n[a]+1;const f=a+1;n[f]=u,r=Math.max(f,r)}const s=[],c=[];let o=e.length-1;for(let u=n[r]+1;u!=0;u=i[u-1]){for(s.push(e[u-1]);o>=u;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);s.reverse(),c.sort((u,l)=>u.claim_order-l.claim_order);for(let u=0,l=0;u<c.length;u++){for(;l<s.length&&c[u].claim_order>=s[l].claim_order;)l++;const a=l<s.length?s[l]:null;t.insertBefore(c[u],a)}}function Q(t,e){if(w){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ht(t,e,n){w&&!n?Q(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function V(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function mt(){return S(" ")}function pt(){return S("")}function yt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function X(t){return Array.from(t.childNodes)}function Y(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function H(t,e,n,i,r=!1){Y(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const u=n(o);return u===void 0?t.splice(c,1):t[c]=u,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const u=n(o);return u===void 0?t.splice(c,1):t[c]=u,r?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function Z(t,e,n,i){return H(t,r=>r.nodeName===e,r=>{const s=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];n[o.name]||s.push(o.name)}s.forEach(c=>r.removeAttribute(c))},()=>i(e))}function gt(t,e,n){return Z(t,e,n,V)}function tt(t,e){return H(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>S(e),!0)}function xt(t){return tt(t," ")}function bt(t,e){e=""+e,t.data!==e&&(t.data=e)}function $t(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Et(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const s=r.textContent.trim();s===`HEAD_${t}_END`?(i-=1,n.push(r)):s===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function wt(t,e){return new t(e)}let y;function p(t){y=t}function O(){if(!y)throw new Error("Function called outside component initialization");return y}function Nt(t){O().$$.on_mount.push(t)}function At(t){O().$$.after_update.push(t)}const h=[],k=[];let m=[];const D=[],P=Promise.resolve();let A=!1;function z(){A||(A=!0,P.then(F))}function vt(){return z(),P}function v(t){m.push(t)}const N=new Set;let d=0;function F(){if(d!==0)return;const t=y;do{try{for(;d<h.length;){const e=h[d];d++,p(e),et(e.$$)}}catch(e){throw h.length=0,d=0,e}for(p(null),h.length=0,d=0;k.length;)k.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];N.has(n)||(N.add(n),n())}m.length=0}while(h.length);for(;D.length;)D.pop()();A=!1,N.clear(),p(t)}function et(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(v)}}function nt(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const $=new Set;let _;function St(){_={r:0,c:[],p:_}}function jt(){_.r||g(_.c),_=_.p}function it(t,e){t&&t.i&&($.delete(t),t.i(e))}function Ct(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Tt(t){t&&t.c()}function kt(t,e){t&&t.l(e)}function rt(t,e,n,i){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),i||v(()=>{const c=t.$$.on_mount.map(M).filter(q);t.$$.on_destroy?t.$$.on_destroy.push(...c):g(c),t.$$.on_mount=[]}),s.forEach(v)}function ct(t,e){const n=t.$$;n.fragment!==null&&(nt(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(t,e){t.$$.dirty[0]===-1&&(h.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Dt(t,e,n,i,r,s,c,o=[-1]){const u=y;p(t);const l=t.$$={fragment:null,ctx:[],props:s,update:E,not_equal:r,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:T(),dirty:o,skip_bound:!1,root:e.target||u.$$.root};c&&c(l.root);let a=!1;if(l.ctx=n?n(t,e.props||{},(f,x,...j)=>{const C=j.length?j[0]:x;return l.ctx&&r(l.ctx[f],l.ctx[f]=C)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](C),a&&ut(t,f)),x}):[],l.update(),a=!0,g(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){K();const f=X(e.target);l.fragment&&l.fragment.l(f),f.forEach(U)}else l.fragment&&l.fragment.c();e.intro&&it(t.$$.fragment),rt(t,e.target,e.anchor,e.customElement),L(),F()}p(u)}class Mt{$destroy(){ct(this,1),this.$destroy=E}$on(e,n){if(!q(n))return E;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!I(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{rt as A,ct as B,ft as C,_t as D,dt as E,at as F,Q as G,E as H,st as I,ot as J,Et as K,Mt as S,mt as a,ht as b,xt as c,Ct as d,pt as e,jt as f,it as g,U as h,Dt as i,At as j,V as k,gt as l,X as m,yt as n,Nt as o,$t as p,S as q,tt as r,lt as s,vt as t,bt as u,St as v,k as w,wt as x,Tt as y,kt as z};
