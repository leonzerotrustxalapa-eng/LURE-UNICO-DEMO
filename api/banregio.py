import os
from http.server import BaseHTTPRequestHandler
import json

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        # Lee secreto de Vercel, no de GitHub
        banco = os.getenv("BANCO", "BANREGIO")
        titular = os.getenv("TITULAR", "LEON A. HERNANDEZ - LURE C100")
        concepto = "LURE C100 S12 C0ZA26AC43955D"
        
        # Solo muestra últimos 4 si quieres, o instrucciones
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        
        data = {
            "banco": banco,
            "titular": titular,
            "concepto": concepto,
            "mensaje": "Nacido Acapulco, Forjado Xalapa - Para Todo El Mundo",
            "nota": "Contacta por WhatsApp para CLABE SPEI - Zero Trust"
        }
        self.wfile.write(json.dumps(data).encode())
        return
