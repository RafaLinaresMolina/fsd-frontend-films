import { Frame, Image } from "arwes";
import React from "react";
import "./FilmList.scss";

function FilmList(props) {
  const films = {
    count: 7,
    rows: [
      {
        id: 1,
        title: "El señor de los anillos: La comunidad del Anillo",
        original_title: "Lord Of The Rings: Fellowship of the ring",
        img_portrait:
          "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
        img_landscape:
          "https://i1.wp.com/wipy.tv/wp-content/uploads/2020/05/guillermo-del-toro-prepara-scary-stories-to-tell-in-the-dark-2-51-2.jpg?resize=1000%2C600&ssl=1",
        release_date: "2020-11-12T19:57:10.000Z",
        synopsis:
          "Frodo Bolsón es un hobbit al que su tío Bilbo hace portador del poderoso Anillo Único, capaz de otorgar un poder ilimitado al que la posea, con la finalidad de destruirlo. Sin embargo, fuerzas malignas muy poderosas quieren arrebatárselo.",
        status: 1,
        created_at: "2020-10-05T16:29:53.000Z",
        stock: 1,
        Genres: [
          {
            id: 2,
            name: "fantasia",
            status: 1,
            created_at: "2020-10-05T17:04:50.000Z",
            last_modified: null,
          },
          {
            id: 4,
            name: "aventuras",
            status: 1,
            created_at: "2020-10-05T17:04:50.000Z",
            last_modified: null,
          },
          {
            id: 5,
            name: "basado en novela",
            status: 1,
            created_at: "2020-10-05T17:04:50.000Z",
            last_modified: null,
          },
          {
            id: 6,
            name: "cine épico",
            status: 1,
            created_at: "2020-10-05T17:04:50.000Z",
            last_modified: null,
          },
        ],
        Actors: [
          {
            id: 1,
            name: "Hugo",
            last_name: "Wallace Weaving",
            status: 1,
            img_portrait: "",
          },
          {
            id: 2,
            name: "Sir Ian",
            last_name: "Murray McKellen",
            status: 1,
            img_portrait: "",
          },
          {
            id: 3,
            name: "Elijah",
            last_name: "Jordan Wood",
            status: 1,
            img_portrait: "",
          },
          {
            id: 4,
            name: "Sean",
            last_name: "Michael Astin",
            status: 1,
            img_portrait: "",
          },
          {
            id: 5,
            name: "Viggo",
            last_name: "Peter Mortensen",
            status: 1,
            img_portrait: "",
          },
        ],
      },
      {
        id: 2,
        title: "El señor de los anillos: las dos torres",
        original_title: "Lord Of The Rings: The Two Towers",
        img_portrait:
          "https://d1w8cc2yygc27j.cloudfront.net/-6092296138140279531/-8225530275220349082.jpg",
        img_landscape:
          "https://www.unilad.co.uk/wp-content/uploads/2018/12/helms-deep.jpg",
        release_date: "2020-11-12T17:19:17.000Z",
        synopsis:
          "Gollum guía a Frodo y Sam a Mordor mientras Aragorn y sus compañeros defienden a Rohan del bestial ejército de Saruman.",
        status: 1,
        created_at: "2020-10-05T16:30:06.000Z",
        stock: 3,
        Genres: [
          {
            id: 2,
            name: "fantasia",
            status: 1,
            created_at: "2020-10-05T17:04:50.000Z",
            last_modified: null,
          },
          {
            id: 4,
            name: "aventuras",
            status: 1,
            created_at: "2020-10-05T17:04:50.000Z",
            last_modified: null,
          },
          {
            id: 5,
            name: "basado en novela",
            status: 1,
            created_at: "2020-10-05T17:04:50.000Z",
            last_modified: null,
          },
          {
            id: 6,
            name: "cine épico",
            status: 1,
            created_at: "2020-10-05T17:04:50.000Z",
            last_modified: null,
          },
        ],
        Actors: [
          {
            id: 1,
            name: "Hugo",
            last_name: "Wallace Weaving",
            status: 1,
            img_portrait: "",
          },
          {
            id: 2,
            name: "Sir Ian",
            last_name: "Murray McKellen",
            status: 1,
            img_portrait: "",
          },
          {
            id: 3,
            name: "Elijah",
            last_name: "Jordan Wood",
            status: 1,
            img_portrait: "",
          },
          {
            id: 4,
            name: "Sean",
            last_name: "Michael Astin",
            status: 1,
            img_portrait: "",
          },
          {
            id: 5,
            name: "Viggo",
            last_name: "Peter Mortensen",
            status: 1,
            img_portrait: "",
          },
        ],
      },
      {
        id: 3,
        title: "El señor de los anillos: El retorno del Rey",
        original_title: "Lord Of The Rings: The Return of the King",
        img_portrait:
          "https://i.pinimg.com/originals/57/3e/cd/573ecdb4ab4d1574ea1df0b641eb366c.jpg",
        img_landscape:
          "https://a.ltrbxd.com/resized/sm/upload/a7/4r/al/mc/lotr-return-of-the-king-1200-1200-675-675-crop-000000.jpg?k=bb233856dd",
        release_date: "2020-11-12T17:27:37.000Z",
        synopsis:
          "Frodo, Sam y Gollum se acercan al monte del Destino, donde destruirán el anillo o perecerán en el intento. Mientras, Aragorn y sus compañeros se enfrentan a las monstruosas tropas de Sauron.",
        status: 1,
        created_at: "2020-10-05T16:30:09.000Z",
        stock: 3,
        Genres: [
          {
            id: 2,
            name: "fantasia",
            status: 1,
            created_at: "2020-10-05T17:04:50.000Z",
            last_modified: null,
          },
          {
            id: 4,
            name: "aventuras",
            status: 1,
            created_at: "2020-10-05T17:04:50.000Z",
            last_modified: null,
          },
          {
            id: 5,
            name: "basado en novela",
            status: 1,
            created_at: "2020-10-05T17:04:50.000Z",
            last_modified: null,
          },
          {
            id: 6,
            name: "cine épico",
            status: 1,
            created_at: "2020-10-05T17:04:50.000Z",
            last_modified: null,
          },
        ],
        Actors: [
          {
            id: 1,
            name: "Hugo",
            last_name: "Wallace Weaving",
            status: 1,
            img_portrait: "",
          },
          {
            id: 2,
            name: "Sir Ian",
            last_name: "Murray McKellen",
            status: 1,
            img_portrait: "",
          },
          {
            id: 3,
            name: "Elijah",
            last_name: "Jordan Wood",
            status: 1,
            img_portrait: "",
          },
          {
            id: 4,
            name: "Sean",
            last_name: "Michael Astin",
            status: 1,
            img_portrait: "",
          },
          {
            id: 5,
            name: "Viggo",
            last_name: "Peter Mortensen",
            status: 1,
            img_portrait: "",
          },
        ],
      },
      {
        id: 4,
        title: "The Matrix",
        original_title: "The Matrix",
        img_portrait:
          "https://images-na.ssl-images-amazon.com/images/I/71D8%2BNFLZmL._SL1500_.jpg",
        img_landscape:
          "https://media.metrolatam.com/2019/12/11/template69-806cab974d15786239ef94de2d43f669.jpg",
        release_date: "2020-11-12T17:28:48.000Z",
        synopsis:
          "A computer hacker learns from mysterious rebels about the true nature of his reality \n        and his role in the war against its controllers. ",
        status: 1,
        created_at: "2020-10-05T16:41:54.000Z",
        stock: 1,
        Genres: [
          {
            id: 1,
            name: "acción",
            status: 1,
            created_at: "2020-10-05T17:04:50.000Z",
            last_modified: null,
          },
          {
            id: 2,
            name: "fantasia",
            status: 1,
            created_at: "2020-10-05T17:04:50.000Z",
            last_modified: null,
          },
          {
            id: 3,
            name: "ciencia-ficción",
            status: 1,
            created_at: "2020-10-05T17:04:50.000Z",
            last_modified: null,
          },
        ],
        Actors: [
          {
            id: 1,
            name: "Hugo",
            last_name: "Wallace Weaving",
            status: 1,
            img_portrait: "",
          },
          {
            id: 6,
            name: "Keanu",
            last_name: "Charles Reeves",
            status: 1,
            img_portrait: "",
          },
          {
            id: 7,
            name: "Laurence",
            last_name: "John Fishburne III",
            status: 1,
            img_portrait: "",
          },
          {
            id: 8,
            name: "Carrie-Anne",
            last_name: "Moss",
            status: 1,
            img_portrait: "",
          },
        ],
      },
      {
        id: 5,
        title: "The Matrix Reloaded",
        original_title: "The Matrix Reloaded",
        img_portrait:
          "https://stat.ameba.jp/user_images/20190522/17/yashima1505/13/80/j/o0311044514414434035.jpg",
        img_landscape:
          "https://ist.nyc3.digitaloceanspaces.com/staging/assets/series/reloadedjpg_1560967226",
        release_date: "2020-11-12T17:30:47.000Z",
        synopsis:
          "Neo and his allies race against time before the machines discover the city of Zion and destroy it. While seeking the truth about the Matrix, \n        Neo must save Trinity from a dark fate within his dreams.",
        status: 1,
        created_at: "2020-10-05T16:41:57.000Z",
        stock: 3,
        Genres: [
          {
            id: 1,
            name: "acción",
            status: 1,
            created_at: "2020-10-05T17:04:50.000Z",
            last_modified: null,
          },
          {
            id: 2,
            name: "fantasia",
            status: 1,
            created_at: "2020-10-05T17:04:50.000Z",
            last_modified: null,
          },
          {
            id: 3,
            name: "ciencia-ficción",
            status: 1,
            created_at: "2020-10-05T17:04:50.000Z",
            last_modified: null,
          },
        ],
        Actors: [
          {
            id: 1,
            name: "Hugo",
            last_name: "Wallace Weaving",
            status: 1,
            img_portrait: "",
          },
          {
            id: 6,
            name: "Keanu",
            last_name: "Charles Reeves",
            status: 1,
            img_portrait: "",
          },
          {
            id: 7,
            name: "Laurence",
            last_name: "John Fishburne III",
            status: 1,
            img_portrait: "",
          },
          {
            id: 8,
            name: "Carrie-Anne",
            last_name: "Moss",
            status: 1,
            img_portrait: "",
          },
        ],
      },
      {
        id: 6,
        title: "The Matrix Revolutions",
        original_title: "The Matrix Revolutions",
        img_portrait:
          "https://i.pinimg.com/originals/45/68/84/456884018019425dd45dd5f822274ca2.jpg",
        img_landscape:
          "https://resizing.flixster.com/_CW630u2Ib8NR7wWUAfANrrnWys=/740x380/v1.bjszMTk4OTI7ajsxODU4ODsxMjAwOzM2NzI7MTgzNg",
        release_date: "2020-11-12T17:32:11.000Z",
        synopsis:
          " The human city of Zion defends itself against the massive invasion of the machines as Neo fights to end the war at another \n        front while also opposing the rogue Agent Smith.",
        status: 1,
        created_at: "2020-10-05T16:42:01.000Z",
        stock: 0,
        Genres: [
          {
            id: 1,
            name: "acción",
            status: 1,
            created_at: "2020-10-05T17:04:50.000Z",
            last_modified: null,
          },
          {
            id: 2,
            name: "fantasia",
            status: 1,
            created_at: "2020-10-05T17:04:50.000Z",
            last_modified: null,
          },
          {
            id: 3,
            name: "ciencia-ficción",
            status: 1,
            created_at: "2020-10-05T17:04:50.000Z",
            last_modified: null,
          },
        ],
        Actors: [
          {
            id: 1,
            name: "Hugo",
            last_name: "Wallace Weaving",
            status: 1,
            img_portrait: "",
          },
          {
            id: 6,
            name: "Keanu",
            last_name: "Charles Reeves",
            status: 1,
            img_portrait: "",
          },
          {
            id: 7,
            name: "Laurence",
            last_name: "John Fishburne III",
            status: 1,
            img_portrait: "",
          },
          {
            id: 8,
            name: "Carrie-Anne",
            last_name: "Moss",
            status: 1,
            img_portrait: "",
          },
        ],
      },
      {
        id: 7,
        title: "Tu madre se ha comido a mi perro",
        original_title: "Braindead",
        img_portrait:
          "https://cenobiteme.files.wordpress.com/2010/10/dead_alive_ver3.jpg",
        img_landscape:
          "https://homemcr.org/app/uploads/2012/09/Braindead-2-e1347982340332-940x460.jpg",
        release_date: "2020-11-12T17:33:52.000Z",
        synopsis:
          "Lionel es un joven que vive con su insoportable madre, que no aprueba la relación que acaba de comenzar con Paquita, la hija del tendero. Cuando los dos enamorados realizan una visita al zoológico, ella les vigila en secreto, y será mordida por el animal encontrado en la isla. Poco a poco, la madre de Lionel se va convirtiendo en una especie de zombie, sedienta de carne, y que convierte en zombie a todo el que ataca.",
        status: 1,
        created_at: "2020-10-11T16:23:27.000Z",
        stock: 3,
        Genres: [
          {
            id: 7,
            name: "Serie-B",
            status: 1,
            created_at: "2020-10-11T17:05:48.000Z",
            last_modified: "2020-10-11T17:05:48.000Z",
          },
        ],
        Actors: [
          {
            id: 9,
            name: "Timothy",
            last_name: "Guy Balme",
            status: 1,
            img_portrait: "",
          },
        ],
      },
      {
        id: 7,
        title: "Tu madre se ha comido a mi perro",
        original_title: "Braindead",
        img_portrait:
          "https://cenobiteme.files.wordpress.com/2010/10/dead_alive_ver3.jpg",
        img_landscape:
          "https://homemcr.org/app/uploads/2012/09/Braindead-2-e1347982340332-940x460.jpg",
        release_date: "2020-11-12T17:33:52.000Z",
        synopsis:
          "Lionel es un joven que vive con su insoportable madre, que no aprueba la relación que acaba de comenzar con Paquita, la hija del tendero. Cuando los dos enamorados realizan una visita al zoológico, ella les vigila en secreto, y será mordida por el animal encontrado en la isla. Poco a poco, la madre de Lionel se va convirtiendo en una especie de zombie, sedienta de carne, y que convierte en zombie a todo el que ataca.",
        status: 1,
        created_at: "2020-10-11T16:23:27.000Z",
        stock: 3,
        Genres: [
          {
            id: 7,
            name: "Serie-B",
            status: 1,
            created_at: "2020-10-11T17:05:48.000Z",
            last_modified: "2020-10-11T17:05:48.000Z",
          },
        ],
        Actors: [
          {
            id: 9,
            name: "Timothy",
            last_name: "Guy Balme",
            status: 1,
            img_portrait: "",
          },
        ],
      },
      {
        id: 7,
        title: "Tu madre se ha comido a mi perro",
        original_title: "Braindead",
        img_portrait:
          "https://cenobiteme.files.wordpress.com/2010/10/dead_alive_ver3.jpg",
        img_landscape:
          "https://homemcr.org/app/uploads/2012/09/Braindead-2-e1347982340332-940x460.jpg",
        release_date: "2020-11-12T17:33:52.000Z",
        synopsis:
          "Lionel es un joven que vive con su insoportable madre, que no aprueba la relación que acaba de comenzar con Paquita, la hija del tendero. Cuando los dos enamorados realizan una visita al zoológico, ella les vigila en secreto, y será mordida por el animal encontrado en la isla. Poco a poco, la madre de Lionel se va convirtiendo en una especie de zombie, sedienta de carne, y que convierte en zombie a todo el que ataca.",
        status: 1,
        created_at: "2020-10-11T16:23:27.000Z",
        stock: 3,
        Genres: [
          {
            id: 7,
            name: "Serie-B",
            status: 1,
            created_at: "2020-10-11T17:05:48.000Z",
            last_modified: "2020-10-11T17:05:48.000Z",
          },
        ],
        Actors: [
          {
            id: 9,
            name: "Timothy",
            last_name: "Guy Balme",
            status: 1,
            img_portrait: "",
          },
        ],
      },
    ],
  };

  const selectLayer = (movie) => {
    return movie.stock && movie.status
      ? { layer: "primary", filter: "none" }
      : { layer: "disabled", filter: "grayscale(100%)" };
  };
  return (
    <div className="theList">
    <div className="wrapperContent">
      <div className="movieListContainer">
        {films.rows.map((movie) => (
          <div className="frames">
            <Frame anim corners={4} style={{ padding: "1em" }} layer={selectLayer(movie).layer} >
              <div className="glassPannel"></div>
              <Image animate draggable={false} style={{maxWidth: "13em", filter: selectLayer(movie).filter, margin: "0", }} layer={selectLayer(movie).layer} resources={movie.img_portrait}>
                {movie.original_title}
              </Image>
            </Frame>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default FilmList;
