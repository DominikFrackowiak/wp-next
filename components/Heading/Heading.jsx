import React from "react";

import { getFontSizeForHeading, getTextAlign } from "utils/fonts";

export default function Heading({textAlign, content, level=2}) {
  const tag = React.createElement(`h${level}`, {dangerouslySetInnerHTML: {__html: content}, className: `font-heading mx-w-5xl mx-auto my-5 ${getFontSizeForHeading(level)} ${getTextAlign(textAlign)}`
})
  return tag;
}
