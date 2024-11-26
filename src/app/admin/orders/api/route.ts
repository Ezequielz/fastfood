import { getOrders } from "@/actions/order/get-orders";
import { Status } from "@prisma/client";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const  status = searchParams.get("status");
   
    const { orders } = await getOrders(status as Status);

    return Response.json(orders);
}