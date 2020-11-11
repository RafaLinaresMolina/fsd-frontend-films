
import GenericReactTable from "../../components/GenericTable/GenericReactTable.jsx";
import './OrderDetail.scss'
const OrderDetail = (props) => {

  const orderDetailColumns = [
    {
      Header: "Films",
      columns: [
        {
          Header: "Film Id",
          Cell: ({ row }) => {
            console.log("VALUE:", row.original.id);
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
        }
      ],
    },
  ];

  const printCurrency = (value) => {
    const currency = {
      euro: "€",
      dollar: "$"
    }

    return currency[value] ? currency[value] : "€"
  }

  const currency = printCurrency(props.price.currency);

  return (
    <div className="OrderDetail">
      <GenericReactTable data={props.data} columns={orderDetailColumns} />
      <div className="priceSection">
        <label typeof="text"> Price: {props.price.charge} {currency}</label>
        <label typeof="text"> Total Price: {props.price.charge} {currency}</label>
      </div>
    </div>
  );
};

export default OrderDetail;
