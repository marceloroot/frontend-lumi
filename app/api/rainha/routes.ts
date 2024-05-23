
import { baseUrl } from "@/config/base";

const POST = async (data: string) => {
  console.log(data);
  const url = `${baseUrl}/beneficio`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Conexão com a rede está com problema");
  }
  const beneficio = await response.json();

  return beneficio;
};

export { POST };
