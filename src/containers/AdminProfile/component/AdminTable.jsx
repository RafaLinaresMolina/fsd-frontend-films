import { Button, Frame, Table, Words } from "arwes";
import { connect } from "react-redux";
import {getAllOrders} from '../../../redux/actions/admin'
import GenericReactTable from "../../../components/GenericTable/GenericReactTable.jsx";
import { useEffect, useState } from "react";
import Modal from "../../../components/Modal/Modal";
import MovieOpenIcon from 'mdi-react/MovieOpenIcon'
import UserIcon from 'mdi-react/UserIcon';
import OrderDetail from "../../../components/OrderDetail/OrderDetail";
import ProfileDetail from "../../Profile/ProfileDetail";
import MagnifyIcon from 'mdi-react/MagnifyIcon'
import UpdateIcon from 'mdi-react/UpdateIcon'
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon'
import CheckIcon from 'mdi-react/CheckIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import { updateOrderStatus } from "../../../redux/actions/order";
import { ERROR_NOTIFICATION } from "../../../redux/types/notificationTypes";
import { redTheme } from "../../../themes/themes";
import './AdminTable.scss'
const AdminTable = (props) => {
  useEffect(() => {
    if(!props.allOrders?.length)
    getAllOrders(props.user.token).catch(err => console.log(err))
  }, [])

  const oerderHeaders = [   
    {
      Header: "Orders",
      columns: [
        {
          Header: "Order #",
          accessor: "id"
        },
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
                  <AccountOutlineIcon className="verticalAlignIcons"/> {row.User.email}
                </Button>
              </>
            );
          },
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
                <Button animate onClick={() => {
                  showModalDetailOrder()
                  setRow(row)}
                }>
                  < MagnifyIcon className="verticalAlignIcons"/> </Button>
              </>
            );
          },
        },
        {
          Header: "Update",
          accessor: (row, i) => {
            return (
              row.status !== 'stocked' ? <>
                <Button animate onClick={() => {
                  showModalUpdateOrder()
                  setRow(row)}
                }>
                  < UpdateIcon className="verticalAlignIcons"/> </Button>
              </> : ""
            );
          },
        },
      ]
    }
  ];

  const setColors = (value) => {
    return value ? 'pastDueTr' : '';
  }

  const nextStatus = (status) => {
    const allStatus = {
      pending: 'sended',
      sended: 'client',
      client: 'returning',
      returning: 'stocked'
    }
    return allStatus[status]
  }


  const [row, setRow] = useState({});

  const [showDetailUser, setShowDetailUser] = useState(false);

  const showModalDetailUser = () => {setShowDetailUser(true)};
  const hideModalDetailUser = () => {setShowDetailUser(false)};

  const [showDetailOrder, setShowDetailOrder] = useState(false);

  const showModalDetailOrder = () => {setShowDetailOrder(true)};
  const hideModalDetailOrder = () => {setShowDetailOrder(false)};

  const [showUpdateOrder, setShowUpdateOrder] = useState(false);

  const showModalUpdateOrder = () => {setShowUpdateOrder(true)};
  const hideModalUpdateOrder = () => {setShowUpdateOrder(false)};

  const getChunk =() => {
    return props.totalOrders - props.orderCount > 10 ? 10 : props.totalOrders - props.orderCount
  }

  return (
    <Frame anim corners={4} style={{ padding: "1em" }} layer="primary">
      <Table animate>
        <Modal show={showDetailUser} handleClose={hideModalDetailUser} header={3} title={"User Details"} icon={<UserIcon className='verticalAlignIcons'/>}>
          <ProfileDetail user={row.User}/>
        </Modal>
        <Modal show={showDetailOrder} theme={row.delayCharge ? redTheme : ''} handleClose={hideModalDetailOrder} header={3} title={"Order Details"} icon={<MovieOpenIcon className='verticalAlignIcons'/>}>
          {row.Films ? <OrderDetail data={row.Films} row={row} price={{charge: row.charge, totalCharge: row.totalCharge, currency: row.currency, delayCharge: row.delayCharge}}/> : ''}
        </Modal>

        <Modal show={showUpdateOrder} handleClose={hideModalUpdateOrder} header={3} title={"Update Order?"} icon={<MovieOpenIcon className='verticalAlignIcons'/>}>
          <div style={{padding: "1em"}}>
            <h3>You will update the order status:</h3>
            <h4 style={{width: "100%", textAlign: "center"}}> {row.status} < ArrowRightIcon className="verticalAlignIcons"/> {nextStatus(row.status)}</h4>
            <div style={{display: "flex", justifyContent: 'center' ,alignItems: "center", width: "100%", verticalAlign: "middle"}}>
            <Button onClick={async () => {
              try{
                await updateOrderStatus(row, props.user.token);
                hideModalUpdateOrder();
              }catch(err){
                hideModalUpdateOrder();
                props.dispatch({
                  type: ERROR_NOTIFICATION,
                  payload: {
                    notification: {
                      title: "ERROR!",
                      msg: err.message,
                    },
                    show:true
                  },
                });
              }
            }}>
              <CheckIcon className="verticalAlignIcons"/> Update
            </Button>
            </div>
            
          </div>
        </Modal>

        <GenericReactTable data={props.allOrders} columns={oerderHeaders} setColors={setColors}/>
        <div className="paginationControls">
          <div className="leftyButton">
          <Button onClick={async () => (+props.orderCount > 0 ? await getAllOrders(props.user.token, false, props.orderCount) : "")}> <ArrowLeftIcon className="verticalAlignIcons"/> </Button> 
        </div>
        <div className="paginationInfo">
          Page {Math.ceil(+props.orderCount / 10)} from {Math.ceil(+props.totalOrders / 10)}, showing {+props.orderCount} elements of {+props.totalOrders} 
        </div>
        <div className="rightyButton">
        <Button onClick={async () => (+props.orderCount < +props.totalOrders ? await getAllOrders(props.user.token, true, props.orderCount) : "")}> <ArrowRightIcon className="verticalAlignIcons"/> </Button>
        </div>
        </div>
        
        
      </Table>
    </Frame>
  );
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    allOrders: state.adminReducer.allOrders,
    orderCount: state.adminReducer.orderCount,
    totalOrders: state.adminReducer.totalOrders
  }
}

export default connect(mapStateToProps) (AdminTable);
