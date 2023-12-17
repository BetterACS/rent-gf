create schema friendtal_database ;
use friendtal_database;

create table User(
	user_id int not null primary key auto_increment,
	email varchar(255) unique not null ,
	username varchar(255) unique not null ,
	passwords varchar(255) not null,
	tel int not null ,
	gender varchar(10) ,
	age int,
                picture longblob
);


create table Dating_plan(
	plan_ID int not null auto_increment primary key,
	plan_name varchar(255) not null,
	price int not null
);

create table Location(
	location_id int not null auto_increment primary key,
	province varchar(255) not null,
	district varchar(255) not null
);

create table Fee_terms(
	fee_and_terms_id int not null auto_increment primary key,
	terms varchar(255) not null,
	price int not null
);

update table Friendtal(
	friendtal_ID int not null auto_increment primary key,
	location_id int,
	Name varchar(255) not null,
	age int(100) not null,
	blood_type varchar(2),
	personality varchar(255),
	gender varchar(255),
	bust float ,
	waist float ,
	hip float ,
	height float not null,
	weight float not null,
	picture longblob not null,
	foreign key (location_id) references Location(location_id)
);
ALTER TABLE Friendtal    
MODIFY COLUMN bust var(255),  
MODIFY COLUMN waist var() ,
MODIFY COLUMN hip var() ;   

create table Summary(
	summary_id int not null auto_increment primary key,
    Date date not null,
    fee_and_terms_id int,
    plan_ID int,
    detail varchar(255) not null,
    amount int not null,
    payment_type varchar(255),
    foreign key (fee_and_terms_id) references Fee_terms(fee_and_terms_id),
    foreign key (plan_ID) references Dating_plan(plan_ID)
);

insert into User(email ,username , passwords , tel ,gender ,age)
values ('monshun@gmail.com' , 'Jaijai' ,'jai12345' ,0894285541 ,'M' ,20);

update User 
set gender = 'Male'
where user_id = 1;

insert into Friendtal(location_id,Name,age,blood_type,personality,gender,bust,waist,hip,height,weight,picture)
values 
	(24, 'อ้วน' , 20 , '','เท่ อบอุ่น', 'Male' , '-','-','-', 175 , 60 ,LOAD_FILE('C:\Users\DarkK\OneDrive\Desktop\rental\public\img\manot.2.jpg'))
                ;

select * from Location;