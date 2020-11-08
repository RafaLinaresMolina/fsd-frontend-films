import { Button, Table, Words } from "arwes";
import { connect } from "react-redux";
import { getAllOrders } from '../../../redux/actions/admin'
import GenericReactTable from "../../../components/GenericTable/GenericReactTable.jsx";
import { useEffect, useState } from "react";
import Modal from "../../../components/Modal/Modal";

import PackageIcon from 'mdi-react/PackageIcon';
import UserIcon from 'mdi-react/UserIcon';
const AdminTable = (props) => {
  useEffect(() => {

    const token = "";
    getAllOrders(token).catch(err => console.log(err))

  }, [])

  const headers = [
    {
      Header: "User",
      accessor: (row, i) => {
        return (
          <>
            <Button animate onClick={() => {
              showModalDetailUser()
              setRow(row)
            }
            }>
              <i className="mdi mdi-chemical-weapon" /> {row.User.email}
            </Button>
          </>
        );
      },
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
            <Button animate onClick={() => {
              showModalDetailOrder()
              setRow(row)
            }
            }>
              <i className="mdi mdi-chemical-weapon" /> Details
            </Button>
          </>
        );
      },
    },
  ];

  const [row, setRow] = useState({});

  const [showDetailUser, setShowDetailUser] = useState(false);

  const showModalDetailUser = () => { setShowDetailUser(true); };
  const hideModalDetailUser = () => { setShowDetailUser(false); };

  const [showDetailOrder, setShowDetailOrder] = useState(false);

  const showModalDetailOrder = () => { setShowDetailOrder(true); };
  const hideModalDetailOrder = () => { setShowDetailOrder(false); };


  return (
    <Table animate>
      <Modal show={showDetailUser} handleClose={hideModalDetailUser} header={3} title={"User Details"} icon={<UserIcon className='verticalAlignIcons' />}>
        <div>
          <p><Words>Name: {row.User?.name} {row.User?.last_name}</Words></p>
          <p><Words>Email: {row.User?.email}</Words></p>
        </div>
      </Modal>
      <Modal show={showDetailOrder} handleClose={hideModalDetailOrder} header={3} title={"Order Details"} icon={<PackageIcon className='verticalAlignIcons' />}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
          {row.Films?.map(film => {
            return <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div>Rented {film.stock}</div>{"  ->  "}<div> {film.original_title}</div>
            </div>
          })}</div>
      </Modal>
      <GenericReactTable data={props.allOrders} columns={headers} />
    </Table>
  );
}

const mapStateToProps = state => {
  return {
    allOrders: state.adminReducer.allOrders
  }
}


export default connect(mapStateToProps)(AdminTable);
