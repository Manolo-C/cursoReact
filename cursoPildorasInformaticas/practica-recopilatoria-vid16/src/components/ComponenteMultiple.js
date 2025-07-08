const ComponenteMultiple = ({ opcion, dias }) => {
  const calculoCosteHotel = () => {
    const precioUnitario = 145;
    let descuento = 1;

    if (dias > 7 && dias < 14) descuento = 0.95;
    else if (dias > 14) descuento = 0.9;

    return <p>Precio hotel: ${(precioUnitario * dias) * descuento}.-</p>
  };

  const calculoCosteAuto = () => {
    const precioUnitario = 78;
    let descuento = 1;

    if (dias > 7 && dias < 14) descuento = 0.9;
    else if (dias > 14) descuento = 0.85;

    return <p>Precio auto: ${(precioUnitario * dias) * descuento}.-</p>
  };

  return <div>{opcion === "Hotel" ? calculoCosteHotel() : opcion === "Auto" ? calculoCosteAuto() : ""}</div>
};

export default ComponenteMultiple;