function Video({ data }){
    //console.log("data", data.embedUrl);
    return (
        <iframe
          width="919"
          height="525"
          src={data.embedUrl}
          frameBorder="0"
          allowFullScreen
          title="Thinking in React"
        />
    )
}

export default Video;