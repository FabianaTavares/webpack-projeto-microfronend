import $ from 'jquery';
import './fonts.css';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faBacon, faAnchor } from '@fortawesome/free-solid-svg-icons';

library.add(faBacon, faAnchor);
dom.watch();

const body = $('body');

const p = $("<p></p>").text("inserindo texto").css("color", "red");

body.append(p);