package controllers_test

import (
	"encoding/json"
	"errors"
	"io/ioutil"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/Cirivas/desafio-walmart/entrypoints/controllers"
	"github.com/Cirivas/desafio-walmart/entrypoints/presenter"
	"github.com/Cirivas/desafio-walmart/models"
	mock_interactor "github.com/Cirivas/desafio-walmart/usecase/interactor/mock"
	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/assert"
)

func TestGetProducts(t *testing.T) {
	ctrl := gomock.NewController(t)

	expectedProducts := []models.Product{{Brand: "brand", Id: 5, Description: "description"}}

	mockProductInteractor := mock_interactor.NewMockProductsInteractor(ctrl)
	mockProductInteractor.EXPECT().GetAll().Return(expectedProducts, nil)

	req := httptest.NewRequest("GET", "http://url", nil)
	w := httptest.NewRecorder()

	// No need to use the mock ProductPresenter as it is the same as a "util"
	mockProductsController := controllers.NewProductsController(mockProductInteractor, presenter.NewProductPresenter())

	mockProductsController.GetProducts(w, req)

	bodyResponse, _ := ioutil.ReadAll(w.Result().Body)
	assert.Equal(t, w.Result().StatusCode, http.StatusOK)

	// reconvert response to Go struct
	var products []models.Product
	json.Unmarshal(bodyResponse, &products)

	assert.EqualValues(t, expectedProducts, products)
}

func TestNoProducts(t *testing.T) {
	ctrl := gomock.NewController(t)

	expectedProducts := []models.Product{}

	mockProductInteractor := mock_interactor.NewMockProductsInteractor(ctrl)
	mockProductInteractor.EXPECT().GetAll().Return(expectedProducts, nil)

	req := httptest.NewRequest("GET", "http://url", nil)
	w := httptest.NewRecorder()

	// No need to use the mock ProductPresenter as it is the same as a "util"
	mockProductsController := controllers.NewProductsController(mockProductInteractor, presenter.NewProductPresenter())

	mockProductsController.GetProducts(w, req)

	bodyResponse, _ := ioutil.ReadAll(w.Result().Body)
	assert.Equal(t, w.Result().StatusCode, http.StatusOK)

	// reconvert response to Go struct
	var products []models.Product
	json.Unmarshal(bodyResponse, &products)

	assert.EqualValues(t, expectedProducts, products)
}

func TestErrorInProducts(t *testing.T) {
	ctrl := gomock.NewController(t)

	mockProductInteractor := mock_interactor.NewMockProductsInteractor(ctrl)
	mockProductInteractor.EXPECT().GetAll().Return(nil, errors.New("Failed"))

	req := httptest.NewRequest("GET", "http://url", nil)
	w := httptest.NewRecorder()

	// No need to use the mock ProductPresenter as it is the same as a "util"
	mockProductsController := controllers.NewProductsController(mockProductInteractor, nil)

	mockProductsController.GetProducts(w, req)

	bodyResponse, _ := ioutil.ReadAll(w.Result().Body)
	assert.Equal(t, w.Result().StatusCode, http.StatusInternalServerError)

	// reconvert response to Go struct
	var products []models.Product
	json.Unmarshal(bodyResponse, &products)

	assert.Nil(t, products)
}
