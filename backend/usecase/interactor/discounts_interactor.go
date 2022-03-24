package interactor

import (
	"github.com/Cirivas/desafio-walmart/models"
	"github.com/Cirivas/desafio-walmart/usecase/presenter"
	"github.com/Cirivas/desafio-walmart/usecase/repository"
)

type discountsInteractor struct {
	DiscountsRepository repository.DiscountsRepository
	DiscountsPresenter  presenter.DiscountsPresenter
}

type DiscountsInteractor interface {
	Get(brand string) (*models.Discount, error)
}

func NewDiscountsInteractor(r repository.DiscountsRepository, p presenter.DiscountsPresenter) DiscountsInteractor {
	return &discountsInteractor{r, p}
}

func (di *discountsInteractor) Get(brand string) (*models.Discount, error) {
	discount, err := di.DiscountsRepository.Find(brand)

	if err != nil {
		return nil, err
	}

	return di.DiscountsPresenter.ResponseDiscount(discount), nil
}
