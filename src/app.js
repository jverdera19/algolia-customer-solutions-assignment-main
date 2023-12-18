import ResultsPage from './components/results-page';
import UploadDataPage from './components/upload-data';

class SpencerAndWilliamsSearch {
  constructor() {
    this._initSearch();
    // this._initUploadData();
  }

  _initSearch() {
    this.resultPage = new ResultsPage();
  }

  _initUploadData() {
    this.uploadDataPage = new UploadDataPage();
  }
}

const app = new SpencerAndWilliamsSearch();
