import { z } from 'zod'
import { type ToolMetadata, type InferSchema } from 'xmcp'

// Define the schema for tool parameters (empty since no parameters needed)
export const schema = {}

// Define tool metadata
export const metadata: ToolMetadata = {
  name: 'current_job',
  description: 'Returns your current job position',
  annotations: {
    title: 'Current Job',
    readOnlyHint: true,
    destructiveHint: false,
    idempotentHint: true,
  },
}

// Tool implementation
export default function currentJob(_params: InferSchema<typeof schema>) {
  return "You're currently DX Engineer @ XMCP"
}
