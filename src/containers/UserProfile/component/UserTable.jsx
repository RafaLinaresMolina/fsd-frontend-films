import GenericReacTable from '../../../components/GenericTable/GenericReactTable.jsx';
import GenericReacTable from '../../../components/GenericTable/GenericReactTable.scss';

function AllOrderList(){
  
  const orders = [
    {
        "id": 22,
        "status": "stocked",
        "UserId": 2,
        "createdAt": "2020-10-10T15:17:07.000Z",
        "arrivedAtClient": "2020-10-12T15:03:53.000Z",
        "recomendedReturnDate": "2020-10-14T15:03:53.000Z",
        "realReturnDate": "2020-10-12T15:30:31.000Z",
        "reStoked": null,
        "PriceId": 1,
        "Films": [
          {
            "id": 1,
            "title": "El señor de los anillos: La comunidad del Anillo",
            "original_title": "Lord Of The Rings: Fellowship of the ring",
            "img_path": "./../lotr1.jpg",
            "release_date": "2020-10-12T15:31:44.000Z",
            "synopsis": "Frodo Bolsón es un hobbit al que su tío Bilbo hace portador del poderoso Anillo Único, capaz de otorgar un poder ilimitado al que la posea, con la finalidad de destruirlo. Sin embargo, fuerzas malignas muy poderosas quieren arrebatárselo.",
            "status": 1,
            "created_at": "2020-10-05T16:29:53.000Z",
            "stock": 1,
            "OrderFilm": {
                "FilmId": 1,
                "OrderId": 22,
                "stock": 1
            }
        },{
          "id": 1,
          "title": "El señor de los anillos: La comunidad del Anillo",
          "original_title": "Lord Of The Rings: Fellowship of the ring",
          "img_path": "./../lotr1.jpg",
          "release_date": "2020-10-12T15:31:44.000Z",
          "synopsis": "Frodo Bolsón es un hobbit al que su tío Bilbo hace portador del poderoso Anillo Único, capaz de otorgar un poder ilimitado al que la posea, con la finalidad de destruirlo. Sin embargo, fuerzas malignas muy poderosas quieren arrebatárselo.",
          "status": 1,
          "created_at": "2020-10-05T16:29:53.000Z",
          "stock": 1,
          "OrderFilm": {
              "FilmId": 1,
              "OrderId": 22,
              "stock": 1
          }
      },{
        "id": 1,
        "title": "El señor de los anillos: La comunidad del Anillo",
        "original_title": "Lord Of The Rings: Fellowship of the ring",
        "img_path": "./../lotr1.jpg",
        "release_date": "2020-10-12T15:31:44.000Z",
        "synopsis": "Frodo Bolsón es un hobbit al que su tío Bilbo hace portador del poderoso Anillo Único, capaz de otorgar un poder ilimitado al que la posea, con la finalidad de destruirlo. Sin embargo, fuerzas malignas muy poderosas quieren arrebatárselo.",
        "status": 1,
        "created_at": "2020-10-05T16:29:53.000Z",
        "stock": 1,
        "OrderFilm": {
            "FilmId": 1,
            "OrderId": 22,
            "stock": 1
        }
    },{
      "id": 1,
      "title": "El señor de los anillos: La comunidad del Anillo",
      "original_title": "Lord Of The Rings: Fellowship of the ring",
      "img_path": "./../lotr1.jpg",
      "release_date": "2020-10-12T15:31:44.000Z",
      "synopsis": "Frodo Bolsón es un hobbit al que su tío Bilbo hace portador del poderoso Anillo Único, capaz de otorgar un poder ilimitado al que la posea, con la finalidad de destruirlo. Sin embargo, fuerzas malignas muy poderosas quieren arrebatárselo.",
      "status": 1,
      "created_at": "2020-10-05T16:29:53.000Z",
      "stock": 1,
      "OrderFilm": {
          "FilmId": 1,
          "OrderId": 22,
          "stock": 1
      }
  },
            {
                "id": 4,
                "title": "The Matrix",
                "original_title": "The Matrix",
                "img_path": "./../matrix1.jpg",
                "release_date": "2020-10-12T15:31:44.000Z",
                "synopsis": "A computer hacker learns from mysterious rebels about the true nature of his reality \n        and his role in the war against its controllers. ",
                "status": 1,
                "created_at": "2020-10-05T16:41:54.000Z",
                "stock": 1,
                "OrderFilm": {
                    "FilmId": 4,
                    "OrderId": 22,
                    "stock": 1
                }
            }
            
        ],
        "Price": {
            "id": 1,
            "days": 2,
            "euro_perDay": "2.50",
            "status": 1
        },
        "charge": 5,
        "currency": "euro",
        "totalCharge": 5
    },
    {
        "id": 23,
        "status": "pending",
        "UserId": 2,
        "createdAt": "2020-10-10T15:17:29.000Z",
        "arrivedAtClient": null,
        "recomendedReturnDate": null,
        "realReturnDate": null,
        "reStoked": null,
        "PriceId": 1,
        "Films": [
            {
                "id": 1,
                "title": "El señor de los anillos: Las dos torres",
                "original_title": "Lord Of The Rings: The Two Towers",
                "img_path": "./../lotr1.jpg",
                "release_date": "2020-10-12T15:31:44.000Z",
                "synopsis": "Frodo Bolsón es un hobbit al que su tío Bilbo hace portador del poderoso Anillo Único, capaz de otorgar un poder ilimitado al que la posea, con la finalidad de destruirlo. Sin embargo, fuerzas malignas muy poderosas quieren arrebatárselo.",
                "status": 1,
                "created_at": "2020-10-05T16:29:53.000Z",
                "stock": 1,
                "OrderFilm": {
                    "FilmId": 1,
                    "OrderId": 23,
                    "stock": 1
                }
            },
            {
                "id": 4,
                "title": "The Matrix",
                "original_title": "The Matrix",
                "img_path": "./../matrix1.jpg",
                "release_date": "2020-10-12T15:31:44.000Z",
                "synopsis": "A computer hacker learns from mysterious rebels about the true nature of his reality \n        and his role in the war against its controllers. ",
                "status": 1,
                "created_at": "2020-10-05T16:41:54.000Z",
                "stock": 1,
                "OrderFilm": {
                    "FilmId": 4,
                    "OrderId": 23,
                    "stock": 1
                }
            }
        ],
        "Price": {
            "id": 1,
            "days": 2,
            "euro_perDay": "2.50",
            "status": 1
        },
        "charge": 5,
        "currency": "euro",
        "totalCharge": 5
    },
    {
        "id": 24,
        "status": "pending",
        "UserId": 2,
        "createdAt": "2020-10-10T15:17:39.000Z",
        "arrivedAtClient": null,
        "recomendedReturnDate": null,
        "realReturnDate": null,
        "reStoked": null,
        "PriceId": 1,
        "Films": [
            {
                "id": 1,
                "title": "El señor de los anillos: La comunidad del Anillo",
                "original_title": "Lord Of The Rings: Fellowship of the ring",
                "img_path": "./../lotr1.jpg",
                "release_date": "2020-10-12T15:31:44.000Z",
                "synopsis": "Frodo Bolsón es un hobbit al que su tío Bilbo hace portador del poderoso Anillo Único, capaz de otorgar un poder ilimitado al que la posea, con la finalidad de destruirlo. Sin embargo, fuerzas malignas muy poderosas quieren arrebatárselo.",
                "status": 1,
                "created_at": "2020-10-05T16:29:53.000Z",
                "stock": 1,
                "OrderFilm": {
                    "FilmId": 1,
                    "OrderId": 24,
                    "stock": 1
                }
            },
        ],
        "Price": {
            "id": 1,
            "days": 2,
            "euro_perDay": "2.50",
            "status": 1
        },
        "charge": 5,
        "currency": "euro",
        "totalCharge": 5
    }
];

const headers = [
  {
    Header: "Order",
    accessor: "OderId",
  },
  {
    Header: "Orders",
    columns: [
      {
        Header: "Movies",
        accessor: (row, i) => {
          return <div style={{  display: 'flex', flexDirection: 'column', padding: "1em"}}>{row.Films.map(film => {return <div style={{display: 'flex', flexDirection: 'column'}}>{film.title}</div>})}</div>
        },
      },
    ],
  },
  {
    Header: "Created At",
    accessor: "createdAt",
    Cell: ({ value }) => {
      return value ? (
        <span style={{ whiteSpace: "nowrap" }}>
          {" "}
          {`${new Date(value).toLocaleDateString("es-ES")} - ${new Date(
            value
          ).toLocaleTimeString("es-ES")}`}
        </span>
      ) : (
        ""
      );
    },
  },
  
  {
    Header: "Status",
    accessor: "status"
  
  },
  {
    Header: "Movies Price",
    accessor: "charge"
  
  },
  {
    Header: "Total Price",
    accessor: "totalCharge"
  
  },
  {
    Header: "Details",
    accessor: (row, i)=>{
      return <>
       <Button animate layer='success'>
              <i className='mdi mdi-chemical-weapon' /> Details
            </Button>
      </>
    }
  
  },
  {
    Header: "Cancel",
    accessor: (row, i)=>{
      return <>
       <Button animate layer='alert'>
              <i className='mdi mdi-chemical-weapon' /> Cancel
            </Button>
      </>
    }
  },
];

  return (
    <ThemeProvider theme={createTheme()}>
      <Arwes>
        <Table animate>
          <GenericTable data={orders} columns={headers}/>
        </Table>
    
      </Arwes>
    </ThemeProvider>
  );
}

export default AllOrderList;



