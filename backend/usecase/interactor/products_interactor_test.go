package interactor_test

import (
	"errors"
	"testing"

	"github.com/Cirivas/desafio-walmart/models"
	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/assert"

	"github.com/Cirivas/desafio-walmart/usecase/interactor"
	mp "github.com/Cirivas/desafio-walmart/usecase/presenter/mock"
	mr "github.com/Cirivas/desafio-walmart/usecase/repository/mock"
)

func TestReturnProducts(t *testing.T) {
	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	expectedProducts := []models.Product{
		{Id: 1, Brand: "Brand", Description: "Brand1"},
		{Id: 2, Brand: "Brand2", Description: "Brand2"},
	}

	mockProductsRepository := mr.NewMockProductsRepository(ctrl)
	mockProductsRepository.EXPECT().FindAll().Return(expectedProducts, nil)

	mockProductsPresenter := mp.NewMockProductsPresenter(ctrl)
	mockProductsPresenter.EXPECT().ResponseProducts(expectedProducts).Return(expectedProducts)

	mockProductsInteractor := interactor.NewProducstInteractor(mockProductsRepository, mockProductsPresenter)

	products, err := mockProductsInteractor.GetAll()

	assert.NoError(t, err)
	assert.EqualValues(t, expectedProducts, products)
}

func TestNoProducts(t *testing.T) {
	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	expectedProducts := []models.Product{}

	mockProductsRepository := mr.NewMockProductsRepository(ctrl)
	mockProductsRepository.EXPECT().FindAll().Return(expectedProducts, nil)

	mockProductsPresenter := mp.NewMockProductsPresenter(ctrl)
	mockProductsPresenter.EXPECT().ResponseProducts(expectedProducts).Return(expectedProducts)

	mockProductsInteractor := interactor.NewProducstInteractor(mockProductsRepository, mockProductsPresenter)

	products, err := mockProductsInteractor.GetAll()

	assert.NoError(t, err)
	assert.EqualValues(t, expectedProducts, products)
}

func TestGetAllErrors(t *testing.T) {
	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	mockProductsRepository := mr.NewMockProductsRepository(ctrl)
	mockProductsRepository.EXPECT().FindAll().Return(nil, errors.New("Internal Error"))

	mockProductsPresenter := mp.NewMockProductsPresenter(ctrl)

	mockProductsInteractor := interactor.NewProducstInteractor(mockProductsRepository, mockProductsPresenter)

	products, err := mockProductsInteractor.GetAll()

	assert.Nil(t, products, "There should not be products")
	assert.EqualError(t, err, "Internal Error")
}
