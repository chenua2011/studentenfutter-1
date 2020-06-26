create table if not exists recipe
(
    id_recipe integer primary key autoincrement,
    id_user   integer,
    name      VARCHAR,
    foreign key (id_user) references user (id_user)
)