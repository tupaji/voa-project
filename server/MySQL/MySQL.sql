CREATE TABLE card (
    pay_id INT(10) NOT NULL,
    ch_fname VARCHAR(20) NOT NULL,
    ch_lname VARCHAR(20) NOT NULL,
    c_number VARCHAR(20) NOT NULL,
    exp_date DATE NOT NULL,
    cvv VARCHAR(3) NOT NULL,
    type VARCHAR(10) NOT NULL
);
ALTER TABLE card ADD CONSTRAINT card_pk PRIMARY KEY (pay_id);

ALTER TABLE card MODIFY pay_id INT(10) NOT NULL COMMENT 'Cash, credit or debit card',
                    MODIFY ch_fname VARCHAR(20) NOT NULL COMMENT 'card host first name',
                    MODIFY ch_lname VARCHAR(20) NOT NULL COMMENT 'card host last name',
                    MODIFY c_number VARCHAR(20) NOT NULL COMMENT 'card number',
                    MODIFY exp_date DATE NOT NULL COMMENT 'card expiration date',
                    MODIFY cvv VARCHAR(3) NOT NULL COMMENT 'card CVV three digit number',
                    MODIFY type VARCHAR(10) NOT NULL COMMENT 'card type, debit or credit';
                    
CREATE TABLE hzb_attract (
    attract_id INT(10) NOT NULL AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    description VARCHAR(100) NOT NULL,
    type VARCHAR(15) NOT NULL,
    status VARCHAR(20) NOT NULL,
    cpacity INT(4) NOT NULL,
    min_height INT(3) NOT NULL,
    duration INT(3) NOT NULL,
    section VARCHAR(1) NOT NULL,
    PRIMARY KEY (attract_id)
);

ALTER TABLE hzb_attract MODIFY name VARCHAR(20) NOT NULL COMMENT 'attraction name',
                          MODIFY description VARCHAR(100) NOT NULL COMMENT 'attraction description',
                          MODIFY type VARCHAR(15) NOT NULL COMMENT 'attraction type',
                          MODIFY status VARCHAR(20) NOT NULL COMMENT 'attraction status, open, closed, under maintenance',
                          MODIFY cpacity INT(4) NOT NULL COMMENT 'attraction audience capacity',
                          MODIFY min_height INT(3) NOT NULL COMMENT 'visitor minimum height that can attend attraction in cm.',
                          MODIFY duration INT(3) NOT NULL COMMENT 'attraction duration in minutes',
                          MODIFY section VARCHAR(1) NOT NULL COMMENT 'attraction section';
                        
CREATE TABLE hzb_group (
    visitor_id INT(10) NOT NULL,
    group_size INT(3) NOT NULL,
    PRIMARY KEY (visitor_id)
);

ALTER TABLE hzb_group MODIFY visitor_id INT(10) NOT NULL COMMENT '',
                         MODIFY group_size INT(3) NOT NULL COMMENT '';

CREATE TABLE hzb_individual (
    visitor_id INT(10) NOT NULL,
    gender VARCHAR(12) NOT NULL,
    nationality VARCHAR(20) NOT NULL,
    PRIMARY KEY (visitor_id)
);

ALTER TABLE hzb_individual MODIFY visitor_id INT(10) NOT NULL COMMENT '',
                             MODIFY gender VARCHAR(12) NOT NULL COMMENT '',
                             MODIFY nationality VARCHAR(20) NOT NULL COMMENT '';

CREATE TABLE hzb_member (
    visitor_id INT(10) NOT NULL,
    mem_id INT(10) NOT NULL,
    mem_date DATE NOT NULL,
    num INT(5) NOT NULL,
    PRIMARY KEY (visitor_id)
);

ALTER TABLE hzb_member MODIFY visitor_id INT(10) NOT NULL COMMENT '',
                        MODIFY mem_id INT(10) NOT NULL COMMENT 'rest of number of discount ticket this member',
                        MODIFY mem_date DATE NOT NULL COMMENT '',
                        MODIFY num INT(5) NOT NULL COMMENT '';


CREATE TABLE hzb_order (
    ord_id INT(10) NOT NULL AUTO_INCREMENT,
    ord_date DATE NOT NULL,
    ord_quantity INT(5) NOT NULL,
    ord_amount INT(4) NOT NULL,
    show_id INT(10),
    store_id INT(10),
    visitor_id INT(10) NOT NULL,
    park_id INT(10),
    tickets_id INT(10),
    pay_id INT(10),
    PRIMARY KEY (ord_id)
);

ALTER TABLE hzb_order MODIFY ord_date DATE NOT NULL COMMENT 'order date',
                        MODIFY ord_quantity INT(5) NOT NULL COMMENT 'quantity of item in order',
                        MODIFY ord_amount INT(4) NOT NULL COMMENT 'amount of money of this order',
                        MODIFY show_id INT(10) COMMENT '',
                        MODIFY store_id INT(10) COMMENT '',
                        MODIFY visitor_id INT(10) NOT NULL COMMENT '',
                        MODIFY park_id INT(10) COMMENT '',
                        MODIFY tickets_id INT(10) COMMENT '',
                        MODIFY pay_id INT(10) COMMENT '';

CREATE UNIQUE INDEX hzb_order__idx ON hzb_order (park_id ASC);
CREATE UNIQUE INDEX hzb_order__idxv1 ON hzb_order (pay_id ASC);
CREATE UNIQUE INDEX hzb_order__idxv2 ON hzb_order (tickets_id ASC);

CREATE TABLE hzb_parking (
    park_id INT(10) NOT NULL AUTO_INCREMENT,
    lot VARCHAR(1) NOT NULL,
    spot_number INT(3) NOT NULL,
    time_in DATE NOT NULL,
    time_out DATE NOT NULL,
    fee INT(3) NOT NULL,
    visitor_id INT(10),
    PRIMARY KEY (park_id)
);

ALTER TABLE hzb_parking MODIFY lot VARCHAR(1) NOT NULL COMMENT 'parking lot number',
                         MODIFY spot_number INT(3) NOT NULL COMMENT 'spot number of this parking position',
                         MODIFY time_in DATE NOT NULL COMMENT 'time start parking in this parking lot',
                         MODIFY time_out DATE NOT NULL COMMENT 'time leave parking lot',
                         MODIFY fee INT(3) NOT NULL COMMENT 'parking fee',
                         MODIFY visitor_id INT(10) COMMENT '';

CREATE TABLE hzb_payment (
    pay_id INT(10) NOT NULL AUTO_INCREMENT,
    pay_method VARCHAR(16) NOT NULL,
    pay_date DATE NOT NULL,
    pay_amount INT(5) NOT NULL,
    PRIMARY KEY (pay_id),
    CHECK (pay_method IN ('Cash', 'Credit', 'Debit'))
);

ALTER TABLE hzb_payment MODIFY pay_method VARCHAR(16) NOT NULL COMMENT 'Cash, credit or debit card',
                         MODIFY pay_date DATE NOT NULL COMMENT 'payment date',
                         MODIFY pay_amount INT(5) NOT NULL COMMENT 'payment amount';
CREATE TABLE hzb_school (
    visitor_id INT(10) NOT NULL,
    school_id VARCHAR(15) NOT NULL,
    school_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (visitor_id)
);

ALTER TABLE hzb_school MODIFY school_id VARCHAR(15) NOT NULL COMMENT '',
                       MODIFY school_name VARCHAR(30) NOT NULL COMMENT '';

CREATE TABLE hzb_show (
    show_id INT(10) NOT NULL AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    description VARCHAR(100) NOT NULL,
    type VARCHAR(20) NOT NULL,
    s_time DATE NOT NULL,
    e_time DATE NOT NULL,
    wchair_access CHAR(1) NOT NULL,
    price INT(3) NOT NULL,
    PRIMARY KEY (show_id)
);

ALTER TABLE hzb_show MODIFY name VARCHAR(20) NOT NULL COMMENT 'show name',
                     MODIFY description VARCHAR(100) NOT NULL COMMENT 'show description',
                     MODIFY type VARCHAR(20) NOT NULL COMMENT 'show type, drama, musical, comedy, horror, adventure',
                     MODIFY s_time DATE NOT NULL COMMENT 'start time of the show',
                     MODIFY e_time DATE NOT NULL COMMENT 'End time of the show',
                     MODIFY wchair_access CHAR(1) NOT NULL COMMENT 'Wheelchair Accessibility yes or no',
                     MODIFY price INT(3) NOT NULL COMMENT 'show price';

CREATE TABLE hzb_store (
    store_id INT(10) NOT NULL AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    category VARCHAR(20) NOT NULL,
    description VARCHAR(100) NOT NULL,
    menu_item VARCHAR(20) NOT NULL,
    unit_price INT(5) NOT NULL,
    PRIMARY KEY (store_id)
);

ALTER TABLE hzb_store MODIFY name VARCHAR(20) NOT NULL COMMENT 'store name',
                       MODIFY category VARCHAR(20) NOT NULL COMMENT 'store category Food stall, Ice cream parlor, Restaurant, Gift Shop, Apparels',
                       MODIFY description VARCHAR(100) NOT NULL COMMENT 'store description',
                       MODIFY menu_item VARCHAR(20) NOT NULL COMMENT 'item in this store menu',
                       MODIFY unit_price INT(5) NOT NULL COMMENT 'item unit price';


CREATE TABLE hzb_summ (
    sum_id INT(10) NOT NULL AUTO_INCREMENT,
    amount INT(10) NOT NULL,
    vist_date DATE NOT NULL,
    source VARCHAR(20) NOT NULL,
    source_id INT(10) NOT NULL,
    PRIMARY KEY (sum_id)
);

ALTER TABLE hzb_summ MODIFY amount INT(10) NOT NULL COMMENT 'amount of money',
                       MODIFY vist_date DATE NOT NULL COMMENT 'visit date of this summary',
                       MODIFY source VARCHAR(20) NOT NULL COMMENT 'source of this payment show, store, parking, ticket',
                       MODIFY source_id INT(10) NOT NULL COMMENT 'source id of this payment.';

CREATE TABLE hzb_tickets (
    tickets_id INT(10) NOT NULL AUTO_INCREMENT,
    method VARCHAR(20) NOT NULL,
    prch_date DATE NOT NULL,
    vist_date DATE NOT NULL,
    type VARCHAR(20) NOT NULL,
    price INT(3) NOT NULL,
    visitor_id INT(10),
    PRIMARY KEY (tickets_id)
);

ALTER TABLE hzb_tickets MODIFY method VARCHAR(20) NOT NULL COMMENT 'Online or onsite',
                        MODIFY prch_date DATE NOT NULL COMMENT 'Purchase date of the ticket',
                        MODIFY vist_date DATE NOT NULL COMMENT 'Visit date of the ticket',
                        MODIFY type VARCHAR(20) NOT NULL COMMENT 'Child, adult, senior or member.',
                        MODIFY price INT(3) NOT NULL COMMENT 'tickets price';

CREATE TABLE hzb_visit (
    attract_id INT(10) NOT NULL,
    `DATE` DATE NOT NULL,
    visitor_id INT(10) NOT NULL,
    PRIMARY KEY (attract_id, visitor_id)
);

ALTER TABLE hzb_visit MODIFY `DATE` DATE NOT NULL COMMENT 'date visitor attend attraction';

CREATE TABLE hzb_visitor (
    visitor_id INT(10) NOT NULL AUTO_INCREMENT,
    fname VARCHAR(20) NOT NULL COMMENT 'visitor first name',
    lname VARCHAR(20) NOT NULL COMMENT 'visitor last name',
    street VARCHAR(15) NOT NULL COMMENT 'visitor address',
    city VARCHAR(15) NOT NULL,
    state VARCHAR(15) NOT NULL,
    zipcode VARCHAR(12) NOT NULL,
    country VARCHAR(15) NOT NULL,
    email VARCHAR(30) NOT NULL COMMENT 'visitor email',
    password VARCHAR(12) NOT NULL,
    cell_num BIGINT(13) NOT NULL COMMENT 'visitor cell number',
    dob DATE NOT NULL COMMENT 'visitor age',
    type VARCHAR(41) NOT NULL COMMENT 'visitor type, individual, group, member, student.',
    visit_date DATE NOT NULL COMMENT 'Last time visit',
    group_size INT(5),
    school_name VARCHAR(20),
    gender VARCHAR(10),
    nationality VARCHAR(15),
    PRIMARY KEY (visitor_id)
);


ALTER TABLE hzb_visitor ADD CONSTRAINT ch_inh_hzb_visitor CHECK ( type IN ('Individual', 'Group', 'School', 'Member') );

ALTER TABLE card
ADD CONSTRAINT card_hzb_payment_fk FOREIGN KEY ( pay_id )
REFERENCES hzb_payment ( pay_id );

ALTER TABLE hzb_group
ADD CONSTRAINT group_hzb_visitor_fk FOREIGN KEY ( visitor_id )
REFERENCES hzb_visitor ( visitor_id );

ALTER TABLE hzb_order
ADD CONSTRAINT hzb_order_hzb_parking_fk FOREIGN KEY ( park_id )
REFERENCES hzb_parking ( park_id );

ALTER TABLE hzb_order
ADD CONSTRAINT hzb_order_hzb_payment_fk FOREIGN KEY ( pay_id )
REFERENCES hzb_payment ( pay_id );

ALTER TABLE hzb_order
ADD CONSTRAINT hzb_order_hzb_show_fk FOREIGN KEY ( show_id )
REFERENCES hzb_show ( show_id );

ALTER TABLE hzb_order
ADD CONSTRAINT hzb_order_hzb_store_fk FOREIGN KEY ( store_id )
REFERENCES hzb_store ( store_id );

ALTER TABLE hzb_order
ADD CONSTRAINT hzb_order_hzb_tickets_fk FOREIGN KEY ( tickets_id )
REFERENCES hzb_tickets ( tickets_id );

ALTER TABLE hzb_order
ADD CONSTRAINT hzb_order_hzb_visitor_fk FOREIGN KEY ( visitor_id )
REFERENCES hzb_visitor ( visitor_id );

ALTER TABLE hzb_parking
ADD CONSTRAINT hzb_parking_hzb_visitor_fk FOREIGN KEY ( visitor_id )
REFERENCES hzb_visitor ( visitor_id );

ALTER TABLE hzb_tickets
ADD CONSTRAINT hzb_tickets_hzb_visitor_fk FOREIGN KEY ( visitor_id )
REFERENCES hzb_visitor ( visitor_id );

ALTER TABLE hzb_visit
ADD CONSTRAINT hzb_visit_hzb_attract_fk FOREIGN KEY ( attract_id )
REFERENCES hzb_attract ( attract_id );

ALTER TABLE hzb_visit
ADD CONSTRAINT hzb_visit_hzb_visitor_fk FOREIGN KEY ( visitor_id )
REFERENCES hzb_visitor ( visitor_id );

ALTER TABLE hzb_individual
ADD CONSTRAINT individual_hzb_visitor_fk FOREIGN KEY ( visitor_id )
REFERENCES hzb_visitor ( visitor_id );

ALTER TABLE hzb_member
ADD CONSTRAINT member_hzb_visitor_fk FOREIGN KEY ( visitor_id )
REFERENCES hzb_visitor ( visitor_id );

ALTER TABLE hzb_school
ADD CONSTRAINT school_hzb_visitor_fk FOREIGN KEY ( visitor_id )
REFERENCES hzb_visitor ( visitor_id );

DELIMITER //

CREATE TRIGGER arc_fkarc_8_hzb_individual BEFORE INSERT ON hzb_individual
FOR EACH ROW
BEGIN
    DECLARE d VARCHAR(41);
    SELECT a.type INTO d FROM hzb_visitor a WHERE a.visitor_id = NEW.visitor_id;

    IF (d IS NULL OR d <> 'Individual') THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'FK INDIVIDUAL_HZB_VISITOR_FK in Table HZB_INDIVIDUAL violates Arc constraint on Table HZB_VISITOR - discriminator column TYPE doesn''t have value ''Individual''';
    END IF;
END //

CREATE TRIGGER arc_fkarc_8_hzb_group 
BEFORE INSERT ON hzb_group 
FOR EACH ROW
BEGIN
    DECLARE d VARCHAR(41);
    SELECT a.type INTO d FROM hzb_visitor a WHERE a.visitor_id = NEW.visitor_id;
    IF (d IS NULL OR d <> 'Group') THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'FK GROUP_HZB_VISITOR_FK in Table HZB_GROUP violates Arc constraint on Table HZB_VISITOR - discriminator column TYPE doesn''t have value ''Group''';
    END IF;
END//

CREATE TRIGGER arc_fkarc_8_hzb_member 
BEFORE INSERT ON hzb_member 
FOR EACH ROW
BEGIN
    DECLARE d VARCHAR(41);
    SELECT a.type INTO d FROM hzb_visitor a WHERE a.visitor_id = NEW.visitor_id;
    IF (d IS NULL OR d <> 'Member') THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'FK MEMBER_HZB_VISITOR_FK in Table HZB_MEMBER violates Arc constraint on Table HZB_VISITOR - discriminator column TYPE doesn''t have value ''Member''';
    END IF;
END//

CREATE TRIGGER arc_fkarc_8_hzb_school BEFORE INSERT ON hzb_school
FOR EACH ROW
BEGIN
DECLARE d VARCHAR(41);
SELECT a.type INTO d FROM hzb_visitor a WHERE a.visitor_id = NEW.visitor_id;

IF (d IS NULL OR d <> 'School') THEN
SIGNAL SQLSTATE '45000'
SET MESSAGE_TEXT = 'FK SCHOOL_HZB_VISITOR_FK in Table HZB_SCHOOL violates Arc constraint on Table HZB_VISITOR - discriminator column TYPE doesn''t have value ''School''';
END IF;
END//

DELIMITER ;

ALTER TABLE hzb_show
ADD CONSTRAINT CHK_ShowType CHECK (type IN ('Drama', 'Musical', 'Comedy', 'Horror', 'Adventure'));

ALTER TABLE hzb_show
ADD CONSTRAINT CHK_WheelchairAccessible CHECK (wchair_access IN ('1', '0'));

ALTER TABLE hzb_attract
ADD CONSTRAINT CHK_AttractStatus CHECK (status IN ('Open', 'Closed', 'Under Maintenance'));

ALTER TABLE hzb_store
ADD CONSTRAINT CHK_StoreCategory CHECK (category IN ('Food Stall', 'Ice Cream Parlor', 'Restaurant', 'Gift Shop', 'Apparels'));

ALTER TABLE hzb_tickets
ADD CONSTRAINT CHK_TicketMethod CHECK (method IN ('Online', 'Onsite'));

DELIMITER //

CREATE TRIGGER insert_member 
AFTER INSERT ON hzb_visitor 
FOR EACH ROW
BEGIN 
  DECLARE v_visitor_id INT;
  DECLARE v_visit_date DATE;
  
  SET v_visitor_id = NULL;
  SET v_visit_date = NULL;
  
  IF NEW.type = 'Member' THEN
    SET v_visitor_id = NEW.visitor_id;
    SET v_visit_date = NEW.visit_date;
  END IF;
  
  IF v_visitor_id IS NOT NULL THEN
    INSERT INTO hzb_member (visitor_id, mem_id, mem_date, num) 
    VALUES (v_visitor_id, v_visitor_id, v_visit_date, 5); 
  END IF;
END//

DELIMITER ;

DELIMITER //

CREATE TRIGGER insert_group 
AFTER INSERT ON hzb_visitor 
FOR EACH ROW
BEGIN 
  DECLARE v_visitor_id INT;
  DECLARE v_size INT;
  
  SET v_visitor_id = NULL;
  SET v_size = 0;
  
  IF NEW.type = 'Group' THEN
    SET v_visitor_id = NEW.visitor_id;
    SET v_size = NEW.group_size;
  END IF;
  
  IF v_visitor_id IS NOT NULL THEN
    INSERT INTO hzb_group (visitor_id, group_size) 
    VALUES (v_visitor_id, v_size); 
  END IF;
END//

DELIMITER ;

DELIMITER //

CREATE TRIGGER insert_school 
AFTER INSERT ON hzb_visitor 
FOR EACH ROW 
BEGIN 
  DECLARE v_visitor_id INT;
  DECLARE v_name VARCHAR(100);
  
  SET v_visitor_id = NULL;
  SET v_name = NULL;
  
  IF NEW.type = 'School' THEN
    SET v_visitor_id = NEW.visitor_id;
    SET v_name = NEW.school_name;
  END IF;
  
  IF v_visitor_id IS NOT NULL THEN
    INSERT INTO hzb_school (visitor_id, school_id, school_name) 
    VALUES (v_visitor_id, v_visitor_id, v_name); 
  END IF;
END//

DELIMITER ;


DELIMITER //

CREATE TRIGGER insert_individual 
AFTER INSERT ON hzb_visitor  
FOR EACH ROW  
BEGIN  
  DECLARE v_visitor_id INT;
  DECLARE v_gender VARCHAR(10);
  DECLARE v_nation VARCHAR(15);

  IF NEW.type = 'Individual' THEN  
    SET v_visitor_id = NEW.visitor_id;  
    SET v_gender = NEW.gender;  
    SET v_nation = NEW.nationality;  
  END IF;  
    
  IF v_visitor_id IS NOT NULL THEN  
    INSERT INTO hzb_individual (visitor_id, gender, nationality)  
    VALUES (v_visitor_id, v_gender, v_nation);  
  END IF;  
END//

DELIMITER ;

DELIMITER //

CREATE TRIGGER apply_discount_on_parking_purchase 
AFTER INSERT ON hzb_parking 
FOR EACH ROW 
BEGIN 
  DECLARE v_discount DECIMAL(4,2) DEFAULT 0;
  DECLARE v_discount_num INT DEFAULT 5;
  DECLARE v_id INT DEFAULT 0;
  DECLARE v_age INT DEFAULT 0;
  
  INSERT INTO hzb_order (visitor_id, park_id, ord_amount, ord_date, ord_quantity) 
  VALUES (NEW.visitor_id, NEW.park_id, NEW.fee * (1 - v_discount), NEW.time_in, 2);
END//

DELIMITER ;

DELIMITER //
CREATE TRIGGER apply_discount_on_show_purchase 
BEFORE INSERT ON hzb_order 
FOR EACH ROW 
BEGIN 
  DECLARE v_discount DECIMAL(4,2) DEFAULT 0;
  DECLARE v_discount_num INT DEFAULT 5;
  DECLARE v_id INT DEFAULT 0;
  DECLARE v_age INT DEFAULT 0;
  DECLARE s_price DECIMAL(8,2) DEFAULT 0;
  DECLARE sh_time DATE;
  
  SELECT TRUNC(MONTHS_BETWEEN(NOW(), dob)/12) INTO v_age FROM hzb_visitor WHERE visitor_id = NEW.visitor_id; 
  
  IF NEW.show_id IS NOT NULL THEN 
    SELECT price INTO s_price FROM hzb_show WHERE show_id = NEW.show_id; 
    SELECT s_time INTO sh_time FROM hzb_show WHERE show_id = NEW.show_id; 
    
    IF v_age < 7 THEN 
      SET v_discount = 1; 
    END IF; 
    
    SET NEW.ord_amount = s_price * (1 - v_discount) * NEW.ord_quantity; 
    SET NEW.ord_date = sh_time; 
    UPDATE hzb_order SET ord_amount = NEW.ord_amount WHERE ord_id = NEW.ord_id; 
  END IF; 
END//

DELIMITER ;

DELIMITER //
CREATE TRIGGER apply_discount_on_tickets_purchase 
AFTER INSERT ON hzb_tickets 
FOR EACH ROW 
BEGIN 
  DECLARE v_discount DECIMAL(5,2) DEFAULT 0; 
  DECLARE v_discount_num INT DEFAULT 0; 
  DECLARE v_id INT DEFAULT 0; 
  DECLARE v_age INT DEFAULT 0; 
  DECLARE v_quan INT DEFAULT 1; 
  DECLARE v_type VARCHAR(10) DEFAULT NULL; 
  DECLARE v_size INT DEFAULT 0; 
  DECLARE v_amount DECIMAL(8,2) DEFAULT 0; 
  
  IF NEW.method = 'Online' THEN 
    SET v_discount = 0.05; 
  END IF; 
  
  SELECT type INTO v_type FROM hzb_visitor WHERE visitor_id = NEW.visitor_id; 
  
  IF v_type = 'Member' THEN 
    SELECT num INTO v_discount_num FROM hzb_member WHERE visitor_id = NEW.visitor_id; 
  END IF; 
  
  IF v_discount_num != 0 AND v_discount != 0.15 THEN 
    SET v_discount = v_discount + 0.10; 
    UPDATE hzb_member SET num = v_discount_num - 1 WHERE visitor_id = NEW.visitor_id; 
  END IF; 
  
  SELECT TRUNC(MONTHS_BETWEEN(NOW(), dob)/12) INTO v_age FROM hzb_visitor WHERE visitor_id = NEW.visitor_id; 
  
  IF v_age > 60 OR v_age < 7 THEN 
    SET v_discount = 0.15; 
  END IF; 
  
  IF DAYNAME(NEW.vist_date) IN ('Saturday', 'Sunday') OR DATE_FORMAT(NEW.vist_date, '%m/%d') IN ('01/01', '06/01', '12/25') THEN 
    SET v_discount = 0; 
  END IF; 
  
  SET v_amount = NEW.price * (1 - v_discount); 
  
  IF v_type = 'Group' THEN 
    SELECT group_size INTO v_size FROM hzb_group WHERE visitor_id = NEW.visitor_id; 
    
    IF NEW.method = 'Online' THEN 
      SET v_amount = NEW.price * (1 - 0.05) * v_size; 
    ELSE 
      SET v_amount = NEW.price * v_size; 
    END IF; 
  END IF; 
  
  INSERT INTO hzb_order (ord_date, ord_quantity, ord_amount, show_id, store_id, visitor_id, park_id, tickets_id) 
  VALUES (NEW.vist_date, 1, v_amount, null, null, NEW.visitor_id, null, NEW.tickets_id); 
END//

DELIMITER ;

DELIMITER //

CREATE TRIGGER apply_discount_on_store_purchase 
BEFORE INSERT ON hzb_order 
FOR EACH ROW 
BEGIN 
  DECLARE u_price INT DEFAULT 0;
  IF NEW.store_id IS NOT NULL THEN 
    SELECT unit_price INTO u_price FROM hzb_store WHERE store_id = NEW.store_id; 
    SET NEW.ord_amount := u_price * NEW.ord_quantity; 
    UPDATE hzb_order SET ord_amount = NEW.ord_amount WHERE ord_id = NEW.ord_id; 
  END IF; 
END//

DELIMITER ; 



-- DML FOR VISITOR
INSERT INTO hzb_visitor (fname, lname, street, city, state, zipcode, country, email, password, cell_num, dob, type, visit_date, group_size, school_name, gender, nationality) 
VALUES ('John', 'Doe', '123 Main St', 'Anytown', 'CA', '12345', 'USA', 'johndoe@email.com', 'password123', '1234567890', '1990-01-01', 'Member', '2022-05-05', null, null, null, null);

INSERT INTO hzb_visitor (fname, lname, street, city, state, zipcode, country, email, password, cell_num, dob, type, visit_date, group_size, school_name, gender, nationality) 
VALUES ('Jane', 'Doe', '456 Oak St', 'Sometown', 'CA', '67890', 'USA', 'janedoe@email.com', 'password456', '0987654321', '1995-07-15', 'Individual', '2022-05-05', null, null, 'Male', 'United States');

INSERT INTO hzb_visitor (fname, lname, street, city, state, zipcode, country, email, password, cell_num, dob, type, visit_date, group_size, school_name, gender, nationality) 
VALUES ('Alex', 'Smith', '789 Maple Ave', 'Anytown', 'CA', '12345', 'USA', 'alexsmith@email.com', 'password789', '1112223333', '2005-09-01', 'School', '2022-05-05', null, 'River', null, null);

INSERT INTO hzb_visitor (fname, lname, street, city, state, zipcode, country, email, password, cell_num, dob, type, visit_date, group_size, school_name, gender, nationality) 
VALUES ('Sam', 'Jones', '321 Pine St', 'Othertown', 'CA', '54321', 'USA', 'samjones@email.com', 'passwordabc', '4445556666', '1998-03-22', 'Group', '2022-05-05', 20, null, null, null);

INSERT INTO hzb_visitor (fname, lname, street, city, state, zipcode, country, email, password, cell_num, dob, type, visit_date, group_size, school_name, gender, nationality) 
VALUES ('Mike', 'Brown', '654 Elm St', 'Sometown', 'CA', '67890', 'USA', 'mikebrown@email.com', 'passwordxyz', '7778889999', '1992-12-01', 'Member', '2022-05-05', null, null, null, null);

INSERT INTO hzb_visitor (fname, lname, street, city, state, zipcode, country, email, password, cell_num, dob, type, visit_date, group_size, school_name, gender, nationality) 
VALUES ('Karen', 'Lee', '987 Oak Ave', 'Othertown', 'CA', '54321', 'USA', 'karenlee@email.com', 'password123', '2223334444', '1985-05-11', 'Individual', '2022-05-05', null, null, 'Male', 'United States');

INSERT INTO hzb_visitor (fname, lname, street, city, state, zipcode, country, email, password, cell_num, dob, type, visit_date, group_size, school_name, gender, nationality) 
VALUES ('Mark', 'Davis', '456 Pine St', 'Anytown', 'CA', '12345', 'USA', 'markdavis@email.com', 'password456', '5556667777', '2007-10-15', 'School', '2022-05-05', null, 'South', null, null);

INSERT INTO hzb_visitor (fname, lname, street, city, state, zipcode, country, email, password, cell_num, dob, type, visit_date, group_size, school_name, gender, nationality) 
VALUES ('Emily', 'Kim', '321 Elm St', 'Sometown', 'CA', '67890', 'USA', 'emilykim@email.com', 'passwordabc', '8889990000', '1999-06-30', 'Group', '2022-05-05', 15, null, null, null);


ALTER TABLE hzb_visitor MODIFY password VARCHAR(100);
ALTER USER root@localhost IDENTIFIED WITH mysql_native_password BY 'qhb123321';

