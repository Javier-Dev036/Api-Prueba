const express = require("express");
const app = express();
const port = 3000;

// Datos ficticios para las tablas
const alojamientos = [
    {
        idAlojamiento: 1,
        idTipoAlojamiento: 3,
        nbAlojamiento: 'Hotel Embajadores',
        idPersona: 1,
        idEstatus: 1,
        cvAlojamiento: "A001",
        precio: "2,215.00",
        desDescripcion: "Ofrece una piscina y zona Wi-Fi gratuita. El restaurante sirve platos caseros de la región. Todas las habitaciones disponen de aire acondicionado, TV por cable y baño moderno y amplio. El ascensor llega a todas las plantas.",
        desDireccion: "Calle 61 #534 por 68, 97000 Mérida, México",
        desLatitud: "19.432608",
        desLongitud: "-99.133209",
        desReferencia: "El Hotel Embajadores está situado en el centro de Mérida, a 3 calles de la plaza principal.",
        feRegistro: "2023-07-29",
        fgActivo: true,
        numCuartos: 3,
    },
    {
        idAlojamiento: 2,
        idTipoAlojamiento: 2,
        nbAlojamiento: 'CASA DECO - Contemporary Artdecó',
        idPersona: 2,
        idEstatus: 2,
        cvAlojamiento: "A002",
        precio: "2,683.00",
        desDescripcion: "Contemporary Artdecó ofrece alojamiento muy bien ubicado en el centro de Mérida y tiene jardín. Esta casa o chalet también dispone de piscina privada y wifi gratis.",
        desDireccion: "Calle 56 461, 97000 Mérida, México",
        desLatitud: "19.427608",
        desLongitud: "-99.137209",
        desReferencia: "Cerca del alojamiento hay puntos de interés como Catedral de Mérida, Plaza Grande y Parque De La Mejorada. El aeropuerto (Aeropuerto Internacional Manuel Crescencio Rejón) está a 6 km.",
        feRegistro: "2023-07-30",
        fgActivo: true,
        numCuartos: 1,
    },
    {
        idAlojamiento: 3,
        idTipoAlojamiento: 1,
        nbAlojamiento: '12, Colonia Temozon Norte, C.P. 97302',
        idPersona: 3,
        idEstatus: 1,
        cvAlojamiento: "A003",
        precio: "12,500.00",
        desDescripcion: "Departamento disponible en la zona de temozón norte complejo de 6 departamentos, con caseta de seguridad.",
        desDireccion: "Ubicado cerca de el parque de Santa Ana, col. centro",
        desLatitud: "19.422608",
        desLongitud: "-99.132209",
        desReferencia: "Se encuentra conectada con la carretera mérida progreso y el anillo periférico, por lo que la playa se encuentra a escasos 20 minutos.",
        feRegistro: "2023-07-31",
        fgActivo: false,
        numCuartos: 1,
    },
    {
        idAlojamiento: 4,
        idTipoAlojamiento: 2,
        nbAlojamiento: 'Casa Tavera- Adults Only',
        idPersona: 1,
        idEstatus: 1,
        cvAlojamiento: "A004",
        precio: "3,683.00",
        desDescripcion: "En Casa Tavera- Adults Only se puede disfrutar de un desayuno a la carta o americano.",
        desDireccion: "Calle 49, Número 493 entre 60 y 58. Col. Centro, Merida, Yucatan, 97000 Mérida, México",
        desLatitud: "19.432608",
        desLongitud: "-99.133209",
        desReferencia: "Cerca del alojamiento hay puntos de interés como Plaza Grande, Parque De La Mejorada y Centro Internacional de Congresos de Yucatán.",
        feRegistro: "2023-07-29",
        fgActivo: true,
        numCuartos: 4,
    },
    {
        idAlojamiento: 5,
        idTipoAlojamiento: 1,
        nbAlojamiento: 'SN, Colonia Residencial del Mayab, C.P. 97302',
        idPersona: 1,
        idEstatus: 2,
        cvAlojamiento: "A005",
        precio: "11,500.00",
        desDescripcion: " departamento ubicado en avenida principal en la colonia maya, a 5 minutos de plaza altabrisa. se encuentra rodeado de vialidades primarias como el periférico cercana a hospitales de primer nivel como el hospital regional de alta especialidad y star medica; centros comerciales, hoteles y supermercados.",
        desDireccion: "Departamento ubicado en avenida principal en la colonia maya, a 5 minutos de plaza altabrisa.",
        desLatitud: "19.432608",
        desLongitud: "-99.133209",
        desReferencia: "Se encuentra rodeado de vialidades primarias como el periférico cercana a hospitales de primer nivel como el hospital regional de alta especialidad y star medica",
        feRegistro: "2023-07-29",
        fgActivo: true,
        numCuartos: 1,
    },
    {
        idAlojamiento: 6,
        idTipoAlojamiento: 3,
        nbAlojamiento: 'Hotel Doralba Inn',
        idPersona: 1,
        idEstatus: 1,
        cvAlojamiento: "A006",
        precio: "1,093.50",
        desDescripcion: "Hotel Doralba Inn ocupa una mansión colonial situada en el centro histórico, a 300 metros de la Plaza Mayor. En este parque central encontrará la catedral, el Palacio de Gobierno, el Museo Olimpo y la Casa de Montejo, que perteneció al fundador de la ciudad.",
        desDireccion: "Calle 63 No 464 x 52 y 54, 97000 Mérida, México",
        desLatitud: "19.432608",
        desLongitud: "-99.133209",
        desReferencia: "El establecimiento está a menos de 3 km del parque de las Américas y en las calles de los alrededores podrá observar numerosos ejemplos de arquitectura colonial. El aeropuerto de Mérida se halla a 15 minutos en coche del hotel.",
        feRegistro: "2023-07-29",
        fgActivo: true,
        numCuartos: 2,
    },
    {
        idAlojamiento: 7,
        idTipoAlojamiento: 3,
        nbAlojamiento: 'Ibis Styles Merida Galerias',
        idPersona: 1,
        idEstatus: 2,
        cvAlojamiento: "A008",
        precio: "832.31",
        desDescripcion: "Este hotel de 3 estrellas ofrece restaurante y tiene habitaciones con aire acondicionado, wifi gratis y baño privado. Este alojamiento libre de humo está a 11 min a pie de Gran Museo del Mundo Maya.",
        desDireccion: "Calle 3 #218 Por Ñ por 24 y 60 Col. Loma Bonita Xcumpich, 97205 Mérida, México",
        desLatitud: "19.432608",
        desLongitud: "-99.133209",
        desReferencia: "Ibis Styles Merida Galerias se encuentra en Mérida, a 15 min a pie de Centro de Convenciones Yucatán Siglo XXI y a 9,2 km de Catedral de Mérida.",
        feRegistro: "2023-07-29",
        fgActivo: true,
        numCuartos: 1,
    },
    {
        idAlojamiento: 8,
        idTipoAlojamiento: 1,
        nbAlojamiento: 'sn, Colonia Temozon Norte, C.P. 97302',
        idPersona: 1,
        idEstatus: 1,
        cvAlojamiento: "A008",
        precio: "15,500.00",
        desDescripcion: "Amenidades salón de usos múltiples baños pequeña alberca areas verdes equipamiento aires acondicionados abanicos persianas requisitos de renta 1 mes de renta 1 depósito con aval con propiedad en mérida",
        desDireccion: "Calle 55 499 x 60 y 58 At Santa Lucía Park Centro, Mérida 97000 México",
        desLatitud: "19.432608",
        desLongitud: "-99.133209",
        desReferencia: "Sin referencia",
        feRegistro: "2023-07-29",
        fgActivo: true,
        numCuartos: 3,
    },
    {
        idAlojamiento: 9,
        idTipoAlojamiento: 3,
        nbAlojamiento: 'Hotel el Español Paseo de Montejo',
        idPersona: 1,
        idEstatus: 1,
        cvAlojamiento: "A009",
        precio: "981.67",
        desDescripcion: "El establecimiento cuenta con piscina al aire libre. Además, hay ofrece WiFi gratuita en todas las habitaciones. El Hotel El Español Paseo de Montejo ofrece suites insonorizadas con TV de pantalla plana. Incluyen caja fuerte. ",
        desDireccion: "Av. Paseo De Montejo # 484 x 41 Col Centro, 97000 Mérida, México",
        desLatitud: "19.432608",
        desLongitud: "-99.133209",
        desReferencia: "Este hotel se encuentra en Mérida, en el estado mexicano de Yucatán, a pocos pasos del paseo de Montejo, que alberga numerosas tiendas y restaurantes.",
        feRegistro: "2023-07-29",
        fgActivo: true,
        numCuartos: 2,
    },
    {
        idAlojamiento: 10,
        idTipoAlojamiento: 2,
        nbAlojamiento: 'Casa del Balam MeridaSe abre en una ventana nueva',
        idPersona: 1,
        idEstatus: 2,
        cvAlojamiento: "A010",
        precio: "2,215.00",
        desDescripcion: "La Casa del Balam Merida, ubicada en una mansión de estilo Art Déco restaurada, tiene piscina al aire libre, zona de WiFi gratuita y habitaciones con aire acondicionado y TV por cable. La catedral de Mérida está a 2 calles.",
        desDireccion: "Calle 60 No 488 x 57, 97000 Mérida, México",
        desLatitud: "19.432608",
        desLongitud: "-99.133209",
        desReferencia: "La Casa del Balam Merida está a 2 calles de la plaza Grande de Mérida y a 5 minutos a pie de diversas cafeterías, tiendas y galerías.",
        feRegistro: "2023-07-29",
        fgActivo: true,
        numCuartos: 3,
    },
];

const tiposAlojamientos = [
    { idTipoAlojamiento: 1, nbTipoAlojamiento: "Departamento" },
    { idTipoAlojamiento: 2, nbTipoAlojamiento: "Casa" },
    { idTipoAlojamiento: 3, nbTipoAlojamiento: "Hotel" },
];

const personas = [
    { idPersona: 1, nbPersona: "Juan Pérez" },
    { idPersona: 2, nbPersona: "Ana López" },
    { idPersona: 3, nbPersona: "Carlos García" },
];

const estatus = [
    { idEstatus: 1, nbEstatus: "Disponible", desColor: "#44b101" },
    { idEstatus: 2, nbEstatus: "No Disponible", desColor: "#b10101" },
];

const alojamientosServicios = [
    { idAlojamiento: 1, idServicio: 1 },
    { idAlojamiento: 1, idServicio: 2 },
    { idAlojamiento: 1, idServicio: 3 },
    { idAlojamiento: 1, idServicio: 4 },
    { idAlojamiento: 2, idServicio: 1 },
    { idAlojamiento: 2, idServicio: 2 },
    { idAlojamiento: 2, idServicio: 3 },
    { idAlojamiento: 2, idServicio: 4 },
    { idAlojamiento: 3, idServicio: 1 },
    { idAlojamiento: 3, idServicio: 2 },
    { idAlojamiento: 3, idServicio: 3 },
    { idAlojamiento: 3, idServicio: 4 },
    { idAlojamiento: 4, idServicio: 1 },
    { idAlojamiento: 4, idServicio: 2 },
    { idAlojamiento: 4, idServicio: 3 },
    { idAlojamiento: 4, idServicio: 4 },
    { idAlojamiento: 5, idServicio: 1 },
    { idAlojamiento: 5, idServicio: 2 },
    { idAlojamiento: 5, idServicio: 3 },
    { idAlojamiento: 5, idServicio: 4 },
    { idAlojamiento: 6, idServicio: 1 },
    { idAlojamiento: 6, idServicio: 2 },
    { idAlojamiento: 6, idServicio: 3 },
    { idAlojamiento: 6, idServicio: 4 },
    { idAlojamiento: 7, idServicio: 1 },
    { idAlojamiento: 7, idServicio: 2 },
    { idAlojamiento: 7, idServicio: 3 },
    { idAlojamiento: 7, idServicio: 4 },
    { idAlojamiento: 8, idServicio: 1 },
    { idAlojamiento: 8, idServicio: 2 },
    { idAlojamiento: 8, idServicio: 3 },
    { idAlojamiento: 8, idServicio: 4 },
    { idAlojamiento: 9, idServicio: 1 },
    { idAlojamiento: 9, idServicio: 2 },
    { idAlojamiento: 9, idServicio: 3 },
    { idAlojamiento: 9, idServicio: 4 },
    { idAlojamiento: 10, idServicio: 1 },
    { idAlojamiento: 10, idServicio: 2 },
    { idAlojamiento: 10, idServicio: 3 },
    { idAlojamiento: 10, idServicio: 4 },
];

const servicios = [
    { idServicio: 1, nbServicio: "Internet", desIcono: "wifi-icon", desServicio: "Hay conexión a internet Wi-Fi disponible en todo el establecimiento. Gratis." },
    { idServicio: 2, nbServicio: "Electricidad", desIcono: "pool-icon", desServicio: "Piscina disponible" },
    { idServicio: 3, nbServicio: "Agua potable", desIcono: "pool-icon", desServicio: "Piscina disponible" },
    { idServicio: 4, nbServicio: "Agua caliente", desIcono: "pool-icon", desServicio: "Piscina disponible" },
    { idServicio: 5, nbServicio: "Patio / Terraza", desIcono: "pool-icon", desServicio: "Piscina disponible" },
    { idServicio: 6, nbServicio: "TV con cable", desIcono: "pool-icon", desServicio: "Piscina disponible" },
];

// Endpoint para obtener todos los alojamientos
app.get("/alojamientos", (req, res) => {
    const result = alojamientos.map((alojamiento) => ({
        ...alojamiento,
        tipoAlojamiento: tiposAlojamientos.find(
            (t) => t.idTipoAlojamiento === alojamiento.idTipoAlojamiento
        ),
        persona: personas.find((p) => p.idPersona === alojamiento.idPersona),
        estatus: estatus.find((e) => e.idEstatus === alojamiento.idEstatus),
        servicios: alojamientosServicios
            .filter((as) => as.idAlojamiento === alojamiento.idAlojamiento)
            .map((as) => servicios.find((s) => s.idServicio === as.idServicio)),
    }));
    res.json(result);
});

// Endpoint para obtener un alojamiento por ID
app.get("/alojamientos/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const alojamiento = alojamientos.find((a) => a.idAlojamiento === id);

    if (!alojamiento) {
        return res.status(404).json({ error: "Alojamiento no encontrado" });
    }

    res.json({
        ...alojamiento,
        tipoAlojamiento: tiposAlojamientos.find(
            (t) => t.idTipoAlojamiento === alojamiento.idTipoAlojamiento
        ),
        persona: personas.find((p) => p.idPersona === alojamiento.idPersona),
        estatus: estatus.find((e) => e.idEstatus === alojamiento.idEstatus),
        servicios: alojamientosServicios
            .filter((as) => as.idAlojamiento === alojamiento.idAlojamiento)
            .map((as) => servicios.find((s) => s.idServicio === as.idServicio)),
    });
});

// Endpoint para obtener todos los servicios
app.get("/servicios", (req, res) => {
    res.json(servicios);
});

// Endpoint para obtener un servicio por ID
app.get("/servicios/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const servicio = servicios.find((s) => s.idServicio === id);

    if (!servicio) {
        return res.status(404).json({ error: "Servicio no encontrado" });
    }

    res.json(servicio);
});

// Endpoint para filtrar alojamientos por servicios
app.get("/alojamientos/filtrar", (req, res) => {
    // Extraer los IDs de servicios desde la consulta
    const idsServicios = req.query.servicios ? req.query.servicios.split(',').map(Number) : [];

    // Filtrar los alojamientos que tengan todos los servicios solicitados
    const result = alojamientos.filter((alojamiento) => {
        const serviciosAlojamiento = alojamientosServicios
            .filter((as) => as.idAlojamiento === alojamiento.idAlojamiento)
            .map((as) => as.idServicio);
        
        return idsServicios.every((idServicio) => serviciosAlojamiento.includes(idServicio));
    }).map((alojamiento) => ({
        ...alojamiento,
        tipoAlojamiento: tiposAlojamientos.find(
            (t) => t.idTipoAlojamiento === alojamiento.idTipoAlojamiento
        ),
        persona: personas.find((p) => p.idPersona === alojamiento.idPersona),
        estatus: estatus.find((e) => e.idEstatus === alojamiento.idEstatus),
        servicios: alojamientosServicios
            .filter((as) => as.idAlojamiento === alojamiento.idAlojamiento)
            .map((as) => servicios.find((s) => s.idServicio === as.idServicio)),
    }));

    res.json(result);
});


// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});