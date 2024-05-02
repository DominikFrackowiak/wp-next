export default function index({ blocks }) {
  console.log(blocks);
  if(blocks.innerBlocks?.length){
    console.log(blocks.innerBlocks)
  }
  return blocks.map((block) => {
    switch (block.name) {
      case "core/cover":
        return <div>core cover</div>;

        break;
      case "core/paragraph":
        return <div>core paragraph</div>;
        break;
      case "core/heading":
        return <div>core heading</div>;
        break;
      default:
        return null;
    }
  });
}
