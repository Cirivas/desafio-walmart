package models

type Discount struct {
	Brand     string `json:"brand"`
	Threshold int    `json:"threshold"`
	Discount  int    `json:"discount"`
}
