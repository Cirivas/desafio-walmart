package router

import (
	"net/http"

	"github.com/Cirivas/desafio-walmart/entrypoints/controllers"
	"github.com/gorilla/mux"
)

type Router interface {
	Router() http.Handler
}

type api struct {
	router http.Handler
}

func NewRouter(ctrl controllers.MainController) Router {
	router := mux.NewRouter()

	router.Handle("/products", http.HandlerFunc(ctrl.ProductsController.GetProducts))

	a := &api{router}
	return a
}

func (a *api) Router() http.Handler {
	return a.router
}
