import Cover from "components/Cover/Cover";
import Heading from "components/Heading/Heading";

export default function BlockRenderer({ blocks }) {
  if (blocks.innerBlocks?.length) {
    console.log(blocks.innerBlocks);
  }
  return blocks.map((block) => {
    switch (block.name) {
      case "core/cover":
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        );

        break;

      case "core/heading":
        return (
          <Heading
            key={block.id}
            level={block.attributes.level}
            content={block.attributes.content}
            textAlign={block.attributes.textAlign}
          />
        );
        break;
      default:
        return null;
    }
  });
}
