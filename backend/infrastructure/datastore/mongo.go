package datastore

import (
	"context"
	"fmt"
	"log"
	"os"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type DbConnection struct {
	client *mongo.Client
	Db     *mongo.Database
}

func NewDB() *DbConnection {
	// Create client
	username := os.Getenv("DB_USERNAME")
	password := os.Getenv("DB_PASSWORD")

	dbURI := fmt.Sprintf("mongodb://%s:%s@mongo:27017/?authSource=admin", username, password)

	client, err := mongo.NewClient(options.Client().ApplyURI(dbURI))
	if err != nil {
		log.Fatalln(err)
	}

	// Connect client with context
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	err = client.Connect(ctx)
	if err != nil {
		log.Fatalln(err)
	}

	return &DbConnection{Db: client.Database("desafio_walmart")}
}

// Close client connection
func (db *DbConnection) Close() {
	// Disconnect client with context
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	db.client.Disconnect(ctx)
}
