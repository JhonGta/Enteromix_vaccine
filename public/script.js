const introStyles=document.createElement('link');introStyles.rel='stylesheet';introStyles.href='/intro.css';document.head.append(introStyles);
const introLayout=document.createElement('link');introLayout.rel='stylesheet';introLayout.href='/intro-layout.css?v=3';document.head.append(introLayout);
const introLayoutV4=document.createElement('link');introLayoutV4.rel='stylesheet';introLayoutV4.href='/intro-layout-v4.css?v=4';document.head.append(introLayoutV4);
const introFix=document.createElement('link');introFix.rel='stylesheet';introFix.href='/intro-fix.css';document.head.append(introFix);
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('nav');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});
document.querySelectorAll('nav a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(item=>observer.observe(item));
