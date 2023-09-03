CREATE TABLE agencies(
    id_agc INT PRIMARY KEY AUTO_INCREMENT,
    name_agc VARCHAR(50) NOT NULL
);

CREATE TABLE headquarters(
    id_hq INT PRIMARY KEY AUTO_INCREMENT,
    address_hq VARCHAR(50) NOT NULL,
    phone_hq VARCHAR(20) NOT NULL,
    status_hq TINYINT NOT NULL,
    id_agc INT NOT NULL,
    FOREIGN KEY (id_agc) REFERENCES agencies(id_agc)
);

CREATE TABLE agent_types(
    id_at INT PRIMARY KEY AUTO_INCREMENT,
    name_at VARCHAR(30) NOT NULL
);

CREATE TABLE document_types(
    id_dt INT PRIMARY KEY AUTO_INCREMENT,
    name_dt VARCHAR(20) NOT NULL,
    status_dt TINYINT NOT NULL
);

CREATE TABLE agents(
    id_ag INT PRIMARY KEY AUTO_INCREMENT,
    name_ag VARCHAR(50) NOT NULL,
    phone_ag VARCHAR(20) NOT NULL,
    id_dt INT NOT NULL,
    id_at INT NOT NULL, 
    document_number VARCHAR(20) NOT NULL,
    user_name VARCHAR(20) NOT NULL,
    user_password VARCHAR(300) NOT NULL,
    user_mail VARCHAR(100) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    modified_at DATETIME,
    FOREIGN KEY (id_dt) REFERENCES document_types(id_dt),
    FOREIGN KEY (id_at) REFERENCES agent_types(id_at)
);

CREATE TABLE auditory_sesion(
    id_as INT PRIMARY KEY AUTO_INCREMENT,
	login_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    logout_time DATETIME,
    message_end_session VARCHAR(255),
    id_ag INT NOT NULL,
    FOREIGN KEY (id_ag) REFERENCES agents(id_ag)
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
    id_hi INT PRIMARY KEY AUTO_INCREMENT,
    id_rh INT,
    id_eps INT,
    health_card VARCHAR(20),
    FOREIGN KEY (id_rh) REFERENCES rh_types(id_rh),
    FOREIGN KEY (id_eps) REFERENCES eps(id_eps)
);

CREATE TABLE clients(
    id_cl INT PRIMARY KEY AUTO_INCREMENT,
    id_dt INT NOT NULL,
    client_document_number VARCHAR(20) NOT NULL,
    client_name VARCHAR(30) NOT NULL,
    client_lastname VARCHAR(30) NOT NULL,
    client_city VARCHAR(30) NOT NULL,
    client_mail VARCHAR(100) NOT NULL,
    client_password VARCHAR(300) NOT NULL,
    client_address VARCHAR(100) NOT NULL,
    id_hi INT NOT NULL,
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME,
    FOREIGN KEY (id_dt) REFERENCES document_types(id_dt),
    FOREIGN KEY (id_hi) REFERENCES health_information(id_hi)
);

CREATE TABLE additional_people(
    id_ap INT PRIMARY KEY AUTO_INCREMENT,
    id_cl INT NOT NULL,
    id_dt INT NOT NULL,
    document_number_ap VARCHAR(20) NOT NULL,
    id_hi INT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME,
    FOREIGN KEY (id_cl) REFERENCES clients(id_cl),
    FOREIGN KEY (id_dt) REFERENCES document_types(id_dt),
    FOREIGN KEY (id_hi) REFERENCES health_information(id_hi)
);


CREATE TABLE destinations(
    id_dest INT PRIMARY KEY AUTO_INCREMENT,
    dest_name VARCHAR(30) NOT NULL,
    dest_status TINYINT NOT NULL,
    id_agc INT NOT NULL,
    FOREIGN KEY (id_agc) REFERENCES agencies(id_agc)
);



CREATE TABLE hotels(
    id_hot INT PRIMARY KEY AUTO_INCREMENT,
    hotel_name VARCHAR(20) NOT NULL,
    hotel_status TINYINT NOT NULL,
    hotel_stars INT NOT NULL,
    id_dest INT NOT NULL,
    FOREIGN KEY (id_dest) REFERENCES destinations(id_dest)
);

CREATE TABLE room_types(
    id_rt INT PRIMARY KEY AUTO_INCREMENT,
    room_name VARCHAR(30) NOT NULL,
    room_description VARCHAR(50) NOT NULL,
    room_capability INT NOT NULL,
    room_status TINYINT NOT NULL,
    id_hot INT NOT NULL,
    FOREIGN KEY (id_hot) REFERENCES hotels(id_hot)
);

CREATE TABLE itineraries(
    id_it INT PRIMARY KEY AUTO_INCREMENT,
    itinerary_name VARCHAR(50) NOT NULL,
    itinerary_status TINYINT NOT NULL
);

CREATE TABLE activities(
    id_ac INT PRIMARY KEY AUTO_INCREMENT,
    id_it INT NOT NULL,
    activity_name VARCHAR(50) NOT NULL,
    activity_description VARCHAR(50) NOT NULL,
    activity_price INT DEFAULT(0),
    activity_status TINYINT NOT NULL,
    FOREIGN KEY (id_it) REFERENCES itineraries(id_it)
);

CREATE TABLE transports(
    id_tr INT PRIMARY KEY AUTO_INCREMENT,
    trans_name VARCHAR(30) NOT NULL,
    trans_description VARCHAR(50) NOT NULL,
    trans_price INT NOT NULL
);

CREATE TABLE food_types(
    id_ft INT PRIMARY KEY AUTO_INCREMENT,
    food_name VARCHAR(30) NOT NULL,
    food_description VARCHAR(70) NOT NULL,
    food_price INT NOT NULL,
    food_status TINYINT NOT NULL
);

CREATE TABLE travel_packs(
    id_tp INT PRIMARY KEY AUTO_INCREMENT,
    id_ft INT NOT NULL,
    id_rt INT NOT NULL,
    id_tr INT NOT NULL,
    travelpack_price INT NOT NULL,
    travelpack_status TINYINT NOT NULL,
    FOREIGN KEY (id_ft) REFERENCES food_types(id_ft),
    FOREIGN KEY (id_rt) REFERENCES room_types(id_rt),
    FOREIGN KEY (id_tr) REFERENCES transports(id_tr)
);

CREATE TABLE operation_status(
    id_os INT PRIMARY KEY AUTO_INCREMENT,
    operationstatus_name VARCHAR(50),
    operationstatus_status TINYINT NOT NULL
);

CREATE TABLE operations(
    id_op INT PRIMARY KEY AUTO_INCREMENT,
    id_ag INT NOT NULL,
    id_cl INT NOT NULL,
    id_tp INT NOT NULL,
    id_os INT NOT NULL,
    operation_price INT NOT NULL,
    operation_travalers_count INT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME,
    FOREIGN KEY (id_ag) REFERENCES agents(id_ag),
    FOREIGN KEY (id_cl) REFERENCES clients(id_cl),
    FOREIGN KEY (id_tp) REFERENCES travel_packs(id_tp),
    FOREIGN KEY (id_os) REFERENCES operation_status(id_os)
);

CREATE TABLE operation_status_audit(
    id_audit INT PRIMARY KEY AUTO_INCREMENT,
    id_os INT NOT NULL,
    id_op INT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_os) REFERENCES operation_status(id_os),
    FOREIGN KEY (id_op) REFERENCES operations(id_op)
);