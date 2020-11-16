import { Button, Frame, Table } from "arwes";
import { connect } from "react-redux";
import {getOrders} from '../../../redux/actions/profile'
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
import { updateOrderStatus } from "../../../redux/actions/order";
import { ERROR_NOTIFICATION } from "../../../redux/types/notificationTypes";
import { redTheme } from "../../../themes/themes";
import '../../AdminProfile/component/AdminTable.scss'
const AdminTable = (props) => {
  useEffect(() => {
    if(!props.allOrders?.length)
    getOrders(props.user.token).catch(err => console.log(err))
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
        }
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

        <GenericReactTable data={props.orders} columns={oerderHeaders} setColors={setColors}/>        
        
      </Table>
    </Frame>
  );
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    orders: state.profileReducer.orders
  }
}

export default connect(mapStateToProps) (AdminTable);
