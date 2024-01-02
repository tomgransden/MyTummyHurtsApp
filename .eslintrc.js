module.exports = {
  extends: ['universe', 'universe/shared/typescript-analysis'],
  env: {
    node: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
};
