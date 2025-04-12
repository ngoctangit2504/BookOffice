import { ethers } from "ethers";
import RoomABI from "../abi/Room.json";

const CONTRACT_ADDRESS = "0x8c3D99f71F41d264DC4AB60016596e99EA211981"; 

// Get contract with signer (for write operations)
export const getRoomContract = async () => {
  if (!window.ethereum) throw new Error("MetaMask is not available");

  await window.ethereum.request({ method: "eth_requestAccounts" });

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, RoomABI, signer);

  return contract;
};

// Get contract with provider only (for read operations)
export const getRoomContractReadOnly = async () => {
  if (!window.ethereum) throw new Error("MetaMask is not available");
  
  const provider = new ethers.BrowserProvider(window.ethereum);
  const contract = new ethers.Contract(CONTRACT_ADDRESS, RoomABI, provider);
  
  return contract;
};