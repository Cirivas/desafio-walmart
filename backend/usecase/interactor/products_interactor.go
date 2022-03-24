package interactor

import (
	"github.com/Cirivas/desafio-walmart/models"
	"github.com/Cirivas/desafio-walmart/usecase/presenter"
	"github.com/Cirivas/desafio-walmart/usecase/repository"
)

type productsInteractor struct {
	ProductsRepository repository.ProductsRepository
	ProductsPresenter  presenter.ProductsPresenter
}

type ProductsInteractor interface {
	GetAll() ([]models.Product, error)
}

func NewProducstInteractor(r repository.ProductsRepository, p presenter.ProductsPresenter) ProductsInteractor {
	return &productsInteractor{r, p}
}

func (pi *productsInteractor) GetAll() ([]models.Product, error) {
	products, err := pi.ProductsRepository.FindAll()

	if err != nil {
		return nil, err
	}

	return pi.ProductsPresenter.ResponseProducts(products), nil
}
