package presenter

import "github.com/Cirivas/desafio-walmart/models"

type ProductsPresenter interface {
	ResponseProducts(p []models.Product) []models.Product
}
