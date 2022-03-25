package controllers

type MainController struct {
	ProductsController
	DiscountsController
}

type HttpMessageResponse struct {
	Message string `json:"message"`
}
