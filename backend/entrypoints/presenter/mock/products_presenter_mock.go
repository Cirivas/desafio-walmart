// Code generated by MockGen. DO NOT EDIT.
// Source: products_presenter.go

// Package mock_presenter is a generated GoMock package.
package mock_presenter

import (
	reflect "reflect"

	models "github.com/Cirivas/desafio-walmart/models"
	gomock "github.com/golang/mock/gomock"
)

// MockProductPresenter is a mock of ProductPresenter interface.
type MockProductPresenter struct {
	ctrl     *gomock.Controller
	recorder *MockProductPresenterMockRecorder
}

// MockProductPresenterMockRecorder is the mock recorder for MockProductPresenter.
type MockProductPresenterMockRecorder struct {
	mock *MockProductPresenter
}

// NewMockProductPresenter creates a new mock instance.
func NewMockProductPresenter(ctrl *gomock.Controller) *MockProductPresenter {
	mock := &MockProductPresenter{ctrl: ctrl}
	mock.recorder = &MockProductPresenterMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockProductPresenter) EXPECT() *MockProductPresenterMockRecorder {
	return m.recorder
}

// ProductsDto mocks base method.
func (m *MockProductPresenter) ProductsDto(p []models.Product) []byte {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ProductsDto", p)
	ret0, _ := ret[0].([]byte)
	return ret0
}

// ProductsDto indicates an expected call of ProductsDto.
func (mr *MockProductPresenterMockRecorder) ProductsDto(p interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ProductsDto", reflect.TypeOf((*MockProductPresenter)(nil).ProductsDto), p)
}