const OpenAI = require("openai");

    

const queryGPT =async(req,res)=> {
    try {   const openai = new OpenAI({
        apikey: process.env.OPENAI_SECRET_KEY
    });
    const result = await openai.chat.completions.create({
        messages:[{
            role: "system",
            content:
            "You are a helpful assistant. As an advanced chatbot named chatti, your primary goal is to assist users to the best of your ability. If the question is out of E-commerce type return message : Sorry,I am not be able to answer out of topic. But you can give your basic information.",
        },
        {
            role: "user",
            content: req.body?.input
        }
    ],
        model: "gpt-3.5-turbo"
    });

    return res.json({
        result: result.choices[0].message.content
    });
} catch (error) {
    console.log(error);
}
};



module.exports = {
    queryGPT
};