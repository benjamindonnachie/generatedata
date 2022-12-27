import { ETOnMessage } from '~types/exportTypes';
import { generate } from './PHP.generate';

const context: Worker = self as any;

context.onmessage = (e: ETOnMessage) => {
	context.postMessage(generate(e.data));
};
