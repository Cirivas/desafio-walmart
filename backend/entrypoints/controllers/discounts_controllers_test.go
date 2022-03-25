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
	"github.com/gorilla/mux"
	"github.com/stretchr/testify/assert"
)

func TestGetBrandDiscount(t *testing.T) {
	ctrl := gomock.NewController(t)

	expectedDiscount := models.Discount{Brand: "brand", Threshold: 5, Discount: 5}
	mockDiscountsInteractor := mock_interactor.NewMockDiscountsInteractor(ctrl)
	mockDiscountsInteractor.EXPECT().Get("brand").Return(&expectedDiscount, nil)

	req := httptest.NewRequest("GET", "http://url", nil)
	w := httptest.NewRecorder()

	// inject var to url
	req = mux.SetURLVars(req, map[string]string{"brand": "brand"})

	mockDiscountController := controllers.NewDiscountsController(mockDiscountsInteractor, presenter.NewDiscountsPresenter())

	mockDiscountController.GetDiscount(w, req)

	bodyResponse, _ := ioutil.ReadAll(w.Result().Body)
	assert.Equal(t, w.Result().StatusCode, http.StatusOK)

	// reconvert response to Go struct
	var discount models.Discount
	json.Unmarshal(bodyResponse, &discount)

	assert.EqualValues(t, expectedDiscount, discount)
}

func TestGetNoBrand(t *testing.T) {
	ctrl := gomock.NewController(t)

	mockDiscountsInteractor := mock_interactor.NewMockDiscountsInteractor(ctrl)
	mockDiscountsInteractor.EXPECT().Get("brand").Return(nil, nil)

	req := httptest.NewRequest("GET", "http://url", nil)
	w := httptest.NewRecorder()

	// inject var to url
	req = mux.SetURLVars(req, map[string]string{"brand": "brand"})

	mockDiscountController := controllers.NewDiscountsController(mockDiscountsInteractor, presenter.NewDiscountsPresenter())

	mockDiscountController.GetDiscount(w, req)

	ioutil.ReadAll(w.Result().Body)
	assert.Equal(t, w.Result().StatusCode, http.StatusNotFound)
}

func TestGetError(t *testing.T) {
	ctrl := gomock.NewController(t)

	mockDiscountsInteractor := mock_interactor.NewMockDiscountsInteractor(ctrl)
	mockDiscountsInteractor.EXPECT().Get("brand").Return(nil, errors.New("Internal Error"))

	req := httptest.NewRequest("GET", "http://url", nil)
	w := httptest.NewRecorder()

	// inject var to url
	req = mux.SetURLVars(req, map[string]string{"brand": "brand"})

	mockDiscountController := controllers.NewDiscountsController(mockDiscountsInteractor, presenter.NewDiscountsPresenter())

	mockDiscountController.GetDiscount(w, req)

	ioutil.ReadAll(w.Result().Body)
	assert.Equal(t, w.Result().StatusCode, http.StatusInternalServerError)

}
