import { IJsonSchema, IJsonSchemaRef } from "../mod.ts";


/**
 * JSON Schema Array type
 * type = array
 * 
 * @author Ashley Peake, Institute of Digital Healthcare, WMG
 */
export interface IJsonSchemaArray extends IJsonSchema {
	/**
	 * Items used for array type
	 * 
	 * List validation against a single schema
	 * 
	 * Tuple validation is useful when the array is a collection of items where each has a different schema and the ordinal index of each item is meaningful.
	 * IJsonSchema[]
	 * This would complicate the query
	 * 
	 * https://json-schema.org/understanding-json-schema/reference/array.html#id4
	 */
	items: IJsonSchema | IJsonSchemaRef;


	/**
	 * Min array items
	 * 
	 * https://json-schema.org/understanding-json-schema/reference/array.html#id7
	 */
	minItems?: number;


	/**
	 * Max array items
	 * 
	 * https://json-schema.org/understanding-json-schema/reference/array.html#id7
	 */
	maxItems?: number;


	/**
	 * Unique array items only
	 * 
	 * https://json-schema.org/understanding-json-schema/reference/array.html#id8
	 */
	uniqueItems?: boolean;


	/**
	 * Not implemented
	 *  
	 * additionalItems 
	 * we cannot query or map these
	 * https://json-schema.org/understanding-json-schema/reference/array.html#id6
	 */
}