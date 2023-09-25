CREATE TABLE agencies(
    id_agencie INT PRIMARY KEY AUTO_INCREMENT,
    name_agencie VARCHAR(50) NOT NULL
);

CREATE TABLE headquarters(
    id_headquarter INT PRIMARY KEY AUTO_INCREMENT,
    name_headquarter VARCHAR(50) NOT NULL,
    address_headquarter VARCHAR(50) NOT NULL,
    phone_headquarter VARCHAR(20) NOT NULL,
    status_headquarter TINYINT NOT NULL,
    id_agencie INT NOT NULL,
    FOREIGN KEY (id_agencie) REFERENCES agencies(id_agencie)
);

CREATE TABLE agent_types(
    id_agent_type INT PRIMARY KEY AUTO_INCREMENT,
    name_agent_type VARCHAR(30) NOT NULL
);

CREATE TABLE document_types(
    id_document_type INT PRIMARY KEY AUTO_INCREMENT,
    name_document_type VARCHAR(40) NOT NULL,
    status_document_type TINYINT NOT NULL
);

CREATE TABLE agents(
    id_agent INT PRIMARY KEY AUTO_INCREMENT,
    name_agent VARCHAR(50) NOT NULL,
    phone_agent VARCHAR(20) NOT NULL,
    id_document_type INT NOT NULL,
    id_agent_type INT NOT NULL, 
    id_headquarter INT NOT NULL,
    document_number_agent VARCHAR(20) NOT NULL,
    user_name_agent VARCHAR(20) NOT NULL,
    user_password_agent VARCHAR(300) NOT NULL,
    user_mail_agent VARCHAR(100) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    modified_at DATETIME,
    FOREIGN KEY (id_document_type) REFERENCES document_types(id_document_type),
    FOREIGN KEY (id_agent_type) REFERENCES agent_types(id_agent_type),
    FOREIGN KEY (id_headquarter) REFERENCES headquarters(id_headquarter)
);

CREATE TABLE auditory_sesion(
    id_auditory_sesion INT PRIMARY KEY AUTO_INCREMENT,
	login_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    logout_time DATETIME,
    message_end_session VARCHAR(255),
    id_agent INT NOT NULL,
    FOREIGN KEY (id_agent) REFERENCES agents(id_agent)
);

CREATE TABLE eps(
    id_eps INT PRIMARY KEY AUTO_INCREMENT,
    name_eps VARCHAR(30) NOT NULL,
    status_eps TINYINT NOT NULL
);

CREATE TABLE rh_types(
    id_rh INT PRIMARY KEY AUTO_INCREMENT,
    name_rh VARCHAR(10) NOT NULL
);

CREATE TABLE health_information(
    id_health_information INT PRIMARY KEY AUTO_INCREMENT,
    id_rh INT,
    id_eps INT,
    health_card VARCHAR(20),
    health_diseases TINYINT NOT NULL,
    health_details VARCHAR(200) NOT NULL,
    FOREIGN KEY (id_rh) REFERENCES rh_types(id_rh),
    FOREIGN KEY (id_eps) REFERENCES eps(id_eps)
);

CREATE TABLE clients(
    id_client INT PRIMARY KEY AUTO_INCREMENT,
    id_document_type INT NOT NULL,
    client_document_number VARCHAR(20) NOT NULL,
    client_name VARCHAR(30) NOT NULL,
    client_middle_name VARCHAR(30),
    client_lastname VARCHAR(30) NOT NULL,
    client_second_lastname VARCHAR(30),
    client_city VARCHAR(30) NOT NULL,
    client_mail VARCHAR(100) NOT NULL,
    client_password VARCHAR(300) NOT NULL,
    client_address VARCHAR(100) NOT NULL,
    id_health_information INT NOT NULL,
    client_birth_date DATETIME NOT NULL,
    client_phone_number VARCHAR(20),
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME,
    FOREIGN KEY (id_document_type) REFERENCES document_types(id_document_type),
    FOREIGN KEY (id_health_information) REFERENCES health_information(id_health_information)
);

CREATE TABLE additional_people(
    id_additional_people INT PRIMARY KEY AUTO_INCREMENT,
    id_client INT NOT NULL,
    id_document_type INT NOT NULL,
    document_number_additional_people VARCHAR(20) NOT NULL,
    id_health_information INT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME,
    FOREIGN KEY (id_client) REFERENCES clients(id_client),
    FOREIGN KEY (id_document_type) REFERENCES document_types(id_document_type),
    FOREIGN KEY (id_health_information) REFERENCES health_information(id_health_information)
);


CREATE TABLE destinations(
    id_destination INT PRIMARY KEY AUTO_INCREMENT,
    destination_name VARCHAR(30) NOT NULL,
    destination_status TINYINT NOT NULL,
    id_agencie INT NOT NULL,
    FOREIGN KEY (id_agencie) REFERENCES agencies(id_agencie)
);



CREATE TABLE hotels(
    id_hotel INT PRIMARY KEY AUTO_INCREMENT,
    hotel_name VARCHAR(300) NOT NULL,
    hotel_status TINYINT NOT NULL,
    hotel_stars INT NOT NULL,
    id_destination INT NOT NULL,
    FOREIGN KEY (id_destination) REFERENCES destinations(id_destination)
);

CREATE TABLE room_types(
    id_room_type INT PRIMARY KEY AUTO_INCREMENT,
    room_name VARCHAR(30) NOT NULL,
    room_description VARCHAR(50) NOT NULL,
    room_capability INT NOT NULL,
    room_status TINYINT NOT NULL,
    id_hotel INT NOT NULL,
    FOREIGN KEY (id_hotel) REFERENCES hotels(id_hotel)
);

CREATE TABLE itineraries(
    id_itinerary INT PRIMARY KEY AUTO_INCREMENT,
    itinerary_name VARCHAR(50) NOT NULL,
    itinerary_status TINYINT NOT NULL
);

CREATE TABLE activities(
    id_activity INT PRIMARY KEY AUTO_INCREMENT,
    id_itinerary INT NOT NULL,
    activity_name VARCHAR(50) NOT NULL,
    activity_description VARCHAR(200) NOT NULL,
    activity_price INT DEFAULT(0),
    activity_status TINYINT NOT NULL,
    FOREIGN KEY (id_itinerary) REFERENCES itineraries(id_itinerary)
);

CREATE TABLE transports(
    id_transport INT PRIMARY KEY AUTO_INCREMENT,
    transport_name VARCHAR(50) NOT NULL,
    transport_description VARCHAR(200) NOT NULL,
    transport_price INT NOT NULL
);

CREATE TABLE food_types(
    id_food_type INT PRIMARY KEY AUTO_INCREMENT,
    food_name VARCHAR(30) NOT NULL,
    food_description VARCHAR(200) NOT NULL,
    food_price INT NOT NULL,
    food_status TINYINT NOT NULL
);

CREATE TABLE travel_packs(
    id_travel_pack INT PRIMARY KEY AUTO_INCREMENT,
    id_food_type ,
    id_room_type ,
    id_transport INT,
    id_destination INT NOT NULL,
    id_itinerary INT,
    id_hotel INT,
    travelpack_price INT NOT NULL,
    travelpack_status TINYINT NOT NULL,
    travelpack_description VARCHAR(255) NOT NULL,
    travelpack_days INT NOT NULL,
    FOREIGN KEY (id_food_type) REFERENCES food_types(id_food_type),
    FOREIGN KEY (id_room_type) REFERENCES room_types(id_room_type),
    FOREIGN KEY (id_transport) REFERENCES transports(id_transport),
    FOREIGN KEY (id_destination) REFERENCES destinations(id_destination),
    FOREIGN KEY (id_itinerary) REFERENCES itineraries(id_itinerary),
    FOREIGN KEY (id_hotel) REFERENCES hotels(id_hotel)
);

CREATE TABLE operation_status(
    id_operation_status INT PRIMARY KEY AUTO_INCREMENT,
    operation_status_name VARCHAR(50),
    operation_status_status TINYINT NOT NULL
);

CREATE TABLE operations(
    id_operation INT PRIMARY KEY AUTO_INCREMENT,
    id_agent INT NOT NULL,
    id_client INT NOT NULL,
    id_travel_pack INT ,
    id_operation_status INT NOT NULL,
    operation_start_date DATETIME NOT NULL,
    operation_price INT NOT NULL,
    operation_travelers_count INT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME,
    FOREIGN KEY (id_agent) REFERENCES agents(id_agent),
    FOREIGN KEY (id_client) REFERENCES clients(id_client),
    FOREIGN KEY (id_travel_pack) REFERENCES travel_packs(id_travel_pack),
    FOREIGN KEY (id_operation_status) REFERENCES operation_status(id_operation_status)
);

CREATE TABLE operation_status_audit(
    id_operation_status_audit INT PRIMARY KEY AUTO_INCREMENT,
    id_operation_status INT NOT NULL,
    id_operation INT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_operation_status) REFERENCES operation_status(id_operation_status),
    FOREIGN KEY (id_operation) REFERENCES operations(id_operation)
);




-- basic data

-- INSERT INTO agencies (name_agencie) VALUES ('Secret link');

-- INSERT INTO headquarters (address_headquarter, phone_headquarter, status_headquarter, id_agencie) VALUES ('Calle 1 # 1 - 1', '1234567', 1, 1);

INSERT INTO agent_types (name_agent_type) VALUES ('Administrador');
INSERT INTO agent_types (name_agent_type) VALUES ('Agente');

INSERT INTO document_types (name_document_type, status_document_type) VALUES ('Cedula de ciudadania', 1);
INSERT INTO document_types (name_document_type, status_document_type) VALUES ('Cedula de extranjeria', 1);
INSERT INTO document_types (name_document_type, status_document_type) VALUES ('Pasaporte', 1);
INSERT INTO document_types (name_document_type, status_document_type) VALUES ('Tarjeta de identidad', 1);
INSERT INTO document_types (name_document_type, status_document_type) VALUES ('Registro civil', 1);
INSERT INTO document_types (name_document_type, status_document_type) VALUES ('NIT', 1);
INSERT INTO document_types (name_document_type, status_document_type) VALUES ('RUT', 1);

INSERT INTO rh_types (name_rh) VALUES ('A+');
INSERT INTO rh_types (name_rh) VALUES ('A-');
INSERT INTO rh_types (name_rh) VALUES ('B+');
INSERT INTO rh_types (name_rh) VALUES ('B-');
INSERT INTO rh_types (name_rh) VALUES ('AB+');
INSERT INTO rh_types (name_rh) VALUES ('AB-');
INSERT INTO rh_types (name_rh) VALUES ('O+');
INSERT INTO rh_types (name_rh) VALUES ('O-');

INSERT INTO eps (name_eps, status_eps) VALUES ('Sura', 1);
INSERT INTO eps (name_eps, status_eps) VALUES ('Coomeva', 1);
INSERT INTO eps (name_eps, status_eps) VALUES ('Sanitas', 1);
INSERT INTO eps (name_eps, status_eps) VALUES ('Salud total', 1);
INSERT INTO eps (name_eps, status_eps) VALUES ('Nueva EPS', 1);
INSERT INTO eps (name_eps, status_eps) VALUES ('Compensar', 1);
INSERT INTO eps (name_eps, status_eps) VALUES ('Cafesalud', 1);
INSERT INTO eps (name_eps, status_eps) VALUES ('Famisanar', 1);
INSERT INTO eps (name_eps, status_eps) VALUES ('Medimas', 1);
INSERT INTO eps (name_eps, status_eps) VALUES ('Aliansalud', 1);
INSERT INTO eps (name_eps, status_eps) VALUES ('Saludvida', 1);
INSERT INTO eps (name_eps, status_eps) VALUES ('Cruz blanca', 1);
INSERT INTO eps (name_eps, status_eps) VALUES ('Colmedica', 1);
INSERT INTO eps (name_eps, status_eps) VALUES ('Asmet salud', 1);


INSERT INTO operation_status (operation_status_name, operation_status_status) VALUES ('En proceso', 1);
INSERT INTO operation_status (operation_status_name, operation_status_status) VALUES ('Cancelada', 1);
INSERT INTO operation_status (operation_status_name, operation_status_status) VALUES ('Finalizada', 1);


INSERT INTO agencies (name_agencie) VALUES ('Vuelo Secreto');
INSERT INTO headquarters (name_headquarter, address_headquarter, phone_headquarter, status_headquarter, id_agencie) VALUES ('VivaHQ','CC VIVA ENVIGADO', '1234567890', 1, 1);


INSERT INTO food_types ( food_name, food_description, food_price, food_status) VALUES ('PAM', 'Breakfast, lunch and dinner', 40000, 1);
INSERT INTO food_types (food_name, food_description, food_price, food_status) VALUES ('FULL', 'Unlimited buffet breakfast, lunch and dinner, open bar and snacks', 60000, 1);


INSERT INTO destinations VALUES (1,'Cartagena',1,1),(2,'Comuna-13',1,1),(3,'Plaza botero',1,1),(4,'Santa Marta',1,1);

INSERT INTO document_types VALUES (1,'Cedula de ciudadania',1),(2,'Cedula de extranjeria',1),(3,'Pasaporte',1),(4,'Tarjeta de identidad',1),(5,'Registro civil',1),(6,'NIT',1),(7,'RUT',1);
INSERT INTO eps VALUES (1,'Sura',1),(2,'Coomeva',1),(3,'Sanitas',1),(4,'Salud total',1),(5,'Nueva EPS',1),(6,'Compensar',1),(7,'Cafesalud',1),(8,'Famisanar',1),(9,'Medimas',1),(10,'Aliansalud',1),(11,'Saludvida',1),(12,'Cruz blanca',1),(13,'Colmedica',1),(14,'Asmet salud',1);
INSERT INTO rh_types VALUES (1,'A+'),(2,'A-'),(3,'B+'),(4,'B-'),(5,'AB+'),(6,'AB-'),(7,'O+'),(8,'O-');

INSERT INTO hotels VALUES (1,'Sofitel Legend Santa Clara Cartagena',1,5,1),(2,'Hotel Cartagena Plaza',1,4,1);


INSERT INTO room_types (room_name, room_description, room_capability, room_status, id_hotel) VALUES ('Couple', 'Room for 2 people', 2, 1, 1);


INSERT INTO transports (transport_name, transport_description, transport_price) VALUES ('Airplane', 'Avianca standard seat', 200000);
INSERT INTO transports (transport_name, transport_description, transport_price) VALUES ('Bus', 'Coonorte standard seat', 100000);


INSERT INTO itineraries (itinerary_name, itinerary_status) VALUES ('Cartagena Turibus and toured walk', 1);

INSERT INTO activities ( id_itinerary, activity_name, activity_description, activity_price, activity_status) VALUES (1, "Cartagena\'s Turibus", "Toured bus around caragena\'s city", 30000, 1);
INSERT INTO activities (id_itinerary, activity_name, activity_description, activity_price, activity_status) VALUES (1, "Cartagena\'s Toured walk", "Toured walk around the city\'s walls", 20000, 1);


INSERT INTO travel_packs (id_food_type, id_room_type, id_transport, id_destination, id_itinerary, id_hotel, travelpack_price, travelpack_status, travelpack_description, travelpack_days) VALUES (1, 1, 1, 1, 1, 1, 1, '1400000', 1, "Cartagena\'s travel", 5);
INSERT INTO agencies (name_agencie) VALUES ('Vuelo Secreto');
INSERT INTO headquarters (address_headquarter, phone_headquarter, status_headquarter, id_agencie) VALUES ('CC VIVA LA CEJA', '1234567890', 1, 1);
INSERT INTO headquarters (address_headquarter, phone_headquarter, status_headquarter, id_agencie) VALUES ('CC VIVA LA ESTRELLA', '1234567890', 1, 1);
INSERT INTO travel_packs VALUES (1,1,1,2,1,1,1,1400000,1,'Cartagena\'s travel',5),(2,NULL,NULL,NULL,2,NULL,NULL,80000,1,'Guided tour into Medellin\'s Comuna-13.',1),(3,NULL,NULL,NULL,3,NULL,NULL,45000,1,'Guided visit to Medellin\'s Plaza botero',1),(4,1,1,1,1,NULL,2,1150000,1,'Cartagena\'s travel 5 days on the Hotel Cartagena Plaza',5);

INSERT INTO agent_types (name_agent_type) VALUES ('Administrator');
INSERT INTO agent_types (name_agent_type) VALUES ('Agent');

INSERT INTO agents VALUES (1,'Samuel','3043346953',1,2,1,'1000413879','Samuel3879','$2b$10$MG.kuXOtwsgDxggdzoTafOiT/O8GdOmSs7uaszKN6mWAjXmUplZeC','superajke@gmail.com','2023-09-16 19:07:33','2023-09-16 19:07:33'),(2,'Geffrey','3043346952',1,1,1,'1000419999','Geffrey9999','$2b$10$gJNooS5LRo7Wd5aLOYIrSenZEivcZnODlzekpH7fKULbXn/BS9RgK','Geffrey@gmail.com','2023-09-16 19:11:12','2023-09-16 19:11:12');


