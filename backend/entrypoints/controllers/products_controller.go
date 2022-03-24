package controllers

import (
	"net/http"

	"github.com/Cirivas/desafio-walmart/entrypoints/presenter"
	"github.com/Cirivas/desafio-walmart/usecase/interactor"
)

type productsController struct {
	productsInteractor interactor.ProductsInteractor
	productsPresenter  presenter.ProductPresenter
}

type ProductsController interface {
	GetProducts(w http.ResponseWriter, r *http.Request)
}

func NewProductsController(pi interactor.ProductsInteractor, pp presenter.ProductPresenter) ProductsController {
	return &productsController{productsInteractor: pi, productsPresenter: pp}
}

func (pc *productsController) GetProducts(w http.ResponseWriter, r *http.Request) {
	products, err := pc.productsInteractor.GetAll()

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write(pc.productsPresenter.ProductsDto(products))
}
