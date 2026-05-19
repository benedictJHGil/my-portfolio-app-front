import React from "react";

export const renderText = (
  text: string,
  highlights: string[],
  renderHighlight: (keyword: string, key: string) => React.ReactNode
): React.ReactNode => {
  if (!text) return null;

  let result: React.ReactNode[] = [text];

  highlights.forEach((keyword) => {
    result = result.flatMap((part): React.ReactNode[] => {
      if (typeof part !== "string") return [part];

      return part.split(keyword).flatMap((splitPart, index, arr) => {
        if (index < arr.length - 1) {
          return [
            splitPart,
            renderHighlight(keyword, `${keyword}-${index}`),
          ];
        }
        return [splitPart];
      });
    });
  });

  return result;
};