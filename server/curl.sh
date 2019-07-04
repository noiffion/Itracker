curl -s http://localhost:3000/api/issues | json_pp

curl -s http://localhost:3000/api/issues --data '{"title": "Test Test", "owner": "me"}' --header 'Content-Type: application/json' | json_pp

curl -s http://localhost:3000/api/issues?status=Open | json_pp

curl 'http://localhost:3000/api/issues?effort_lte=16&effort_gte=4' | json_pp

curl -s http://localhost:8000/api/issues/57e14da9ca2d380662d9d05c | json_pp

curl -s -X PUT http://localhost:8000/api/issues/5c8896d596539a0ff3e81909 --header 'Content-Type: application/json' --data '{"title" : "Error in console when clicking Add", "status" : "Open", "effort" : 6, "owner" : "Ravan", "created" : "2016-08-15T00:00:00.000Z" }' | json_pp

curl -s -X DELETE http://localhost:8000/api/issues/5c8968b5f5817e63a5a28846 | json_pp
