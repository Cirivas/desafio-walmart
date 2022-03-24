package presenter_test

import (
	"encoding/json"
	"testing"

	"github.com/Cirivas/desafio-walmart/entrypoints/presenter"
	"github.com/Cirivas/desafio-walmart/models"
	"github.com/stretchr/testify/assert"
)

func TestProductsDto(t *testing.T) {
	products := []models.Product{{Brand: "brand", Id: 5}}

	presenter := presenter.NewProductPresenter()

	bytesResult := presenter.ProductsDto(products)

	// recovert to check consistency
	var resultProducts []models.Product
	json.Unmarshal(bytesResult, &resultProducts)

	assert.EqualValues(t, products, resultProducts)
}
