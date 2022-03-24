package infrastructure

import (
	"context"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type DbConnection struct {
	Client *mongo.Client
}

func NewDB() *DbConnection {
	// Create client
	// ToDO: Add URI
	client, err := mongo.NewClient(options.Client().ApplyURI("..."))
	if err != nil {
		log.Fatalln(err)
	}

	// Connect client with context
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	err = client.Connect(ctx)
	if err != nil {
		log.Fatalln(err)
	}

	return &DbConnection{Client: client}
}

// Close client connection
func (db *DbConnection) Close() {
	// Disconnect client with context
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	db.Client.Disconnect(ctx)
}
