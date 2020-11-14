import { Button, Table } from "arwes";
import GenericReactTable from "../../../components/GenericTable/GenericReactTable.jsx";

function UserTable(props) {
  

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
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "1em",
                }}
              >
                {row.Films.map((film) => {
                  return (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      {film.title}
                    </div>
                  );
                })}
              </div>
            );
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
      accessor: "status",
    },
    {
      Header: "Movies Price",
      accessor: "charge",
    },
    {
      Header: "Total Price",
      accessor: "totalCharge",
    },
    {
      Header: "Details",
      accessor: (row, i) => {
        return (
          <>
            <Button animate layer="success">
              <i className="mdi mdi-chemical-weapon" /> Details
            </Button>
          </>
        );
      },
    },
    {
      Header: "Cancel",
      accessor: (row, i) => {
        return (
          <>
            <Button animate layer="alert">
              <i className="mdi mdi-chemical-weapon" /> Cancel
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <Table animate>
      <GenericReactTable data={props.data} columns={headers} />
    </Table>
  );
}

export default UserTable;
