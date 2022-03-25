package registry

import (
	"github.com/Cirivas/desafio-walmart/entrypoints/controllers"
	"github.com/Cirivas/desafio-walmart/infrastructure/datastore"
)

type registry struct {
	db *datastore.DbConnection
}

type Registry interface {
	NewMainController() controllers.MainController
}

func NewRegistry(db *datastore.DbConnection) Registry {
	return &registry{db}
}

func (r *registry) NewMainController() controllers.MainController {
	return controllers.MainController{
		ProductsController: r.NewProductsController(),
	}
}
