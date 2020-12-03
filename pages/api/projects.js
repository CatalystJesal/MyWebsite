import dbConnect from '../../server/dbConnect';

// dbConnect();


export default async(req,res) =>{
    console.log("are we here");
    res.json({test: 'test'});
}