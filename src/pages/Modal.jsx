import { useState } from "react";

export default function Modal() {
  const [backup, setBackup] = useState("");
  const [mobile, setMobile] = useState(""); 
  const [lojaParada, setLojaParada] = useState(""); 
  const [quantidadePDVs, setQuantidadePDVs] = useState(0); 
  const [quantidadePDVsInstalados, setQuantidadePDVsInstalados] = useState(0); 
  const [numeroPDVInstalado, setNumeroPDVInstalado] = useState(""); 
  const [emissorCupom, setEmissorCupom] = useState(""); 
  const [marcaModeloEmissorCupom, setMarcaModeloEmissorCupom] = useState(""); 
  const [impressorasRemotas, setImpressorasRemotas] = useState(""); 
  const [marcaModeloImpressorasRemotas, setMarcaModeloImpressorasRemotas] =
    useState("");
  const [pinPad, setPinPad] = useState(""); 
  const [marcaModeloPinPad, setMarcaModeloPinPad] = useState("");
  const [equipamentoConectado, setEquipamentoConectado] = useState("");
  const [marcaModeloEquipamentoConectado, setMarcaModeloEquipamentoConectado] =
    useState("");

  return <div>Modal</div>;
}
