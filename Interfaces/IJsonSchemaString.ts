import { IJsonSchema } from "../mod.ts";
import { JsonSchemaFormat } from "../Types/JsonSchemaFormat.ts";


/**
 * JSON Schema String type
 * type = string
 * 
 * https://json-schema.org/understanding-json-schema/reference/string.html
 * 
 * @author Ashley Peake, Institute of Digital Healthcare, WMG
 */
export interface IJsonSchemaString extends IJsonSchema {
	/**
	 * Regular expression validation
	 * 
	 * https://json-schema.org/understanding-json-schema/reference/string.html#id6
	 */
	pattern?: string;


	/**
	 * Minimum string length validation
	 * 
	 * https://json-schema.org/understanding-json-schema/reference/string.html#id5
	 */
	minLength?: number;


	/**
	 * Maximum string length validation
	 * 
	 * https://json-schema.org/understanding-json-schema/reference/string.html#id5
	 */
	maxLength?: number;
	

	/**
	 * Validation formats
	 * 
	 * https://json-schema.org/understanding-json-schema/reference/string.html#id8
	 */
	format?: JsonSchemaFormat;
	

	/**
	 * Not implemented
	 */
}