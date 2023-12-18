import algoliasearch from 'algoliasearch';

import records from '../../data/products.json';

class RecordsUploader {
  constructor(records) {
    this.records = records;
    this._initializeAlgolia();
    this._reducePrices();
  }

  _initializeAlgolia() {
    this.algoliaClient = algoliasearch(
      process.env.ALGOLIA_APP_ID,
      process.env.ALGOLIA_API_KEY
    );

    this.index = this.algoliaClient.initIndex(process.env.ALGOLIA_INDEX);
  }

  _reducePrices() {
    this.records.forEach((record) => {
      if (record.price) {
        // Reduce the price by 20%
        record.price *= 0.8;
        // Round to two decimal places
        record.price = Math.floor(record.price);
        console.log(record.name, record.price);
      }
    });

    return this.records;
  }

  async uploadRecords() {
    try {
      const { objectIDs } = await this.index.saveObjects(this.records);
      console.log(`Records uploaded successfully. Object IDs:`, objectIDs);
    } catch (error) {
      console.error('Error uploading records:', error);
    }
  }
}

const uploader = new RecordsUploader(records);
/* Uncomment the line below to upload records to Algolia */
// uploader.uploadRecords();

export default RecordsUploader;
