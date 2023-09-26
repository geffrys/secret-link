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
# project tools
- ## backend tools
  - **bcrypt**: bcrypt is a hash function designed to store passwords securely
  - **cookie-parser**: is a middleware for Express that simplifies cookie management in Node.js web applications, allowing you to analyze and set cookies efficiently.
  - **cors**: Provide a secure mechanism to allow websites and web applications to access cross-origin resources in a controlled and authorized manner. 
  - **dotenv**: It makes it easy to manage and load environment variables from configuration files, improving application security and portability by separating configuration from source code.
  - **express**: simplifies the development of web applications and APIs in Node.js by providing a wide range of tools and utilities for managing routes, middleware, routing, error management, and more.
  - **jsonwebtoken**: enables the generation and verification of JWT tokens, which are widely used for authentication and authorization in applications and web services. These tokens are secure, flexible, and portable, and are used to securely transmit information between parts of an application.
  - **mysql2**: Provide an interface to connect, interact, and manage MySQL and MariaDB databases from Node.js applications.
- ## frontend tools
  - **axios**: is a JavaScript library that simplifies making HTTP requests and managing responses from an application.
  - **js-cookie**: is a JavaScript library that simplifies cookie management in client-side web applications. Its main function is to allow developers to easily create, read, update and delete cookies.
  - **localforage**: is a library that makes it easy to persistently store data in the web browser. Its main function is to provide a simple and uniform interface for interacting with storage in the browser.
  - **match-sorter**: is a library that simplifies searching and sorting data in web applications. Its main function is to provide flexible search and ranking of results based on relevance.
  - **react**:
  - **react-dom**:
  - **react-hook-form**:
  - **react-router-dom**:
  - **sort-by**:
	
# credits

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
  - fulfilled the role of frontend developer, also helped with the readme with the useful tools, with the
	Credits to collaborators, with examples of the project and justification.
  - email:
		. santiago_taborda82211@elpoli.edu.co
  - github account:
    - https://github.com/santxrx
