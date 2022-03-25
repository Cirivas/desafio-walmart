package controllers

import (
	"encoding/json"
	"net/http"

	"github.com/Cirivas/desafio-walmart/entrypoints/presenter"
	"github.com/Cirivas/desafio-walmart/usecase/interactor"
	"github.com/gorilla/mux"
)

type discountsController struct {
	discountsInteractor interactor.DiscountsInteractor
	discountsPresenter  presenter.DiscountsPresenter
}

type DiscountsController interface {
	GetDiscount(w http.ResponseWriter, r *http.Request)
}

func NewDiscountsController(di interactor.DiscountsInteractor, dp presenter.DiscountsPresenter) DiscountsController {
	return &discountsController{discountsInteractor: di, discountsPresenter: dp}
}

func (dc *discountsController) GetDiscount(w http.ResponseWriter, r *http.Request) {
	brand, found := mux.Vars(r)["brand"]

	if !found {
		w.WriteHeader(http.StatusBadRequest)
		message := &HttpMessageResponse{Message: "Missing brand"}
		json.NewEncoder(w).Encode(message)
	}

	discount, err := dc.discountsInteractor.Get(brand)

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	if discount == nil {
		w.WriteHeader(http.StatusNotFound)
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write(dc.discountsPresenter.DiscountDto(discount))
}
