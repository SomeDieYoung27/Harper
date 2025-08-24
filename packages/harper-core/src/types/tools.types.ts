import { JSONSchema7 } from "json-schema";
import AgentContext from "../agent/context";
import { LanguageModelV2ToolCallPart } from "@ai-sdk/provider";

export type ToolSchema =
  | {
      name: string;
      description?: string;
      parameters: JSONSchema7;
    }
  | {
      name: string;
      description?: string;
      input_schema: JSONSchema7;
    }
  | {
      name: string;
      description?: string;
      inputSchema: JSONSchema7;
    }
  | {
      type: "function";
      function: {
        name: string;
        description?: string;
        parameters: JSONSchema7;
      };
    };