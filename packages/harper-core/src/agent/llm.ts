import config from "../config";
import Log from "../common/log";
import * as memory from "../memory";
import { RetryLanguageModel } from "../llm";
import { AgentContext } from "../core/context";
import { uuidv4, sleep, toFile, getMimeType } from "../common/utils";
import {
  LLMRequest,
  StreamCallbackMessage,
  StreamCallback,
  HumanCallback,
  StreamResult,
  Tool,
  ToolResult,
  DialogueTool,
} from "../types";
import {
  LanguageModelV2FunctionTool,
  LanguageModelV2Prompt,
  LanguageModelV2StreamPart,
  LanguageModelV2TextPart,
  LanguageModelV2ToolCallPart,
  LanguageModelV2ToolChoice,
  LanguageModelV2ToolResultOutput,
  LanguageModelV2ToolResultPart,
  SharedV2ProviderOptions,
} from "@ai-sdk/provider";

export function defaultLLMProviderOptions() : SharedV2ProviderOptions {
    return {
        openai : {
            stream_options : {
                include_usage: true,
            }
        },
        openrouter : {
            reasoning: {
                max_tokens: 10,
              },
        }
    }
}

export function defaultMessageProviderOptions(): SharedV2ProviderOptions {
    return {
      anthropic: {
        cacheControl: { "type": "ephemeral" }
      },
      bedrock: {
        cachePoint: { type: 'default' }
      },
      openrouter: {
        cacheControl: { type: 'ephemeral' },
      },
    }
}

export function convertTools(tools : Tool[] |DialogueTool[]) : LanguageModelV2FunctionTool[] {
    return tools.map((tool) => ({
        type: "function",
        name: tool.name,
        description: tool.description,
        inputSchema: tool.parameters,
    }))
}

export function getTool<T extends Tool | DialogueTool>(
    tools: T[],
    name: string
  ): T | null {
    for (let i = 0; i < tools.length; i++) {
      if (tools[i].name == name) {
        return tools[i];
      }
    }
    return null;
  }