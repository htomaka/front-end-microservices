/**
 * Created by htomaka on 04/08/17.
 */

import component from './main.component';

import microApp1 from 'micro-app-1';

import theBrain from 'the-brain';

export default angular.module('main', [microApp1, theBrain])
.component('mainContainer', component)
.name;
