// Objeto que contiene las películas organizadas por categoría
const peliculas = {
    animacion: [
        {
          titulo: "Toy Story",
          descripcion: "Los juguetes de un niño cobran vida cuando nadie los ve y viven grandes aventuras.",
          imagen: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg"
        },
        {
          titulo: "Spirited Away",
          descripcion: "Una niña queda atrapada en un mundo mágico y debe encontrar la manera de rescatar a sus padres.",
          imagen: "https://images-na.ssl-images-amazon.com/images/P/B00005JLEU._SL1500_.jpg"
        },
        {
          titulo: "Coco",
          descripcion: "Un niño viaja al mundo de los muertos para descubrir los secretos de su familia y seguir su pasión por la música.",
          imagen: "https://upload.wikimedia.org/wikipedia/en/9/98/Coco_%282017_film%29_poster.jpg"
        },
        {
          titulo: "Shrek",
          descripcion: "Un ogro emprende una misión para rescatar a una princesa, pero termina descubriendo el amor verdadero.",
          imagen: "https://picfiles.alphacoders.com/349/thumb-1920-349723.jpg"
        },
        {
          titulo: "Up",
          descripcion: "Un anciano viaja a Sudamérica en una casa flotante con globos, acompañado por un niño explorador.",
          imagen: "https://th.bing.com/th/id/OIP.hqx5cjlukk-Ex96taoq7UwHaLH?cb=iwp1&rs=1&pid=ImgDetMain"
        },
        {
          titulo: "Finding Nemo",
          descripcion: "Un pez payaso cruza el océano para rescatar a su hijo capturado por buzos.",
          imagen: "https://www.polifemo.com/static/img/portadas/_visd_0000JPG01P3B.jpg"
        },
        {
          titulo: "Inside Out",
          descripcion: "Las emociones de una niña luchan por mantener el equilibrio mientras atraviesa un gran cambio en su vida.",
          imagen: "https://th.bing.com/th/id/R.ab761d05fa748c981b78e5d5f988a153?rik=WzEhgygwMqi39Q&riu=http%3a%2f%2fmidwestfilmnerds.com%2fwp-content%2fuploads%2f2015%2f06%2finsideoutposter.jpg&ehk=25eGAS7Y1s7Q2ina8sohwZjTDfdqd5hUQ4M2EO7qpeI%3d&risl=&pid=ImgRaw&r=0"
        },
        {
          titulo: "The Lion King",
          descripcion: "Un joven león huye tras la muerte de su padre, pero regresa para reclamar su lugar como rey.",
          imagen: "https://th.bing.com/th/id/R.84b18d7628c0d4f990cd7fbd34b5baa4?rik=wGrsXdHB%2b0o4ig&pid=ImgRaw&r=0"
        },
        {
          titulo: "Ratatouille",
          descripcion: "Un ratón con talento para la cocina sueña con convertirse en chef en un restaurante de París.",
          imagen: "https://image.tmdb.org/t/p/original/2RDOxP0vyLUWwYhvWScqTiK9uFr.jpg"
        },
        {
          titulo: "Zootopia",
          descripcion: "Una coneja policía y un zorro estafador investigan una conspiración en una ciudad de animales.",
          imagen: "https://th.bing.com/th/id/OIP.3B6_wiyBUDlEQ2LcwKkDkAHaJ4?cb=iwp1&rs=1&pid=ImgDetMain"
        }
      ],      
    accion: [
        {
          titulo: "Mad Max: Fury Road",
          descripcion: "En un mundo post-apocalíptico, un solitario y una rebelde luchan por la libertad.",
          imagen: "https://media.senscritique.com/media/000017108234/source_big/Mad_Max_Fury_Road.jpg"
        },
        {
          titulo: "John Wick",
          descripcion: "Un exasesino regresa al mundo del crimen para vengar la muerte de su perro.",
          imagen: "https://upload.wikimedia.org/wikipedia/en/9/98/John_Wick_TeaserPoster.jpg"
        },
        {
          titulo: "Die Hard",
          descripcion: "Un policía neoyorquino enfrenta a terroristas en un rascacielos de Los Ángeles.",
          imagen: "https://th.bing.com/th/id/R.85eb2c44c109828e13e79cbad5f37d53?rik=edRJfaxFrG24lw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-KZChxyNedTs%2fUrJwBgDlmQI%2fAAAAAAAADfw%2fLUNSlIziivI%2fs1600%2fdie-hard-original.jpg&ehk=OFqnv4F5CVYLDCHIS70kboEy1Q3qXcuucCuYZOkHBz0%3d&risl=&pid=ImgRaw&r=0"
        },
        {
          titulo: "Gladiator",
          descripcion: "Un general romano traicionado busca venganza en la arena del Coliseo.",
          imagen: "https://th.bing.com/th/id/OIP.04k-srCpJE3ICj6Nxx7LPwHaLH?cb=iwp1&rs=1&pid=ImgDetMain"
        },
        {
          titulo: "The Dark Knight",
          descripcion: "Batman enfrenta a su enemigo más peligroso: el Joker.",
          imagen: "https://th.bing.com/th/id/OIP.1AjXRjwX74DedUFn5sBnXgHaJ4?cb=iwp1&rs=1&pid=ImgDetMain"
        },
        {
          titulo: "Inception",
          descripcion: "Un ladrón especializado en robar secretos del subconsciente lidera una misión imposible.",
          imagen: "https://th.bing.com/th/id/OIP.fYLXgLBnnbp3N8JCRuUIGAHaLH?cb=iwp1&rs=1&pid=ImgDetMain"
        },
        {
          titulo: "The Bourne Identity",
          descripcion: "Un hombre amnésico intenta descubrir su verdadera identidad mientras es perseguido por asesinos.",
          imagen: "https://upload.wikimedia.org/wikipedia/en/a/ae/BourneIdentityfilm.jpg"
        },
        {
          titulo: "Mission: Impossible – Fallout",
          descripcion: "Ethan Hunt y su equipo enfrentan una amenaza global tras una misión fallida.",
          imagen: "https://image.tmdb.org/t/p/original/g6a50yigKaPx1f0LRoRVib7I6Uf.jpg"
        },
        {
          titulo: "The Avengers",
          descripcion: "Los héroes más poderosos de la Tierra se unen para salvar al mundo de una amenaza alienígena.",
          imagen: "https://www.themoviedb.org/t/p/original/qMxAmzGQO722q0UlssCOPhrXmvX.jpg"
        },
        {
          titulo: "Skyfall",
          descripcion: "El pasado de James Bond regresa para poner a prueba su lealtad al MI6.",
          imagen: "https://www.themoviedb.org/t/p/original/iANstMt9B4unvLMLLOWnBnZIt9b.jpg"
        }
      ],
      comedia: [
        {
          titulo: "The Hangover",
          descripcion: "Un grupo de amigos se despierta sin recuerdos tras una despedida de soltero en Las Vegas.",
          imagen: "https://upload.wikimedia.org/wikipedia/en/b/b9/Hangoverposter09.jpg"
        },
        {
          titulo: "Superbad",
          descripcion: "Dos adolescentes intentan disfrutar de su última fiesta antes de graduarse del instituto.",
          imagen: "https://upload.wikimedia.org/wikipedia/en/8/8b/Superbad_Poster.png"
        },
        {
          titulo: "Bridesmaids",
          descripcion: "Una mujer compite con la perfecta amiga de su mejor amiga mientras planea una boda caótica.",
          imagen: "https://upload.wikimedia.org/wikipedia/en/d/df/BridesmaidsPoster.jpg"
        },
        {
          titulo: "Groundhog Day",
          descripcion: "Un meteorólogo vive el mismo día una y otra vez, lo que lo lleva a cambiar su vida.",
          imagen: "https://www.themoviedb.org/t/p/original/7tpDW6dIzkvwfYH9JOI3fStiF0S.jpg"
        },
        {
          titulo: "The Truman Show",
          descripcion: "Un hombre descubre que su vida entera ha sido un programa de televisión.",
          imagen: "https://image.tmdb.org/t/p/original/vuza0WqY239yBXOadKlGwJsZJFE.jpg"
        },
        {
          titulo: "Dumb and Dumber",
          descripcion: "Dos amigos increíblemente torpes se embarcan en un viaje para devolver un maletín perdido.",
          imagen: "https://upload.wikimedia.org/wikipedia/en/6/64/Dumbanddumber.jpg"
        },
        {
          titulo: "Mean Girls",
          descripcion: "Una adolescente se adentra en el mundo de las chicas populares con resultados desastrosos y divertidos.",
          imagen: "https://images-na.ssl-images-amazon.com/images/I/81Wubp%2BBoYL._AC_SL1500_.jpg"
        },
        {
          titulo: "Mrs. Doubtfire",
          descripcion: "Un padre divorciado se disfraza de niñera para poder estar con sus hijos.",
          imagen: "https://www.themoviedb.org/t/p/original/eRrIeSCSFdEKjJCJG6whklICM9N.jpg"
        },
        {
          titulo: "Ferris Bueller's Day Off",
          descripcion: "Un estudiante de secundaria finge estar enfermo para tener un día inolvidable fuera de clase.",
          imagen: "https://upload.wikimedia.org/wikipedia/en/9/9b/Ferris_Bueller%27s_Day_Off.jpg"
        },
        {
          titulo: "The Grand Budapest Hotel",
          descripcion: "Un excéntrico conserje y su joven aprendiz se ven envueltos en una aventura llena de humor y misterio.",
          imagen: "https://www.themoviedb.org/t/p/original/boR8lRoG1Brbq2lCI9oeJIaUjW0.jpg"
        }
      ],      
    terror: [
      {
        titulo: "The Conjuring",
        descripcion: "Investigadores paranormales enfrentan espíritus malignos.",
        imagen: "https://mx.web.img3.acsta.net/pictures/19/03/20/19/26/1988298.jpg"
      },
      {
        titulo: "IT",
        descripcion: "Un payaso maligno aterroriza a niños en un pueblo.",
        imagen: "https://upload.wikimedia.org/wikipedia/en/5/5a/It_%282017%29_poster.jpg"
      },
      {
        titulo: "Hereditary",
        descripcion: "Una familia desvela oscuros secretos después de una pérdida.",
        imagen: "https://es.web.img2.acsta.net/pictures/18/06/06/10/24/2467257.jpg"
      }
    ],
    drama: [
        {
          titulo: "The Shawshank Redemption",
          descripcion: "Un banquero es condenado injustamente y encuentra esperanza en prisión.",
          imagen: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg"
        },
        {
          titulo: "Forrest Gump",
          descripcion: "Un hombre con un corazón puro vive momentos clave de la historia estadounidense.",
          imagen: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg"
        },
        {
          titulo: "The Pursuit of Happyness",
          descripcion: "Un padre lucha contra la pobreza para darle un mejor futuro a su hijo.",
          imagen: "https://th.bing.com/th/id/R.20870a545d106683263aabf5847dd369?rik=aqBKaR85M3dr9Q&pid=ImgRaw&r=0"
        },
        {
          titulo: "A Beautif Mindul",
          descripcion: "La historia de un brillante matemático que enfrenta la esquizofrenia.",
          imagen: "https://image.tmdb.org/t/p/original/fQhaK4jr5m2aVn4w7LnLsI00GFu.jpg"
        },
        {
          titulo: "12 Years a Slave",
          descripcion: "Un hombre libre es secuestrado y vendido como esclavo en el siglo XIX.",
          imagen: "https://th.bing.com/th/id/R.45cd1b5d8df35c46ab7620ff3e94fc7f?rik=w1W7bIz558WvRw&pid=ImgRaw&r=0"
        },
        {
          titulo: "The Green Mile",
          descripcion: "Un guardia de prisión se encuentra con un preso con poderes sobrenaturales.",
          imagen: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24429_p_v12_bf.jpg"
        },
        {
          titulo: "Good Will Hunting",
          descripcion: "Un joven con talento para las matemáticas lucha con su pasado y su futuro.",
          imagen: "https://upload.wikimedia.org/wikipedia/en/5/52/Good_Will_Hunting.png"
        },
        {
          titulo: "The Pianist",
          descripcion: "Un pianista judío lucha por sobrevivir durante la ocupación nazi en Polonia.",
          imagen: "https://upload.wikimedia.org/wikipedia/en/a/a6/The_Pianist_movie.jpg"
        },
        {
          titulo: "Dead Poets Society",
          descripcion: "Un profesor inspira a sus estudiantes a pensar por sí mismos.",
          imagen: "https://flxt.tmsimg.com/assets/p11671_p_v8_ad.jpg"
        },
        {
          titulo: "Marriage Story",
          descripcion: "Una pareja enfrenta un complicado proceso de divorcio.",
          imagen: "https://www.themoviedb.org/t/p/original/pZekG6xabTmZxjmYw10wN84Hp8d.jpg"
        }
      ],
      distopia: [
        {
          titulo: "The Matrix",
          descripcion: "Un programador descubre que la realidad que conoce es una simulación creada por máquinas.",
          imagen: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg"
        },
        {
          titulo: "Children of Men",
          descripcion: "En un futuro donde los humanos ya no pueden procrear, un hombre debe proteger a una joven embarazada.",
          imagen: "https://upload.wikimedia.org/wikipedia/en/b/b9/Children_of_Men_film_poster.jpg"
        },
        {
          titulo: "Blade Runner",
          descripcion: "Un policía encargado de eliminar androides rebeldes empieza a cuestionar su propia existencia.",
          imagen: "https://upload.wikimedia.org/wikipedia/en/5/53/Blade_Runner_poster.jpg"
        },
        {
          titulo: "The Hunger Games",
          descripcion: "En una sociedad futurista, los jóvenes deben participar en un evento mortal para entretener a la élite gobernante.",
          imagen: "https://upload.wikimedia.org/wikipedia/en/4/42/The_Hunger_Games_poster.jpg"
        },
        {
          titulo: "V for Vendetta",
          descripcion: "En un futuro distópico, un hombre enmascarado lucha contra un régimen totalitario.",
          imagen: "https://upload.wikimedia.org/wikipedia/en/a/a9/V_for_Vendetta_poster.jpg"
        },
        {
          titulo: "District 9",
          descripcion: "Extraterrestres refugiados son confinados en condiciones inhumanas en Sudáfrica.",
          imagen: "https://upload.wikimedia.org/wikipedia/en/b/b9/District_9_Poster.jpg"
        },
        {
          titulo: "Minority Report",
          descripcion: "Una unidad policial previene crímenes antes de que ocurran, pero un agente es acusado de uno que aún no ha cometido.",
          imagen: "https://upload.wikimedia.org/wikipedia/en/a/a5/Minority_Report_poster.jpg"
        },
        {
          titulo: "Snowpiercer",
          descripcion: "Los últimos humanos viven en un tren en movimiento tras un experimento fallido para detener el calentamiento global.",
          imagen: "https://upload.wikimedia.org/wikipedia/en/c/c7/Snowpiercer_poster.jpg"
        },
        {
          titulo: "The Road",
          descripcion: "Un padre y su hijo atraviesan un paisaje desolado en busca de esperanza y supervivencia.",
          imagen: "https://upload.wikimedia.org/wikipedia/en/4/47/The_Road_poster.jpg"
        },
        {
          titulo: "Equilibrium",
          descripcion: "En una sociedad que prohíbe las emociones, un agente empieza a cuestionar el sistema que protege.",
          imagen: "https://upload.wikimedia.org/wikipedia/en/a/a5/Equilibrium_film_poster.jpg"
        }
      ],
      aventura: [
        {
          titulo: "Indiana Jones and the Raiders of the Lost Ark",
          descripcion: "Un arqueólogo aventurero busca el Arca de la Alianza antes que los nazis.",
          imagen: "https://th.bing.com/th/id/OIP.Szb_q62JAYeRXPIHWZSwUwHaKX?cb=iwp1&rs=1&pid=ImgDetMain"
        },
        {
          titulo: "Pirates of the Caribbean: The Curse of the Black Pearl",
          descripcion: "Un capitán pirata y un herrero unen fuerzas para rescatar a una joven de piratas malditos.",
          imagen: "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/06/official-poster-for-pirates-of-the-caribbean-curse-of-the-black-pearl.jpg"
        },
        {
          titulo: "The Lord of the Rings: The Fellowship of the Ring",
          descripcion: "Un joven hobbit emprende un viaje épico para destruir un anillo de poder.",
          imagen: "https://th.bing.com/th/id/OIP.v2WVctAtO8K9nHZuJqWjpwHaLH?cb=iwp1&rs=1&pid=ImgDetMain"
        },
        {
          titulo: "The Revenant",
          descripcion: "Un cazador herido lucha por sobrevivir en la naturaleza para vengarse de su traidor.",
          imagen: "https://upload.wikimedia.org/wikipedia/en/b/b6/The_Revenant_2015_film_poster.jpg"
        },
        {
          titulo: "Jumanji: Welcome to the Jungle",
          descripcion: "Cuatro adolescentes son absorbidos por un videojuego mágico y deben superar desafíos para regresar a casa.",
          imagen: "https://upload.wikimedia.org/wikipedia/en/d/dc/Jumanji_Welcome_to_the_Jungle.png"
        },
        {
          titulo: "Life of Pi",
          descripcion: "Un joven sobrevive a un naufragio y queda atrapado en un bote con un tigre de Bengala.",
          imagen: "https://th.bing.com/th/id/R.59140265cff345e68b5178d215ad33f5?rik=zIUIZWNe5aNwCA&pid=ImgRaw&r=0"
        },
        {
          titulo: "The Secret Life of Walter Mitty",
          descripcion: "Un hombre común se embarca en una extraordinaria aventura para encontrar una fotografía perdida.",
          imagen: "https://th.bing.com/th/id/R.76e1a80c4093b6723455af5b206ac0a4?rik=CY7jW9U3SvMQmQ&riu=http%3a%2f%2fcdn.collider.com%2fwp-content%2fuploads%2fthe-secret-life-of-walter-mitty-poster-mountain.jpg&ehk=fDea5JjMyIpTy9imegcxxgIOBnFWRq2nUlPgFcYPptI%3d&risl=&pid=ImgRaw&r=0"
        },
        {
          titulo: "King Kong (2005)",
          descripcion: "Un grupo de exploradores viaja a una isla misteriosa donde descubren a una criatura gigantesca.",
          imagen: "https://picfiles.alphacoders.com/388/thumb-1920-388935.jpg"
        },
        {
          titulo: "The Jungle Book (2016)",
          descripcion: "Un niño criado por lobos en la selva emprende un viaje para encontrar su lugar en el mundo.",
          imagen: "https://th.bing.com/th/id/OIP.7TCIbjpgeB9zecWAIaMmjQHaK-?cb=iwp1&rs=1&pid=ImgDetMain"
        },
        {
          titulo: "National Treasure",
          descripcion: "Un historiador y aventurero sigue pistas ocultas para encontrar un tesoro perdido ligado a los padres fundadores de EE.UU.",
          imagen: "https://th.bing.com/th/id/R.e951062b519b3b85cf2482201da4a663?rik=FWwlLyPl2w53%2fw&pid=ImgRaw&r=0"
        }
      ]
      
      
  };  
  // Ir a categoría
  function irACategoria(categoria) {
    mostrarPeliculas(categoria);
  }
  
  // Mostrar películas
  function mostrarPeliculas(categoria) {
    const container = document.querySelector('.container');
    container.innerHTML = `<h1>Películas de ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h1>`;
  
    const peliculasContainer = document.createElement('div');
    peliculasContainer.classList.add('peliculas-container');
  
    peliculas[categoria].forEach((pelicula, index) => {
      const peliculaDiv = document.createElement('div');
      peliculaDiv.classList.add('pelicula');
      peliculaDiv.innerHTML = `
        <img src="${pelicula.imagen}" alt="Portada de ${pelicula.titulo}">
        <h2>${pelicula.titulo}</h2>
        <p>${pelicula.descripcion}</p>
        <button class="rentar-btn" onclick='rentarPelicula("${categoria}", ${index})'>Rentar</button>
      `;
      peliculasContainer.appendChild(peliculaDiv);
    });
  
    container.appendChild(peliculasContainer);
  
    const volverBtn = document.createElement('button');
    volverBtn.textContent = 'Volver a Categorías';
    volverBtn.classList.add('volver-btn');
    volverBtn.onclick = mostrarCategorias;
  
    container.appendChild(volverBtn);
  
    const modalDiv = document.createElement('div');
    modalDiv.id = "modal-container";
    container.appendChild(modalDiv);
  }
  
  // Mostrar formulario al rentar
  function rentarPelicula(categoria, index) {
    const pelicula = peliculas[categoria][index];
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.innerHTML = `
      <div style="background:#fff; color:#000; padding:20px; border-radius:10px; max-width:400px; width:100%">
        <h2>Rentar: ${pelicula.titulo}</h2>
        <form onsubmit="enviarFormulario(event)">
          <input type="text" placeholder="Nombre completo" required style="width:100%; margin-bottom:10px"><br>
          <input type="tel" placeholder="Número telefónico" required style="width:100%; margin-bottom:10px"><br>
          <input type="email" placeholder="Correo electrónico" required style="width:100%; margin-bottom:10px"><br>
          <input type="text" placeholder="Número de tarjeta" required style="width:100%; margin-bottom:10px"><br>
          <input type="text" placeholder="Fecha de vencimiento (MM/AA)" required style="width:100%; margin-bottom:10px"><br>
          <input type="text" placeholder="CVV" required style="width:100%; margin-bottom:10px"><br>
          <button type="submit" style="padding:10px 20px; background:#4caf50; color:white; border:none; border-radius:5px;">Confirmar Renta</button>
          <button type="button" onclick="cerrarModal()" style="padding:10px 20px; margin-left:10px; background:#f44336; color:white; border:none; border-radius:5px;">Cancelar</button>
        </form>
      </div>
    `;
    document.body.appendChild(modal);
  }
  
  function cerrarModal() {
    const modal = document.querySelector('body > div:last-child');
    if (modal) {
      modal.remove();
    }
  }
  
  function enviarFormulario(e) {
    e.preventDefault();
    alert("¡Película rentada con éxito! Se enviará un correo con los detalles.");
    cerrarModal();
  }
  
  // Mostrar categorías al cargar
  document.addEventListener('DOMContentLoaded', mostrarCategorias);
  