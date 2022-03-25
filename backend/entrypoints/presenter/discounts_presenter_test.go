package presenter_test

import (
	"encoding/json"
	"testing"

	"github.com/Cirivas/desafio-walmart/entrypoints/presenter"
	"github.com/Cirivas/desafio-walmart/models"
	"github.com/stretchr/testify/assert"
)

func TestDiscountDto(t *testing.T) {
	expectedDiscount := models.Discount{
		Brand:     "brand",
		Threshold: 5,
		Discount:  5,
	}

	presenter := presenter.NewDiscountsPresenter()

	bytesResult := presenter.DiscountDto(&expectedDiscount)

	// recovert to check consistency
	var discount models.Discount
	json.Unmarshal(bytesResult, &discount)

	assert.EqualValues(t, expectedDiscount, discount)
}
