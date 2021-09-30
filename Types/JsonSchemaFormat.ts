/**
 * Formats to be used by properties in schema
 * 
 * https://json-schema.org/understanding-json-schema/reference/string.html#id8
 * 
 * @author Ashley Peake, Institute of Digital Healthcare, WMG
 */
 export enum JsonSchemaFormat {
	"date-time" = "date-time",
	time = "time",
	date = "date",
	email = "email",
	"idn-email" = "idn-email",
	hostname = "hostname",
	"idn-hostname" = "idn-hostname",
	ipv4 = "ipv4",
	ipv6 = "ipv6",
	uri = "uri",
	"uri-reference" = "uri-reference",
	iri = "iri",
	"iri-reference" = "iri-reference",
	"uri-template" = "uri-template",
	"json-pointer" = "json-pointer",
	regex = "regex"
 }