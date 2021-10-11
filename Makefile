run:
	docker run -d -p 9515:9515 --env-file ./config/.env -v logs:/data --rm --name homeapp homename:volume
run-dev:
	docker run -d -p 9515:9515 --env-file ./config/.env -v "/Bogdan_Zeleniuk_work/QAAutomationTraineeLvl/home-project-qa-test:/home-project-qa-test" -v /data/node_modules -v logs:/data --rm --name homeapp homename:volume 	
stop: 
	docker stop homename
