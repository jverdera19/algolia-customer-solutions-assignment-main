import algoliasearch from 'algoliasearch';
import instantsearch from 'instantsearch.js';
import {
  searchBox,
  hits,
  pagination,
  refinementList,
} from 'instantsearch.js/es/widgets';

import resultHit from '../templates/result-hit';

/**
 * @class ResultsPage
 * @description Instant Search class to display content on main page.
 */
class ResultPage {
  constructor() {
    this._registerClient();
    this._registerWidgets();
    this._startSearch();
    this._runSettingsAPIDemo();
  }

  /**
   * @private
   * Handles creating the search client and creating an instance of instant search
   * @returns {void}
   */
  _registerClient() {
    this._searchClient = algoliasearch(
      process.env.ALGOLIA_APP_ID,
      process.env.ALGOLIA_API_KEY
    );

    this._searchInstance = instantsearch({
      indexName: process.env.ALGOLIA_INDEX,
      searchClient: this._searchClient,
      insights: true,
    });
  }

  /**
   * @private
   * Adds widgets to the Algolia instant search instance
   * @returns {void}
   */
  _registerWidgets() {
    this._searchInstance.addWidgets([
      searchBox({
        container: '#searchbox',
      }),
      hits({
        container: '#hits',
        templates: {
          // To do - refactor and move to the result-hit template
          item: resultHit,
        },
      }),
      pagination({
        container: '#pagination',
      }),
      refinementList({
        container: '#brand-facet',
        attribute: 'brand',
      }),
      refinementList({
        container: '#categories-facet',
        attribute: 'categories',
      }),
    ]);
  }

  /**
   * @private
   * Demo of the Algolia Settings API
   * Comment/uncomment the code as needed to run the demo
   * 0. Initialize the index to connect to Algolia
   * 1. Get index settings to check if they are empty at the beginning and the updated settings after they are set
   * 2. Set index settings to update the searchable attributes or custom ranking
   * 3. Search for a product to see the results after the settings are updated
   * @returns {void}
   */
  _runSettingsAPIDemo() {
    // 0 - Initialize index
    this._registerClient();

    this._index = this._searchClient.initIndex(process.env.ALGOLIA_INDEX);

    // 1 - Get index
    // this._index.getSettings().then((settings) => {
    //   console.log(settings);
    // });

    // 2 - Set index settings
    // this._index
    //   .setSettings({
    //     searchableAttributes: ['name', 'unordered(brand)', 'categories'],
    //   })
    //   .then((resut) => {
    //     console.log(resut);
    //   });

    // 2.1 - Set index settings - custom ranking
    // this._index
    //   .setSettings({
    //     customRanking: ['asc(popularity)', 'desc(rating)'],
    //   })
    //   .then((resut) => {
    //     console.log(resut);
    //   });

    // 3 - Search for a product
    this._index.search('Apple').then((result) => {
      console.log('Search results:');
      // Get first 3 hits
      for (let i = 0; i < 3; i++) {
        console.log(result.hits[i]);
      }
    });
  }

  /**
   * @private
   * Starts instant search after widgets are registered
   * @returns {void}
   */
  _startSearch() {
    this._searchInstance.start();
  }
}

export default ResultPage;
