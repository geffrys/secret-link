CREATE TABLE agencies(
    id_agencie INT PRIMARY KEY AUTO_INCREMENT,
    name_agencie VARCHAR(50) NOT NULL
);

CREATE TABLE headquarters(
    id_headquarter INT PRIMARY KEY AUTO_INCREMENT,
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
    name_document_type VARCHAR(20) NOT NULL,
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
    FOREIGN KEY (id_rh) REFERENCES rh_types(id_rh),
    FOREIGN KEY (id_eps) REFERENCES eps(id_eps)
);

CREATE TABLE clients(
    id_client INT PRIMARY KEY AUTO_INCREMENT,
    id_document_type INT NOT NULL,
    client_document_number VARCHAR(20) NOT NULL,
    client_name VARCHAR(30) NOT NULL,
    client_lastname VARCHAR(30) NOT NULL,
    client_city VARCHAR(30) NOT NULL,
    client_mail VARCHAR(100) NOT NULL,
    client_password VARCHAR(300) NOT NULL,
    client_address VARCHAR(100) NOT NULL,
    id_health_information INT NOT NULL,
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
    hotel_name VARCHAR(20) NOT NULL,
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
    activity_description VARCHAR(50) NOT NULL,
    activity_price INT DEFAULT(0),
    activity_status TINYINT NOT NULL,
    FOREIGN KEY (id_itinerary) REFERENCES itineraries(id_itinerary)
);

CREATE TABLE transports(
    id_transport INT PRIMARY KEY AUTO_INCREMENT,
    transport_name VARCHAR(30) NOT NULL,
    transport_description VARCHAR(50) NOT NULL,
    transport_price INT NOT NULL
);

CREATE TABLE food_types(
    id_food_type INT PRIMARY KEY AUTO_INCREMENT,
    food_name VARCHAR(30) NOT NULL,
    food_description VARCHAR(70) NOT NULL,
    food_price INT NOT NULL,
    food_status TINYINT NOT NULL
);

CREATE TABLE travel_packs(
    id_travel_pack INT PRIMARY KEY AUTO_INCREMENT,
    id_food_type INT NOT NULL,
    id_room_type INT NOT NULL,
    id_transport INT NOT NULL,
    id_destination INT NOT NULL,
    id_itinerary INT NOT NULL,
    travelpack_price INT NOT NULL,
    travelpack_status TINYINT NOT NULL,
    travelpack_description VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_food_type) REFERENCES food_types(id_food_type),
    FOREIGN KEY (id_room_type) REFERENCES room_types(id_room_type),
    FOREIGN KEY (id_transport) REFERENCES transports(id_transport),
    FOREIGN KEY (id_destination) REFERENCES destinations(id_destination),
    FOREIGN KEY (id_itinerary) REFERENCES itineraries(id_itinerary)
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
    id_travel_pack INT NOT NULL,
    id_operation_status INT NOT NULL,
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

-- DUMMY DATA

INSERT INTO agencies (name_agencie) VALUES
    ('ViajeSecreto')

INSERT INTO headquarters (address_headquarter, phone_headquarter, status_headquarter, id_agencie) VALUES
    ('Dirección 1', '123-456-7890', 1, 1),
    ('Dirección 2', '987-654-3210', 1, 1);

INSERT INTO agent_types (name_agent_type) VALUES
    ('Agente Tipo A'),
    ('Agente Tipo B');

INSERT INTO document_types (name_document_type, status_document_type) VALUES
    ('Tipo de Documento 1', 1),
    ('Tipo de Documento 2', 1);

INSERT INTO agents (name_agent, phone_agent, id_document_type, id_agent_type, id_headquarter, document_number_agent, user_name_agent, user_password_agent, user_mail_agent) VALUES
    ('Agente 1', '111-111-1111', 1, 1, 6, 'ABC123', 'agente1', 'password1', 'agente1@example.com'),
    ('Agente 2', '222-222-2222', 1, 1, 5, 'XYZ789', 'agente2', 'password2', 'agente2@example.com');

INSERT INTO auditory_sesion (login_time, logout_time, message_end_session, id_agent) VALUES
    (CURRENT_TIMESTAMP, NULL, NULL, 1),
    (CURRENT_TIMESTAMP, NULL, NULL, 2);

INSERT INTO eps (name_eps, status_eps) VALUES
    ('EPS 1', 1),
    ('EPS 2', 1);

INSERT INTO rh_types (name_rh) VALUES
    ('Tipo RH A'),
    ('Tipo RH B');

INSERT INTO health_information (id_rh, id_eps, health_card) VALUES
    (1, 1, 'HC123'),
    (2, 2, 'HC456');
INSERT INTO clients (id_document_type, client_document_number, client_name, client_lastname, client_city, client_mail, client_password, client_address, id_health_information) VALUES
    (1, 'C123', 'Cliente 1', 'Apellido 1', 'Ciudad 1', 'cliente1@example.com', 'password1', 'Dirección 1', 1),
    (2, 'C456', 'Cliente 2', 'Apellido 2', 'Ciudad 2', 'cliente2@example.com', 'password2', 'Dirección 2', 2);
INSERT INTO additional_people (id_client, id_document_type, document_number_additional_people, id_health_information) VALUES
    (1, 1, 'A123', 1),
    (2, 2, 'A456', 2);
INSERT INTO destinations (destination_name, destination_status, id_agencie) VALUES
    ('Destino 1', 1, 1),
    ('Destino 2', 1, 2);
INSERT INTO hotels (hotel_name, hotel_status, hotel_stars, id_destination) VALUES
    ('Hotel 1', 1, 3, 1),
    ('Hotel 2', 1, 4, 2);
INSERT INTO room_types (room_name, room_description, room_capability, room_status, id_hotel) VALUES
    ('Tipo de Habitación 1', 'Descripción 1', 2, 1, 1),
    ('Tipo de Habitación 2', 'Descripción 2', 3, 1, 2);
INSERT INTO itineraries (itinerary_name, itinerary_status) VALUES
    ('Itinerario 1', 1),
    ('Itinerario 2', 1);
INSERT INTO activities (id_itinerary, activity_name, activity_description, activity_price, activity_status) VALUES
    (1, 'Actividad 1', 'Descripción 1', 100, 1),
    (2, 'Actividad 2', 'Descripción 2', 150, 1);
INSERT INTO transports (transport_name, transport_description, transport_price) VALUES
    ('Transporte 1', 'Descripción 1', 200),
    ('Transporte 2', 'Descripción 2', 250);
INSERT INTO food_types (food_name, food_description, food_price, food_status) VALUES
    ('Tipo de Comida 1', 'Descripción 1', 50, 1),
    ('Tipo de Comida 2', 'Descripción 2', 60, 1);
INSERT INTO travel_packs (id_food_type, id_room_type, id_transport, id_destination, id_itinerary, travelpack_price, travelpack_status, travelpack_description) VALUES
    (1, 1, 1, 1, 1, 400, 1, 'Paquete de Viaje 1'),
    (2, 2, 2, 2, 2, 500, 1, 'Paquete de Viaje 2');
INSERT INTO operation_status (operation_status_name, operation_status_status) VALUES
    ('Estado de Operación 1', 1),
    ('Estado de Operación 2', 1);
INSERT INTO operations (id_agent, id_client, id_travel_pack, id_operation_status, operation_price, operation_travalers_count) VALUES
    (1, 1, 1, 1, 1000, 2),
    (2, 2, 2, 2, 1200, 3);
INSERT INTO operation_status_audit (id_operation_status, id_operation) VALUES
    (1, 1),
    (2, 2);
