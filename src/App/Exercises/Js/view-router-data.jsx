import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataBoolean } from './Boolean/router-data';
import { blockRouterMetaData as blockRouterMetaDataIfSwitch } from './IfSwitch/router-data';
import { blockRouterMetaData as blockRouterMetaDataEmptyValuesAndComments } from './EmptyValuesAndComments/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsStringTraining } from './JsStringTraining/router-data';
import { blockRouterMetaData as blockRouterMetaDataArrays } from './Arrays/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataBoolean,
  blockRouterMetaDataIfSwitch,
  blockRouterMetaDataEmptyValuesAndComments,
  blockRouterMetaDataJsStringTraining,
  blockRouterMetaDataArrays,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
