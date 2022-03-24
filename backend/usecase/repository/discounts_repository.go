package repository

import "github.com/Cirivas/desafio-walmart/models"

type DiscountsRepository interface {
	Find(brand string) (*models.Discount, error)
}
