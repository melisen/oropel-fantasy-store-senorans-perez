Este proyecto fue desarrollado por Melina Señoráns Pérez para el curso de React dictado en  Coderhouse, entregado en julio de 2022.

TEMÁTICA DEL PROYECTO:
Comprende un e-commerce que facilita la compra de artículos relacionados a novelas del género fantástico y artículos afines estéticamente. Se definieron las categorías Libros, Chops e Indumentaria. Dentro de cada categoría se muestra una lista de items, y se puede acceder al detalle de cada uno que comprende precio, stock, descripción e imagen. Dentro del detalle se puede seleccionar la cantidad y agregarla al carrito de compras. Una vez que el carrito se termina de definir, se completa un formulario de datos personales y se envía una orden de compra, por la que el usuario recibe un código (el id del pedido) para simular el seguimiento del pedido.

LIBRERÍAS UTILIZADAS:
Se utiliza la librería Material UI para la creación de componentes y la definición de las propiedades de estilo, ya que considero que MUI es muy versátil y tiene buen funcionamiento y soporte, y su sistema de diseño es un estándar estético al día de hoy.
Se utilizó Firestore para simplificar el acceso a una base de datos (de los productos del e-commerce) ya que en este curso no desarrollamos backend.
se utiliza react-router-dom con BrowserRouter y Routes para poder especificar las rutas por las que se puede acceder al home, a la categoría clickeada en el navbar y a cada detalle de ítem.

ACCESO AL PROYECTO:
Para poder ver este proyecto:
https://github.com/melisen/oropel-fantasy-store-senorans-perez
Clonar el repositorio. 
Descargar el archivo, descomprimirlo, abrirlo en Visual Studio Code y correrlo con "npm start" en la terminal de VSC.