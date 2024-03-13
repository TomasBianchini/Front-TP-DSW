# Trabajo-Practico-Desarrollo-de-SoftWare
## Integrantes 
|Legajo|Apellido y Nombres|
|:-|-:|
|49105|Bianchini, Tomás|

## 1. Introducción
La aplicación se encarga de la gestión de pasajes de avión, proporciona a los usuarios la posibilidad de administrar sus pasajes, permitiendo la compra, cancelación y finalización del mismo.

## 2. Alcance Funcional
#### Aprobación Directa
|Req|Detalle|
|:-|-:|
|CRUD simple| 1.CRUD Shipping <br> 2.CRUD PaymentType <br> 3.CRUD User <br> 4.CRUD Category|
|CRUD dependiente|1.CRUD Product <br> 2.CRUD Discount <br> 3.CRUD Order <br> 4.CRUD Cart|
|Listado + detalle|1.Listado de productos filtrado por categoria => detalle de la descripcion, <br> precio, precio con descuento(en caso que la categoria tenga un descuento activo), imagen del producto |
|CUU/Epic|1. Completar un carrito con productos|
### Alcance Adicional Voluntario

|Req|Detalle|
|:-|-:|
|Listado + detalle|1. Listado de carritos completados => detalle de la fecha de compra, todos los productos con la cantidad, <br> el tipo de envio elegido, y la posibilidad de cancelar la compra si esta dentro del tiempo permitido |
|CUU/Epic|1. Cancelar un carrito <br> 3. Envio del carrito <br> 4. Moderación de reviews con la api de OpenAI|
