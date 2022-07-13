import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import photography from './photography' // import the file you just made
import tags from './tags' // import the file you just made

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
		photography, tags,// add the document type to this array
  ]),
});
