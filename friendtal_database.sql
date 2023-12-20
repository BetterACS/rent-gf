create schema friendtal_database ;
use friendtal_database;

create table User(
	user_id int not null primary key auto_increment,
	email varchar(255) unique not null ,
	username varchar(255) unique not null ,
	passwords varchar(255) not null,
	tel varchar(10) not null ,
	gender varchar(10) ,
	age int(3)
);



create table Location(
	location_id int not null auto_increment primary key,
	province varchar(255) not null,
	district varchar(255) not null
);

create table Fee_terms(
	Fee_terms_ID int not null primary key auto_increment,
	terms varchar(255) not null,
	price int not null
);

create table Friendtal(
	friendtal_id int not null auto_increment primary key,
	location_id int,
	friendtal_Name varchar(255) not null unique,
	age int(100) not null,
	blood_type varchar(2),
	personality varchar(255),
	gender varchar(10),
	bust varchar(5) ,
	waist varchar(5) ,
	hip varchar(5) ,
	height int(3) not null,
	weight int(3) not null,
	picture varchar(255),
	foreign key (location_id) references Location(location_id)
);

create table Summary(
    summary_id int not null auto_increment primary key,
    Fee_terms_ID  int(2),
    friendtal_Name varchar(255),
    username varchar(255),
	email varchar(255),
    Date date not null,
    detail varchar(255) not null,
    payment_type varchar(255),
    foreign key (Fee_terms_ID) references Fee_terms(Fee_terms_ID)
);

insert into User(email ,username , passwords , tel ,gender ,age)
values ('monshun@gmail.com' , 'Jaijai' ,'jai12345' ,0894285541 ,'Male' ,20);


insert into Friendtal(location_id,friendtal_Name,age,blood_type,personality,gender,bust,waist,hip,height,weight,picture)
values (24, 'อ้วน' , 20 , 'O','เท่ อบอุ่น', 'Male' , '-','-','-', 175 , 60 ,'https://i.imgur.com/Pi61kiE.jpeg'),
		(1, 'Jack' , 20 , 'O','อบอุ่น', 'Male' , '38.58','30.71','37.80', 175 , 60 ,'https://i.imgur.com/d0Fj3Kg.jpg'), 
		(2, 'ฟิว' , 21 , 'A','เท่', 'Male' , '40.16','32.28','39.37', 170 , 55 ,'https://i.imgur.com/NJcVxAu.jpg'),
		(3, 'Ice' , 22 , 'AB','ใจดี', 'Female' , '35','28','30', 165 , 45 ,'https://i.imgur.com/zB4hvHf.jpg'),
		(4, 'Ploy' , 23 , 'B','ใจกว้าง', 'Female' , '33.07','25.98','35.43', 180 , 70 ,'https://i.imgur.com/eTQ86kw.jpg'),
		(5, 'Guy' , 24 , 'O','หล่อเท่', 'Male' , '-','-','-', 130 , 65 ,'https://i.imgur.com/0TmQxMZ.jpg');

select * from Friendtal;
drop table Friendtal;

insert into Location(province,district)
value 
	('กรุงเทพ' , ' เขตพระนคร '),('กรุงเทพ' , ' เขตดุสิต '),('กรุงเทพ' , ' เขตหนองจอก '),('กรุงเทพ' , ' เขตบางรัก '),('กรุงเทพ' , ' เขตบางเขน '),
                ('กรุงเทพ' , ' เขตบางกะปิ '),('กรุงเทพ' , ' เขตปทุมวัน '),('กรุงเทพ' , ' เขตป้อมปราบศัตรูพ่าย '),('กรุงเทพ' , ' เขตพระโขนง '),('กรุงเทพ' , ' เขตมีนบุรี '),
                ('กรุงเทพ' , ' เขตลาดกระบัง '),('กรุงเทพ' , ' เขตยานนาวา '),('กรุงเทพ' , ' เขตสัมพันธวงศ์ '),('กรุงเทพ' , ' เขตพญาไท '),('กรุงเทพ' , ' เขตธนบุรี '),
                ('กรุงเทพ' , ' เขตบางกอกใหญ่ '),('กรุงเทพ' , ' เขตห้วยขวาง '),('กรุงเทพ' , ' เขตคลองสาน '),('กรุงเทพ' , ' เขตตลิ่งชัน '),('กรุงเทพ' , ' เขตบางกอกน้อย '),
                ('กรุงเทพ' , ' เขตบางขุนเทียน '),('กรุงเทพ' , ' เขตภาษีเจริญ '),('กรุงเทพ' , ' เขตหนองแขม '),('กรุงเทพ' , ' เขตราษฎร์บูรณะ '),('กรุงเทพ' , ' เขตบางพลัด '),
                ('กรุงเทพ' , ' เขตดินแดง '),('กรุงเทพ' , ' เขตบึงกุ่ม '),('กรุงเทพ' , ' เขตสาทร '),('กรุงเทพ' , ' เขตบางซื่อ '),('กรุงเทพ' , ' เขตจตุจักร '),
                ('กรุงเทพ' , ' เขตบางคอแหลม '),('กรุงเทพ' , ' เขตประเวศ '),('กรุงเทพ' , ' เขตคลองเตย '),('กรุงเทพ' , ' เขตสวนหลวง '),('กรุงเทพ' , ' เขตจอมทอง '),
                ('กรุงเทพ' , ' เขตดอนเมือง '),('กรุงเทพ' , ' เขตราชเทวี '),('กรุงเทพ' , ' เขตลาดพร้าว '),('กรุงเทพ' , ' เขตวัฒนา '),('กรุงเทพ' , ' เขตบางแค '),
                ('กรุงเทพ' , ' เขตหลักสี่ '),('กรุงเทพ' , ' เขตสายไหม '),('กรุงเทพ' , ' เขตคันนายาว '),('กรุงเทพ' , ' เขตสะพานสูง '),('กรุงเทพ' , ' เขตวังทองหลาง '),
	('กรุงเทพ' , ' เขตคลองสามวา '),('กรุงเทพ' , ' เขตบางนา '),('กรุงเทพ' , ' เขตทวีวัฒนา '),('กรุงเทพ' , ' เขตทุ่งครุ '),('กรุงเทพ' , ' เขตบางบอน ');

insert into Fee_terms(terms,price)
value 
	('2 hr.' , ' 1500 '),('3 hr.' , ' 2000 '),('4 hr.' , ' 2500 '),('5 hr.' , ' 3000 '),
                ('Extension 1 hr.' , ' 600 '),('plan A(amusement park)' , ' 4200 '),('plan B(aquarium)' , ' 5500 '),
                ('plan C(activity)' , ' 5000 ');

