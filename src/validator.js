const validator = {
  // ...
  isValid: function (numeroDeTarjeta) {
    let sumaTotal = 0;
    let sumaImpar = 0;
    const tarjetaDeCredito = numeroDeTarjeta.toString();
    //console.log(tarjetaDeCredito)

    const tarjetaInvertida = tarjetaDeCredito.split("").reverse().join("");
    for (let i = 0; i < tarjetaInvertida.length; i++) {
      const numeroPar = parseInt(tarjetaInvertida.charAt(i), 10);
      //console.log(tarjetaInvertida)

      let digito;
      if ((i + 1) % 2 === 0) {
        digito = numeroPar * 2;
        //  console.log(digito)
        if (digito >= 10) {
          sumaTotal += digito
            .toString()
            .split("")
            .reduce((a, b) => parseInt(a, 10) + parseInt(b, 10));

          //console.log(digito)
        } else {
          sumaTotal += parseInt(digito, 10);
        }
      } else {
        sumaImpar += parseInt(tarjetaInvertida[i]);
        // console.log(sumaImpar)
      }
    }

    console.log(sumaTotal);
    console.log(sumaImpar);
    sumaTotal += sumaImpar;
    return sumaTotal % 10 === 0;
  },

  maskify: function (numeroDeTarjeta) {
    numeroDeTarjeta = numeroDeTarjeta.toString();
    let oculto = "";
    for (let i = 0; i < numeroDeTarjeta.length; i++) {
      if (i < numeroDeTarjeta.length - 4) {
        oculto = oculto + "#";
      } else {
        oculto = oculto + numeroDeTarjeta[i];
      }
    }

    return oculto;
  },

  //
};
export default validator;

