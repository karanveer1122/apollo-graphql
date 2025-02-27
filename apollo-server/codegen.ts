
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000",
  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript", "flow", "typescript-document-nodes"]
    }
  }
};

export default config;
