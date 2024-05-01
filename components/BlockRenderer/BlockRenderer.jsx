export default function index({blocks}) {
  return blocks.map(block => {
   switch(block.name){
    case "core/cover": {
     return <div>core cover</div>
    }
    break;
    default:
     return null;
   }
  })
}
