TESTS = test/*.js
FEATURES = test/features/*.js
LINT := *.js public routes test *.json

nyan:
	mocha --timeout 5000 --reporter nyan $(TESTS) $(FEATURES)

mochatest:
	@./node_modules/.bin/mocha -R spec -r should --recursive

lint:
	@./node_modules/.bin/jshint --verbose --extra-ext .js,.json $(LINT)

test: nyan mochatest lint