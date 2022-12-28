import { DTBundle } from '~types/dataTypes';
import { initialState, Example, Options, Help, getMetadata } from './PersonalNumber';

export { generate } from './PersonalNumber.generate';
export { defaultGenerationOptions } from './PersonalNumber';

const bundle: DTBundle = {
	initialState,
	Example,
	Options,
	Help,
	getMetadata
};

export default bundle;
