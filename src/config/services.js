const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const apiServices = [
  {
    name: 'Account Service',
    description: 'Handles user account management, authentication, and profile data, providing a secure and seamless experience for user identity and access control.',
    url: `${BASE_URL}/account-service/api/docs`
  },
  {
    name: 'Event Management Service',
    description: 'Manages event creation, scheduling, and booking operations, offering robust APIs to streamline event-related workflows and reservations.',
    url: `${BASE_URL}/event-management-service/api/docs`
  },
  {
    name: 'Blog and Feedback Service',
    description: 'Facilitates the creation, management, and retrieval of blog content and user feedback, enhancing engagement and insights within the platform.',
    url: `${BASE_URL}/blog-feedback-service/api/docs`
  },
  {
    name: 'Communication Service',
    description: 'Powers real-time communication through Socket.IO, live video streaming, and scheduling, ensuring efficient and dynamic interaction between users.',
    url: `${BASE_URL}/communication-service/api/docs`
  },
  {
    name: 'Notification Service',
    description: 'Manages the delivery of emails and push notifications, keeping users informed with timely and personalized updates.',
    url: `${BASE_URL}/notification-service/api/docs`
  },
  {
    name: 'Payment Service',
    description: 'Oversees payment processing, transaction data, revenue tracking, and payout operations, delivering a secure and efficient financial management solution.',
    url: `${BASE_URL}/payment-service/api/docs`
  }
];
