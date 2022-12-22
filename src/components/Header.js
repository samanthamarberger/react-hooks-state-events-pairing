import Video from "./Video";

function Header({ data }) {
    return (
        <div className="App">
        <Video data={data} />
        <h1>{data.title}</h1>
      </div>
    )
}

export default Header;