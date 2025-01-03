import dependencyService from './dependency-injection-6';
import myDependency1 from './myDependency1';
import myDependency2 from './myDependency2';
import myDependency3 from './myDependency3';
import dmManager from './dbManager';
dependencyService
  .provide('myDependency1', myDependency1)
  .provide('myDependency2', myDependency2)
  .provide('myDependency3', myDependency3)
  .provide('dbManager', dmManager);
