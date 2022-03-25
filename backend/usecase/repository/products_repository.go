package repository

import "github.com/Cirivas/desafio-walmart/models"

type ProductsRepository interface {
	// Find all products
	FindAll() ([]models.Product, error)
	// Get specific product by id
	Get(id int) (*models.Product, error)
}
