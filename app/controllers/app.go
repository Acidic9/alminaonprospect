package controllers

import (
	"github.com/revel/revel"
	"alminaonprospect/app/menu"
)

type App struct {
	*revel.Controller
}

func (c App) Index() revel.Result {
	menu := menu.Menu
	return c.Render(menu)
}
