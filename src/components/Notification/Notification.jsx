import React from "react";
import { connect } from "react-redux";
import "./Notification.scss";
import NotificationMessage from "./NotificationMessage";

const CustomNotification = (props) => {

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
    showErrorNotification: state.showErrorNotification,
    showWarningNotification: state.showWarningNotification,
    showSuccessNotification: state.showSuccessNotification,
    showInfoNotification: state.showInfoNotification,
    errorNotification: state.errorNotification,
    warningNotification: state.warningNotification,
    successNotification: state.successNotification,
    infoNotification: state.infoNotification,
  };
};

export default connect(mapStateToProps)(CustomNotification);