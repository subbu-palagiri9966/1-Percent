-- Runs once, the first time the local PostgreSQL volume is created.
-- The backend's automated tests use this database so they never touch development data.
CREATE DATABASE onepercent_test;
