from flask import Flask, render_template

app = Flask(__name__)

# Configuración para archivos estáticos (CSS, imágenes, etc.)
app.static_folder = 'static'

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
