// Code generated by MockGen. DO NOT EDIT.
// Source: discounts_presenter.go

// Package mock_presenter is a generated GoMock package.
package mock_presenter

import (
	reflect "reflect"

	models "github.com/Cirivas/desafio-walmart/models"
	gomock "github.com/golang/mock/gomock"
)

// MockDiscountsPresenter is a mock of DiscountsPresenter interface.
type MockDiscountsPresenter struct {
	ctrl     *gomock.Controller
	recorder *MockDiscountsPresenterMockRecorder
}

// MockDiscountsPresenterMockRecorder is the mock recorder for MockDiscountsPresenter.
type MockDiscountsPresenterMockRecorder struct {
	mock *MockDiscountsPresenter
}

// NewMockDiscountsPresenter creates a new mock instance.
func NewMockDiscountsPresenter(ctrl *gomock.Controller) *MockDiscountsPresenter {
	mock := &MockDiscountsPresenter{ctrl: ctrl}
	mock.recorder = &MockDiscountsPresenterMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockDiscountsPresenter) EXPECT() *MockDiscountsPresenterMockRecorder {
	return m.recorder
}

// ResponseDiscount mocks base method.
func (m *MockDiscountsPresenter) ResponseDiscount(d *models.Discount) *models.Discount {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ResponseDiscount", d)
	ret0, _ := ret[0].(*models.Discount)
	return ret0
}

// ResponseDiscount indicates an expected call of ResponseDiscount.
func (mr *MockDiscountsPresenterMockRecorder) ResponseDiscount(d interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ResponseDiscount", reflect.TypeOf((*MockDiscountsPresenter)(nil).ResponseDiscount), d)
}