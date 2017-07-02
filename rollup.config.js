import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { prepack } from 'prepack';


/**
 * Adapted from the rollup-plugin-prepack package on npm.
 * That package cannot be used due to this issue:
 * https://github.com/tunnckoCore/rollup-plugin-prepack/issues/9
 *
 * @param {Object} [options]
 */
const prepackPlugin = (options) => ({
	name: 'prepack',
		transformBundle: (source) => {
		const {code, map} = prepack(source, options);
		return {code: code.trim(), map};
	}
});

export default {
	entry: 'src/index.js',
	dest: 'dist/bundle.js', format: 'umd',
	moduleName: 'midiUtils',
	plugins: [
		resolve(),
			babel({exclude: 'node_modules/**'}),
					prepackPlugin()
	]
};
