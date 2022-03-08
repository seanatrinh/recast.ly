// Responsible for knowing and communicating information about the search input field

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.filterSearch = this.filterSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    const {value} = e.target;

    this.setState({value});
  }

  filterSearch(curState) {
    let res = this.props.videoData.filter(video => video.snippet.title.includes(curState));
    this.props.handleFilter(res);
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps, this.props);
    if (this.state.value && this.props.filteredData.length === 0) {
      this.filterSearch(this.state.value);
    } else if (this.props.filteredData.length !== prevProps.filteredData.length) {
      this.filterSearch(this.state.value);
    }
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          onChange={this.handleChange}
        />
        <button className="btn hidden-sm-down">
          <span
            className="glyphicon glyphicon-search"
          ></span>
        </button>
      </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
