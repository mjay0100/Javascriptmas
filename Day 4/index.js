import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();
