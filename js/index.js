'use strict';

import genereatGoods from './genereatGoods.js';
import generateHeader from './generatHeader.js';
import generateFooter from './generateFooter.js';
import generateCatalog from './generateCatalog.js';
import { loadData } from './loadData.js';



generateCatalog();
generateFooter();
generateHeader();
loadData();
genereatGoods();