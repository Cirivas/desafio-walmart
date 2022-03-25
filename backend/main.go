package main

import (
	"log"
	"net/http"

	"github.com/Cirivas/desafio-walmart/infrastructure/datastore"
	"github.com/Cirivas/desafio-walmart/infrastructure/router"
	"github.com/Cirivas/desafio-walmart/registry"
	gorillaHandlers "github.com/gorilla/handlers"
)

func main() {
	db := datastore.NewDB()
	defer db.Close()

	r := registry.NewRegistry(db)

	api := router.NewRouter(r.NewMainController())

	headers := gorillaHandlers.AllowedHeaders([]string{"Contety-Type", "Access-Control-Allow-Headers", "Authorization"})
	methods := gorillaHandlers.AllowedMethods([]string{"DELETE", "POST", "GET", "OPTIONS", "PUT", "PATCH"})
	origins := gorillaHandlers.AllowedOrigins([]string{"*"})

	log.Fatal(http.ListenAndServe(":8080", gorillaHandlers.CORS(headers, methods, origins)(api.Router())))
}
