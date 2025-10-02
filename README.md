1. Realiza las instalaciones necesarias para trabajar con React Router y su respectiva
configuración en el proyecto. 
<span style="color: #RRGGBB;">R:se agrega "npm install react-router-dom"</span>

2. Traslada los componentes Home, Register, Login, Cart y Pizza a la carpeta pages.
R: se dejan esas paginas en la carpeta "views"
3. Crea las rutas necesarias para los componentes: 
● La ruta “/” debe mostrar el componente Home.
● La ruta “/register” debe mostrar el componente Register.
● La ruta “/login” debe mostrar el componente Login.
● La ruta “/cart” debe mostrar el componente Cart.
● La ruta “/pizza/p001” debe mostrar el componente Pizza.
● La ruta “/profile” debe mostrar un componente Profile.
● La ruta “/404” debe mostrar un componente NotFound.

R: se deja en la App.jsx, tal cual se solicita, pero  se deja la ruta  “/pizza”, ya que me deja un error 404.

4. Implementa un componente NotFound que se muestre cuando una ruta no exista.
Utiliza tu creatividad para esta página, pero debe contener un enlace que redirija a la
ruta “/”.
R: se agrega 404.jsx que arega un boton con enlace al home

5. Implementa un componente Profile que muestre un email de un usuario y un botón
para cerrar sesión.
R: Implementado
Por ahora tanto el botón de cerrar sesión como el email del usuario pueden ser
estáticos, en los siguientes hitos se trabajará en la implementación de la
autenticación.
6. Crea un componente Navbar que contenga un menú de navegación con enlaces a las
rutas anteriores (utilizando Link). Además, el botón "🛒 Total: $xxx" debe redirigir a la
ruta “/cart”. (2 puntos)
R: deje las actuales, pero profile y 404 las deje sin link de naveacion en el Navigation.jsx " lo cambie por que me provocaba conflicto el nombre Navbar"
