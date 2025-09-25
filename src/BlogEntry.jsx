function BlogEntry(props) {
  const buttonLabel = "Read more...";

  return (
    <div className="entry">
      <h2>{props.title}</h2>
      <p>{props.summary}</p>
      <button>{buttonLabel}</button>
    </div>
  )
}

export default BlogEntry;