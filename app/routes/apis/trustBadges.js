import { json } from "@remix-run/node";
import prisma from "~/prisma"; 

export const loader = async () => {
  const badges = await prisma.trustBadge.findMany();
  return json(badges);
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const newBadge = {
    name: formData.get("name"),
    image: formData.get("image"),
  };
  
  const badge = await prisma.trustBadge.create({ data: newBadge });
  return json(badge);
};