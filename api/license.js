let LICENSES={};
export default function handler(req,res){
  const gen=req.query.gen; const check=req.query.check;
  if(gen){ LICENSES[gen]={created:new Date().toISOString(),level:"C100 OMNIDIOS FINAL UNIFICADO",sectors:13,ethics:"PROTEGER Y CUIDAR EN CADA NIVEL",valid:"INFINITA PERPETUA",features:["FACE","MOTION","SHA512","ANTI-IA-MALA","AUTO-DESTRUCCION","EVOLUCION INFINITA"]}; return res.json({status:"LICENCIA_MAESTRA_INFINITA_CREADA",license:gen,data:LICENSES[gen]}); }
  if(check){ if(LICENSES[check]) return res.json({status:"VALIDA",message:"LICENCIA MAESTRA INFINITA AUTENTICA C100 OMNIDIOS - 13 SECTORES - INALCANZABLE",level:"C100 INFINITO",data:LICENSES[check]}); else return res.status(404).json({status:"INVALIDA",message:"FIRMA NO RECONOCIDA - GENERA LICENCIA"}); }
  return res.json({total:Object.keys(LICENSES).length});
}
