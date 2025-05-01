package service

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/brunoOchoa/prime-vue-crud-mcp/internal/db"
	"github.com/brunoOchoa/prime-vue-crud-mcp/model"
)

func GetUsers() {
	rows, err := db.DB.Query("SELECT id, name, created_at FROM users")
	if err != nil {
		log.Println("erro ao consultar usuários:", err)
		return
	}
	defer rows.Close()

	for rows.Next() {
		var id int
		var name string
		var createdAt string
		rows.Scan(&id, &name, &createdAt)
		log.Println(id, name, createdAt)
	}
}

func CreateUser(name string) error {
	query := `INSERT INTO users (name) VALUES ($1)`

	_, err := db.DB.Exec(query, name)
	if err != nil {
		log.Println("erro ao criar usuário:", err)
		return err
	}

	return nil
}

func GetUserByName(name string) (*model.User, error) {
	query := `SELECT id, name, created_at FROM users WHERE name = $1`

	row := db.DB.QueryRow(query, name)

	var user model.User
	err := row.Scan(&user.ID, &user.Name, &user.CreatedAt)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, nil
		}
		return nil, fmt.Errorf("erro ao buscar usuário: %w", err)
	}

	return &user, nil
}
