package repository

import (
	"context"

	"github.com/Cirivas/desafio-walmart/infrastructure/datastore"
	"github.com/Cirivas/desafio-walmart/models"
	"go.mongodb.org/mongo-driver/bson"
)

var discountsCollection = "discounts"

type discountsRepository struct {
	db *datastore.DbConnection
}

type DiscountsRepository interface {
	Find(brand string) (*models.Discount, error)
}

func NewDiscountsRepository(db *datastore.DbConnection) DiscountsRepository {
	return &discountsRepository{db}
}

func (dr *discountsRepository) Find(brand string) (*models.Discount, error) {
	ctx := context.Background()
	cur := dr.db.Db.Collection(discountsCollection).FindOne(ctx, bson.M{"brand": brand})
	var discount models.Discount

	if err := cur.Decode(&discount); err != nil {
		return nil, err
	}

	return &discount, nil
}
