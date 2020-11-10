import { Button, Table, Words } from "arwes";
import { connect } from "react-redux";
import {getAllOrders} from '../../../redux/actions/admin'
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

  const oerderHeaders = [
    {
      Header: "Orders",
      columns: [
        {
          Header: "User",
          accessor: (row, i) => {
            return (
              <>
                <Button animate onClick={() =>
                {
                  showModalDetailUser()
                  setRow(row)}
                }>
                  <i className="mdi mdi-chemical-weapon" /> {row.User.email}
                </Button>
              </>
            );
          },
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
          Header: "Details",
          accessor: (row, i) => {
            return (
              <>
                <Button animate onClick={() => {
                  showModalDetailOrder()
                  setRow(row)}
                }>
                  <i className="mdi mdi-chemical-weapon" /> Details
                </Button>
              </>
            );
          },
        },
      ],
    },
    
  ];

  const filmsHeaders = [
    {
      Header: "Films",
      columns: [
        {
          Header: "Film Id",
          Cell: ({row}) => {
            console.log('VALUE:', row.original.id)
            return row.original.id
          },
          
        },
        {
          Header: "Original Title",
          accessor: "original_title"
        },
        {
          Header: "Title",
          accessor: "title"
        },
        {
          Header: "#",
          Cell: ({row}) => {
            return row.original.OrderFilm.stock
          },
        }
        ,{
          Header: "status",
          Cell: ({row}) => {
            return row.original.status
          },
        },
      ],
    },
    
  ];

  const [row, setRow] = useState({});

  const [showDetailUser, setShowDetailUser] = useState(false);

  const showModalDetailUser = () => {setShowDetailUser(true);};
  const hideModalDetailUser = () => {setShowDetailUser(false);};

  const [showDetailOrder, setShowDetailOrder] = useState(false);

  const showModalDetailOrder = () => {setShowDetailOrder(true);};
  const hideModalDetailOrder = () => {setShowDetailOrder(false);};

  return (
    <Table animate>
      <Modal show={showDetailUser} handleClose={hideModalDetailUser} header={3} title={"User Details"} icon={<UserIcon className='verticalAlignIcons'/>}>
        <div>
          <p><Words>Name: {row.User?.name} {row.User?.last_name}</Words></p>
          <p><Words>Email: {row.User?.email}</Words></p>
        </div>
      </Modal>
      <Modal show={showDetailOrder} handleClose={hideModalDetailOrder} header={3} title={"Order Details"} icon={<PackageIcon className='verticalAlignIcons'/>}>
     
      {row.Films ? <GenericReactTable data={row.Films} columns={filmsHeaders}/> : ''}
   
          <label typeof="text"> Price: {row.charge} €</label>
          <label typeof="text"> Total Price: {row.charge} €</label>
       
      </Modal>
      <GenericReactTable data={props.allOrders} columns={oerderHeaders} />
    </Table>
  );
}

const mapStateToProps = state => {
  return {
    allOrders: state.adminReducer.allOrders
  }
}

export default connect(mapStateToProps) (AdminTable);
