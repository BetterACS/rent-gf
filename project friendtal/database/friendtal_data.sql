create database friendtal ;
use friendtal;

create table User(
	email varchar(255) unique not null ,
    username varchar(255) unique not null primary key ,
    nickname varchar(255) not null ,
    password varchar(255) not null,
    tel int not null ,
    gender varchar(10) ,
    image longblob ,
    age int,
);

create table Friendtal(
	friendtal_ID int not null auto_increment primary key,
    location_id int,
	Name varchar(255) not null,
	age int(100) not null,
	personality varchar(255),
	gender varchar(255),
	bust float ,
	waist float ,
	hip float ,
	height float not null,
	weight float not null,
    status varchar(255),
    foreign key (location_id) references Location(location_id)
);

create table Friendtalpicture(
    friental_ID int,
    picture longblob not null,
    foreign key (friental_ID) references Friendtal(friendtal_ID)
); 

create table Location(
	location_id int not null auto_increment primary key,
    province varchar(255) not null,
    district varchar(255) not null
);

create table Dating_plan(
	plan_ID int not null auto_increment primary key,
	plan_name varchar(255) not null,
    detail varchar(255) not null,
    price int not null
);

create table Fee_terms(
	fee_and_terms_id int not null auto_increment primary key,
    terms varchar(255) not null,
    price int not null
);

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

