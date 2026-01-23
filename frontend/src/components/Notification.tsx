import React from 'react';
import { useNotification } from '../context/NotificationContext';

const Notification: React.FC = () => {
  const { notifications, removeNotification } = useNotification();

  return (
    <div className="notifications">
      {notifications.map(notification => (
        <div key={notification.id} className={`notification ${notification.type}`}>
          {notification.message}
          <button onClick={() => removeNotification(notification.id)}>×</button>
        </div>
      ))}
    </div>
  );
};

export default Notification;