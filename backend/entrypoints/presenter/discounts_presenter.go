package presenter

import (
	"encoding/json"

	"github.com/Cirivas/desafio-walmart/models"
)

type discountsPresenter struct{}

type DiscountsPresenter interface {
	// Transform an slice of product into its byte json
	DiscountDto(d *models.Discount) []byte

	ResponseDiscount(d *models.Discount) *models.Discount
}

func NewDiscountsPresenter() DiscountsPresenter {
	return &discountsPresenter{}
}

func (dp *discountsPresenter) DiscountDto(d *models.Discount) []byte {
	jsonDiscount, _ := json.Marshal(d)

	return jsonDiscount
}

func (dp *discountsPresenter) ResponseDiscount(d *models.Discount) *models.Discount {
	// no changes at the moment
	return d
}
