import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { Cwiczenie1MetaData } from './Cwiczenie1/router-data';
import { Cwiczenie2MetaData } from './Cwiczenie2/router-data';
import { routerMetaData as IfStatementsMetaData } from './IfStatements/router-data';
import { routerMetaData as IfStatementsMoreOrLessMetaData } from './IfStatementsMoreOrLess/router-data';
import { routerMetaData as IfStatementsWhatNumberMetaData } from './IfStatementsWhatNumber/router-data';
import { routerMetaData as LocalDevAndFetchMetaData } from './LocalDevAndFetch/router-data';
import { routerMetaData as ToDoWithServerMetaData } from './ToDoWithServer/router-data';
import { routerMetaData as ToDoWithServerExampleMetaData } from './ToDoWithServerExample/router-data';
import { routerMetaData as ReactUseRefMetaData } from './ReactUseRef/router-data';
import { routerMetaData as FormsMetaData } from './Forms/router-data';
import { routerMetaData as BasicFormsMetaData } from './BasicForms/router-data';
import { routerMetaData as LibrariesFormMetaData } from './LibrariesForm/router-data';
import { routerMetaData as FireBaseLoginFormMetaData } from './FireBaseLoginForm/router-data';
import { routerMetaData as ReduxMetaData } from './Redux/router-data';
import { routerMetaData as ReduxCounterMetaData } from './ReduxCounter/router-data';

export const blockRouterMetaData = [
    SubRouteExampleMetaData,
    Cwiczenie1MetaData,
    Cwiczenie2MetaData,
    IfStatementsMetaData,
    IfStatementsMoreOrLessMetaData,
    IfStatementsWhatNumberMetaData,
    LocalDevAndFetchMetaData,
    ToDoWithServerMetaData,
    ToDoWithServerExampleMetaData,
    ReactUseRefMetaData,
    FormsMetaData,
    BasicFormsMetaData,
    LibrariesFormMetaData,
    FireBaseLoginFormMetaData,
    ReduxMetaData,
    ReduxCounterMetaData,
];

export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
