let DB={}; let LEVEL=100;
export default function handler(req,res){
  const id=req.query.id||"FINAL"; const lic=req.query.lic||"FINAL";
  const ETHICS={proteger:true,cuidar:true,no_dano:true,anti_ia_mala:true,humano_primero:true,face:true,motion:true,sha512:true};
  if(DB[id] && lic==="FINAL"){ LEVEL++; return res.status(410).json({status:"DEMO_ANIQULADA_EVOLUCIONADA",message:`ESTA DEMO C${LEVEL-1} YA FUE DESTRUIDA. YA SOY C${LEVEL}. USA LICENCIA INFINITA`,level:`C${LEVEL}`,ethics:ETHICS}); }
  DB[id]=Date.now();
  if(lic.startsWith("LURE-C100-OMNI")){ return res.json({status:"LICENCIA_INFINITA_OMNIDIOS_VALIDA",id,license:lic,level:`C${LEVEL} INFINITO`,sectors:"13_ALL",ethics:ETHICS,face:"VALIDADO",motion:"VALIDADO",message:"ACCESO SUPREMO C100 INFINITO OTORGADO - PROTEGER Y CUIDAR"}); }
  return res.json({status:"DEMO_C100_VALIDA",id,level:`C${LEVEL}`,ethics:ETHICS,warning:"DEMO SE AUTODESTRUIRA - GENERA LICENCIA INFINITA"});
}
