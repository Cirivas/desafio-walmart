package repository

import (
	"context"

	"github.com/Cirivas/desafio-walmart/infrastructure/datastore"
	"github.com/Cirivas/desafio-walmart/models"
	"go.mongodb.org/mongo-driver/bson"
)

var productsCollection string = "products"

type productsRepositry struct {
	db *datastore.DbConnection
}

type ProductsRepository interface {
	// Find all products
	FindAll() ([]models.Product, error)
	// Get specific product by id
	Get(id int) (*models.Product, error)
}

func NewProductsRepository(db *datastore.DbConnection) ProductsRepository {
	return &productsRepositry{db}
}

func (pr *productsRepositry) FindAll() ([]models.Product, error) {
	ctx := context.Background()
	cur, curErr := pr.db.Db.Collection(productsCollection).Find(ctx, bson.M{})
	if curErr != nil {
		return nil, curErr
	}
	defer cur.Close(ctx)

	var products []models.Product
	if err := cur.All(ctx, &products); err != nil {
		return nil, err
	}

	return products, nil
}

func (pr *productsRepositry) Get(id int) (*models.Product, error) {
	ctx := context.Background()
	cur := pr.db.Db.Collection(productsCollection).FindOne(ctx, bson.M{"id": id})
	var product models.Product

	if err := cur.Decode(&product); err != nil {
		return nil, err
	}

	return &product, nil
}
