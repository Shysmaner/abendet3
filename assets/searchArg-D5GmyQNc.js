var m=Object.defineProperty;var u=(o,t,s)=>t in o?m(o,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[t]=s;var r=(o,t,s)=>u(o,typeof t!="symbol"?t+"":t,s);import{R as a,g as x,j as e,c as g}from"./country-D3IyiI93.js";/* empty css                  */import{A as j}from"./AppearMenu-CU4Cm2S3.js";import{c as p,a as f}from"./cookies-DJwG0iie.js";class k extends a.Component{constructor(s){super(s);r(this,"toggleMenu",()=>{const s=this.rightArrowRef.current,i=document.querySelector(".mobile-content");s&&i&&(s.classList.toggle("rotation"),i.classList.toggle("shaking2"),setTimeout(()=>{i.classList.toggle("shaking1"),setTimeout(()=>{i.classList.toggle("shaking2")},200),setTimeout(()=>{i.classList.toggle("shaking1")},200),setTimeout(()=>{i.classList.toggle("visibility")},200)},200))});r(this,"navigateTo",s=>{window.location.href=s});r(this,"handleAcceptCookies",()=>{f(),this.setState({cookiesAccepted:!0})});this.rightArrowRef=a.createRef(),this.state={cookiesAccepted:p()}}componentDidMount(){x().then(c=>{if(c!="Argentina"){let l=document.body;l.innerHTML="",l.innerHTML="Página no disponible"}}),this.rightArrowRef.current&&this.rightArrowRef.current.addEventListener("click",this.toggleMenu);const s=document,i=s.querySelectorAll(".item"),d=s.querySelector(".results"),h=localStorage.getItem("input-value")||"";let n=0;i.forEach(c=>{c.textContent.toLowerCase().includes(h.toLowerCase())&&(c.classList.add("item-appear"),n++)}),d.textContent=`Resultados (${n})`}componentWillUnmount(){this.rightArrowRef.current&&this.rightArrowRef.current.removeEventListener("click",this.toggleMenu)}render(){const{cookiesAccepted:s}=this.state;return e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:"top",children:[e.jsx("i",{className:"fa-solid fa-chevron-right",ref:this.rightArrowRef}),e.jsxs("div",{className:"mobile-content",children:[e.jsx("a",{href:"../index.html",children:"INICIO"}),e.jsx("a",{href:"../about-us/index.html",children:"ACERCA DE"}),e.jsx("a",{href:"../products/index.html",children:"PRODUCTOS"})]}),e.jsx("a",{href:"../index.html",className:"reload-page",children:e.jsx("img",{src:"../../../src/assets/brand.png",className:"brand",alt:"Brand"})}),e.jsxs("div",{className:"top-sections",children:[e.jsx("button",{onClick:()=>this.navigateTo("../"),className:"products btns",children:"INICIO"}),e.jsx("button",{onClick:()=>this.navigateTo("../about-us/index.html"),className:"about-us btns",children:"ACERCA DE"}),e.jsx("button",{onClick:()=>this.navigateTo("../products/index.html"),className:"products btns",children:"PRODUCTOS"})]})]}),e.jsxs("section",{className:"content-section",children:[e.jsx("button",{className:"results"}),e.jsx("div",{className:"want",children:e.jsxs("ul",{children:[e.jsx("li",{className:"item",children:"Shampoo Fórmula Natural"}),e.jsx("li",{className:"item",children:"Acondicionador"}),e.jsx("li",{className:"item",children:"Acondicionador 2"})]})})]}),!s&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"cookies-advice activo",id:"cookies-advice",children:[e.jsx("img",{className:"cookie",src:"../../src/assets/cookie.svg",alt:"Cookie"}),e.jsx("h3",{className:"tittle",children:"Cookies"}),e.jsx("p",{className:"paragraph",children:"Utilizamos cookies propias y de terceros para mejorar nuestros servicios."}),e.jsx("button",{className:"button",id:"accept-cookies-btn",onClick:this.handleAcceptCookies,children:"De acuerdo"}),e.jsx("a",{className:"link",href:"../abendet-cookies/index.html",children:"Aviso de Cookies"})]}),e.jsx("div",{className:"back-cookies-advice activo",id:"back-cookies-advice"})]}),e.jsxs("footer",{className:"footer",children:[e.jsxs("div",{className:"footer-div1",children:[e.jsx("a",{href:"",children:"Productos"}),e.jsx("a",{href:"",children:"Acerca De"}),e.jsx("a",{href:"",children:"Contacto"})]}),e.jsxs("div",{className:"footer-div2",children:[e.jsx("a",{href:"",children:"Patrocinios"}),e.jsx("a",{href:"",children:"Cookies"}),e.jsx("a",{href:"",children:"Privacidad"})]})]}),e.jsx(j,{})]})}}g.createRoot(document.getElementById("root")).render(e.jsx(a.StrictMode,{children:e.jsx(k,{})}));
