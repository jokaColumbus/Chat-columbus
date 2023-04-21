import { OpenAIModel } from './openai';

export interface ConstantPrompt {
    id: string;
    name: string;
    description: string;
    content: string;
    model: OpenAIModel;
    folderId: string | null;
}
