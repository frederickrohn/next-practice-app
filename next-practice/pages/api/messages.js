// testing this api call using curl can be done like this
// note: remember to RUN the backend (entire application in this case) so that it can receive api calls

// test get/fetch all messages
// curl -X GET http://localhost:3000/api/messages

// test post/add new messages
/*
curl -X POST http://localhost:3000/api/messages \
     -H "Content-Type: application/json" \
     -d '{"content": "Hello, this is a test!", "username": "testuser", "category": "general"}'
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req,res){
    if(req.method === "GET"){


        //fetch all messages
        try{
            const messages = await prisma.message.findMany({
                orderBy: {createdAt: "desc"}, //sort by newest first
            });
            res.status(200).json(messages);
        }catch(error){
            res.status(500).json({error: 'failed to fetch messages :('});
        };


    }else if (req.method === "POST"){
        //add the incoming message to the database


        const {content, username, category} = req.body;

        //basic checks to make sure we have all the fields we need
        //note: category is optional, which is why we don't check it
        if(!content || !username){
            return res.status(400).json({error: "missing required fields!!!"});
        };

        try{
            const newMessage = await prisma.message.create({
                // we conditionally add category, 
                // and also likes is not needed because it defaults to 0 in our schema
                data: {
                    content, username, ...(category && { category }),
                },
            });
            res.status(201).json(newMessage);
        }catch(error){
            res.status(500).json({error: 'failed to add new message :('});
        };
    }
}