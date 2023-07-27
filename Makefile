include .env
export

deploy:
	cd cdk && npx cdk deploy

bootstrap:
	cd cdk && npx cdk bootstrap

list:
	cd cdk && npx cdk list

destroy:
	cd cdk && npx cdk destroy

synth:
	cd cdk && npx cdk synth

doctor:
	cd cdk && npx cdk doctor
