create table if not exists password
(
    id_password integer primary key autoincrement,
    id_user     integer,
    password    varchar,
    foreign key (id_user) references user (id_user)
)