start:
	docker-compose up development-backend development-frontend mongo

build:
	docker-compose build

provision-up:
	docker-compose up

provision:
	docker-compose up mongo_setup
	
down:
	docker-compose down
	