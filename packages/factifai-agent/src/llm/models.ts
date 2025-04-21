import { ChatOpenAI } from "@langchain/openai";
import { BedrockChat } from "@langchain/community/chat_models/bedrock";

export const openAiModel = (streaming?: boolean) =>
  new ChatOpenAI({
    modelName: "gpt-4.1",
    temperature: 0,
    apiKey: process.env.OPENAI_API_KEY,
    streaming: streaming,
  });

export const bedrockModel = (streaming?: boolean) =>
  new BedrockChat({
    model: "us.anthropic.claude-3-7-sonnet-20250219-v1:0", // Updated to newer model
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
    },
    modelKwargs: {
      anthropic_version: "bedrock-2023-05-31",
    },
    streaming: streaming,
  });
