import React from "react";

const Notification = ({ notification }) => {
  return (
    <div>
      <div
        className={
          notification.success ? `notification success` : `notification err`
        }
      >
        {notification.success && notification.success}
        {notification.err && notification.err}
      </div>
    </div>
  );
};

export default Notification;
