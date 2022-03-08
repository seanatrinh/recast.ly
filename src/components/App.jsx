// The top level container for the entire application. This is the component that will be rendered to the DOM
import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import search from '../lib/searchYouTube.js';
import data from '../data/exampleVideoData.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoData: [],
      currVideo: {},
      filtered: [],
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount() {

    // search('queryString', data=> {
    //   this.setState({
    //     currVideo: data[0],
    //     videoData: data
    //   })
    // })

    this.setState({
      videoData: data
    });
  }


  handleFilter(arr) {
    this.setState({
      filtered: arr
    });
  }

  render() {
    const list = this.state.filtered.length ? this.state.filtered : this.state.videoData;

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>
              <Search
                videoData={this.state.videoData}
                filteredData={this.state.filtered}
                handleFilter={this.handleFilter}
              />
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer /></div>
          </div>
          <div className="col-md-5">
            <div>
              <VideoList
                videos={list}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
