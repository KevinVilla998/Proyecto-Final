import pyodbc

# Configuración de la conexión a la base de datos de Access
DATABASE_FILE = 'ruta/a/tu/base_de_datos.accdb'

def get_db_connection():
    connection_string = (
        r'DRIVER={Microsoft Access Driver (*.mdb, *.accdb)};'
        f'DBQ={DATABASE_FILE};'
    )
    conn = pyodbc.connect(connection_string)
    return conn

def store_data(nombre, email, fecha, hora, motivo, servicio):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO Reservas (Nombre, Email, Fecha, Hora, Motivo, Servicio) VALUES (?, ?, ?, ?, ?, ?)",
        (nombre, email, fecha, hora, motivo, servicio)
    )
    conn.commit()
    conn.close()
    print("Datos almacenados con éxito")

# Ejemplo de datos a almacenar
nombre = "Juan Perez"
email = "juan.perez@example.com"
fecha = "2023-06-20"
hora = "12:00"
motivo = "Cumpleaños"
servicio = "Restaurantes"

# Almacenar datos
store_data(nombre, email, fecha, hora, motivo, servicio)
