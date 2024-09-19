CREATE TABLE "koalas" (
	"id" serial primary key,
	"name" varchar(80) not null,
	"favorite_color" varchar(80) not null,	
	"age" integer not null,
	"ready_to_transfer" boolean not null,
	"notes" varchar(150)
);

INSERT INTO "koalas" ("name", "favorite_color", "age", "ready_to_transfer", "notes")
VALUES 
	('Scotty', 'Red', 4, true, 'Born in Guatemala'),
	('Jean', 'Green', 5, true, 'Allergic to lots of lava'),
	('Ororo', 'Yellow', 7, false, 'Loves listening to Paula (Abdul)'),
	('K''Leaf', 'Purple', 15, false, 'Never refuses a treat.'),
	('Charlie', 'Orange', 9, true, 'Favorite band is Nirvana'),
	('Betsy', 'Blue', 4, true, 'Has a pet iguana');
