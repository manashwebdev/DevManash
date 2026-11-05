(()=>{let L=null;const C=window.CLINIC,$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const inr=n=>"\u20B9"+n.toLocaleString("en-IN"),digits=C.phone.replace(/\D/g,""),wa=`https://wa.me/${C.whatsapp}`,
mapUrl="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(C.mapQuery);
const img=(n,w,h,alt,l=1)=>`<img src="assets/${n}.webp" width="${w}" height="${h}" alt="${alt}"${l?' loading="lazy"':""}>`;
document.title=`${C.name} | Modern Dental Care in ${C.city}`;
$$("[data-c]").forEach(e=>e.textContent=C[e.dataset.c]);
$$("[data-tel]").forEach(e=>{e.href="tel:+"+digits;if(e.tagName==="A"&&!e.classList.contains("btn")&&!e.getAttribute("aria-label"))e.textContent=C.phone});
$$("[data-map]").forEach(e=>e.href=mapUrl);$$("[data-wa]").forEach(e=>e.href=wa);
{const f=$("#map"),box=$("#mapbox"),host=location.hostname+" "+[...(location.ancestorOrigins||[])].join(" ")+" "+document.referrer;
// Live Google map on a real host; the illustrated map card stays in sandboxed previews (they block outside frames)
if(navigator.onLine!==false&&!/claude\.(ai|com)|claudeusercontent|anthropic/i.test(host)){f.src="https://maps.google.com/maps?q="+encodeURIComponent(C.mapQuery)+"&output=embed";f.hidden=false;f.addEventListener("load",()=>box.classList.add("live"))}}
$("#cards").innerHTML=C.services.map(s=>`<button class="card rv" data-s="${s.id}">${img(s.icon,84,84,"")}<h3>${s.title}</h3><p>${s.text.split(".")[0]}.</p><em>From ${inr(s.from)}</em></button>`).join("");
$("#docs").innerHTML=C.doctors.map(d=>`<article class="doc rv">${img(d.photo,520,520,d.name+", "+d.role)}<h3>${d.name}</h3><p>${d.role}<br>${d.years} years experience</p><a class="btn sm pri" href="#book" data-doc="${d.name}">Book with ${d.name}</a></article>`).join("");
$("#pt").innerHTML=C.services.map(s=>`<tr><td>${s.title}</td><td>${s.time}</td><td>${inr(s.from)}</td></tr>`).join("");
$("#car").innerHTML=C.testimonials.map(t=>`<figure>${img(t.photo,72,72,t.name)}<div class="stars" role="img" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><blockquote>${t.text}</blockquote><figcaption style="margin-top:10px;font-weight:700">${t.name}</figcaption></figure>`).join("");
$("#fq").innerHTML=C.faqs.map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join("");
$("#sv").innerHTML='<option value="">Choose a treatment</option>'+C.services.map(s=>`<option>${s.title}</option>`).join("");
const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],t12=h=>{const m=h%12||12;return m+(h<12?" am":" pm")};
$("#info").innerHTML=`<dt>Address</dt><dd>${C.address}</dd><dt>Phone</dt><dd>${C.phone}</dd>`+[[1,5],[6,6],[0,0]].map(([a,b])=>{const h=C.hours[a];return `<dt>${a===b?days[a]:days[a].slice(0,3)+"\u2013"+days[b].slice(0,3)}</dt><dd>${h?t12(h[0])+" \u2013 "+t12(h[1]):"Closed"}</dd>`}).join("");
/* open now */
function open(){const n=new Date(),h=C.hours[n.getDay()],x=n.getHours()+n.getMinutes()/60,b=$("#open");let t;
 if(h&&x>=h[0]&&x<h[1]){b.classList.remove("closed");t=`Open now, until ${t12(h[1])}`}else{b.classList.add("closed");
  let d=h&&x<h[0]?0:1,nx;for(;d<8;d++){const o=C.hours[(n.getDay()+d)%7];if(o){nx=[d,o[0]];break}}
  t=`Closed, opens ${nx[0]===0?"today":nx[0]===1?"tomorrow":days[(n.getDay()+nx[0])%7]} at ${t12(nx[1])}`}
 b.lastElementChild.textContent=t}open();setInterval(open,6e4);
/* JSON-LD */
$("#ld").textContent=JSON.stringify({"@context":"https://schema.org","@type":["LocalBusiness","Dentist"],name:C.name,description:C.tagline,telephone:C.phone,email:C.email,address:{"@type":"PostalAddress",streetAddress:C.address,addressLocality:C.city,addressCountry:"IN"},priceRange:"\u20B9\u20B9",image:new URL("assets/og.jpg",location.href).href,openingHoursSpecification:Object.entries(C.hours).filter(([,v])=>v).map(([d,v])=>({"@type":"OpeningHoursSpecification",dayOfWeek:days[d],opens:String(v[0]).padStart(2,"0")+":00",closes:String(v[1]).padStart(2,"0")+":00"}))});
/* Lenis smooth scroll */
const rm0=matchMedia("(prefers-reduced-motion:reduce)").matches;
if(window.Lenis&&!rm0){L=new Lenis({duration:1.1,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t))});const raf=t=>{L.raf(t);requestAnimationFrame(raf)};requestAnimationFrame(raf);document.documentElement.classList.add("lenis")}
const go=h=>{const el=document.querySelector(h);if(!el)return;L?L.scrollTo(el,{offset:-84}):el.scrollIntoView({behavior:"smooth"})};
document.addEventListener("click",e=>{const a=e.target.closest('a[href^="#"]');if(!a||!L)return;const h=a.getAttribute("href");if(h.length>1&&h!=="#admin"){e.preventDefault();go(h);history.replaceState(null,"",h)}else if(h==="#top"){e.preventDefault();L.scrollTo(0)}});
const lock=o=>{if(L)o?L.stop():L.start()};
/* nav */
const hd=$("header"),dr=$("#drawer");addEventListener("scroll",()=>hd.classList.toggle("sh",scrollY>30),{passive:true});
const tog=o=>{lock(o);dr.classList.toggle("open",o);dr.inert=!o;$("#burger").setAttribute("aria-expanded",o);o?$("#dx").focus():$("#burger").focus()};
$("#burger").onclick=()=>tog(1);$("#dx").onclick=()=>tog(0);dr.addEventListener("click",e=>{if(e.target.closest("a"))tog(0)});
addEventListener("keydown",e=>{if(e.key==="Escape"&&dr.classList.contains("open"))tog(0)});
/* modals */
const sm=$("#sm");let cur;
document.addEventListener("click",e=>{const c=e.target.closest(".card");if(c){cur=C.services.find(s=>s.id===c.dataset.s);
 $("#smi").src=`assets/${cur.photo}.webp`;$("#smi").alt=cur.title+" at the clinic";$("#smt").textContent=cur.title;$("#smp").textContent=cur.text;$("#smd").textContent="Duration: "+cur.time;$("#smf").textContent="Starting from "+inr(cur.from);sm.showModal();lock(1)}
 if(e.target.closest("dialog .close")||e.target===sm||e.target===$("#vm"))e.target.closest("dialog").close();
 const dc=e.target.closest("[data-doc]");if(dc)$("[name=msg]").value="I'd like to see "+dc.dataset.doc+".";});
$("#smb").onclick=()=>{sm.close();lock(0);$("#sv").value=cur.title;go("#book");$("[name=name]").focus({preventScroll:true})};
const vm=$("#vm");$("[data-video]").onclick=()=>{$("#vb").innerHTML=C.videoUrl?`<iframe src="${C.videoUrl}" title="Clinic tour" style="width:100%;aspect-ratio:16/9;border:0" allowfullscreen></iframe>`:`${img("reception",900,491,"Clinic reception",0)}<div class="in"><h3>Clinic tour coming soon</h3><p>Add a YouTube embed link to videoUrl in config.js to play your own video here.</p></div>`;vm.showModal();lock(1)};
vm.addEventListener("close",()=>{$("#vb").innerHTML="";lock(0)});sm.addEventListener("close",()=>lock(0));
/* before/after */
const br=$("#br");br.oninput=()=>{$("#bf").style.clipPath=`inset(0 ${100-br.value}% 0 0)`;$("#bl").style.left=br.value+"%"};br.value=50;br.oninput();
/* carousel */
const car=$("#car");$("#nx").onclick=()=>car.scrollBy({left:car.clientWidth*.7,behavior:"smooth"});$("#pv").onclick=()=>car.scrollBy({left:-car.clientWidth*.7,behavior:"smooth"});
/* booking */
const dt=$("#dt"),tm=$("#tm"),iso=d=>new Date(d.getTime()-d.getTimezoneOffset()*6e4).toISOString().slice(0,10);dt.min=iso(new Date());
dt.onchange=()=>{const d=new Date(dt.value+"T00:00"),h=C.hours[d.getDay()];tm.innerHTML="";
 if(!dt.value)return;if(!h){tm.innerHTML="<option value=''>Closed that day</option>";return}
 let o="<option value=''>Choose a time</option>";const now=new Date(),same=dt.value===iso(now);
 for(let m=h[0]*60;m<h[1]*60;m+=C.slotMinutes){if(same&&m<=now.getHours()*60+now.getMinutes())continue;const s=`${String(m/60|0).padStart(2,"0")}:${String(m%60).padStart(2,"0")}`;o+=`<option>${s}</option>`}
 tm.innerHTML=o};
const f=$("#f");f.onsubmit=e=>{e.preventDefault();const v=Object.fromEntries(new FormData(f));let bad=0;
 const chk=(n,ok,m)=>{const el=f[n];el.setAttribute("aria-invalid",!ok);el.parentElement.querySelector(".err").textContent=ok?"":m;if(!ok){bad++;if(bad===1)el.focus()}};
 const d=v.date?new Date(v.date+"T00:00"):null;
 chk("name",v.name.trim().length>1,"Enter your name.");chk("phone",/^(\+?91)?[6-9]\d{9}$/.test(v.phone.replace(/[\s-]/g,"")),"Enter a valid 10-digit mobile number.");
 chk("service",!!v.service,"Choose a treatment.");chk("date",!!d&&v.date>=dt.min&&!!C.hours[d.getDay()],d&&!C.hours[d.getDay()]?"We are closed that day.":"Pick today or a later date.");chk("time",!!v.time,"Choose a time slot.");
 if(bad)return;const t=`Hello ${C.name}, I'd like to book ${v.service} on ${v.date} at ${v.time}.\nName: ${v.name}\nPhone: ${v.phone}${v.msg?"\nNote: "+v.msg:""}`;
 window.open(`${wa}?text=${encodeURIComponent(t)}`,"_blank","noopener");$("#fb").style.display="none";$("#ok").classList.add("show");
 const em=$("#em"),sub="New appointment request: "+v.service;em.textContent="Emailing your details to the clinic...";
 fetch("https://formsubmit.co/ajax/"+C.bookingEmail,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({_subject:sub,_template:"table",name:v.name,phone:v.phone,treatment:v.service,date:v.date,time:v.time,message:v.msg||"-"})})
 .then(r=>{if(!r.ok)throw 0;em.textContent="Your details were also emailed to the clinic."})
 .catch(()=>{const a=document.createElement("a");a.href=`mailto:${C.bookingEmail}?subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(t)}`;a.textContent="Send the details by email";em.textContent="Automatic email did not send. ";em.append(a)})};
$("#again").onclick=()=>{f.reset();tm.innerHTML="<option value=''>Pick a date first</option>";$("#fb").style.display="grid";$("#ok").classList.remove("show")};
/* counters + reveal */
const rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
const io=new IntersectionObserver(es=>es.forEach(x=>{if(!x.isIntersecting)return;io.unobserve(x.target);const t=x.target;
 if(t.dataset.n){const n=+t.dataset.n,fx=+t.dataset.f||0,s=t.dataset.s||"";if(rm){t.textContent=n.toFixed(fx)+s;return}const t0=performance.now();(function k(now){const p=Math.min((now-t0)/1400,1);t.textContent=(n*(1-Math.pow(1-p,3))).toFixed(fx)+s;if(p<1)requestAnimationFrame(k)})(t0)}else t.classList.add("in")}),{threshold:.2});
$$("[data-n]").forEach(e=>io.observe(e));$$(".rv").forEach(e=>rm?e.classList.add("in"):io.observe(e));
/* hero parallax */
if(!rm)addEventListener("mousemove",e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;$$(".chip").forEach(c=>{const d=+c.dataset.d;c.style.transform=`translate(${x*d}px,${y*d}px)`})},{passive:true});
/* admin route */
const route=()=>document.body.classList.toggle("is-admin",location.hash==="#admin");addEventListener("hashchange",route);route();
})();
