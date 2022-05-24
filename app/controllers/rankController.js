//app/controllers/topicControllers.js

import moment from 'moment';

import dbQuery from '../db/dev/dbQuery.js';

import {
  empty,
} from '../helpers/validations.js';

// import {
//     checkRange,
// } from '../middlewares/verifyRange.js'


import {
  errorMessage, successMessage, status,
} from '../helpers/status.js';


//adding topics
const updateRank = async (req, res) => {
  const {
    topic_id,ranked
  } = req.body;

  if(ranked >100 || ranked <1){
    errorMessage.error = 'Rank should be between 1 to 100';
    return res.status(status.bad).send(errorMessage);
  }

  if (empty(topic_id) || empty(ranked) ) {
    errorMessage.error = 'All fields are required';
    return res.status(status.bad).send(errorMessage);
  }

  const updateRankQuery =`UPDATE rank SET ranked=$1 WHERE topic_id=$2 returning *`;
  const values = [
    ranked,
    topic_id,
  ];
    
  try {
    const { rows } = await dbQuery.query(updateRankQuery, values);

    const dbResponse = rows[0];
    successMessage.data = dbResponse;

    return res.status(status.created).send(successMessage);
  } catch (error) {
    errorMessage.error = 'Unable to add bus';
    return res.status(status.error).send(errorMessage);
  }
};


export {
  updateRank,
};