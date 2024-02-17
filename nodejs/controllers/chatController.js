import OpenAI from 'openai';

const queryGPT =(req,res)=> {
    const openai = new OpenAI({
        apikey: process.env.OPENAI_API_KEY
    });
    const result = openai.chat.completions.create({
        messages:[{
            role: "system",
            content: ""
        },{
            role: "user",
            content: req.body.message
        }],
        model: "gpt-3.5-turbo",
    });
};

module.exports = {
    queryGPT
};