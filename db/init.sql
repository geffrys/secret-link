CREATE TABLE test(
	id INT PRIMARY KEY AUTO_INCREMENT,
    ts VARCHAR(10) NOT NULL
);

INSERT INTO test(`ts`) VALUES ('hola');

CREATE TABLE agencies(
    id_agc INT PRIMARY KEY AUTO_INCREMENT,
    name_agc VARCHAR(50) NOT NULL
);

CREATE TABLE headquarters(
    id_hq INT PRIMARY KEY AUTO_INCREMENT,
    address_hq VARCHAR(50) NOT NULL,
    phone_hq VARCHAR(20) NOT NULL,
    status_hq TINYINT NOT NULL,
    id_ag INT NOT NULL,
    FOREIGN KEY (id_ag) REFERENCES agencies(id_ag)
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
    document_number VARCHAR(20) NOT NULL,
    user_name VARCHAR(20) NOT NULL,
    user_password VARCHAR(300) NOT NULL,
    user_mail VARCHAR(100) NOT NULL,
    created_at DATETIME DEFAULT(currDate()),
    modified_at DATETIME,
    FOREIGN KEY (id_dt) REFERENCES document_types(id_dt)
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
    document_number VARCHAR(20) NOT NULL,
    client_name VARCHAR(30) NOT NULL,
    client_lastname VARCHAR(30) NOT NULL,
    client_city VARCHAR(30) NOT NULL,
    client_mail VARCHAR(100) NOT NULL,
    client_password VARCHAR(300) NOT NULL,
    client_address VARCHAR(100) NOT NULL,
    id_hi INT NOT NULL,
    created_at DATETIME DEFAULT(currDate),
    updated_at DATETIME,
    FOREIGN KEY id_dt REFERENCES document_types(id_dt),
    FOREIGN KEY id_hi REFERENCES health_information(id_hi)
);

CREATE TABLE destinations(
    id_dest INT PRIMARY KEY AUTO_INCREMENT,
    dest_name VARCHAR(30) NOT NULL,
    dest_status TINYINT NOT NULL,
    id_agc INT NOT NULL,
    FOREIGN KEY id_agc REFERENCES agencies(id_agc)
)



CREATE TABLE hotels(
    id_hot INT PRIMARY KEY AUTO_INCREMENT,
    hotel_name VARCHAR(20) NOT NULL,
    hotel_status TINYINT NOT NULL,
    
)

