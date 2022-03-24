// Code generated by MockGen. DO NOT EDIT.
// Source: discounts_repository.go

// Package mock_repository is a generated GoMock package.
package mock_repository

import (
	reflect "reflect"

	models "github.com/Cirivas/desafio-walmart/models"
	gomock "github.com/golang/mock/gomock"
)

// MockDiscountsRepository is a mock of DiscountsRepository interface.
type MockDiscountsRepository struct {
	ctrl     *gomock.Controller
	recorder *MockDiscountsRepositoryMockRecorder
}

// MockDiscountsRepositoryMockRecorder is the mock recorder for MockDiscountsRepository.
type MockDiscountsRepositoryMockRecorder struct {
	mock *MockDiscountsRepository
}

// NewMockDiscountsRepository creates a new mock instance.
func NewMockDiscountsRepository(ctrl *gomock.Controller) *MockDiscountsRepository {
	mock := &MockDiscountsRepository{ctrl: ctrl}
	mock.recorder = &MockDiscountsRepositoryMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockDiscountsRepository) EXPECT() *MockDiscountsRepositoryMockRecorder {
	return m.recorder
}

// Find mocks base method.
func (m *MockDiscountsRepository) Find(brand string) (*models.Discount, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Find", brand)
	ret0, _ := ret[0].(*models.Discount)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// Find indicates an expected call of Find.
func (mr *MockDiscountsRepositoryMockRecorder) Find(brand interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Find", reflect.TypeOf((*MockDiscountsRepository)(nil).Find), brand)
}
