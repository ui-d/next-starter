export const reactUiComponentGeneratorDescription = 'React UI component';

export const reactUiComponentGenerator = {
  description: reactUiComponentGeneratorDescription,
  prompts: [
    {
      type: 'list', // Use 'list' type for selection
      name: 'type',
      message: 'Select component type',
      choices: ['atom', 'component'], // Add choices for 'atom' and 'regular'
      default: 'component',
    },
    {
      type: 'input',
      name: 'name',
      message: 'component name',
      validate: input => input.length > 1 || 'Component name cannot be empty!',
    },
  ],
  actions: function(data) {
    // Define base path based on component type
    const basePath = data.type === 'atom' ? 'src/ui/fundamentals' : 'src/ui/components';

    return [
      {
        type: 'add',
        path: `${basePath}/{{pascalCase name}}/{{pascalCase name}}.tsx`,
        templateFile: 'plop/templates/component/Component.hbs',
      },
      {
        type: 'add',
        path: `${basePath}/{{pascalCase name}}/{{pascalCase name}}.test.tsx`,
        templateFile: 'plop/templates/component/Component.test.hbs',
      },
      {
        type: 'add',
        path: `${basePath}/{{pascalCase name}}/{{pascalCase name}}.types.ts`,
        templateFile: 'plop/templates/component/Component.types.hbs',
      },
      {
        type: 'add',
        path: `${basePath}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx`,
        templateFile: 'plop/templates/component/Component.stories.hbs',
      },
      {
        type: 'add',
        path: `${basePath}/{{pascalCase name}}/index.ts`,
        pattern: '/* PLOP_INJECT_EXPORT */', // Adjust this pattern to match your export injection point
        template: `export { {{pascalCase name}} } from './{{pascalCase name}}';`,
      }
    ];
  },
}
