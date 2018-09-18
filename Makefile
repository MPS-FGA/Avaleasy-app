run:
	@echo "*********************************\n"
	@echo "Lifting up the whole environment!\n"
	@echo "*********************************\n"
	@docker-compose up

quiet-run:
	@echo "*********************************\n"
	@echo "Quietly lifting up the whole environment!\n"
	@echo "*********************************\n"
	@docker-compose up --detach
	@echo "\nDONE\n"	

install:
	@echo "\nInstalling Avaleasy dependencies..."
	@docker exec -it avaleasy-app yarn install
	@echo "\nDONE\n"

exec:
	@echo "*************************\n"
	@echo "Entering API environment!\n"
	@echo "*************************\n"
	@docker exec -it avaleasy-app bash
	@echo "\nDONE\n"

down:
	@echo "******************************\n"
	@echo "Dropping down the environment!\n"
	@echo "******************************\n"
	@docker-compose down
	@echo "\nDONE\n"

ps:
	@echo "************************\n"
	@echo "Listing running services\n"
	@echo "************************\n"
	@docker-compose ps
	@echo "\nDONE\n"

rm-network:
	@echo "**********************************\n"
	@echo "Removing Avaleasy network!\n"
	@echo "**********************************\n"
	@docker network rm avaleasy-net
	@echo "\nDONE\n"

help:
	@echo "\n\t\t\t\tAvaleasy"
	@echo "\tmake run - Runs the Avaleasy environment"
	@echo "\tmake quiet-run - Runs the Avaleasy APP environment in background"
	@echo "\tmake exec - Enters the Avaleasy APP env"
	@echo "\tmake down - Drops the Avaleasy environment"
	@echo "\tmake install - Installs the Avaleasy APP dependencies"
	@echo "\tmake ps - List the Avaleasy running services"
	@echo "\tmake rm-network - Removes the default network created by Avaleasy"
	@echo "\tmake help - Outputs this list\n"
