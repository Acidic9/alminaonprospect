package menu

import (
	"io/ioutil"
	"encoding/json"
	"path/filepath"
	"github.com/revel/revel"
)

type MenuItems struct {
	Category []struct {
		Items []struct {
			Description string  `json:"description"`
			Name        string  `json:"name"`
			Price       float64 `json:"price"`
		} `json:"items"`
		Name string `json:"name"`
	} `json:"Category"`
}

var Menu MenuItems

func Load() {
	menuJSON, err := ioutil.ReadFile(filepath.Join(revel.AppPath, "menu/menu.json"))
	if err != nil {
		revel.ERROR.Println("failed to read menu json file:", err)
	}

	err = json.Unmarshal(menuJSON, &Menu)
	if err != nil {
		revel.ERROR.Println("failed to read menu json data:", err)
	}
}