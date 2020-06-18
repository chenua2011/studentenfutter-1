create table if not exists recipe_entity
(
    id_recipe_entity integer primary key autoincrement,
    id_recipe        integer,
    id_ingredient    integer,
    foreign key (id_recipe) references recipe (id_recipe),
    foreign key (id_ingredient) references ingredient (id_ingredient)
)