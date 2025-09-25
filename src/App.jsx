import BlogEntry from "./BlogEntry";

function App() {
  return (
    <div>
      <h1>My blog</h1>
      <BlogEntry title="React is Awesome" summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum dolore minus ad, sapiente unde itaque iste. Natus, voluptates obcaecati ipsam ab id eius qui omnis aperiam magnam nostrum quod amet" />
      <BlogEntry title="Web Development Made Easy" summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum dolore minus ad, sapiente unde itaque iste. Natus, voluptates obcaecati ipsam ab id eius qui omnis aperiam magnam nostrum quod amet" />
      <BlogEntry
        title="Coding is fun"
        summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum dolore minus ad, sapiente unde itaque iste. Natus, voluptates obcaecati ipsam ab id eius qui omnis aperiam magnam nostrum quod amet"
      />
    </div>
  )
}

export default App
