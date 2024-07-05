import{S as f,i as m}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function y({hits:r}){const o=document.querySelector(".gallery-container"),i=r.map(({webformatURL:s,largeImageURL:e,tags:t,likes:n,views:c,comments:u,downloads:d})=>`<ul class="gallery-card">
      <li class="gallery">
      <a class="gallery-link" href="${e}"> 
   <img src="${s}" alt="${t}" width="270" height="160"/>
   </a>
    <div class="discrabe">
  <ul class="discrabe-list">
  <li class="discrabe-item"><b>Likes</b> ${n}</li>
  <li class="discrabe-item"><b>Views</b> ${c}</li>
  <li class="discrabe-item"><b>Comments</b> ${u}</li>
  <li class="discrabe-item"><b>Downloads</b> ${d}</li>
  </ul>
</div>
</li>
    </ul>`).join("");if(o.innerHTML=i,r.length===0)return l(),a();new f(".gallery a",{captionDelay:250,captionsData:"alt",captionPosition:"bottom"}).refresh(),l()}function g(){const r=document.querySelector(".loading");r.style.display="flex"}function l(){const r=document.querySelector(".loading");r.style.display="none"}function a(){m.error({title:"Error",position:"topRight",title:"",message:"Sorry, there are no images matching your search query. Please try again!"})}function p(r){return fetch(`https://pixabay.com/api/?key=44767976-5c84653ee99974363117d019c&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}const h=document.querySelector(".search-form"),b=document.querySelector(".gallery-container");document.querySelector(".loading");h.addEventListener("submit",L);function L(r){r.preventDefault();const o=r.currentTarget,i=o.elements.insert.value.toLowerCase().trim();if(i==="")return l(),a();g(),b.innerHTML="",p(i).then(y).catch(a).finally(()=>o.reset())}
//# sourceMappingURL=commonHelpers.js.map
