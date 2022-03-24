package presenter

import "github.com/Cirivas/desafio-walmart/models"

type DiscountsPresenter interface {
	ResponseDiscount(d *models.Discount) *models.Discount
}
