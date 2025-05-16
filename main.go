package main

import (
	"log"
	"net/http"

	"github.com/brunoOchoa/prime-vue-crud-mcp/internal/db"
)

func main() {
	db.Connect("localhost", "5432", "admin", "admin", "estudo_prime")
	// if err := service.CreateUser("Bruno Ochoa"); err != nil {
	// 	fmt.Println("Erro ao criar usuário:", err)
	// } else {
	// 	fmt.Println("Usuário criado com sucesso.")
	// }

	fs := http.FileServer(http.Dir("./webui/dist"))
	http.Handle("/", fs)

	log.Println("Servidor rodando em http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))

	// defer db.DB.Close()
}
