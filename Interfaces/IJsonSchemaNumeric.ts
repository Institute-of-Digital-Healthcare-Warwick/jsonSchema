import { IJsonSchema } from "../mod.ts";


/**
 * JSON Schema Numeric type
 * type = integer or number
 * 
 * https://json-schema.org/understanding-json-schema/reference/numeric.html
 * 
 * @author Ashley Peake, Institute of Digital Healthcare, WMG
 */
export interface IJsonSchemaNumeric extends IJsonSchema {
	/**
	 * Minimum integer
	 * 
	 * By default the ranges are inclusive: "minimum": n imposes the restriction that numbers need to be greater than or equal to n
	 * https://json-schema.org/understanding-json-schema/reference/numeric.html#id7
	 */
	minimum?: number;
	exclusiveMinimum?: number;
	
 
	/**
	  * Maximum integer
	  * 
	  * By default the ranges are inclusive: "maximum": m imposes that numbers need to be less than or equal to m
	  * https://json-schema.org/understanding-json-schema/reference/numeric.html#id7
	  */
	maximum?: number;
	exclusiveMaximum?: number;


	/**
	 * Numbers can be restricted to a multiple of a given number
	 * must be greater than 0
	 * 
	 * https://json-schema.org/draft/2020-12/json-schema-validation.html#rfc.section.6.2.1
	 */
	multipleOf?: number;
	

	/**
	 * Not implemented
	 */
}