import { IJsonSchema, IJsonSchemaRef } from "../mod.ts";


/**
 * JSON Schema Object type
 * type = object
 * 
 * https://json-schema.org/understanding-json-schema/reference/object.html
 * 
 * @author Ashley Peake, Institute of Digital Healthcare, WMG
 */
export interface IJsonSchemaObject extends IJsonSchema {
	/**
	 * Properties
	 */
	properties: {[key: string]: IJsonSchema | IJsonSchemaRef};

	
	/**
	 * Required properties
	 */
	required?: string[];

	
	/**
	 * Property dependencies
	 * 
	 * The value of the dependencies keyword is an object. Each entry in the object maps from the name of a property, 
	 * p, to an array of strings listing properties that are required whenever p is present.
	 * For example if you have a credit card require a billing address
	 * "credit_card": ["billing_address"]
	 * dependencies are not bidirectional define bidirectional dependencies explicitly
	 * "billing_address": ["credit_card"]
	 *  
	 * https://json-schema.org/understanding-json-schema/reference/object.html#id7
	 * 
	 * dependencies was renamed dependentSchemas
	 * https://json-schema.org/draft/2020-12/json-schema-core.html#rfc.section.10.2.2.4
	 */
	dependentSchemas?: {[key: string]: string[]}
	

	/**
	 * Not implemented
	 * 
	 * Complicates query and not really needed yet
	 * additionalProperties
	 * propertyNames
	 * https://json-schema.org/understanding-json-schema/reference/object.html#id4
	 * 
	 * we cannot query or map dynamic objects
	 * minProperties
	 * maxProperties
	 * https://json-schema.org/understanding-json-schema/reference/object.html#id5
	 * 
	 * Schema dependencies should be defined on schema and not set to required for querying
	 * dependencies
	 * https://json-schema.org/understanding-json-schema/reference/object.html#id8
	 * 
	 * Pattern Properties complicate the query
	 * patternProperties
	 * https://json-schema.org/understanding-json-schema/reference/object.html#id9
	 */
}