import { Button, Frame, Table } from "arwes";
import { connect } from "react-redux";
import { getOrders } from "../../../redux/actions/profile";
import GenericReactTable from "../../../components/GenericTable/GenericReactTable.jsx";
import { useEffect, useState } from "react";
import Modal from "../../../components/Modal/Modal";
import MovieOpenIcon from "mdi-react/MovieOpenIcon";
import OrderDetail from "../../../components/OrderDetail/OrderDetail";
import MagnifyIcon from "mdi-react/MagnifyIcon";
import { redTheme } from "../../../themes/themes";
import "../../AdminProfile/component/AdminTable.scss";
const AdminTable = (props) => {
  useEffect(() => {
    if (!props.allOrders?.length)
      getOrders(props.user.token).catch((err) => console.log(err));
  }, []);

  const oerderHeaders = [
    {
      Header: "Orders",
      columns: [
        {
          Header: "Order #",
          accessor: "id",
        },
        {
          Header: "Shiped",
          accessor: "arrivedAtClient",
          Cell: ({ value }) => {
            return value ? (
              <span style={{ whiteSpace: "nowrap" }}>
                {" "}
                {`${new Date(value).toLocaleDateString("es-ES")}`}
              </span>
            ) : (
              ""
            );
          },
        },
        {
          Header: "Should Return",
          accessor: "recomendedReturnDate",
          Cell: ({ value }) => {
            return value ? (
              <span style={{ whiteSpace: "nowrap" }}>
                {" "}
                {`${new Date(value).toLocaleDateString("es-ES")}`}
              </span>
            ) : (
              ""
            );
          },
        },
        {
          Header: "Returned",
          accessor: "realReturnDate",
          Cell: ({ value }) => {
            return value ? (
              <span style={{ whiteSpace: "nowrap" }}>
                {" "}
                {`${new Date(value).toLocaleDateString("es-ES")}`}
              </span>
            ) : (
              ""
            );
          },
        },
        {
          Header: "Re-Stocked",
          accessor: "reStoked",
          Cell: ({ value }) => {
            return value ? (
              <span style={{ whiteSpace: "nowrap" }}>
                {" "}
                {`${new Date(value).toLocaleDateString("es-ES")}`}
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
      ],
    },
    {
      Header: "Actions",
      columns: [
        {
          Header: "Details",
          accessor: (row, i) => {
            return (
              <>
                <Button
                  animate
                  onClick={() => {
                    showModalDetailOrder();
                    setRow(row);
                  }}
                >
                  <MagnifyIcon className="verticalAlignIcons" />{" "}
                </Button>
              </>
            );
          },
        },
      ],
    },
  ];

  const setColors = (value) => {
    return value ? "pastDueTr" : "";
  };

  const [row, setRow] = useState({});
  const [showDetailOrder, setShowDetailOrder] = useState(false);
  const showModalDetailOrder = () => {
    setShowDetailOrder(true);
  };
  const hideModalDetailOrder = () => {
    setShowDetailOrder(false);
  };

  return (
    <Frame anim corners={4} className="marvelousPadding" layer="primary">
      <Table animate>
        <Modal
          show={showDetailOrder}
          theme={row.delayCharge ? redTheme : ""}
          handleClose={hideModalDetailOrder}
          header={3}
          title={"Order Details"}
          icon={<MovieOpenIcon className="verticalAlignIcons" />}
        >
          {row.Films ? (
            <OrderDetail
              data={row.Films}
              row={row}
              price={{
                charge: row.charge,
                totalCharge: row.totalCharge,
                currency: row.currency,
                delayCharge: row.delayCharge,
              }}
            />
          ) : (
            ""
          )}
        </Modal>
        <GenericReactTable
          data={props.orders}
          columns={oerderHeaders}
          setColors={setColors}
        />
      </Table>
    </Frame>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    orders: state.profileReducer.orders,
  };
};

export default connect(mapStateToProps)(AdminTable);
