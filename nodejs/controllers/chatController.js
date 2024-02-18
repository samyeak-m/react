const OpenAI = require("openai");

const queryGPT =async(req,res)=> {
    const openai = new OpenAI({
        apikey: process.env.OPENAI_SECRET_KEY
    });
    const result = await openai.chat.completions.create({
        messages:[{
            role: "system",
            content:
            "You are a helpful assistant. you are a reactbot. If the question is out of E-commerce type return message : Sorry,I am not be able to answer out of topic. But you can give your basic information.",
        },
        {
            role: "user",
            content: req.body?.input
        }
    ],
        model: "gpt-3.5-turbo",
    });

    return res.json([
        result.choices[0].message.content
    ]);
};

module.exports = {
    queryGPT
};