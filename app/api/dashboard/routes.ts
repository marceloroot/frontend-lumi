
import { baseUrl } from "@/config/base";

const GET = async () => {

  const url = `${baseUrl}/api/invoice`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Conexão com a rede está com problema");
  }
  const invoices = await response.json();

  return invoices;
};

export { GET };
