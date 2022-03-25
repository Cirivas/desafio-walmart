package registry

import (
	"github.com/Cirivas/desafio-walmart/entrypoints/controllers"
	entrypoint_presenter "github.com/Cirivas/desafio-walmart/entrypoints/presenter"
	entrypoint_repository "github.com/Cirivas/desafio-walmart/entrypoints/repository"
	"github.com/Cirivas/desafio-walmart/usecase/interactor"
	usecase_presenter "github.com/Cirivas/desafio-walmart/usecase/presenter"
	usecase_repository "github.com/Cirivas/desafio-walmart/usecase/repository"
)

// Defines dependecy injection for ProductController

func (r *registry) NewProductsController() controllers.ProductsController {
	return controllers.NewProductsController(r.NewProductsInteractor(), r.NewEntrypointProductsPresenter())
}

// This one contains more methods in its interface, used by ProductsController
func (r *registry) NewEntrypointProductsPresenter() entrypoint_presenter.ProductPresenter {
	return entrypoint_presenter.NewProductPresenter()
}

func (r *registry) NewProductsInteractor() interactor.ProductsInteractor {
	return interactor.NewProducstInteractor(r.NewProductsRepository(), r.NewProductsPresenter())
}

func (r *registry) NewProductsRepository() usecase_repository.ProductsRepository {
	return entrypoint_repository.NewProductsRepository(r.db)
}

func (r *registry) NewProductsPresenter() usecase_presenter.ProductsPresenter {
	return entrypoint_presenter.NewProductPresenter()
}
