create table if not exists user
(
    id_user         integer primary key autoincrement,
    name            varchar,
    last_login_date timestamp,
    creation_date   timestamp
);