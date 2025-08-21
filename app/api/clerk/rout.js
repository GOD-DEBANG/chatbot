import { Webhook } from "svix";
import connectDB from  "@/config/db";

import User from "../../../../models/user";

export async function POST(req){
    const   wh = new Webhook(process.env.SIGNING_SECRET)
    const headerPayload = await Headers()
    const  svixHeaders = {
        "svix-id" : headerPayload.get("svix-id"),
        "svix-signature" : headerPayload.get("svix-signature"),
        

    };
    // Get The Pay Load And VeriFy it

    const payload = await req.json();
    const body = json.stringyfy(payload);
    const {data , type } = wh.verify(body , svixHeaders)

    const userData = {
        _id: data.id,
        email: data.email_address[0].email_address,
        name: `${data.first_name}  ${data.last_name}`,
        imge: data.image_url,
    };

    await connectDB();

    switch(type){
        case 'user.created':
         await User.create(userData)
         break;

         case 'user.updated':
            await User.findByIdAndUpdate( data.id,userData)
            break;

            case 'user.deleted':
            await User.findByIdAndDelete(data.id)
            break;


            default:
                break
    }
    return NextRequest.json({message : "Event recievd"})
}