create table "User"
(
    id          serial                not null
        constraint user_pk
            primary key,
    "firstName" varchar(40)           not null,
    "lastName"  varchar(40)           not null,
    email       varchar(80),
    password    varchar(40)           not null,
    phone       varchar(40)           not null,
    "isAdmin"   boolean default false not null
);

create unique index user_id_uindex
    on "User" (id);

create table "Driver"
(
    id              serial      not null
        constraint driver_pk
            primary key,
    "userId"        serial      not null
        constraint "userId"
            references "User",
    "licenseNumber" integer     not null,
    "licenseState"  varchar(40) not null
);

create unique index driver_id_uindex
    on "Driver" (id);

create table "Vehicle Type"
(
    id   serial      not null
        constraint "vehicle type_pk"
            primary key,
    type varchar(40) not null
);

create unique index "vehicle type_id_uindex"
    on "Vehicle Type" (id);

create table "State"
(
    abbreviation varchar(40) not null
        constraint state_pk
            primary key,
    name         varchar(40) not null
);

create table "Vehicle"
(
    id              serial           not null
        constraint vehicle_pk
            primary key,
    make            varchar(40)      not null,
    model           varchar(40)      not null,
    color           varchar(40)      not null,
    "vehicleTypeId" integer          not null
        constraint "vehicleTypeId"
            references "Vehicle Type",
    capacity        integer          not null,
    mpg             double precision not null,
    "licenseState"  varchar(40)      not null
        constraint "licenseState"
            references "State",
    "licensePlate"  varchar(40)      not null
);

create unique index vehicle_id_uindex
    on "Vehicle" (id);

create table "Location"
(
    id        serial      not null
        constraint location_pk
            primary key,
    name      varchar(40) not null,
    address   varchar(40) not null,
    city      varchar(40) not null,
    state     varchar(40) not null
        constraint state
            references "State",
    "zipCode" varchar(40) not null
);

create table "Ride"
(
    id               serial           not null
        constraint ride_pk
            primary key,
    date             date             not null,
    time             time             not null,
    distance         double precision not null,
    "fuelPrice"      double precision not null,
    fee              double precision not null,
    "vehicleId"      integer          not null
        constraint "vehicleId"
            references "Vehicle",
    "fromLocationId" integer          not null
        constraint "fromLocationId"
            references "Location",
    "toLocationId"   integer          not null
        constraint "toLocationId"
            references "Location"
);

create table "Passenger"
(
    "passengerId" integer not null
        constraint "passengerId"
            references "User",
    "rideId"      serial  not null
        constraint "rideId"
            references "Ride",
    constraint passenger_pk
        primary key ("rideId", "passengerId")
);

create table "Drivers"
(
    "driverId" integer not null
        constraint "driverId"
            references "Driver",
    "rideId"   integer not null
        constraint "rideId"
            references "Ride",
    constraint drivers_pk
        primary key ("driverId", "rideId")
);

create unique index ride_id_uindex
    on "Ride" (id);

create unique index location_id_uindex
    on "Location" (id);

create table "Authorization"
(
    "driverId"  integer not null
        constraint "driverId"
            references "Driver",
    "vehicleId" integer not null
        constraint "vehicleId"
            references "Vehicle",
    constraint authorization_pk
        primary key ("driverId", "vehicleId")
);