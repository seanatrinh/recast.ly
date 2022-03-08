import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  query = query || 'https://app-hrsei-api.herokuapp.com/api/recastly/videos';
  $.ajax({
    url: query,
    type: 'GET',
    contentType: 'application/json',
    success: callback,
    error: callback
  });
};

export default searchYouTube;
