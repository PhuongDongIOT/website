type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

interface RowMovies {
    id: number
    name: string
    data: Json | null
}

interface InsertMovies {
    id?: never         // generated columns must not be supplied
    name: string       // `not null` columns with no default must be supplied
    data?: Json | null // nullable columns can be omitted
}

interface UpdateMovies {
    id?: never
    name?: string      // `not null` columns are optional on .update()
    data?: Json | null
}

interface Movies {
    Row: RowMovies
    Insert: InsertMovies
    Update: UpdateMovies
}

interface Tables {
    movies: Movies
}

interface Database {
  public: {
    Tables: Tables
  }
}

export type {
    Json,
    Database
}
