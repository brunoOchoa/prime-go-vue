package db

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq"
)

var DB *sql.DB

func Connect(host, port, user, password, dbname string) error {
	var err error
	dsn := "host=%s port=%s user=%s password=%s dbname=%s sslmode=disable"
	dsn = fmt.Sprintf(dsn, host, port, user, password, dbname)
	fmt.Println(dsn)
	DB, err = sql.Open("postgres", dsn)
	if err != nil {
		return err
	}
	if err = DB.Ping(); err != nil {
		log.Fatalf("erro ao conectar com o banco: %v", err)
	}
	log.Println("conectado ao banco PostgreSQL com lib/pq")
	return nil
}
