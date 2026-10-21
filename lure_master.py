import json
DD16_DB = {
  1590: {"es": "RADAR FRONTAL Wingman", "fmi": {9: "Sin comunicación - Revisa arnes defensa delantera pin 3 azul cortado"}},
  625: {"es": "CPC4 Fusible F52", "fmi": {9: "Perdida comunicacion - Revisa VPDM F52 25A"}}
}
def leer():
  return [{"spn": 1590, "fmi": 9}]
def diagnosticar(dtcs):
  res=[]
  for d in dtcs:
    spn=d["spn"]; fmi=d["fmi"]
    if spn in DD16_DB:
      res.append(DD16_DB[spn]["es"] + " -> " + DD16_DB[spn]["fmi"][fmi])
  return res

print("=== LURE MASTER V1 - DD16 ZeroTrust ===")
print(json.dumps(diagnosticar(leer()), indent=2, ensure_ascii=False))
