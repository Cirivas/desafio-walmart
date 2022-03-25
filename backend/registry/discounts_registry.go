package registry

import (
	"github.com/Cirivas/desafio-walmart/entrypoints/controllers"
	entrypoint_presenter "github.com/Cirivas/desafio-walmart/entrypoints/presenter"
	entrypoint_repository "github.com/Cirivas/desafio-walmart/entrypoints/repository"
	"github.com/Cirivas/desafio-walmart/usecase/interactor"
	usecase_presenter "github.com/Cirivas/desafio-walmart/usecase/presenter"
	usecase_repository "github.com/Cirivas/desafio-walmart/usecase/repository"
)

// Defines dependecy injection for DiscountsController

func (r *registry) NewDiscountsController() controllers.DiscountsController {
	return controllers.NewDiscountsController(r.NewDiscountsInteractor(), r.NewEntrypointDiscountsPresenter())
}

// This one contains more methods in its interface, used by DiscountsController
func (r *registry) NewEntrypointDiscountsPresenter() entrypoint_presenter.DiscountsPresenter {
	return entrypoint_presenter.NewDiscountsPresenter()
}

func (r *registry) NewDiscountsInteractor() interactor.DiscountsInteractor {
	return interactor.NewDiscountsInteractor(r.NewDiscountsRepository(), r.NewDiscountsPresenter())
}

func (r *registry) NewDiscountsRepository() usecase_repository.DiscountsRepository {
	return entrypoint_repository.NewDiscountsRepository(r.db)
}

func (r *registry) NewDiscountsPresenter() usecase_presenter.DiscountsPresenter {
	return entrypoint_presenter.NewDiscountsPresenter()
}
