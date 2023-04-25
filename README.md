## **VERIFICACIÓN DE TARJETA**
Este proyecto  esta orientado a la verificacion de una tarjetaa de credito introducida por el usuario cuando se realiza una compra en una tienda
La pagina no permite al usuario ingresar caracteres invalidos, tampoco permite excederse.


##  **Solución**

La solución de este aplicativo es muy sencillo, tan solo es para verificar si tu tarjeta de crédito es válida o no.
La logica del proyecto esta desplegada en el archivo validator.js, mientras que la manipulación del DOM la tenemos en el archivo index.js.

## **Pseudocódigo**

 Validar que la información ingresada cumpla los siguientes requisitos:
   
   *Leer número de tarjeta
   
   *Que sea un número de 13 dígitos.
   
   *No deben ser letras ni otro tipo de carácter.
   
   *Agrupar números a un array e invertir orden inicial de los dígitos ingresados.
   
   *Multiplicar por 2 los números en posiciones pares, si el resultado de la multiplicación es mayor o igual a 10 se suman dígitos del resultado.
   *Sumar todos los dígitos (posiciones pares e impares)
   *Aplicar módulo de 10, si el resultado es 0 la tarjeta es válida, caso contrario
    tarjeta inválida.
