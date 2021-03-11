/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019    */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Pablo",
				Photo: "man.png",
				Quote: "Invertir en viajar es invertir en uno mismo",
				Character: "Le gusta disfrutar del tiempo",
				Quote: "Invertir en viajar es invertir en uno mismo",
				Age: 45,
				Occupation: "Profesor de educación infantil",
				Family: "Casado desde hace 6 años y con un hijo",
				Location: "Barcelona",
				Character: "Le gusta aprender de cualquier experiencia",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 7 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 8 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 7 }
				], 
				Goals: ["Poder viajar más con su familia", "Mudarse a otra ciudad"],
				Frustrations: ["Es buen padre pero le gustaría poder dedicarle más tiempo a su hijo", "Le gustaria poder leer más libros de investigación"],
				Bio: "Es de Madrid y se mudó a Barcelona para estudiar la carrera. Cuando la acabó opositó y conoció a su mujer actual. Cuando aprobó las oposiciones decidieron casarse y al año siguiente tener un hijo",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Movil", Value: 6 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 1 }

				], 
                Contextos: "Siempre le ha gustado mucho viajar pero ahora su situación ha cambiado debido a su hijo, busca experiencias que puedan adaptarse a ello. Por lo general, se fia bastante de las recomendaciones de personas de confianza",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 5 },
					{ Name: "Publicidad Tradicional", Value: 2 },
					{ Name: "Online & Social Media", Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 8 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 9 }
				]
			}
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Marina Perez",
				Photo: "woman.png",
				Quote: "La vida no trata de encontrarse a uno mismo, sino de crearse a uno mismo.",
				Age: 18,
				Occupation: "Estudio segundo de bachillerato",
				Family: "Vive con sus padres y su hermano menor",
				Location: "Málaga",
				Character: "Trabajadora, artista y con muchas aspiraciones para el futuro",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 2 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 7 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 8 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 6 }
				], 
				Goals: ["Dedicarse al arte en un futuro.", "Poder tener un trabajo estable e independizarse lo antes posible", "Mudarse fuera de España cuando cumpla 23 años"],
				Frustrations: ["Sus padres y la gente de su alrededor no cree que vaya a poder tener éxito dedicandose al arte", "No le gusta estudiar y no saca buenas notas", "Le cuesta mucho concentrarse en las matemáticas"],
				Bio: "Nació en Valencia pero cuándo tenia 8 años se mudó con su familia a Málaga. De lo poco que recuerda de Valencia prefiere mucho más Málaga, tiene muchos amigos y está bien rodeada allí",
				Tech: [
					{ Name: "TIC/Internet", Value: 7 },
					{ Name: "Mobile", Value: 9 },
					{ Name: "RRSS", Value: 9 },
					{ Name: "Software", Value: 4 }
					
				], 
                Contextos:   "Es amante del arte, por lo que visitar muchos museos en un futuro es su gran sueño" ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 4 },
					{ Name: "Online & Social Media", Value: 8 },
					{ Name: "Recomendaciones & sugerencias", Value: 5 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 8 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
