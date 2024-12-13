import React from 'react';
import { useDispatch } from 'react-redux';
import { removeNotification } from '../model/notificationSlice';
import { Notification as NotificationType } from '../model/notificationSlice';
import './Notification.scss';

interface NotificationProps {
  notification: NotificationType;
}

const Notification: React.FC<NotificationProps> = ({ notification }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(removeNotification(notification.id));
  };

  return (
    <output className={`notification ${notification.type}`}>
      <span>{notification.message}</span>
      <button className="close-btn" onClick={handleClose}>×</button>
    </output>
  );
};

export default Notification;
