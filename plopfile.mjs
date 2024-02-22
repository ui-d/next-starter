import * as promptDirectory from 'inquirer-directory';

import { customHookGeneratorDescription, customHookGenerator } from './plop/generators/customHook.mjs';
import {
  reactUiComponentGeneratorDescription,
  reactUiComponentGenerator,
} from './plop/generators/reactUiComponent.mjs';
import { reactContextGeneratorDescription, reactContextGenerator } from './plop/generators/reactContext.mjs';

export default function(plop) {
  plop.setPrompt('directory', promptDirectory);
  plop.setGenerator(reactUiComponentGeneratorDescription, reactUiComponentGenerator);
  plop.setGenerator(customHookGeneratorDescription, customHookGenerator);
  plop.setGenerator(reactContextGeneratorDescription, reactContextGenerator);
};
