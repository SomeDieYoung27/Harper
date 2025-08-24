type GlobalConfig = {
    name : string;
    platform : "windows" | "mac" | "linux";
    maxReactNum : number;
    maxTokens : number;
    maxRetryNum : number;
    agentParallel : boolean;
    compressThreshold : number;
    largeTextLength: number;
    fileTextMaxLength : number;
    maxDialogueImgFileNum : number;
    toolResultMultimodal: boolean;
    expertMode: boolean;
    expertModeTodoLoopNum: number;
}
const config: GlobalConfig = {
    name: "Eko",
    platform: "mac",
    maxReactNum: 500,
    maxTokens: 16000,
    maxRetryNum: 3,
    agentParallel: false,
    compressThreshold: 80,
    largeTextLength: 5000,
    fileTextMaxLength: 20000,
    maxDialogueImgFileNum: 1,
    toolResultMultimodal: true,
    expertMode: false,
    expertModeTodoLoopNum: 10,
  };