// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {ObjectId} from 'mongodb';
import clientPromise from '../../lib/mongodb';

type Data = {
  message: string,
}

export type CommentType = {
  id?:ObjectId,
  senderId:ObjectId,
  sender:string,
  comment:string,
  datetime:string
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if (req.method==='POST'){
    const {sender,comment,datetime,email,image} = req.body;

    let client 

    try{
      client = await clientPromise;
    }catch(error){
      res.status(500).json({message:'Could not connect to database'});
      return;
    }

    const db = client.db();

    let user

    user = await db.collection('users').findOne({name:sender,email,image},{projection:{_id:1}});
    if (!user) return res.status(400).json({message:'No user could be found'})

    const senderId= user._id;

    const newComment:CommentType = {
      senderId,comment,sender,datetime
    }

    try{
      const result = await db.collection('comments').insertOne(newComment);
      console.log(result);
      newComment.id = result.insertedId
    }catch(error){
      client.close();
      res.status(500).json({message: 'Storing message failed'})
      return;
    }
  }
  
  res.status(201).json({ message: 'Successfully stored the comment!' })
}

export default handler;
