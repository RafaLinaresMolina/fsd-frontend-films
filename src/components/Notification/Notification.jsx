import React from "react";
import { connect } from "react-redux";
import "./Notification.scss";
import NotificationMessage from "./NotificationMessage";

const Notification = (props) => {

  return (
		<div className="notification">
			<section className="notification-container">
				{props.warningNotification ? (
					<NotificationMessage
						showNotification={props.showWarningNotification}
						notification={props.warningNotification}
						type={"warning"}
					/>
				
				) : (
					""
				)}
				{props.errorNotification ? (
					<NotificationMessage
						showNotification={props.showErrorNotification}
						notification={props.errorNotification}
						type={"error"}
					/>
				) : (
					""
				)}
				{props.successNotification ? (
					<NotificationMessage
						showNotification={props.showSuccessNotification}
						notification={props.successNotification}
						type={"success"}
					/>
				) : (
					""
				)}
				{props.infoNotification ? (
					<NotificationMessage
						showNotification={props.showInfoNotification}
						notification={props.infoNotification}
						type={"info"}
					/>
				) : (
					""
				)}
			</section>
		</div>
	);
}

const mapStateToProps = (state) => {
  return {
    showErrorNotification: state.notificationReducer.showErrorNotification,
    showWarningNotification: state.notificationReducer.showWarningNotification,
    showSuccessNotification: state.notificationReducer.showSuccessNotification,
    showInfoNotification: state.notificationReducer.showInfoNotification,
    errorNotification: state.notificationReducer.errorNotification,
    warningNotification: state.notificationReducer.warningNotification,
    successNotification: state.notificationReducer.successNotification,
    infoNotification: state.notificationReducer.infoNotification,
  };
};

export default connect(mapStateToProps)(Notification);