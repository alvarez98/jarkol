
$(function() {
var dict = {
  "Home": {
    es: "Inicio",
    en:"Home"
  },
  "About Us": {
    es: "Nosotros",
    en: "About Us"
  },
  "Discover":{
    en:"Discover",
    es:"Ver más"
  },
  "Contact":{
    es:"Contacto",
    en:"Contact"
  },
  "TECHNOLOGY AND ENGINEERING SERVICES":{
    es:"Servicios de Ingeniería y Tecnología",
    en:"TECHNOLOGY AND ENGINEERING SERVICES"
  },
  "Our Products and Services":{
    es:"Nuestros Productos y Servicios",
    en:"Our Products and Services"
  },
  "Experts in horizontal well logging.":{
    en:"Experts in horizontal well logging.",
    es:"Expertos en registros de pozos horizontales."
  },
  "Geothermal":{
    en:"Geothermal",
    es:"Geotermia"
  },
  "Downhole Monitoring Systems":{
    en:"Downhole Monitoring Systems",
    es:"Sistemas de monitoreo de fondo"
  },
  "Directional Drilling and Logging Tools":{
    en:"Directional Drilling and Logging Tools",
    es:"Herramientas de registros y perforación direccional"
  },
  "Technical Consultancy":{
    en:"Technical Consultancy",
    es:"Consultoría Técnica"
  },
  "From tackling personal decisions to reaching important milestones, our job is to guide you on the path of success. As professional Engineering Consultants, we guarantee great results.":{
    en:"From tackling personal decisions to reaching important milestones, our job is to guide you on the path of success. As professional Engineering Consultants, we guarantee great results.",
    es:"Desde abordar decisiones personales hasta alcanzar importantes hitos, nuestro trabajo es guiarlo en el camino del éxito. Como consultores profesionales de ingeniería, garantizamos grandes resultados."
  },
  "We are a service company for the Energy and Extraction Industry, with direct experience in Oil and Gas, Mining and Geothermal, particularly in drilling operations, geophysical logging with both wireline and while drilling tools and production parameters monitoring, focused on the introduction of new, better and more accesible technologies in the Latin American market.":{
    en:"We are a service company for the Energy and Extraction Industry, with direct experience in Oil and Gas, Mining and Geothermal, particularly in drilling operations, geophysical logging with both wireline and while drilling tools and production parameters monitoring, focused on the introduction of new, better and more accesible technologies in the Latin American market.",
    es:"Somos una empresa de servicios para la Industria de Energía y Extracción, con experiencia directa en petróleo y gas, minería y geotermia, en particular en operaciones de perforación, registro geofísico tanto con cable como con mientras que las herramientas de perforación y el monitoreo de los parámetros de producción se enfocaron en la introducción de nuevos, mejores y más Tecnologías accesibles en el mercado latinoamericano."
  },
  "Get in Touch":{
    en:"Get in Touch",
    es:"Contáctanos"
  },
  "Mission":{
    en:"Mission",
    es:"Misión"
  },
  "To provide, Import and develop technology for the Oil and Gas, Geothermal and Mining industry in the Mexican Market in order to promote and boost competitiveness.":{
    en:"To provide, Import and develop technology for the Oil and Gas, Geothermal and Mining industry in the Mexican Market in order to promote and boost competitiveness.",
    es:"Para proporcionar, importar y desarrollar tecnología para la industria de petróleo y gas, geotérmica y minera en el Mercado mexicano para promover y potenciar la competitividad."
  },
  "Vision":{
    en:"Vision",
    es:"Visión"
  },
  "To become one of the leading Mexican companies boosting the development of technology and strategical tools for the Energy Industry in Mexico and Latin America.":{
    en:"To become one of the leading Mexican companies boosting the development of technology and strategical tools for the Energy Industry in Mexico and Latin America.",
    es:"Para convertirse en una de las empresas mexicanas líderes en impulsar el desarrollo de tecnología y herramientas estratégicas para la industria de la energía en México y América Latina."
  },
  "Clients":{
    en:"Clients",
    es:"Clientes"
  },
  "We work with several companies from around the world in the Energy industry on complex matters, focused on Geothermal and Oil and Gas projects. After a few sessions with us, our clients have been able to get back on track and experience the long lasting impacts of our services.":{
    en:"We work with several companies from around the world in the Energy industry on complex matters, focused on Geothermal and Oil and Gas projects. After a few sessions with us, our clients have been able to get back on track and experience the long lasting impacts of our services.",
    es:"Trabajamos con varias empresas de todo el mundo en la industria de la energía en asuntos complejos, enfocados en proyectos geotérmicos y de petróleo y gas. Después de algunas sesiones con nosotros, nuestros clientes han podido retomar el rumbo y experimentar los impactos duraderos de nuestros servicios."
  },
  "The Cutting Edge":{
    en:"The Cutting-Edge",
    es:"Lo último en tecnología"
  },
  "We offer a variety of services to all of our clients, customized to fit their specific needs. Are you a large corporation looking for a step-by-step plan of action? Or, are you are a small startup just beginning your business? No matter what your needs are, Jarkol Technologies is here to provide you guidance every step of the way. Take a look below to see what we can do for you.":{
    en:"We offer a variety of services to all of our clients, customized to fit their specific needs. Are you a large corporation looking for a step-by-step plan of action? Or, are you are a small startup just beginning your business? No matter what your needs are, Jarkol Technologies is here to provide you guidance every step of the way. Take a look below to see what we can do for you.",
    es:"Ofrecemos una variedad de servicios a todos nuestros clientes, personalizados para satisfacer sus necesidades específicas. ¿Eres una gran empresa que busca un plan de acción paso a paso? O, ¿eres una pequeña empresa que recién comienza tu negocio? No importa cuáles sean sus necesidades, Jarkol Technologies está aquí para brindarle orientación en cada paso del camino. Eche un vistazo a continuación para ver qué podemos hacer por usted."
  },
  "Drilling Engineering":{
    en:"Drilling Engineering",
    es:"Ingeniería de perforación"
  },
  "Technical Consulting":{
    en:"Technical Consulting",
    es:"Consultoría Técnica"
  },
  "Do you have a particular challenge you are currently dealing with? Contact us today and explore what we can do for you.":{
    en:"Do you have a particular challenge you are currently dealing with? Contact us today and explore what we can do for you.",
    es:"¿Tienes un desafío particular con el que te estás enfrentando actualmente? Contáctenos hoy y explore lo que podemos hacer por usted."
  },
  "Your message has been sent. Thank you!":{
    en:"Your message has been sent. Thank you!",
    es:"Tu mensaje ha sido enviado. ¡Gracias!"
  },
  "Send Message":{
    en:"Send Message",
    es:"Enviar Mensaje"
  },
  "Address":{
    en:"Address",
    es:"Dirección"
  },
  "Follow Us":{
    en:"Follow Us",
    es:"Síguenos"
  },
  "Contact Us":{
    en:"Contact Us",
    es:"Contáctanos"
  }
}; 
var _t = $('body').translate({lang: "en", t: dict});
var str = _t.g("translate");
console.log(str);


$(".lang_selector").click(function(ev) {
    var lang = $(this).attr("data-value");
    _t.lang(lang);
    console.log(lang);
    ev.preventDefault();
    if(lang=="es"){
      $("#tec").text("SERVICIOS DE INGENIERÍA & TECNOLOGÍA");
      $("#prod").text('Productos & Servicios');
      $("#prod1").text('Productos & Servicios');
      $("#vision").text('Para convertirse en una de las empresas mexicanas líderes en impulsar el desarrollo de tecnología y herramientas estratégicas para la industria de la energía en México y América Latina.');
    }else{
      $("#tec").text("TECHNOLOGY & ENGINEERING SERVICES");
      $("#prod").text('Products & Services');
      $("#prod1").text('Products & Services');
      $("#vision").text('To become one of the leading Mexican companies boosting the development of technology and strategical tools for the Energy Industry in Mexico and Latin America.');
    }
  });
 });

