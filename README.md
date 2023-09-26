# Secret Link - CRM

1. [Summary](#summary)
    1. [Key Functionalities](##key-functionalities)
    2. [Key Benefits](#key-benefits)
2. [Install](#install-instructions)
    1. [Back-end](#back-end-install-instructions)

# summary

The **Secret Link** project involves the development of a comprehensive platform for travel agencies, aimed at enhancing and simplifying the experience for both commercial agents and customer interactions. The platform offers several key functionalities that enhance agency efficiency and service quality.

## Key Functionalities

1. **Commercial Agent Login:** The platform features a secure authentication system that allows commercial agents to access their individual accounts. This ensures controlled access to information and tools required for their tasks.

2. **Travel Reservations:** Commercial agents can utilize the platform to efficiently make travel reservations on behalf of their clients. The intuitive and user-friendly interface guides agents through the reservation process, streamlining the selection of destinations, dates, flights, accommodations, and other relevant details.

3. **Customer Travel Queries:** The platform provides agents with a comprehensive view of travel booked for clients. This function allows agents to access a complete summary of itineraries and the current status of reservations. This enables agents to offer personalized service and effectively respond to customer queries.

4. **Personnel Management:** Administrators have specific tools to manage agency personnel. They can create new staff profiles, update existing information, and, when necessary, remove outdated records. This function ensures complete control over staff access and activity on the platform.

5. **Reporting for Administration:** The platform includes a reporting feature that empowers administrators to generate and access various reports. These reports provide insights into different aspects of the agency's operations, facilitating data-driven decisions and strategic planning.

## Key Benefits

- **Enhanced Efficiency:** The platform simplifies booking and management processes, resulting in time savings for both commercial agents and clients.

- **Instant Visibility:** Agents can quickly access up-to-date information on reservations and travel statuses, enabling proactive and high-quality service.

- **Administrative Control:** Administrators have the ability to oversee and maintain an updated staff list, ensuring that only authorized personnel have access. Additionally, they can harness the reporting feature for informed decision-making.

In summary, "Secret Link" is a comprehensive solution that will transform how travel agencies operate. By combining efficient travel booking, customer information management, personnel administration, and robust reporting into a single platform, a smoother and more satisfactory experience is achieved for both the internal team and travelers.

# Install Instructions
## BACK END install instructions
- **first step** you've to install dependencies
```bash
cd /back-end
npm i
```
- **second step**create and config .env file as .env.example and set variables with your own settings.
```js
PORT=
USERDB=
PASSDB=
DB_NAME=
TOKEN_SECRET=
SALT_ROUNDS=
```
- **finally** you can start your server
```bash
npm run start 
```
# Main Features
It is a fundamental relationship as it allows you to manage relationships with your clients effectively, manage sales and reservations and improve efficiency in all tourism-related operations.
- **Offer of tourist services:** offers a wide range of tourist services that include flight booking, accommodation, ground and air transportation, tourist packages. Its objective is to facilitate the planning and organization of trips for its clients.
- **Reservation Management:** This reservation system allows you to make reservations for flights, hotels and other services on behalf of customers. They are also responsible for confirming reservations and managing any necessary changes or cancellations.
