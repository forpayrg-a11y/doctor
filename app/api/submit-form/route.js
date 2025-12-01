import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma =new PrismaClient();


export async function POST(req) {
    try {
        const data=await req.json();

        const saved =await prisma.hairTransplantForm.create({
            data:{
                firstName:data.firstName,
                lastName:data.lastName,
                email:data.email,
                contact:data.contact,
                gender:data.gender,
                transplantType:data.subject, // Changed from data.transplantType to data.subject
                photos:data.photos ?? null,
            },

        });
        return NextResponse.json({ success: true, saved });

    } catch (error) {
        console.error("Database error:", error);
        return NextResponse.json({
            error: 'Database error',
            details: error.message
        }, {status:500});
        
    }
}