import { prisma } from "@/app/lib/prisma";
import bcrypt from "bcrypt";

// We are working on server side validation
export async function POST(request : Request) {
    const data = await request.json()
    let p = data.pass;
    let cp = data.cpass;
    
    if (p==cp) {
        if (data.username.includes("@") && data.username.includes(".")) {
            if (data.role_type == "importer" || data.role_type == "exporter" || data.role_type == "importer_exporter" || data.role_type == "customer_care") {
                // All data is validated
                // prisma.model.create()
                
                // psuedo code
                // first we have to check the email is already in the db or not

                const existing_user = await prisma.user.findUnique({
                    where: {
                        username : data.username
                    }
                });
                if (existing_user) {
                    return Response.json({data});
                }
                // Generating hash of the password
                const saltRounds = 10;
                const hash = await bcrypt.hashSync(p, saltRounds);
                // to dynamically choose role_type
                const role = await prisma.role.findUnique({
                    where: {
                        roleCode: data.role_type
                    }
                });
                const dataAdd = await prisma.user.create({
                    data: {
                        fname: data.fname,
                        lname: data.lname,
                        username: data.username,
                        password: hash,
                        roleId: role.id,
                    }
                });
                delete data.password;
                return Response.json(
                {
                    msg: "user registered successfully",
                    dataAdd
                },
                { status: 201 }
                );
            } else {
                return Response.json("invalid role type");
            }
        } else {
            return Response.json("Invalid Email Address");
        }
    } else {
        return Response.json("Password & Confirm Password doesn't Matched");
    }
}