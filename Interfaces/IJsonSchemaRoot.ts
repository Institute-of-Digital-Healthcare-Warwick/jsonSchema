import { IJsonSchema, IJsonSchemaObject, UriReference } from "../mod.ts";


/**
 * JSON Schema: A Media Type for Describing JSON Documents
 * 
 * @author Ashley Peake, Institute of Digital Healthcare, WMG
 */
export interface IJsonSchemaRoot extends IJsonSchemaObject {
	/**
	 * ID of document in repository
	 * 
	 * It is best practice that every top-level schema should set $id to an absolute-URI (not a relative reference), with a domain that you control.
	 * 
	 * These need specifying to include repo and type on a valid Mapper API rout
	 * 
	 * https://json-schema.org/understanding-json-schema/structuring.html?highlight=ref#id3
	 */
	$id: UriReference;


	/**
	 * Schema
	 * 
	 * TS model is built on https://json-schema.org/draft/2020-12/schema
	 */
	$schema: string;


	/**
	 * Title
	 */
	title: string;


	/**
	 * Definitions in this schema
	 */
	$defs?: {[key:string] : IJsonSchema};
}