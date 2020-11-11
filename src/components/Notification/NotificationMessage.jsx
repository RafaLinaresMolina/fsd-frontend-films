import { Blockquote, Content, createTheme, Frame, ThemeProvider } from "arwes";
import React from "react";
import { connect } from "react-redux";
import {
  CLEAR_NOTIFICATION_WARNING,
  CLEAR_NOTIFICATION_ERROR,
  CLEAR_NOTIFICATION_SUCCESS,
  CLEAR_NOTIFICATION_INFO,
} from "../../redux/types/notificationTypes";
import "./Notification.scss";
import { redTheme, greenTheme, orangeTheme } from "../../themes/themes";
import WarningIcon from "mdi-react/WarningIcon";
import BiohazardIcon from "mdi-react/BiohazardIcon";
import CheckIcon from "mdi-react/CheckIcon";
import InfoCircleIcon from "mdi-react/InfoCircleIcon";
const NotificationMessage = (props) => {
  const stateClearType = {
    warning: CLEAR_NOTIFICATION_WARNING,
    error: CLEAR_NOTIFICATION_ERROR,
    success: CLEAR_NOTIFICATION_SUCCESS,
    info: CLEAR_NOTIFICATION_INFO,
  };

  const getIcon = (type) => {
    const iconSize = "2em";
    const icons = {
      error: <BiohazardIcon className="error-icon-color" size={iconSize} />,
      warning: <WarningIcon className="warning-icon-color" size={iconSize} />,
      success: <CheckIcon className="success-icon-color" size={iconSize} />,
      info: <InfoCircleIcon className="info-icon-color" size={iconSize} />,
    };
    return icons[type];
  };

  const notificationLayerType = (value) => {
    const layers = {
      error: { layer: "alert", theme: redTheme },
      warning: { layer: "secondary", theme: orangeTheme },
      success: { layer: "success", theme: greenTheme },
      info: { layer: "primary", theme: null },
    };
    return layers[value];
  };

  const clearNotification = (props) => {
    if(props.showNotification)
      setTimeout(() => {
        props.dispatch({ type: stateClearType[props.type], payload: {notification: {}, show: false} });
      }, 6000);
    };

  const layerAndStyle = notificationLayerType(props.type);

  return (
    <div className={`notification-wrapper ${props.showNotification ? "notification-display-block" : "notification-display-none"}`}>
      <ThemeProvider theme={createTheme(layerAndStyle.theme)}>
      <Content animate>
        <Frame animate={true} level={3} corners={6} layer={layerAndStyle.layer}>
          <div className="notification-body">
            <div className="notification-icon">
              {getIcon(props.type)}
            </div>
            <div className="notification-message">
              <h2 className="notification-title">{props.notification.title}</h2>
              { typeof(props.notification.msg) === 'string' ?  <Blockquote animate data-layer={layerAndStyle.layer}> {props.notification.msg} </Blockquote>
                : props.notification.msg?.map((message, i) =>  <Blockquote key={`${props.type}_${i}_notification`} animate data-layer={layerAndStyle.layer}> {message} </Blockquote> )}
             
            </div>
          </div>
        </Frame>
      </Content>
    </ThemeProvider>
     {clearNotification(props)}
    </div>
    
  );
};

export default connect()(NotificationMessage);
