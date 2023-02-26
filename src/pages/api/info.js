export default function Info(req, res) {
  res.status(200).json({
    telephone: "+51 944 908 557",
    address: "Calle Arequipa Cuadra 02 #123",
    motto:
      "Nuestra CASA DE ESPERANZA Eso somos, eso seremos, Esperanza para los que no la tienen; realidad en las promesas. Esperanza en la vida eterna. Esperanza en el Único, Jesucristo, el SEÑOR DE LA ESPERANZA.",
    mision:
      'NUESTRA MISIÓN "Guiar a las personas a una vida abundante en JESUCRISTO, evangelizando, educando, sirviendo y viviendo la Santidad, para que DIOS sea Glorificado"',
    vision:
      "Una Iglesia en Unidad con Liderazgo transparente, eficiente y eficaz, siendo un pueblo Santo que es consciente de ser hijos de DIOS, discípulo de CRISTO y solidarios, para Evangelizar a nuestra comunidad Ferreñafana",
  });
}
