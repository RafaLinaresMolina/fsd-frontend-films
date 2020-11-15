import { Frame } from "arwes";
import GenericReactTable from "../../components/GenericTable/GenericReactTable.jsx";
import "./OrderDetail.scss";
const OrderDetail = (props) => {
  const orderDetailColumns = [
    {
      Header: "Films",
      columns: [
        {
          Header: "Film Id",
          Cell: ({ row }) => {
            return row.original.id;
          },
        },
        {
          Header: "Original Title",
          accessor: "original_title",
        },
        {
          Header: "Title",
          accessor: "title",
        },
        {
          Header: "#",
          Cell: ({ row }) => {
            return row.original.OrderFilm.stock;
          },
        },
      ],
    },
  ];

  const printCurrency = (value) => {
    const currency = {
      euro: "€",
      dollar: "$",
    };

    return currency[value] ? currency[value] : "€";
  };

  const currency = printCurrency(props.price.currency);

  return (
    <div className="OrderDetail">
      <Frame anim corners={4}  layer={props.layer ? props.layer : "primary" }>
        <h3>
          Created at:{" "}
          {`${new Date(props.row.createdAt).toLocaleDateString(
            "es-ES"
          )} - ${new Date(props.row.createdAt).toLocaleTimeString("es-ES")}`}
        </h3>
        <div className="tableDetail">
          <GenericReactTable data={props.data} columns={orderDetailColumns} />
        </div>

        <div className="priceSection">
          <label typeof="text">
            {" "}
            Price: {props.price.charge} {currency}
          </label>
          {props.price.delayCharge ? (
            <label typeof="text" className="pastDueExtra">
              {" "}
              Pastdue Charge:{props.price.delayCharge} {currency}
            </label>
          ) : (
            ""
          )}
          <label typeof="text">
            {" "}
            Total Price: {props.price.totalCharge} {currency}
          </label>
        </div>
      </Frame>
    </div>
  );
};

export default OrderDetail;
