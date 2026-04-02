db.restaurants.createIndex({ borough: 1 })

db.restaurants.createIndex({ cuisine: 1 })

db.restaurants.createIndex({ name: 1 })

db.restaurants.createIndex({"location": "2dsphere"})

db.restaurants.createIndex({"location.coordinates": 1})

db.restaurants.createIndex({ "grades.score": 1 })

db.restaurants.createIndex({ "grades.1.score": 1 })

db.restaurants.createIndex({ "address.street": 1 })
