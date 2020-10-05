create table if not exists "User"
(
	id serial not null
		constraint user_pk
			primary key,
	"firstName" varchar(40) not null,
	"lastName" varchar(40) not null,
	email varchar(80),
	password varchar(40) not null,
	phone varchar(40) not null,
	"isAdmin" boolean default false not null
);

alter table "User" owner to alec_houseman;

create unique index if not exists user_id_uindex
	on "User" (id);

create table if not exists "Driver"
(
	id serial not null
		constraint driver_pk
			primary key,
	"userId" serial not null
		constraint "userId"
			references "User",
	"licenseNumber" varchar(40) not null,
	"licenseState" varchar(40) not null
);

alter table "Driver" owner to alec_houseman;

create unique index if not exists driver_id_uindex
	on "Driver" (id);

create table if not exists "Vehicle Type"
(
	id serial not null
		constraint "vehicle type_pk"
			primary key,
	type varchar(40) not null
);

alter table "Vehicle Type" owner to alec_houseman;

create unique index if not exists "vehicle type_id_uindex"
	on "Vehicle Type" (id);

create table if not exists "State"
(
	abbreviation varchar(40) not null
		constraint state_pk
			primary key,
	name varchar(40) not null
);

alter table "State" owner to alec_houseman;

create table if not exists "Vehicle"
(
	id serial not null
		constraint vehicle_pk
			primary key,
	make varchar(40) not null,
	model varchar(40) not null,
	color varchar(40) not null,
	"vehicleTypeId" integer not null
		constraint "vehicleTypeId"
			references "Vehicle Type",
	capacity integer not null,
	mpg double precision not null,
	"licenseState" varchar(40) not null
		constraint "licenseState"
			references "State",
	"licensePlate" varchar(40) not null
);

alter table "Vehicle" owner to alec_houseman;

create unique index if not exists vehicle_id_uindex
	on "Vehicle" (id);

create table if not exists "Location"
(
	id serial not null
		constraint location_pk
			primary key,
	name varchar(40) not null,
	address varchar(40) not null,
	city varchar(40) not null,
	state varchar(40) not null
		constraint state
			references "State",
	"zipCode" varchar(40) not null
);

alter table "Location" owner to alec_houseman;

create table if not exists "Ride"
(
	id serial not null
		constraint ride_pk
			primary key,
	date date not null,
	time time not null,
	distance double precision not null,
	"fuelPrice" double precision not null,
	fee double precision not null,
	"vehicleId" integer not null
		constraint "vehicleId"
			references "Vehicle",
	"fromLocationId" integer not null
		constraint "fromLocationId"
			references "Location",
	"toLocationId" integer not null
		constraint "toLocationId"
			references "Location"
);

alter table "Ride" owner to alec_houseman;

create table if not exists "Passenger"
(
	"passengerId" integer not null
		constraint "passengerId"
			references "User",
	"rideId" serial not null
		constraint "rideId"
			references "Ride",
	constraint passenger_pk
		primary key ("rideId", "passengerId")
);

alter table "Passenger" owner to alec_houseman;

create table if not exists "Drivers"
(
	"driverId" integer not null
		constraint "driverId"
			references "Driver",
	"rideId" integer not null
		constraint "rideId"
			references "Ride",
	constraint drivers_pk
		primary key ("driverId", "rideId")
);

alter table "Drivers" owner to alec_houseman;

create unique index if not exists ride_id_uindex
	on "Ride" (id);

create unique index if not exists location_id_uindex
	on "Location" (id);

create table if not exists "Authorization"
(
	"driverId" integer not null
		constraint "driverId"
			references "Driver",
	"vehicleId" integer not null
		constraint "vehicleId"
			references "Vehicle",
	constraint authorization_pk
		primary key ("driverId", "vehicleId")
);

alter table "Authorization" owner to alec_houseman;