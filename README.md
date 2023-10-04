# Secret Link - CRM

1. [Summary](#summary)
    1. [Key Functionalities](#key-functionalities)
    2. [Key Benefits](#key-benefits)
2. [Install](#install-instructions)
    1. [Back-end](#back-end-install-instructions)
3. [Main Features](#main-features)
4. [Construction Details](#construction-details)
5. [¿Why the project?](#why-the-project)
6. [¿How?](#how)
7. [Project tools](project-tools)
   - [Backend tools](#backend-tools)
   - [Frontend tools](#frontend-tools)
9. [Credits](#credits)


# Summary

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
- **Regulatory compliance:** Government regulations and laws related to the tourism industry, such as consumer protection, operating license, and personal data management, are complied with.
- **Contact and Customer Management:** Allows the creation and storage of customer profiles, including contact information, travel preferences, reservation history, and notes from previous interactions.

# Construction Details
This CRM is a strategic project that can provide significant benefits in terms of customer service and operational efficiency. Customization and adaptation to the specific needs of the agency are key to its success. Below we detail some of the main considerations we took into account when building the CRM:
- **Definition Requirements:** functional requirements were determined, such as contact management, reservation history and task automation.
- **Customer Data Collection:** we established a strategy for the continuous collection of customer data, including travel preferences, reservation history and contact data.
- **Security and data protection:** security measures have been implemented to protect confidential customer information and comply with applicable data protection regulations.
- **Tests and adjustments:** testing of the CRM was performed to ensure it is working as intended and to make adjustments as necessary.

# ¿Why the project?
This project is used to maintain a detailed record of interaction and communication with clients to offer a personalized service, automate administrative tasks and improve efficiency in the management of reservations and tourist services, offer a more customer-oriented service by knowing their preferences and needs, in addition, to use analysis and reporting to make strategic decisions that drive business growth.

# ¿How?

The process begins with collecting customer data, which may include contact information, travel preferences, purchase history, and demographic details. This information is stored in the CRM database, then the CRM organizes and stores customer profiles in a structured way so that travel agents can easily access and update them, in addition the CRM records all interactions and communications with customers, this includes emails, phone calls. , text messages and meetings. Agents can access this information to follow up on conversations and provide more personalized service.
# Project tools
- ## Backend tools
  - **bcrypt**: bcrypt is a hash function designed to store passwords securely
  - **cookie-parser**: is a middleware for Express that simplifies cookie management in Node.js web applications, allowing you to analyze and set cookies efficiently.
  - **cors**: Provide a secure mechanism to allow websites and web applications to access cross-origin resources in a controlled and authorized manner. 
  - **dotenv**: It makes it easy to manage and load environment variables from configuration files, improving application security and portability by separating configuration from source code.
  - **express**: simplifies the development of web applications and APIs in Node.js by providing a wide range of tools and utilities for managing routes, middleware, routing, error management, and more.
  - **jsonwebtoken**: enables the generation and verification of JWT tokens, which are widely used for authentication and authorization in applications and web services. These tokens are secure, flexible, and portable, and are used to securely transmit information between parts of an application.
  - **mysql2**: Provide an interface to connect, interact, and manage MySQL and MariaDB databases from Node.js applications.
- ## Frontend tools
  - **axios**: is a JavaScript library that simplifies making HTTP requests and managing responses from an application.
  - **js-cookie**: is a JavaScript library that simplifies cookie management in client-side web applications. Its main function is to allow developers to easily create, read, update and delete cookies.
  - **localforage**: is a library that makes it easy to persistently store data in the web browser. Its main function is to provide a simple and uniform interface for interacting with storage in the browser.
  - **match-sorter**: is a library that simplifies searching and sorting data in web applications. Its main function is to provide flexible search and ranking of results based on relevance.
  - **react**: Open source JavaScript library used to develop user interfaces (UI). It was launched by Facebook developers in 2013 and has become one of the most popular tools for creating web pages. Although it is not a complete framework, React is very useful for creating web applications with reusable components.
  - **react-dom**: is a React package that provides DOM-specific methods. These methods can be used at the highest level of your application as an escape from the React model if needed. Some of the main features of ReactDOM are:
    - Rendering: ReactDOM provides the render() method that is used to render React components to the DOM.
    - Creating Portals: ReactDOM also provides the createPortal() method that allows you to render components to a DOM node that exists outside of the component's DOM hierarchy.
    - Synchronous update: The flushSync() method forces React to synchronously execute all updates within the provided callback.
  - **react-hook-form**: is a React library that allows you to create uncontrolled forms, maintaining the HTML standard. By using React Hook Form, you can reduce the number of re-renders and create a better user experience
  - **react-router-dom**: is a React library that provides components and utilities to create single page applications (SPA) with routing, it allows you to define routes and links in your application, making it easy to navigate between different components or pages without having to reload the entire page.
	
# Credits

- Samuel Ignacio Arango Ramírez
  - fulfilled the role of back end developer, also helped in the development of the frontend, taking into account
		his experience with react.
  - email:
			. samuel_arango82211@elpoli.edu.co
  - github account:
     - https://github.com/Superajke

- Sergio Andrés Bula Moreno
   - fulfilled the role of frontend developer, also helped with the readme with the main features, with
		the examples of the project, with the details about the construction, as well as the justification of the project.
   - email:
		   sergio_bula82211@elpoli.edu.co
   - github account:
      - https://github.com/sandres07

- Geffry Alejandro Ospina Atehortua
  - fulfilled the role of backend developer, created the repository where the project is saved, executed the merge,
     		also help in the readme with the summary, table of contents, and how to install and run the project.
  - email:
			. geffry_ospina84171@elpoli.edu.co
  - github account:
    - https://github.com/geffrys
    
- Santiago Taborda Ruiz
