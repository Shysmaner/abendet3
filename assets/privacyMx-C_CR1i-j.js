var t=Object.defineProperty;var c=(r,s,o)=>s in r?t(r,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[s]=o;var a=(r,s,o)=>c(r,typeof s!="symbol"?s+"":s,o);import{R as n,g as l,j as e,c as d}from"./country-D3IyiI93.js";class m extends n.Component{constructor(o){super(o);a(this,"handleRightArrowClick",()=>{const o=this.rightArrowRef.current,i=this.mobileContentRef.current;o.classList.toggle("rotation"),i.classList.add("shaking2"),setTimeout(()=>{i.classList.toggle("shaking1"),setTimeout(()=>{i.classList.toggle("shaking2")},200),setTimeout(()=>{i.classList.toggle("visibility")},200)},200)});this.rightArrowRef=n.createRef(),this.mobileContentRef=n.createRef()}componentDidMount(){l().then(o=>{if(o!="Mexico"){let i=document.body;i.innerHTML="",i.innerHTML="Página no disponible"}})}render(){return e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:"top",children:[e.jsx("i",{className:"fa-solid fa-chevron-right",onClick:this.handleRightArrowClick,ref:this.rightArrowRef}),e.jsxs("div",{className:"mobile-content",ref:this.mobileContentRef,children:[e.jsx("a",{href:"../products/index.html",children:"PRODUCTS"}),e.jsx("a",{href:"../",children:"HOME"}),e.jsx("a",{href:"../contact-us/index.html",children:"CONTACT US"})]}),e.jsx("a",{href:"../../mexico/index.html",className:"reload-page",children:e.jsx("img",{src:"../../src/assets/brand.png",className:"brand",alt:"Brand"})}),e.jsxs("div",{className:"top-sections",children:[e.jsx("button",{onClick:()=>location.href="../products/index.html",className:"products btns",children:"PRODUCTS"}),e.jsx("button",{onClick:()=>location.href="../",className:"about-us btns",children:"HOME"}),e.jsx("button",{onClick:()=>location.href="../contact-us/index.html",className:"contact-us btns",children:"CONTACT US"})]})]}),e.jsx("section",{className:"content-section",children:e.jsxs("div",{className:"cookies-info",children:[e.jsx("h1",{children:"Nuestras Politicas de Privacidad"}),e.jsx("p",{children:"En Abendet, valoramos tu privacidad y nos comprometemos a proteger la información personal que compartes con nosotros. Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos tu información cuando utilizas nuestro sitio web o servicios."}),e.jsx("h2",{children:"Información que Recopilamos"}),e.jsx("p",{children:"Recopilamos información personal que nos proporcionas voluntariamente al registrarte, hacer una compra, o comunicarte con nosotros. Esto puede incluir tu nombre, dirección de correo electrónico, número de teléfono, y detalles de pago."}),e.jsx("h2",{children:"Uso de tu Información"}),e.jsx("p",{children:"Utilizamos la información que recopilamos para proporcionarte nuestros productos y servicios, procesar tus pedidos, mejorar la experiencia del usuario y mantenerte informado sobre actualizaciones o promociones relacionadas con Abendet."}),e.jsx("h2",{children:"Protección de tu Información"}),e.jsx("p",{children:"En Abendet, implementamos medidas de seguridad adecuadas para proteger tu información personal contra accesos no autorizados, alteraciones o divulgaciones. Sin embargo, ninguna transmisión de datos por Internet es completamente segura, por lo que no podemos garantizar una seguridad absoluta."}),e.jsx("h2",{children:"Compartir tu Información"}),e.jsx("p",{children:"No compartimos tu información personal con terceros, salvo en casos necesarios para procesar pagos, cumplir con la ley, o mejorar nuestros servicios. En tales casos, nos aseguramos de que cualquier tercero cumpla con las mismas medidas de seguridad y confidencialidad."})]})}),e.jsxs("footer",{className:"footer",children:[e.jsxs("div",{className:"footer-div1",children:[e.jsx("a",{href:"../products/index.html",children:"Productos"}),e.jsx("a",{href:"../about-us/index.html",children:"Acerca De"}),e.jsx("a",{href:"../contact-us/index.html",children:"Contacto"})]}),e.jsxs("div",{className:"footer-div2",children:[e.jsx("a",{href:"../sponsorships/index.html",children:"Patrocinios"}),e.jsx("a",{href:"../abendet-cookies/index.html",children:"Cookies"}),e.jsx("a",{href:"../abendet-privacy/index.html",children:"Privacidad"})]})]})]})}}d.createRoot(document.getElementById("root")).render(e.jsx(n.StrictMode,{children:e.jsx(m,{})}));
