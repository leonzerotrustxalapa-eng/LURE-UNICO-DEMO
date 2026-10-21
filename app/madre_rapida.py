import subprocess
def hablar(t):
 print("Madre: "+t)
 try:
  subprocess.run(["termux-tts-speak",t])
 except: pass
print("MADRE S13 HABLA Y OYE")
hablar("Madre activa Ing Leon V3 750")
while True:
 q=input("Ing Leon: ")
 if q=="salir": break
 if "web" in q: hablar("Si hay web V3 750 oficial")
 else: hablar("Entendido "+q+" C0ZA26AC43955D")
