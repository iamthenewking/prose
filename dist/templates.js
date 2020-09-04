@charset "UTF-8";
/* ------------------------------------------
  Reset ♥
  http://meyerweb.com/eric/tools/css/reset/
  v2.0 | 20110126
  License: none (public domain)
---------------------------------------------*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline; }

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block; }

body {
  line-height: 1; }

ol, ul {
  list-style: none; }

blockquote, q {
  quotes: none; }

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none; }

/* tables still need 'cellspacing="0"' in the markup */
table {
  border-collapse: collapse;
  border-spacing: 0; }

/* remember to define focus styles. Hee Haw */
:focus {
  outline: 0; }

/* ------------------------------------------
  @font-face
---------------------------------------------*/
@font-face {
  font-family: 'OpenSans';
  src: url("../fonts/OpenSans-Regular.eot");
  src: url("../fonts/OpenSans-Regular.eot?#iefix") format("embedded-opentype"), url("../fonts/OpenSans-Regular.woff") format("woff");
  font-weight: 400;
  font-style: normal; }

@font-face {
  font-family: 'OpenSans';
  src: url("../fonts/OpenSans-Italic.eot");
  src: url("../fonts/OpenSans-Italic.eot?#iefix") format("embedded-opentype"), url("../fonts/OpenSans-Italic.woff") format("woff");
  font-weight: 400;
  font-style: italic; }

@font-face {
  font-family: 'OpenSans';
  src: url("../fonts/OpenSans-Bold.eot");
  src: url("../fonts/OpenSans-Bold.eot?#iefix") format("embedded-opentype"), url("../fonts/OpenSans-Bold.woff") format("woff");
  font-weight: 700;
  font-style: normal; }

@font-face {
  font-family: 'OpenSans';
  src: url("../fonts/OpenSans-BoldItalic.eot");
  src: url("../fonts/OpenSans-BoldItalic.eot?#iefix") format("embedded-opentype"), url("../fonts/OpenSans-BoldItalic.woff") format("woff");
  font-weight: 700;
  font-style: italic; }

@font-face {
  font-family: 'Prose';
  src: url("../fonts/prose-129b77953cd92a716f7e5224f4de015e.eot");
  src: url("../fonts/prose-129b77953cd92a716f7e5224f4de015e.eot?#iefix") format("embedded-opentype"), url("../fonts/prose-129b77953cd92a716f7e5224f4de015e.woff") format("woff");
  font-weight: 700;
  font-style: normal; }

/* ------------------------------------------
  Typography / Basics
---------------------------------------------*/
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box; }

html,
body,
textarea,
button,
input {
  font: 13px/20px 'OpenSans', sans-serif; }

html, body {
  background: #fff;
  color: #516066;
  -webkit-font-smoothing: antialiased; }

a {
  color: #3d494e;
  text-decoration: none;
  font-weight: 700;
  -webkit-transition: color 100ms linear;
  -moz-transition: color 100ms linear;
  -o-transition: color 100ms linear;
  transition: color 100ms linear; }

a.light {
  font-weight: normal; }

a:hover {
  color: #202020; }

button {
  border: none;
  margin: 0;
  width: 100%;
  overflow: visible;
  cursor: pointer; }

button::-moz-focus-inner {
  border: 0;
  padding: 0; }

button,
.button {
  background: #516066;
  display: block;
  position: relative;
  padding: 10px 15px;
  margin: 0 0 5px;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden; }

button:active,
.button:active {
  position: relative;
  top: 1px; }

.button:hover {
  background: #3d494e;
  color: #fff; }

.button.delete {
  background-color: #db6f6f; }

.button.delete:hover {
  background-color: #d35252; }

.button.major {
  background-color: #db6f6f; }

.button.major:hover {
  background-color: #d35252; }

.button.minor {
  background-color: #f38361; }

.button.minor:hover {
  background-color: #ec6c45; }

.button.new,
.button.good {
  background-color: #90bb74; }

.button.new:hover,
.button.good:hover {
  background-color: #73955c; }

.listing .actions .delete:active,
.listing .actions .delete:hover {
  border-color: #d35252; }

.toggle {
  background: #f8f8f8;
  color: #a8afb2;
  display: block;
  width: 40px;
  text-align: center;
  height: 40px;
  line-height: 38px; }

.toggle:active,
.toggle:hover {
  background: #f0f0f0;
  color: #a8afb2; }

.toggle:active {
  -webkit-box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.15); }

p > a {
  font-weight: 700; }

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  line-height: 1.5em; }

h1 {
  font-size: 24px; }

h2 {
  font-size: 20px;
  font-weight: 400;
  padding: 0 0 5px; }

h2.label {
  margin: 5px 0;
  font-weight: 700;
  padding: 0; }

h3 {
  font-size: 16px;
  font-weight: 700; }

h4 {
  font-size: 14px; }

h5 {
  font-size: 13px; }

h6 {
  font-size: 11px;
  font-weight: 400; }

.label,
h1 small,
h2 small {
  font-size: 13px;
  font-weight: 400; }

h3 small {
  font-size: 14px;
  font-weight: 400; }

p {
  font-size: 16px;
  line-height: 1.5em;
  margin: 0 0 20px; }

small {
  font-size: 11px;
  line-height: 18px; }

label {
  color: #434C50;
  font-size: 13px;
  line-height: 20px;
  font-weight: 700;
  display: block; }

label.aside {
  display: inline-block;
  font-weight: normal;
  position: relative;
  top: 1px; }

fieldset {
  margin: 5px 0 0; }

select,
textarea,
input[type=text] {
  font-size: 13px;
  line-height: 18px;
  display: inline-block;
  width: 100%;
  padding: 6px 8px;
  -webkit-border-radius: 2px;
  border-radius: 2px; }

textarea,
input[type=text] {
  background-color: #fff;
  vertical-align: middle;
  max-width: 100%;
  border: 1px solid #a8afb2;
  border-color: #a8afb2 #d4d7d9 #d4d7d9;
  color: #516066;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: border linear 150ms;
  -moz-transition: border linear 150ms;
  -o-transition: border linear 150ms;
  transition: border linear 150ms; }

textarea#code {
  resize: none;
  border: none; }

.authoring textarea,
.authoring input[type=text] {
  border-color: #a8afb2; }

textarea:focus,
input[type=text]:focus {
  outline: thin dotted\8;
  /* ie8 below */
  border-color: #516066;
  border-width: 1px; }

div#csv-container {
  width: 100%;
  overflow: hidden; }

::-webkit-input-placeholder {
  color: #a8afb2; }

::-moz-placeholder {
  color: #a8afb2; }

:-ms-input-placeholder {
  color: #a8afb2; }

input:-moz-placeholder {
  color: #a8afb2; }

.headerinput::-webkit-input-placeholder {
  color: #d4d7d9;
  font-style: italic; }

.headerinput::-moz-placeholder {
  color: #d4d7d9;
  font-style: italic; }

.headerinput:-ms-input-placeholder {
  color: #d4d7d9;
  font-style: italic; }

.headerinput:-moz-placeholder {
  color: #d4d7d9;
  font-style: italic; }

strong {
  font-weight: 700; }

em {
  font-style: italic; }

/* For Diff Viewing */
del {
  color: #516066;
  padding: 1px 0; }

ins {
  background: #D4ECB6;
  text-decoration: none;
  color: #73955c;
  padding: 1px 0; }

/* ------------------------------------------
  Styled Content
---------------------------------------------*/
.prose {
  word-wrap: break-word; }

.prose h1 {
  font-size: 26px;
  margin: 15px 0; }

.prose h2 {
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 15px;
  padding: 0; }

.prose h3 {
  font-size: 16px;
  font-weight: 700;
  margin: 10px 0 5px; }

.prose h4,
.prose h5,
.prose h6 {
  font-size: 14px;
  font-weight: 700;
  margin: 10px 0 5px; }

.prose .title {
  font-size: 18px;
  font-weight: 700;
  border-bottom: 1px solid #d4d7d9;
  margin-bottom: 15px;
  padding-bottom: 15px; }

.prose p,
.prose span,
.prose ul,
.prose ol,
.prose li {
  font-size: 16px;
  line-height: 1.5em; }

.prose.small p {
  font-size: 13px;
  line-height: 20px; }

.prose ol,
.prose ul {
  margin: 0 0 15px 30px; }

.prose ol {
  list-style: decimal; }

.prose ul {
  list-style: disc; }

.prose table {
  background-color: transparent;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  margin-bottom: 20px;
  table-layout: fixed; }

.prose th,
.prose td {
  padding: 4px 8px;
  line-height: 20px;
  text-align: left;
  vertical-align: top;
  border-bottom: 1px solid #e0e7eb; }

.prose th {
  font-weight: 700; }

.prose thead th {
  vertical-align: bottom; }

.prose blockquote {
  padding-left: 19px;
  border-left: 1px solid #a8afb2;
  font-style: italic;
  margin-bottom: 20px; }

.prose p {
  margin-bottom: 15px; }

.prose img {
  max-width: 100%;
  display: block;
  margin: 0 auto; }

.prose a {
  color: #90BB74; }

.prose a:hover {
  color: #73955C; }

.prose code {
  background: #f8f8f8;
  font: 13px/1.4em Menlo, monospace;
  -webkit-font-smoothing: subpixel-antialiased;
  padding: 2px 4px;
  margin: 0 2px;
  font-size: 12px;
  -webkit-border-radius: 3px;
  border-radius: 3px; }

.prose pre {
  background: #f8f8f8;
  font: 13px/1.4em Menlo, monospace;
  -webkit-font-smoothing: subpixel-antialiased;
  overflow: auto;
  margin-bottom: 15px;
  padding: 15px; }

.prose pre code {
  border: none;
  margin: 0;
  padding: 0; }

/* ------------------------------------------
  Global Layout
---------------------------------------------*/
.containment,
.limiter {
  position: relative;
  width: 680px;
  margin: 0 auto; }

/* Alterable filename input */
.heading .headerinput {
  background: transparent;
  border: none;
  color: #434c50;
  margin: 0;
  font-size: 20px;
  line-height: 1.5em;
  font-weight: 700;
  padding: 0; }

.heading .details {
  position: relative;
  padding-left: 70px; }

.heading .details h4 {
  position: relative;
  top: 1px;
  color: #d4d7d9; }

.heading .details h2 {
  padding: 0; }

.heading .details .mask {
  background: transparent url(../img/headerinput-mask.png) no-repeat top right;
  position: absolute;
  width: 60px;
  height: 30px;
  bottom: 0;
  right: -30px; }

.heading .headerinput:focus,
.heading .headerinput:hover {
  background-color: #f8f8f8; }

.inner {
  padding: 15px; }

.inner.deep {
  padding: 60px; }

.content {
  position: relative;
  z-index: 500;
  height: 500px;
  height: auto !important;
  min-height: 500px; }

.sidebar {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: -100%;
  width: 280px;
  padding-right: 60px;
  height: 100%;
  overflow: auto;
  overflow-x: hidden;
  -webkit-transition: right 150ms ease-out;
  -moz-transition: right 150ms ease-out;
  -o-transition: right 150ms ease-out;
  transition: right 150ms ease-out; }

.sidebar.open {
  right: 0; }

.col {
  float: left;
  width: 50%; }

.col25 {
  width: 25%; }

/* ------------------------------------------
  Global Styles
---------------------------------------------*/
.application {
  padding: 0 0 60px; }

.dropdown-menu.prose-menu {
  width: 120px;
  position: fixed;
  z-index: 5000;
  top: 0;
  left: 0; }

.prose-menu:hover {
  background-color: #3d494e; }

.loading {
  position: fixed;
  z-index: 7000;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px;
  color: #3d494e; }

.loading .loading-icon {
  background: transparent url("../img/loader@33x33.gif") no-repeat;
  width: 33px;
  height: 33px;
  margin: 0 10px 0 0; }

.loading small {
  display: block;
  margin: 5px 0 0; }

.modal.overlay {
  background: rgba(255, 255, 255, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 8000; }

.modal .modal-content {
  background: #fff;
  border: 1px solid #a8afb2;
  position: absolute;
  z-index: 9000;
  width: 360px;
  top: 25%;
  left: 50%;
  margin: 0 0 0 -180px;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0), 0 0 10px rgba(0, 0, 0, 0.1); }

.modal .modal-heading {
  border-bottom: 1px solid #d4d7d9;
  font-weight: bold; }

.modal .modal-footer {
  border-top: 1px solid #d4d7d9; }

.modal .modal-footer .button {
  margin: 0; }

.sidebar {
  background: #fff;
  border-left: 1px solid #D4D7D9;
  -webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, 0), -10px 0 10px -10px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0), -10px 0 10px -10px rgba(0, 0, 0, 0.1); }

#navigation {
  background: #fff;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 5000;
  width: 60px;
  height: 100%;
  border-left: 1px solid #fff; }

.open + #navigation {
  border-color: #d4d7d9; }

/* By default they are off */
#navigation .nav {
  display: none; }

/* Except for the login link */
#navigation .nav.auth {
  display: block; }

/* Though, If the user is authenticated we dont need to show it */
.authenticated #navigation .auth {
  display: none; }

/* In a file view */
#navigation.file .file {
  display: block; }

/* Visibility of metadata & settings
 * nav item on file pages */
.file .meta {
  display: none; }

.file.meta .meta {
  display: block; }

.file .preview {
  display: none; }

.file.preview .preview {
  display: block; }

.file .settings {
  display: none; }

.file.settings .settings {
  display: block; }

.nav {
  margin: 15px 0 0;
  padding-bottom: 5px; }

.nav.auth {
  position: absolute;
  padding: 0;
  bottom: 0; }

.nav li a {
  background-color: #f8f8f8;
  color: #a8afb2;
  display: block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: 10px;
  position: relative;
  z-index: 10; }

.nav li a:hover {
  background-color: #f0f0f0; }

.nav li a:active {
  -webkit-box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.15); }

.nav li a.active {
  background-color: #526066;
  color: #fff;
  -webkit-box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.15); }

.icon {
  background: transparent url("../img/sprite.png") no-repeat 0 0;
  width: 40px;
  height: 40px;
  display: block;
  text-indent: -999em; }

.icon.landing {
  background-position: -60px -40px;
  width: 110px;
  height: 110px;
  margin: 30px auto 0; }

.icon.landing.error {
  background-position: -170px -40px; }

.icon.small {
  background-position: 0 -80px;
  width: 20px;
  height: 20px; }

.inline {
  display: inline-block;
  margin-right: 8px; }

.icon.inline {
  position: relative;
  top: 5px; }

.icon.branding {
  background-position: 0 -40px; }

.icon.folder-group {
  background-position: -100px -80px; }

/* Listing and Heading Icons */
.icon.round {
  background-position: -240px 0; }

.icon.repo {
  background-position: 0 0; }

.icon.repo.private {
  background-position: -40px 0; }

.icon.file {
  background-position: -120px 0; }

.icon.htmlmixed,
.icon.html {
  background-position: -160px 0; }

.icon.folder {
  background-position: -200px 0; }

.icon.media {
  background-position: -280px 0; }

.icon.repo.owner {
  background-position: -320px 0; }

.icon.repo.owner.private {
  background-position: -360px 0; }

.icon.repo.fork {
  background-position: -320px -40px; }

.icon.repo.fork.private {
  background-position: -360px -40px; }

.icon.gfm,
.icon.md {
  background-position: -80px 0; }

.nav .ico.login,
.ico.login {
  background-color: #90bb74;
  color: #fff; }

.nav .ico.login:hover,
.ico.login:hover {
  background-color: #73955c; }

.published .ico.checkmark,
.ico.checkmark,
.ico.added {
  color: #90bb74; }

.ico.modified {
  color: #2099aa; }

.ico.removed {
  color: #d35252; }

.ico.error {
  color: #db6f6f; }

.ico.renamed {
  color: #bb9f1a; }

.ico.private {
  color: #deb400; }

.ico {
  font-family: 'Prose';
  font-size: 22px; }

.ico.small {
  font-size: 15px; }

.ico.added:before {
  content: "\f100"; }

.ico.back:before {
  content: "\f101"; }

.ico.cancel:before {
  content: "\f102"; }

.ico.checkmark:before {
  content: "\f103"; }

.ico.close:before {
  content: "\f104"; }

.ico.document:before {
  content: "\f105"; }

.ico.error:before {
  content: "\f106"; }

.ico.eye:before {
  content: "\f107"; }

.ico.folder:before {
  content: "\f108"; }

.ico.html:before {
  content: "\f109"; }

.ico.italic:before {
  content: "\f10a"; }

.ico.link:before {
  content: "\f10b"; }

.ico.list:before {
  content: "\f10c"; }

.ico.markdown:before {
  content: "\f10d"; }

.ico.media:before {
  content: "\f10e"; }

.ico.menu:before {
  content: "\f10f"; }

.ico.metadata:before {
  content: "\f110"; }

.ico.modified:before {
  content: "\f111"; }

.ico.new-file:before {
  content: "\f112"; }

.ico.numbered-list:before {
  content: "\f113"; }

.ico.pencil:before {
  content: "\f114"; }

.ico.picture-add:before {
  content: "\f115"; }

.ico.picture:before {
  content: "\f116"; }

.ico.private:before {
  content: "\f117"; }

.ico.question:before {
  content: "\f118"; }

.ico.quote:before {
  content: "\f119"; }

.ico.removed:before {
  content: "\f11a"; }

.ico.renamed:before {
  content: "\f11b"; }

.ico.repos:before {
  content: "\f11c"; }

.ico.rubbish:before {
  content: "\f11d"; }

.ico.save:before {
  content: "\f11e"; }

.ico.saving:before {
  content: "\f11f"; }

.ico.search:before {
  content: "\f120"; }

.ico.sprocket:before {
  content: "\f121"; }

.ico.switch:before {
  content: "\f122"; }

/* Custom Class Names for ico's */
.ico.gfm:before {
  content: '\f10d'; }

.ico.htmlmixed:before {
  content: '\f109'; }

.listing .saving,
.saving .save .status:before {
  content: '\f11f';
  color: #a8afb2; }

.error .save .status:before {
  content: '\f106';
  color: #db6f6f; }

.saved .save .status:before {
  content: '\f103';
  color: #90bb74; }

.ico.picture-add {
  color: #d4d7d9;
  font-size: 46px;
  line-height: 30px;
  margin: 0 10px 15px 0; }

.saving .save .status,
.error .save .status,
.saved .save .status {
  background: #f8f8f8; }

.saving .save.active .status,
.error .save.active .status,
.saved .save.active .status {
  background: #516066; }

.listing .actions .working {
  border-color: #D35252;
  -webkit-box-shadow: 0 0 2px #d35252;
  box-shadow: 0 0 2px #d35252;
  -webkit-animation-duration: 1000ms;
  -moz-animation-duration: 1000ms;
  -o-animation-duration: 1000ms;
  animation-duration: 1000ms;
  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function: linear;
  -o-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  -o-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-name: pulsate;
  -moz-animation-name: pulsate;
  -o-animation-name: pulsate;
  animation-name: pulsate; }

.listing .actions .saving,
.saving .save .status {
  -webkit-animation-duration: 1000ms;
  -moz-animation-duration: 1000ms;
  -o-animation-duration: 1000ms;
  animation-duration: 1000ms;
  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function: linear;
  -o-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  -o-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-name: spin;
  -moz-animation-name: spin;
  -o-animation-name: spin;
  animation-name: spin; }

.saved .save .status {
  -webkit-animation-duration: 500ms;
  -moz-animation-duration: 500ms;
  -o-animation-duration: 500ms;
  animation-duration: 500ms;
  -webkit-animation-timing-function: ease;
  -moz-animation-timing-function: ease;
  -o-animation-timing-function: ease;
  animation-timing-function: ease;
  -webkit-animation-delay: 500ms;
  -moz-animation-delay: 500ms;
  -o-animation-delay: 500ms;
  animation-delay: 500ms;
  -webkit-animation-name: saved;
  -moz-animation-name: saved;
  -o-animation-name: saved;
  animation-name: saved; }

.saved .save .status {
  -webkit-animation-fill-mode: both;
  -moz-animation-fill-mode: both;
  animation-fill-mode: both; }

.avatar {
  background: #f8f8f8;
  position: absolute;
  text-align: center;
  padding: 0;
  z-index: 50;
  width: 55px;
  height: 50px; }

.avatar img {
  background: #f8f8f8;
  margin-top: 5px;
  height: 40px;
  width: 40px; }

.avatar .ico,
.avatar .icon {
  background-color: #f8f8f8;
  line-height: 50px;
  display: block;
  color: #516066; }

.avatar .icon {
  margin: 5px auto; }

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg); }
  100% {
    -webkit-transform: rotate(360deg); } }

@-moz-keyframes spin {
  0% {
    -moz-transform: rotate(0deg); }
  100% {
    -moz-transform: rotate(360deg); } }

@-o-keyframes spin {
  0% {
    -o-transform: rotate(0deg); }
  100% {
    -o-transform: rotate(360deg); } }

@keyframes spin {
  0% {
    transform: rotate(0deg); }
  100% {
    transform: rotate(360deg); } }

@-webkit-keyframes saved {
  0% {
    -webkit-transform: scale(1);
    opacity: 1; }
  100% {
    -webkit-transform: scale(1.5);
    opacity: 0; } }

@-moz-keyframes saved {
  0% {
    -moz-transform: scale(1);
    opacity: 1; }
  100% {
    -moz-transform: scale(1.5);
    opacity: 0; } }

@-o-keyframes saved {
  0% {
    -o-transform: scale(1);
    opacity: 1; }
  100% {
    -o-transform: scale(1.5);
    opacity: 0; } }

@keyframes saved {
  0% {
    transform: scale(1);
    opacity: 1; }
  100% {
    transform: scale(1.5);
    opacity: 0; } }

@-webkit-keyframes pulsate {
  0% {
    -webkit-box-shadow: 0 0 2px #d35252; }
  50% {
    -webkit-box-shadow: 0 0 6px rgba(211, 82, 82, 0.5); }
  100% {
    -webkit-box-shadow: 0 0 2px #d35252; } }

@-moz-keyframes pulsate {
  0% {
    box-shadow: 0 0 2px #d35252; }
  50% {
    box-shadow: 0 0 6px rgba(211, 82, 82, 0.5); }
  100% {
    box-shadow: 0 0 2px #d35252; } }

@-o-keyframes pulsate {
  0% {
    box-shadow: 0 0 2px #d35252; }
  50% {
    box-shadow: 0 0 6px rgba(211, 82, 82, 0.5); }
  100% {
    box-shadow: 0 0 2px #d35252; } }

@keyframes pulsate {
  0% {
    box-shadow: 0 0 2px #d35252; }
  50% {
    box-shadow: 0 0 6px rgba(211, 82, 82, 0.5); }
  100% {
    box-shadow: 0 0 2px #d35252; } }

/* Saving States */
.save .status {
  background: transparent;
  width: 25px;
  height: 25px;
  position: absolute;
  top: 0;
  left: 8px;
  display: block;
  text-align: center;
  -webkit-border-radius: 50%;
  border-radius: 50%; }

.save .status {
  width: 30px;
  height: 30px;
  line-height: 30px;
  font-size: 22px;
  top: 5px;
  left: 5px; }

.save .save .status {
  background: #526066;
  width: 8px;
  height: 8px;
  top: 0;
  right: 0;
  left: auto;
  display: block;
  -webkit-border-radius: 0 4px 0 4px;
  border-radius: 0 4px 0 4px; }

.heading .icon,
.listing .icon {
  background-color: #f8f8f8; }

.listing .icon.small {
  background-color: transparent; }

.details {
  width: 100%;
  margin: 0;
  display: block;
  padding-left: 55px; }

/* Top Branding/Navigation */
.heading {
  padding: 20px 0; }

.details .user,
.details .parent-trail,
.details .parent-trail a {
  font-weight: 400; }

.details .parent-trail span {
  margin-left: 5px; }

.content .item .details .title {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden; }

.content .details a {
  display: block; }

.content .details a strong {
  color: #d4d7d9; }

.breadcrumb {
  position: relative;
  z-index: 20;
  padding: 0 15px;
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; }

.popup {
  background: #202020;
  color: #e0e7eb;
  text-align: left;
  position: absolute;
  z-index: 5000;
  width: auto;
  padding: 5px 8px;
  right: 100%;
  display: none;
  bottom: 0;
  text-indent: 0;
  font: 11px/16px 'OpenSans', sans-serif;
  -webkit-font-smoothing: subpixel-antialiased; }

.popup.arrow-left {
  left: 100%;
  right: auto; }

.popup.arrow-top {
  top: 100%;
  left: 0;
  right: auto;
  bottom: auto; }

.popup.arrow-bottom {
  top: auto;
  bottom: 100%;
  right: -18px; }

.popup.arrow-top:after {
  left: 15px; }

.popup-hover {
  position: relative; }

.popup-hover:hover .popup,
a:hover .popup {
  display: block; }

/* ------------------------------------------
  Unauthenticated Landing & Notifications
---------------------------------------------*/
.disable-interface .sidebar,
.disable-interface .limiter,
.disable-interface .navigation,
.disable-interface .prose-menu {
  display: none; }

#start {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 100; }

.notification,
#start .splash {
  background: #fff;
  text-align: center;
  margin: 45px auto;
  width: 300px;
  border: 1px solid #a8afb2;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0), 0 0 10px rgba(0, 0, 0, 0.1); }

.notification .error {
  font-size: 100%; }

/* ------------------------------------------
  Page Components
---------------------------------------------*/
.topbar-wrapper {
  position: relative;
  width: 100%; }

.markdown .topbar-wrapper {
  min-height: 40px;
  height: auto; }

.topbar {
  margin: 8px 0 15px; }

.edit .topbar {
  margin: 0; }

.markdown .fixed .toolbar {
  border-bottom: 1px solid #d4d7d9;
  -webkit-box-shadow: 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 6px -4px rgba(0, 0, 0, 0.1); }

.topbar .toolbar {
  height: 0; }

.fixed.topbar .toolbar,
.markdown .toolbar {
  min-height: 43px;
  height: auto; }

.topbar .inner > a {
  display: block;
  height: 35px;
  padding: 0 15px;
  line-height: 34px; }

.content-search {
  background: #f8f8f8;
  width: 60%;
  position: relative;
  -webkit-box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.15); }

.new-file {
  margin: 0 15px; }

.content-search input {
  background: transparent;
  border: none;
  padding: 8px 60px 8px 15px;
  font-size: 16px;
  line-height: 26px;
  width: 100%;
  margin: 0; }

.content-search .ico {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center; }

.topbar.fixed {
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
  left: 0; }

.toolbar {
  background: #fff;
  border-color: #fff; }

.markdown .toolbar {
  background: #f0f0f0;
  border-color: #f0f0f0; }

.toolbar .group {
  background: #fff;
  margin: 10px 0 10px 10px;
  display: inline-block;
  float: left; }

.toolbar .group li {
  float: left;
  border-left: 1px solid #d4d7d9; }

.toolbar .group li:first-child {
  border-left: none; }

.toolbar .group li .ico,
.toolbar .group li a {
  -webkit-font-smoothing: subpixel-antialiased;
  position: relative;
  display: inline-block;
  text-align: center; }

.toolbar .group li a {
  height: 25px;
  line-height: 25px;
  width: 40px; }

.toolbar .group li:first-child a {
  -webkit-border-radius: 4px 0 0 4px;
  border-radius: 4px 0 0 4px; }

.toolbar .group li:last-child a {
  -webkit-border-radius: 0 4px 4px 0;
  border-radius: 0 4px 4px 0; }

.toolbar .group li a.round {
  -webkit-border-radius: 4px;
  border-radius: 4px; }

.toolbar .group li a.on,
.toolbar .group li a.active,
.toolbar .group li a:active {
  background: #d4d7d9;
  -webkit-box-shadow: inset 0 2px 2px -1px rgba(0, 0, 0, 0.25), inset 0 15px 30px rgba(255, 255, 255, 0.25);
  box-shadow: inset 0 2px 2px -1px rgba(0, 0, 0, 0.25), inset 0 15px 30px rgba(255, 255, 255, 0.25); }

.toolbar .group li .on:before,
.toolbar .group li .on:after {
  content: '';
  left: 50%;
  border-style: solid;
  position: absolute;
  z-index: 5000; }

.toolbar .group li .on:before {
  top: 28px;
  margin-left: -8px;
  border-width: 0 8px 8px;
  border-color: #9ba4a6 transparent; }

.toolbar .group li .on:after {
  top: 30px;
  margin-left: -6px;
  border-width: 0 6px 6px;
  border-color: #fff transparent; }

.dialog {
  background: #fff;
  position: absolute;
  z-index: 100;
  top: 100%;
  width: 100%;
  margin: 0 auto;
  border: 1px solid #a8afb2;
  height: 240px;
  height: auto !important;
  min-height: 240px;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0), 0 0 10px rgba(0, 0, 0, 0.1);
  -webkit-border-radius: 0 0 4px 4px;
  border-radius: 0 0 4px 4px; }

.dialog .contain {
  margin: 15px 0; }

.dialog a {
  color: #90BB74;
  text-decoration: underline; }

.dialog a.active,
.dialog a:hover {
  color: #73955C; }

.dialog .button,
.dialog .button:hover {
  color: #fff;
  text-decoration: none; }

.dialog > .inner {
  padding: 25px 15px 15px; }

.dialog.no-directory {
  width: 240px;
  left: 45px; }

.fixed .dialog.no-directory {
  left: 100px; }

.dialog.link {
  width: 210px;
  left: 20px; }

.fixed .dialog.link {
  left: 78px; }

.dialog input {
  margin-bottom: 5px; }

.dialog .button {
  -webkit-font-smoothing: antialiased; }

/* Chosen form reset styles to reflect a dark dialog */
.dialog .chzn-container .chzn-drop {
  border-top: 1px solid #868f93;
  -webkit-border-radius: 4px;
  border-radius: 4px; }

.dialog .chzn-container-single .chzn-single {
  background: transparent;
  border: none;
  padding: 0;
  color: #90BB74;
  font-weight: 700 !important;
  text-decoration: underline;
  -webkit-box-shadow: none;
  box-shadow: none; }

.dialog .chzn-container-single .chzn-single span {
  font-weight: 700; }

.dialog .chzn-container .chzn-results {
  color: #3D494E; }

.dialog .chzn-container-single .chzn-single div {
  display: none; }

.dialog .media-listing {
  padding-left: 15px; }

.dialog .media-listing ul {
  height: 155px;
  overflow: auto; }

.chzn-results::-webkit-scrollbar,
.dialog ::-webkit-scrollbar {
  background: #fff;
  width: 15px;
  -webkit-border-radius: 15px;
  border-radius: 15px; }

.chzn-results::-webkit-scrollbar-thumb,
.dialog ::-webkit-scrollbar-thumb {
  background: #d4d7d9;
  border: 5px #fff solid;
  -webkit-border-radius: 15px;
  border-radius: 15px; }

.dialog .media-listing:hover::-webkit-scrollbar-thumb {
  background: #a8afb2; }

.dialog .media-listing li {
  position: relative;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; }

.dialog .media-listing a {
  display: block;
  padding: 5px 4px 4px;
  border-bottom: 1px solid #f0f0f0;
  font-weight: 400;
  color: #3d494e;
  text-decoration: none; }

.dialog .media-listing .mask {
  background: transparent url(../img/headerinput-mask.png) no-repeat top right;
  position: absolute;
  width: 60px;
  height: 30px;
  bottom: 0;
  right: 0; }

.dialog .media-listing .back a {
  background: #F8F8F8;
  border-bottom: 1px solid #D4D7D9; }

.dialog .media-listing .back.ico {
  color: #516066; }

.dialog .upload {
  position: absolute;
  width: 180px;
  opacity: 0.0001;
  cursor: pointer;
  left: -30px; }

.dialog .media-listing .ico {
  color: #a8afb2;
  font-size: 16px; }

.dialog .media-listing .folder {
  color: #deb400; }

.dialog .media-listing a:hover {
  background: #f8f8f8;
  color: #202020; }

/* Help Dialog */
.help .help-content,
.help .sub-menu {
  display: none; }

.help .help-content.active,
.help .sub-menu.active {
  display: block; }

.help .col25 {
  padding: 10px 0;
  height: 240px;
  border-right: 1px solid #d4d7d9; }

.help .col25 a {
  color: #3d494e;
  font-weight: 400;
  text-decoration: none; }

.help .col25 a:hover {
  color: #202020; }

.help .help-content {
  height: 240px;
  overflow: auto; }

.help .col li a {
  display: block;
  border-top: 1px solid #f0f0f0;
  padding: 4px 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden; }

.help .col li:last-child a {
  border-bottom: 1px solid #f0f0f0; }

.help .col li a:hover,
.help .col li a.active {
  background-color: #f8f8f8; }

.help .col li a.active {
  font-weight: 700; }

.menu li {
  float: left;
  margin-right: 15px; }

.listing .actions {
  margin-left: 15px; }

.listing .actions a {
  background: #f8f8f8;
  display: block;
  border: 1px solid #a8afb2;
  padding: 0 8px;
  font-weight: 400;
  margin: 0 -1px -1px;
  height: 30px;
  line-height: 28px;
  float: left; }

.listing .actions a:hover,
.listing .actions a:active {
  position: relative;
  border-color: #516066; }

.listing li {
  position: relative; }

.listing li:first-child {
  border-top: 1px solid #d4d7d9; }

.listing .listing-icon {
  position: absolute;
  left: 15px;
  top: 15px; }

.sidebar .listing li a {
  display: block;
  padding: 5px 15px;
  border-bottom: 1px solid #f0f0f0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 400; }

.sidebar .listing li:first-child a {
  border-color: #f0f0f0; }

.listing .item.active,
.sidebar .listing li a.active,
.sidebar .listing li a:hover {
  background-color: #f8f8f8;
  color: #3d494e; }

.listing .item.active .round.icon {
  background-color: #fff; }

.content .listing .directory > a,
.content .listing > li {
  display: block;
  padding: 12px 15px;
  border-bottom: 1px solid #f0f0f0;
  height: 70px;
  height: auto !important;
  min-height: 70px; }

.content .listing .directory {
  border: none;
  padding: 0; }

.history .status {
  color: #a8afb2;
  font-style: italic; }

.listing .overlay {
  background: #fff;
  position: absolute;
  top: -1px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  padding: 5px 15px 3px;
  border-top: 1px solid #d4d7d9;
  border-bottom: 1px solid #d4d7d9;
  opacity: 0;
  -webkit-transition: opacity 150ms;
  -moz-transition: opacity 150ms;
  -o-transition: opacity 150ms;
  transition: opacity 150ms; }

.listing a:hover .overlay {
  opacity: 1; }

.prose .fat-list {
  list-style: none;
  padding: 0;
  margin: 0 0 30px;
  border: 1px solid #d4d7d9; }

.fat-list li a {
  padding: 8px 15px;
  color: #444;
  border-bottom: 1px solid #d4d7d9;
  display: block; }

.fat-list li:first-child a {
  -webkit-border-radius: 4px 4px 0 0;
  border-radius: 4px 4px 0 0; }

.fat-list li:last-child a {
  border-bottom: none;
  -webkit-border-radius: 0 0 4px 4px;
  border-radius: 0 0 4px 4px; }

.fat-list li a.active,
.fat-list li a:hover {
  background-color: #f8f8f8;
  color: #444; }

.dropdown-menu {
  position: relative; }

.application .dropdown {
  -webkit-box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); }

.dropdown {
  background-color: #3d494e;
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1000;
  padding: 0 0 15px;
  width: 120px;
  display: none; }

.dropdown li {
  display: block; }

.dropdown li.divider {
  border-bottom: 1px solid #202020;
  margin: 10px 0; }

.dropdown li.authenticated {
  display: none; }

.authenticated .dropdown li.authenticated {
  display: block; }

.dropdown > li > a {
  background: transparent;
  color: #e0e7eb;
  font-weight: 400;
  display: block;
  padding: 4px 15px;
  float: none;
  clear: both;
  line-height: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  -webkit-font-smoothing: subpixel-antialiased; }

.dropdown a.active,
.dropdown > li > a:hover,
.dropdown > li > a:focus {
  background-color: #516066;
  text-decoration: none; }

.dropdown-menu:hover {
  *z-index: 1000; }

.dropdown-menu:hover .dropdown {
  display: block; }

.toggle-hide select {
  display: none; }

.toggle-hide.show select {
  display: block; }

.toggle-hide a {
  padding: 5px 0;
  display: block; }

/* ------------------------------------------
  File /:filename
---------------------------------------------*/
.publish-flag, .draft-to-post {
  color: #a8afb2;
  height: 45px;
  line-height: 45px;
  padding: 0 15px;
  float: right; }

.publish-flag .ico, .draft-to-post .ico {
  margin-left: 5px;
  color: #d4d7d9; }

.publish-flag:hover, .draft-to-post:hover {
  background: #f8f8f8;
  color: #a8afb2; }

.post .view {
  display: none; }

.post .view.active {
  display: block; }

.post .view .code {
  padding: 15px 0; }

.edit .drop-mask {
  background: rgba(255, 255, 255, 0.25);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5000;
  display: none; }

.drag-over .drop-mask {
  display: block; }

.drag-over .ico.picture-add {
  color: #90bb74; }

.post .view.diff pre {
  background: transparent;
  font-family: Menlo, monospace;
  font-size: 13px;
  line-height: 1.4em;
  -webkit-font-smoothing: subpixel-antialiased;
  padding: 0; }

.post .markdown .view.diff pre {
  color: #a8afb2;
  font-size: 14px;
  line-height: 1.75em; }

.view.diff .diff-content {
  background: #f8f8f8; }

.post .view.meta {
  background: #f0f0f0;
  margin: 0 auto; }

.post .view.diff pre {
  word-wrap: break-word;
  white-space: pre-wrap; }

.meta .chzn-container-single .chzn-single,
.meta .chzn-container-multi .chzn-choices,
.meta input {
  border: none;
  -webkit-box-shadow: none;
  box-shadow: none; }

.meta .chzn-container-single .chzn-single {
  height: 30px; }

.meta .inner {
  background: #fff; }

.meta .finish {
  -webkit-border-radius: 0 0 4px 4px;
  border-radius: 0 0 4px 4px; }

.meta .form {
  padding: 15px 15px 30px; }

.meta .form-item {
  padding: 8px 15px 0; }

.meta .form-item.link {
  margin: 15px 0 0;
  padding: 15px 15px 0; }

.form-item button[value='true'] {
  background-color: #d4d7d9;
  color: #3D494E; }

.form-item button[value='true']:hover {
  background-color: #a8afb2; }

.form-item button[value='false'] {
  background-color: #90bb74; }

.form-item button[value='false']:hover {
  background-color: #73955c; }

.meta .create {
  position: relative;
  margin: 5px 0 0;
  width: 90%; }

.meta .create input {
  padding-right: 135px; }

.meta .create .button {
  position: absolute;
  top: 2px;
  right: 0;
  padding: 0 15px;
  margin: 0;
  height: 30px;
  line-height: 30px;
  max-width: 120px;
  -webkit-border-radius: 0 4px 4px 0;
  border-radius: 0 4px 4px 0; }

/* Sidebar content on the file page */
.sidebar #save,
.sidebar #settings {
  display: none; }

.sidebar[data-sidebar='save'] #save,
.sidebar[data-sidebar='settings'] #settings {
  display: block; }

.sidebar .commit {
  position: relative;
  bottom: -4px; }

.sidebar .commit .cancel {
  position: absolute;
  z-index: 10;
  top: 5px;
  right: 5px;
  display: block; }

.cancel:hover {
  color: #DB6F6F; }

.sidebar .commit textarea {
  padding-right: 25px;
  margin: 8px 0 -2px;
  display: block;
  position: relative;
  z-index: 1;
  height: 115px;
  resize: none;
  -webkit-border-radius: 4px 4px 0 0;
  border-radius: 4px 4px 0 0; }

/* ------------------------------------------
  Chosen Plugin for fancy selects
---------------------------------------------*/
.chzn-container.chzn-container-multi .chzn-results li,
.chzn-container,
.chzn-drop {
  /*TODO Fix this upstream*/
  width: 100% !important; }

.chzn-container .chzn-results li,
.search-field input,
.chzn-search input {
  width: 95% !important; }

.chzn-container {
  font-size: 13px;
  line-height: 18px;
  position: relative;
  display: block; }

.chzn-container .chzn-drop {
  background: #fff;
  border: 1px solid #adb4b6 !important;
  border-top: 0;
  position: absolute;
  z-index: 1010;
  top: 29px;
  left: 0;
  margin: 1px 0;
  -webkit-box-shadow: 0 4px 5px rgba(0, 0, 0, 0.15);
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.15); }

.chzn-container-single .chzn-single {
  background-color: #fff;
  border: 1px solid #D4D7D9;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  height: 33px;
  line-height: 30px;
  padding: 0 0 0 8px;
  color: #3d494e;
  text-decoration: none;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  -webkit-border-radius: 4px;
  border-radius: 4px; }

.chzn-container-single .chzn-single span {
  margin-right: 20px;
  display: block;
  overflow: hidden;
  font-weight: normal;
  white-space: nowrap;
  -ms-text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis; }

.chzn-container-single .chzn-single abbr {
  background: url("../img/sprite.png") -42px 1px no-repeat;
  display: block;
  position: absolute;
  right: 26px;
  top: 6px;
  width: 12px;
  height: 12px;
  text-indent: -999em; }

.chzn-container-single .chzn-single abbr:hover {
  background-position: -42px -10px; }

.chzn-container-single.chzn-disabled .chzn-single abbr:hover {
  background-position: -42px -10px; }

.chzn-container-single .chzn-single div {
  position: absolute;
  right: 0;
  top: 0;
  display: block;
  height: 100%;
  width: 18px; }

.chzn-container-single .chzn-single div b {
  background: transparent url("../img/sprite.png") no-repeat -20px -75px;
  display: block;
  width: 20px;
  height: 20px;
  position: relative;
  right: 5px; }

.chzn-container-single .chzn-search {
  padding: 3px 4px;
  position: relative;
  margin: 8px 0;
  white-space: nowrap;
  z-index: 1010; }

.chzn-container-single .chzn-search input {
  margin: 0 4px;
  padding: 4px 20px 4px 4px;
  border: 1px solid #868f93;
  width: 20px;
  height: 30px; }

.chzn-container-single .chzn-drop {
  -webkit-border-radius: 0 0 3px 3px;
  border-radius: 0 0 3px 3px;
  -webkit-background-clip: padding-box;
  background-clip: padding-box; }

.chzn-container-single-nosearch .chzn-search input {
  position: absolute;
  left: -9000px; }

.chzn-container-multi .chzn-choices {
  background-color: #fff;
  border: 1px solid #D4D7D9;
  margin: 0;
  padding: 0;
  cursor: text;
  overflow: hidden;
  height: auto !important;
  height: 1%;
  position: relative;
  -webkit-border-radius: 2px;
  border-radius: 2px; }

.chzn-container-multi .chzn-choices li {
  float: left;
  list-style: none; }

.chzn-container-multi .chzn-choices .search-field {
  white-space: nowrap;
  margin: 0;
  padding: 0; }

.chzn-container-multi .chzn-choices .search-field input {
  border: none;
  height: 15px;
  padding: 5px 8px;
  color: #666;
  height: 30px;
  -webkit-box-shadow: none;
  box-shadow: none; }

.chzn-container-multi .chzn-choices .search-field .default {
  color: #999;
  font-style: italic; }

.chzn-container-multi .chzn-choices .search-choice {
  background: #98c177;
  color: #fff;
  width: 48%;
  padding: 4px 20px 5px 8px;
  margin: 3px;
  position: relative;
  cursor: default;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  -webkit-border-radius: 3px;
  border-radius: 3px; }

.chzn-container-multi .chzn-choices .search-choice.search-choice-disabled {
  background-color: #d4d7d9;
  color: #516066;
  padding-right: 5px; }

.chzn-container-multi .chzn-choices .search-choice-focus {
  background-color: #DB6F6F; }

.chzn-container-multi .chzn-choices .search-choice .search-choice-close {
  background: transparent url("../img/sprite.png") no-repeat -40px -80px;
  display: block;
  position: absolute;
  right: 0;
  top: 50%;
  width: 20px;
  height: 20px;
  text-indent: -999em;
  margin: -10px 0 0 0; }

.chzn-container .chzn-results {
  margin: 0 0 10px 5px;
  max-height: 240px;
  padding: 0 0 0 4px;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch; }

.chzn-container-multi .chzn-results {
  padding: 0;
  margin: 0; }

.chzn-container .chzn-results li {
  display: none;
  line-height: 15px;
  padding: 8px 6px;
  margin: 0;
  list-style: none; }

.chzn-container .chzn-results .active-result {
  cursor: pointer;
  display: list-item; }

.chzn-container .chzn-results .highlighted {
  background-color: #f8f8f8;
  -webkit-font-smoothing: subpixel-antialiased; }

.chzn-container .chzn-results li em {
  background: #f3e3a2;
  font-style: normal; }

.chzn-container .chzn-results .highlighted em {
  background: transparent; }

.chzn-container .chzn-results .no-results {
  background: #eff3f5;
  display: list-item; }

.chzn-container .chzn-results .group-result {
  cursor: default;
  color: #a8afb2;
  font-weight: bold; }

.chzn-container .chzn-results .group-option {
  padding-left: 15px; }

.chzn-container-multi .chzn-drop .result-selected {
  display: none; }

.chzn-container .chzn-results-scroll {
  background: #fff;
  margin: 0 4px;
  position: absolute;
  text-align: center;
  width: 321px;
  /* This should by dynamic with js */
  z-index: 1; }

.chzn-container .chzn-results-scroll span {
  display: inline-block;
  height: 17px;
  text-indent: -999em;
  width: 9px; }

.chzn-container .chzn-results-scroll-down {
  bottom: 0; }

.chzn-container .chzn-results-scroll-down span {
  background: url("../img/sprite.png") no-repeat 0 -75px; }

.chzn-container-active .chzn-single-with-drop {
  border: 1px solid #a8afb2;
  -webkit-box-shadow: inset 0 1px 0 #fff;
  box-shadow: inset 0 1px 0 #fff;
  -webkit-border-bottom-left-radius: 0;
  -webkit-border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0; }

.chzn-container-active .chzn-single-with-drop div {
  background: transparent;
  border-left: none; }

.chzn-container-active .chzn-choices {
  border: 1px solid #868f93; }

.chzn-container-active .chzn-choices .search-field input {
  color: #202020 !important; }

.chzn-disabled {
  cursor: default;
  opacity: 0.5 !important; }

.chzn-disabled .chzn-single {
  cursor: default; }

.chzn-disabled .chzn-choices .search-choice .search-choice-close {
  cursor: default; }

/* ------------------------------------------
  Class Helpers
---------------------------------------------*/
.clearfix:after {
  content: '.';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden; }

* html .clearfix {
  height: 1%; }

/* IE6 */
*:first-child + html .clearfix {
  min-height: 1%; }

/* IE7 */
.fl {
  float: left; }

.fr {
  float: right; }

.hidden {
  display: none; }

.centered {
  text-align: center; }

.scrolling {
  overflow: auto; }

.clipping {
  overflow: hidden; }

.contain {
  position: relative; }

.deemphasize {
  font-weight: normal;
  color: #888; }

.caption {
  display: block;
  margin-top: 8px; }

.round {
  -webkit-border-radius: 4px;
  border-radius: 4px; }

.arrow-top:after,
.arrow-right:after,
.arrow-bottom:after,
.arrow-left:after {
  content: '';
  border-width: 0 5px 5px;
  border-style: solid;
  position: absolute;
  border-color: #202020 transparent; }

.arrow-top:after {
  top: -5px; }

.arrow-bottom:after {
  border-width: 5px 5px 0;
  bottom: -5px;
  left: 50%;
  margin-left: -5px; }

.arrow-left:after,
.arrow-right:after {
  border-color: transparent #202020;
  bottom: 50%;
  margin-bottom: -5px; }

.arrow-left:after {
  border-width: 5px 5px 5px 0;
  left: -5px; }

.arrow-right:after {
  border-width: 5px 0 5px 5px;
  right: -5px; }

/* BASICS */
.CodeMirror {
  /* Set height, width, borders, and global font properties here */
  font-family: monospace;
  height: 300px;
  color: black;
  direction: ltr; }

/* PADDING */
.CodeMirror-lines {
  padding: 4px 0;
  /* Vertical padding around content */ }

.CodeMirror pre.CodeMirror-line,
.CodeMirror pre.CodeMirror-line-like {
  padding: 0 4px;
  /* Horizontal padding of content */ }

.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {
  background-color: white;
  /* The little square between H and V scrollbars */ }

/* GUTTER */
.CodeMirror-gutters {
  border-right: 1px solid #ddd;
  background-color: #f7f7f7;
  white-space: nowrap; }

.CodeMirror-linenumber {
  padding: 0 3px 0 5px;
  min-width: 20px;
  text-align: right;
  color: #999;
  white-space: nowrap; }

.CodeMirror-guttermarker {
  color: black; }

.CodeMirror-guttermarker-subtle {
  color: #999; }

/* CURSOR */
.CodeMirror-cursor {
  border-left: 1px solid black;
  border-right: none;
  width: 0; }

/* Shown when moving in bi-directional text */
.CodeMirror div.CodeMirror-secondarycursor {
  border-left: 1px solid silver; }

.cm-fat-cursor .CodeMirror-cursor {
  width: auto;
  border: 0 !important;
  background: #7e7; }

.cm-fat-cursor div.CodeMirror-cursors {
  z-index: 1; }

.cm-fat-cursor-mark {
  background-color: rgba(20, 255, 20, 0.5);
  -webkit-animation: blink 1.06s steps(1) infinite;
  -moz-animation: blink 1.06s steps(1) infinite;
  animation: blink 1.06s steps(1) infinite; }

.cm-animate-fat-cursor {
  width: auto;
  border: 0;
  -webkit-animation: blink 1.06s steps(1) infinite;
  -moz-animation: blink 1.06s steps(1) infinite;
  animation: blink 1.06s steps(1) infinite;
  background-color: #7e7; }

@-moz-keyframes blink {
  0% { }
  50% {
    background-color: transparent; }
  100% { } }

@-webkit-keyframes blink {
  0% { }
  50% {
    background-color: transparent; }
  100% { } }

@keyframes blink {
  0% { }
  50% {
    background-color: transparent; }
  100% { } }

/* Can style cursor different in overwrite (non-insert) mode */
.cm-tab {
  display: inline-block;
  text-decoration: inherit; }

.CodeMirror-rulers {
  position: absolute;
  left: 0;
  right: 0;
  top: -50px;
  bottom: 0;
  overflow: hidden; }

.CodeMirror-ruler {
  border-left: 1px solid #ccc;
  top: 0;
  bottom: 0;
  position: absolute; }

/* DEFAULT THEME */
.cm-s-default .cm-header {
  color: blue; }

.cm-s-default .cm-quote {
  color: #090; }

.cm-negative {
  color: #d44; }

.cm-positive {
  color: #292; }

.cm-header, .cm-strong {
  font-weight: bold; }

.cm-em {
  font-style: italic; }

.cm-link {
  text-decoration: underline; }

.cm-strikethrough {
  text-decoration: line-through; }

.cm-s-default .cm-keyword {
  color: #708; }

.cm-s-default .cm-atom {
  color: #219; }

.cm-s-default .cm-number {
  color: #164; }

.cm-s-default .cm-def {
  color: #00f; }

.cm-s-default .cm-variable-2 {
  color: #05a; }

.cm-s-default .cm-variable-3, .cm-s-default .cm-type {
  color: #085; }

.cm-s-default .cm-comment {
  color: #a50; }

.cm-s-default .cm-string {
  color: #a11; }

.cm-s-default .cm-string-2 {
  color: #f50; }

.cm-s-default .cm-meta {
  color: #555; }

.cm-s-default .cm-qualifier {
  color: #555; }

.cm-s-default .cm-builtin {
  color: #30a; }

.cm-s-default .cm-bracket {
  color: #997; }

.cm-s-default .cm-tag {
  color: #170; }

.cm-s-default .cm-attribute {
  color: #00c; }

.cm-s-default .cm-hr {
  color: #999; }

.cm-s-default .cm-link {
  color: #00c; }

.cm-s-default .cm-error {
  color: #f00; }

.cm-invalidchar {
  color: #f00; }

.CodeMirror-composing {
  border-bottom: 2px solid; }

/* Default styles for common addons */
div.CodeMirror span.CodeMirror-matchingbracket {
  color: #0b0; }

div.CodeMirror span.CodeMirror-nonmatchingbracket {
  color: #a22; }

.CodeMirror-matchingtag {
  background: rgba(255, 150, 0, 0.3); }

.CodeMirror-activeline-background {
  background: #e8f2ff; }

/* STOP */
/* The rest of this file contains styles related to the mechanics of
   the editor. You probably shouldn't touch them. */
.CodeMirror {
  position: relative;
  overflow: hidden;
  background: white; }

.CodeMirror-scroll {
  overflow: scroll !important;
  /* Things will break if this is overridden */
  /* 50px is the magic margin used to hide the element's real scrollbars */
  /* See overflow: hidden in .CodeMirror */
  margin-bottom: -50px;
  margin-right: -50px;
  padding-bottom: 50px;
  height: 100%;
  outline: none;
  /* Prevent dragging from highlighting the element */
  position: relative; }

.CodeMirror-sizer {
  position: relative;
  border-right: 50px solid transparent; }

/* The fake, visible scrollbars. Used to force redraw during scrolling
   before actual scrolling happens, thus preventing shaking and
   flickering artifacts. */
.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {
  position: absolute;
  z-index: 6;
  display: none; }

.CodeMirror-vscrollbar {
  right: 0;
  top: 0;
  overflow-x: hidden;
  overflow-y: scroll; }

.CodeMirror-hscrollbar {
  bottom: 0;
  left: 0;
  overflow-y: hidden;
  overflow-x: scroll; }

.CodeMirror-scrollbar-filler {
  right: 0;
  bottom: 0; }

.CodeMirror-gutter-filler {
  left: 0;
  bottom: 0; }

.CodeMirror-gutters {
  position: absolute;
  left: 0;
  top: 0;
  min-height: 100%;
  z-index: 3; }

.CodeMirror-gutter {
  white-space: normal;
  height: 100%;
  display: inline-block;
  vertical-align: top;
  margin-bottom: -50px; }

.CodeMirror-gutter-wrapper {
  position: absolute;
  z-index: 4;
  background: none !important;
  border: none !important; }

.CodeMirror-gutter-background {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 4; }

.CodeMirror-gutter-elt {
  position: absolute;
  cursor: default;
  z-index: 4; }

.CodeMirror-gutter-wrapper ::selection {
  background-color: transparent; }

.CodeMirror-gutter-wrapper ::-moz-selection {
  background-color: transparent; }

.CodeMirror-lines {
  cursor: text;
  min-height: 1px;
  /* prevents collapsing before first draw */ }

.CodeMirror pre.CodeMirror-line,
.CodeMirror pre.CodeMirror-line-like {
  /* Reset some styles that the rest of the page might have set */
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  border-radius: 0;
  border-width: 0;
  background: transparent;
  font-family: inherit;
  font-size: inherit;
  margin: 0;
  white-space: pre;
  word-wrap: normal;
  line-height: inherit;
  color: inherit;
  z-index: 2;
  position: relative;
  overflow: visible;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-variant-ligatures: contextual;
  font-variant-ligatures: contextual; }

.CodeMirror-wrap pre.CodeMirror-line,
.CodeMirror-wrap pre.CodeMirror-line-like {
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: normal; }

.CodeMirror-linebackground {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 0; }

.CodeMirror-linewidget {
  position: relative;
  z-index: 2;
  padding: 0.1px;
  /* Force widget margins to stay inside of the container */ }

.CodeMirror-rtl pre {
  direction: rtl; }

.CodeMirror-code {
  outline: none; }

/* Force content-box sizing for the elements where we expect it */
.CodeMirror-scroll,
.CodeMirror-sizer,
.CodeMirror-gutter,
.CodeMirror-gutters,
.CodeMirror-linenumber {
  -moz-box-sizing: content-box;
  box-sizing: content-box; }

.CodeMirror-measure {
  position: absolute;
  width: 100%;
  height: 0;
  overflow: hidden;
  visibility: hidden; }

.CodeMirror-cursor {
  position: absolute;
  pointer-events: none; }

.CodeMirror-measure pre {
  position: static; }

div.CodeMirror-cursors {
  visibility: hidden;
  position: relative;
  z-index: 3; }

div.CodeMirror-dragcursors {
  visibility: visible; }

.CodeMirror-focused div.CodeMirror-cursors {
  visibility: visible; }

.CodeMirror-selected {
  background: #d9d9d9; }

.CodeMirror-focused .CodeMirror-selected {
  background: #d7d4f0; }

.CodeMirror-crosshair {
  cursor: crosshair; }

.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection {
  background: #d7d4f0; }

.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection {
  background: #d7d4f0; }

.cm-searching {
  background-color: #ffa;
  background-color: rgba(255, 255, 0, 0.4); }

/* Used to force a border model for a node */
.cm-force-border {
  padding-right: .1px; }

@media print {
  /* Hide the cursor when printing */
  .CodeMirror div.CodeMirror-cursors {
    visibility: hidden; } }

/* See issue #2901 */
.cm-tab-wrap-hack:after {
  content: ''; }

/* Help users use markselection to safely style text background */
span.CodeMirror-selectedtext {
  background: none; }

.CodeMirror {
  font-family: Menlo, monospace;
  font-size: 13px;
  line-height: 1.4em;
  -webkit-font-smoothing: subpixel-antialiased;
  height: auto; }

.code .CodeMirror-scroll {
  min-height: 360px;
  height: auto; }

.markdown .CodeMirror {
  font-size: 14px; }

.CodeMirror-scroll {
  /* Set scrolling behaviour here */
  overflow: auto;
  height: auto; }

.CodeMirror-scrollbar-filler {
  /* The little square between H and V scrollbars */
  background-color: white; }

.CodeMirror-gutters {
  box-sizing: border-box;
  min-height: inherit;
  height: 100%;
  padding-bottom: 30px;
  background-color: transparent;
  border-right: none; }

.CodeMirror-linenumber {
  padding: 0 3px 0 5px;
  min-width: 20px;
  text-align: right;
  color: #d4d7d9; }

.cm-s-prose-bright .CodeMirror-gutter {
  border-right: 1px solid #eff3f5;
  padding-right: 5px;
  margin-right: 15px;
  min-width: 2.5em;
  padding-bottom: 30px; }

.CodeMirror div.CodeMirror-cursor {
  border-left: 1px solid #3D494E;
  z-index: 3; }

.cm-s-prose-bright .CodeMirror-cursor {
  border-right: 2px solid #667880; }

.cm-s-prose-bright .CodeMirror-lines {
  margin: 0; }

/* Shown when moving in bi-directional text */
.CodeMirror div.CodeMirror-secondarycursor {
  border-left: 1px solid #e0e7eb; }

/* Prose Bright Theme
 -------------------- */
/* Dark Grey */
.cm-s-prose-bright {
  color: #3D494E; }

.cm-s-prose-bright span.cm-header {
  color: #3D494E;
  font-weight: bold; }

.cm-s-prose-bright span.cm-variable-2 {
  color: #3D494E; }

/* Medium Grey */
.cm-s-prose-bright span.cm-meta {
  color: #516066; }

.cm-s-prose-bright span.cm-hr {
  color: #516066; }

/* Lighter Grey */
.cm-s-prose-bright span.cm-comment {
  color: #868f93; }

.cm-s-prose-bright span.cm-qualifier {
  color: #868f93; }

/* Dark Blue/Green */
.cm-s-prose-bright span.cm-number {
  color: #197987; }

.cm-s-prose-bright span.cm-variable {
  color: #197987; }

.cm-s-prose-bright span.cm-builtin {
  color: #197987; }

.cm-s-prose-bright span.cm-link {
  color: #197987;
  text-decoration: underline; }

.cm-s-prose-bright span.cm-tag {
  color: #197987; }

/* Medium Blue/Green */
.cm-s-prose-bright span.cm-string {
  color: #48abb9; }

.cm-s-prose-bright span.cm-string-2 {
  color: #48abb9; }

.cm-s-prose-bright span.cm-quote {
  color: #48abb9; }

.cm-s-prose-bright span.cm-atom {
  color: #48abb9; }

/* Light Blue/Green */
/*.cm-s-prose-bright .CodeMirror-selected { background:#90d5df; }*/
/* Turtle Green */
.cm-s-prose-bright span.cm-property {
  color: #82a367; }

.cm-s-prose-bright span.cm-operator {
  color: #82a367; }

.cm-s-prose-bright span.cm-variable-3 {
  color: #82a367; }

/* Light Turtle Green */
.cm-s-prose-bright span.cm-attribute {
  color: #90bb74; }

.cm-s-prose-bright span.cm-def {
  color: #90bb74; }

/* Brick */
.cm-s-prose-bright span.cm-keyword {
  color: #ec6c45; }

.cm-s-prose-bright span.cm-bracket {
  color: #ec6c45; }

/* Darker Brick */
.cm-s-prose-bright span.cm-error {
  color: #e45346; }

.cm-s-prose-bright span.cm-em {
  font-style: italic; }

.cm-s-prose-bright span.cm-strong {
  font-weight: bold; }

.CodeMirror {
  color: #516066; }

/* ------------------------------------------
  Media Queries
---------------------------------------------*/
/* Screen sizes > 1241px --------------------- */
@media all and (min-width: 1401px) {
  .containment,
  .limiter {
    width: 100%;
    min-width: 680px;
    max-width: 840px; } }

/* Screen sizes < 1200px --------------------- */
@media all and (max-width: 1400px) {
  .icon.branding {
    background-position: 0 -115px; }
  .loading {
    background: white;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid #D4D7D9;
    top: 50%;
    left: 50%;
    width: 180px;
    margin: -120px 0 0 -90px;
    padding: 30px 0;
    text-align: center;
    font-size: 16px;
    line-height: 30px;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0), 0 0 10px rgba(0, 0, 0, 0.1); }
  .loading .loading-icon {
    background-image: url("../img/loader@55x55.gif");
    margin: 0 auto 5px;
    width: 55px;
    height: 55px; }
  /* Display the Prose Menu in the footer */
  .dropdown-menu.prose-menu {
    width: 100%;
    position: static;
    border-top: 1px solid #d4d7d9; }
  .prose-menu:hover {
    background-color: transparent; }
  .prose-menu .branding {
    float: left; }
  .prose-menu .dropdown {
    background: transparent;
    display: block;
    position: static;
    width: auto;
    float: left;
    padding: 0 0 8px; }
  .authenticated .prose-menu .dropdown .divider,
  .prose-menu .dropdown .divider {
    display: none; }
  .dropdown-menu .dropdown a {
    color: inherit;
    padding: 0 0 0 8px; }
  .dropdown-menu .dropdown a:hover {
    background: transparent; }
  .heading {
    padding: 20px 15px; }
  .content-search {
    margin: 8px 15px 15px; }
  .containment {
    width: 100%;
    margin: 0; }
  .limiter {
    width: 70%;
    margin: 0; }
  .fixed .containment {
    padding-right: 60px; }
  .open .fixed .containment,
  .open .limiter {
    width: 70%;
    margin: 0;
    padding: 0; }
  .sidebar {
    width: 30%; }
  .meta .finish {
    -webkit-border-radius: 4px;
    border-radius: 4px; }
  /* Some right alignment adjustments
  * to account for the fixed vertical menu */
  .fixed .col-last {
    padding-right: 60px; }
  .post .view {
    padding: 15px; } }

/* Screen sizes < 800px --------------------- */
@media all and (max-width: 800px) {
  .listing .actions {
    display: none !important; }
  .toolbar .group li .on:before,
  .toolbar .group li .on:after {
    display: none !important; } }

/* iPad (portrait and landscape) ----------- */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .post .markdown .view.diff pre,
  .markdown .CodeMirror,
  .code .CodeMirror-scroll {
    font-size: 16px;
    line-height: 1.9em; }
  /* Disable fixed positioning of the topbar as its wacky for touch */
  .topbar.fixed {
    position: relative; }
  .fixed .containment,
  .open .fixed .containment {
    width: 100%; }
  .details .mask,
  .popup {
    /* tip messages served on mouse hover */
    display: none !important; }
  #navigation {
    border-color: #D4D7D9; } }

/* iPad (portrait) ----------- */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  .open .fixed .containment,
  .open .limiter {
    width: 60%; }
  .sidebar {
    width: 40%; } }

/* Smartphone (portrait and landscape) ----------- */
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  html, body {
    -webkit-text-size-adjust: none;
    text-size-adjust: none; }
  .details .mask,
  .edit .topbar-wrapper,
  .popup {
    /* tip messages served on mouse hover */
    display: none !important; }
  #navigation .nav.mobile {
    display: block; }
  .post .view .code,
  .editor {
    padding: 0; }
  /* Disable fixed positioning of the topbar as its wacky for touch */
  .topbar.fixed {
    position: relative; }
  .inner.deep {
    padding: 15px; }
  .containment,
  .limiter,
  .open .limiter {
    width: 100%;
    padding-right: 60px; }
  .fixed .containment,
  .open .fixed .containment {
    width: 100%; }
  .sidebar {
    width: 100%;
    height: 100%;
    border: none;
    -webkit-box-shadow: none;
    box-shadow: none; }
  #navigation {
    border-color: #D4D7D9; }
  .sidebar.open {
    right: -100%; }
  .sidebar.open.mobile {
    right: 0; }
  .sidebar .listing li a {
    font-size: 16px;
    font-weight: 700;
    padding: 12px 15px; }
  .listing .overlay {
    padding: 12px 15px; }
  .avatar {
    width: 40px;
    height: 40px; }
  .avatar .ico,
  .avatar .icon {
    line-height: 40px; }
  .heading .details {
    padding-left: 55px; }
  .file .save .status {
    top: 5px;
    left: 5px; }
  .save .save .status {
    top: 0;
    right: 0;
    left: auto; }
  .post .view.meta {
    width: 80%; }
  .meta .form-item,
  .meta .form {
    padding: 0; } }

/* Retina Rules ----------------------- */
@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2) {
  .icon,
  .chzn-container-single .chzn-single abbr,
  .chzn-container-single .chzn-single div b,
  .chzn-container .chzn-results-scroll-down span,
  .chzn-container-multi .chzn-choices .search-choice .search-choice-close {
    background-image: url("../img/sprite@2x.png");
    background-size: 400px 150px; }
  .loading .loading-icon {
    background-image: url("../img/loader@110x110.gif");
    background-size: 55px 55px; } }
