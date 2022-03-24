package presenter

import (
	"encoding/json"

	"github.com/Cirivas/desafio-walmart/models"
)

type productPresenter struct{}

type ProductPresenter interface {
	// Transform an slice of product into its byte json
	ProductsDto(p []models.Product) []byte
}

func NewProductPresenter() ProductPresenter {
	return &productPresenter{}
}

func (pp *productPresenter) ProductsDto(p []models.Product) []byte {
	jsonProducts, _ := json.Marshal(p)

	return jsonProducts
}
