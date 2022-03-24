package interactor_test

import (
	"errors"
	"testing"

	"github.com/Cirivas/desafio-walmart/models"
	"github.com/Cirivas/desafio-walmart/usecase/interactor"
	mp "github.com/Cirivas/desafio-walmart/usecase/presenter/mock"
	mr "github.com/Cirivas/desafio-walmart/usecase/repository/mock"
	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/assert"
)

func TestReturnDiscount(t *testing.T) {
	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	expectedDiscount := &models.Discount{Brand: "brand", Threshold: 5, Discount: 5}

	mockDiscountRepository := mr.NewMockDiscountsRepository(ctrl)
	mockDiscountRepository.EXPECT().Find("brand").Return(expectedDiscount, nil)
	mockDiscountPresenter := mp.NewMockDiscountsPresenter(ctrl)
	mockDiscountPresenter.EXPECT().ResponseDiscount(expectedDiscount).Return(expectedDiscount)

	mockDiscountsInteractor := interactor.NewDiscountsInteractor(mockDiscountRepository, mockDiscountPresenter)

	discount, err := mockDiscountsInteractor.Get("brand")

	assert.NoError(t, err)
	assert.EqualValues(t, expectedDiscount, discount)
}

func TestNoDiscount(t *testing.T) {
	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	mockDiscountRepository := mr.NewMockDiscountsRepository(ctrl)
	mockDiscountRepository.EXPECT().Find("brand").Return(nil, errors.New("Discount not found"))

	mockDiscountsInteractor := interactor.NewDiscountsInteractor(mockDiscountRepository, nil)

	discount, err := mockDiscountsInteractor.Get("brand")

	assert.Nil(t, discount, "Discount should not be ffound")
	assert.EqualError(t, err, "Discount not found")
}
