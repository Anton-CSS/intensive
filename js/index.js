'use strict';

import { useCatalog } from './catalog.js';
import generateHeader from './generatHeader.js';
import generateFooter from './generateFooter.js';
import generateCatalog from './generateCatalog.js';
import generateSubCatalog from './generateSubCatalog.js';
import { loadData } from './loadData.js';


generateSubCatalog();
generateCatalog();
generateFooter();
generateHeader();
useCatalog();
loadData();