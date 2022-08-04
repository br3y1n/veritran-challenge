const names = [
  "Amalia Soriano Acero",
  "Balduino Olivé Garmendia",
  "Abraham Cañizares Quintanilla",
  "Amador Jaume Tomé",
  "Candelario Pulido-Ramos",
  "Marcela Guzman Mateu",
  "Ramiro de Duarte",
  "Luna Blazquez Montoya",
  "Miguel de Gálvez",
  "Ramón Pou Vera",
  "Antonio de Sastre",
  "Samanta Miriam Almazán Cabo",
  "Sabina Amorós Blanco",
  "Isabela Amaya Carballo Aguirre",
  "Lucas Caparrós Coloma",
  "Humberto Tomás",
  "Sonia Pinilla Cuervo",
  "Carmelita Nogués Vilalta",
  "Guiomar Sarmiento Zapata",
  "Constanza Ricart Bautista",
  "Maximiliano Clemente Ibañez Cervera",
  "Marcelino Carrillo Aguilar",
  "Prudencia Quero Tejero",
  "Amor Juliá Hervia",
  "Aurelia Atienza Sáez",
  "Asunción Sevillano Bustamante",
  "Olga Obdulia Méndez Mate",
  "Concepción Ordóñez Arnal",
  "Enrique Borrell Pina",
  "Demetrio Sacristán Calvo",
  "Lidia Mateos Amores",
  "Rodolfo Girón Casado",
  "Leandro Molina Olivera",
  "Alma Castells Varela",
  "Juana Carro Mesa",
  "Rosalina Galvez Clavero",
  "Amador Isaac Gallego Ayllón",
  "Julie Torres Perelló",
  "Marcelino Carballo Tolosa",
  "Pacífica Elorza Ibañez",
  "Fernanda Clemente-Donaire",
  "Rosa María Larrea Gómez",
  "Sebastián Cabanillas Orozco",
  "Leandro Zorrilla Galan",
  "Matías del Ariño",
  "Aurelio de Chaparro",
  "Lucho del Palomares",
  "Anselmo de Antúnez",
  "Ofelia Giner",
  "Leoncio Morillo Nogueira",
  "Rogelio Iker Cáceres Pérez",
  "Mamen de Expósito",
  "Cipriano Company Navarrete",
  "Joel Luís Puerta Iñiguez",
  "Gastón Sierra Larrea",
  "Flor Rosales Luque",
  "Jordán Tirado",
  "Eliseo Cuenca Poza",
  "Clarisa Gutiérrez Olivares",
  "Moreno Barranco Santana",
  "Heliodoro Cerro Mas",
  "Atilio Bautista Pastor",
  "Marco del Briones",
  "Melania Carballo Nieto",
  "Herberto Gil Borja Cervera",
  "Eustaquio Fulgencio Fernández Saavedra",
  "Flavia Flor Villegas",
  "Fortunata Rivera-Pazos",
  "Consuelo Rosselló Palma",
  "América Lloret-Viña",
  "Clemente Solana Verdú",
  "Calista Solano Roselló",
  "Tomás Angelino Gutierrez Ríos",
  "Esther Echevarría-Navarro",
  "Aránzazu del Aliaga",
  "Catalina Ariza Niño",
  "Itziar de Estrada",
  "Ascensión Villena",
  "Nico de Valls",
  "Loreto Ismael Gallart Pombo",
  "Zacarías Rosario Díaz Mayoral",
  "Nydia Manjón-Dominguez",
  "Sebastián Ildefonso Olivares Puerta",
  "Laura Barragán",
  "Adalberto Arias-Pujadas",
  "Édgar de Lumbreras",
  "Édgar Gibert Herrera",
  "Diego Morante",
  "Jimena Alonso Rodrigo",
  "Lourdes Portillo Rodriguez",
  "Jessica Medina López",
  "Ángela de Fuentes",
  "Rebeca Morell-Ballesteros",
  "Zacarías Joaquín Rocha Figueras",
  "Nilda Arana-Coca",
  "Olimpia Orozco-Mateu",
  "Joaquina Planas Santos",
  "Maura Candelas Checa Rosales",
  "Jenaro Segarra-Álvaro",
  "Aurelia Carretero Morera",
  "Ruperta Palomo Blanca",
  "Iván Espada Puerta",
  "Tecla del Goñi",
  "Olga Donaire Barral",
  "José Manuel Amor Cabañas",
  "Elisabet de Múgica",
  "Pastor del Adadia",
  "Román Iriarte-Heredia",
  "Nidia Alemany Piñol",
  "Soraya Buendía-Bermudez",
  "Pascuala Criado Oliva",
  "José Armas Agustín",
  "Juan Pablo Sierra Aguirre",
  "Ignacia Nerea Costa Font",
  "Chema Bartolomé Hidalgo",
  "Maricela Bueno Tejero",
  "Kike Molins Bas",
  "Luz Pérez Querol",
  "Beatriz Fuster Exposito",
  "Raimundo del Villalobos",
  "Manuelita Miranda Alegre",
  "Sabina del Téllez",
  "Jose Luis de Anaya",
  "Máximo Garmendia Mariño",
  "Eusebia del Quintero",
  "Eusebio Ariño-Batlle",
  "Gastón Nuñez Figueras",
  "Sebastian Sáenz Abad",
  "Martín Riera",
  "Fito Esteve Cámara",
  "Régulo Escamilla Prado",
  "Rosa Nicolás Yáñez",
  "Eric Ferreras Garay",
  "Piedad Rivera Montaña",
  "Geraldo Cortina",
  "Borja Luján Cordero",
  "Jafet de Canals",
  "Aarón Luján",
  "Lilia Salas Moraleda",
  "Sarita Pedraza Requena",
  "Gil Lastra-Anglada",
  "Danilo Bustos",
  "Fortunato Miró Pallarès",
  "Roxana Morante Cabrero",
  "Florentina Conde Yáñez",
  "Nicodemo Becerra Cañete",
  "Prudencio Luna Sánchez",
  "Julio César Vilalta Verdejo",
  "Alejandra Maxi Roman Clavero",
  "Evaristo Salom Ferrer",
  "Estrella Niño Mulet",
  "Federico Báez Durán",
  "Ramón Querol",
  "Eli Salom",
  "Atilio Rómulo León Bru",
  "Raúl del Noriega",
  "Glauco Pacheco Tejada",
  "Gabriela Rodriguez",
  "Edgardo Torrent Saldaña",
  "Maximiliano Torrent Peiró",
  "Poncio Olivares-Moliner",
  "Guadalupe Tello",
  "Dalila de Asenjo",
  "Eulalia Saez",
  "Emilio Geraldo Gallo Casares",
  "Gloria Saavedra Torrens",
  "Saturnina Alcaraz Gomila",
  "Marciano Hernán Álvaro Manzanares",
  "Demetrio Lopez",
  "Ricarda Mancebo Fiol",
  "Roberta Ledesma Alcalá",
  "Baltasar Barceló Sanabria",
  "Fabricio Gonzalo Gras",
  "Vasco Yuste Jáuregui",
  "Vera del Fábregas",
  "Isa Lasa Roldán",
  "Fortunato Cases Arenas",
  "Sabina Lamas Mariño",
  "Gabino Lino Osuna Manzano",
  "Norberto Campillo Echevarría",
  "Plácido Piñeiro",
  "Ignacia Bayón Ferreras",
  "Mauricio Vigil",
  "Cipriano Vara-Blanes",
  "Virgilio Zamorano Osuna",
  "Bernarda Jordá Escolano",
  "Laura Espejo Cervantes",
  "Roldán de Nadal",
  "Iván Quintero Riquelme",
  "Joaquina de Saldaña",
  "Rita Jurado Aragón",
  "Dimas Prat Palomar",
  "Loida Galan",
  "Lina Garmendia Mena",
  "Goyo Martínez-Palacio",
  "Julieta Grande Lillo",
  "Cristian Parra-Cid",
  "Ariadna Zapata Checa",
  "Concepción Goñi Pomares",
  "Epifanio Mate Bermejo",
];

export { names };
