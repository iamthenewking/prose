module.exports = {"app":"<% if (locale.current() === 'he-IL') { %>\r\n  <link rel='stylesheet' href='./style-rtl.css'>\r\n<% } %>\r\n\r\n<div id='loader' class='loader'></div>\r\n<div id='drawer' class='sidebar' <% if (locale.current() === 'he-IL') { %>dir='rtl'<% } %>></div>\r\n<nav id='navigation'></nav>\r\n<div id='main' <% if (locale.current() === 'he-IL') { %>dir='rtl'<% } %>></div>\r\n\r\n<div class='prose-menu dropdown-menu' <% if (locale.current() === 'he-IL') { %>dir='rtl'<% } %>>\r\n  <div class='inner clearfix'>\r\n    \r\n  </div>\r\n</div>\r\n","breadcrumb":"<span class='slash'>/</span>\r\n<a class='path' href='#<%= trail %>/<%= url %>'><%= name %></a>\r\n","chooselanguage":"<h1><%= t('chooselanguage.title') %></h1>\r\n<ul class='fat-list round'>\r\n  <% _(chooseLanguage.languages).each(function(l) { %>\r\n    <li>\r\n    <a href='#' data-code='<%= l.code %>' class='language<% if (l.code === chooseLanguage.active) { %> active<% } %>'>\r\n        <% if (l.code === chooseLanguage.active) { %><span class='ico checkmark fr'></span><% } %>\r\n        <%= l.name %>\r\n        <small>(<%= l.code %>)</small>\r\n      </a>\r\n    </li>\r\n  <% }); %>\r\n</ul>\r\n<p><%= t('chooselanguage.description') %></p>\r\n","dialogs":{"help":"<%\r\n  function formattedClass(str) {\r\n    return str.toLowerCase().replace(/\\s/g, '-').replace('&amp;', '');\r\n  };\r\n%>\r\n\r\n<div class='col col25'>\r\n  <ul class='main-menu'>\r\n    <% _(help).each(function(mainMenu, i) { %>\r\n      <li><a href='#' class='<% if (i === 0) { %>active <% } %>' data-id='<%= formattedClass(mainMenu.menuName) %>'><%= mainMenu.menuName %></a></li>\r\n    <% }); %>\r\n  </ul>\r\n</div>\r\n\r\n<div class='col col25'>\r\n  <% _(help).each(function(mainMenu, index) { %>\r\n  <ul class='sub-menu <%= formattedClass(mainMenu.menuName) %> <% if (index === 0) { %>active<% } %>' data-id='<%= formattedClass(mainMenu.menuName) %>'>\r\n      <% _(mainMenu.content).each(function(subMenu, i) { %>\r\n        <li><a href='#' data-id='<%= formattedClass(subMenu.menuName) %>' class='<% if (index === 0 && i === 0) { %> active<% } %>'><%= subMenu.menuName %></a></li>\r\n      <% }); %>\r\n    </ul>\r\n  <% }); %>\r\n</div>\r\n\r\n<div class='col col-last prose small'>\r\n  <% _(help).each(function(mainMenu, index) { %>\r\n    <% _(mainMenu.content).each(function(d, i) { %>\r\n    <div class='help-content inner help-<%= formattedClass(d.menuName) %><% if (index === 0 && i === 0) { %> active<% } %>'>\r\n      <%= d.data %>\r\n    </div>\r\n    <% }); %>\r\n  <% }); %>\r\n</div>\r\n","link":"<div class='inner'>\r\n  <label><%= t('dialogs.link.title') %></label>\r\n  <input type='text' name='href' placeholder=\"<%= t('dialogs.link.hrefPlaceholder') %>\" />\r\n  <input type='text' name='text' placeholder=\"<%= t('dialogs.link.textPlaceholder') %>\" />\r\n  <input type='text' name='title' placeholder=\"<%= t('dialogs.link.titlePlaceholder') %>\" />\r\n\r\n  <% if (relativeLinks) { %>\r\n    <div class='collapsible'>\r\n      <select data-placeholder=\"<%= t('dialogs.link.insertPlaceholder') %>\" class='chzn-select'>\r\n        <option value></option>\r\n        <% _(relativeLinks).each(function(link) { %>\r\n        <option value='<%= link.href %>,<%= link.text %>'><%= link.text %></option>\r\n        <% }); %>\r\n      </select>\r\n    </div>\r\n  <% } %>\r\n\r\n  <a href='#' class='button round insert' data-type='link'><%= t('dialogs.link.insert') %></a>\r\n</div>\r\n","media":"<div class='inner clearfix'>\r\n\r\n  <div <% if (assetsDirectory) { %>class='col fl'<% } %>>\r\n    <label><%= t('dialogs.media.title') %></label>\r\n\r\n    <% if (writable) { %>\r\n      <div class='contain clearfix'>\r\n        <span class='ico picture-add fl'></span>\r\n        <%= description %>\r\n      </div>\r\n    <% } %>\r\n\r\n    <input type='text' name='url' placeholder=\"<%= t('dialogs.media.hrefPlaceholder')%>\" />\r\n    <input type='text' name='alt' placeholder=\"<%= t('dialogs.media.altPlaceholder')%>\" />\r\n    <a href='#' class='button round insert' data-type='media'><%= t('dialogs.link.insert') %></a>\r\n      <% if (!assetsDirectory) { %>\r\n        <small class='caption deemphasize'><%= t('dialogs.media.help') %></small>\r\n      <% } %>\r\n  </div>\r\n\r\n  <% if (assetsDirectory) { %>\r\n    <div class='col col-last fl media-listing'>\r\n      <label><%= t('dialogs.media.choose') %></label>\r\n      <ul id='media'></ul>\r\n      <small class='caption deemphasize'><%= t('dialogs.media.helpMedia') %></small>\r\n    </div>\r\n  <% } %>\r\n</div>\r\n","mediadirectory":"<% if (type === 'tree') { %>\r\n  <li class='directory'>\r\n    <span class='mask'></span>\r\n    <a class='clearfix item' href='<%= path %>'>\r\n      <span class='ico fl small inline folder'></span>\r\n      <%= name %>\r\n    </a>\r\n  </li>\r\n<% } else { %>\r\n  <li class='asset'>\r\n    <span class='mask'></span>\r\n    <a class='clearfix item' href='<%= path %>' title='<%= path %>'>\r\n      <% if (isMedia) { %>\r\n        <span class='ico fl small inline media'></span>\r\n      <% } else { %>\r\n        <span class='ico fl small inline document'></span>\r\n      <% } %>\r\n      <%= name %>\r\n    </a>\r\n  </li>\r\n<% } %>\r\n"},"drawer":"<div id='orgs'></div>\r\n<div id='branches'></div>\r\n<div id='history'></div>\r\n<div id='drafts'></div>\r\n<div id='save'></div>\r\n<div id='settings'></div>\r\n","file":"<header id='heading' class='heading limiter clearfix'></header>\r\n<div id='modal'></div>\r\n\r\n<div id='post' class='post limiter'>\r\n  <div class='editor views<% if (file.markdown) { %> markdown<% } %>'>\r\n    <div id='diff' class='view prose diff'>\r\n      <h2><%= t('main.file.metaTitle') %><br />\r\n        <span class='deemphasize small'><%= t('main.file.metaDescription') %></span>\r\n      </h2>\r\n      <div class='diff-content inner'></div>\r\n    </div>\r\n    <div id='meta' class='view round meta'></div>\r\n    <div id='edit' class='view active edit'>\r\n      <div class='topbar-wrapper'>\r\n        <div class='topbar'>\r\n          <div id='toolbar' class='containment toolbar round'></div>\r\n        </div>\r\n      </div>\r\n      <div id='drop' class='drop-mask'></div>\r\n      <% if (file.useCSVEditor) { %>\r\n      <div id='csv-container'>\r\n        <div id='csv'></div>\r\n      </div>\r\n      <% } else { %>\r\n      <textarea id='code' class='code round inner'></textarea>\r\n      <% } %>\r\n    </div>\r\n    <div id='preview' class='view preview prose'></div>\r\n  </div>\r\n</div>\r\n","files":"<% if (data.path && data.path !== data.rooturl) { %>\r\n  <div class='breadcrumb'>\r\n    <a class='branch' href='#<%= data.url %>'>..</a>\r\n    <% _.each(data.parts, function(part) { %>\r\n      <% if (part.name !== data.rooturl) { %>\r\n        <span class='slash'>/</span>\r\n        <a class='path' href='#<%= [data.url, part.url].join(\"/\") %>'><%= part.name %></a>\r\n      <% } %>\r\n    <% }); %>\r\n  </div>\r\n<% } %>\r\n\r\n<ul class='listing'></ul>\r\n","header":"<% if (data.alterable) { %>\r\n  <div class='round avatar'>\r\n    <%= data.avatar %>\r\n  </div>\r\n  <div class='fl details'>\r\n    <h4 class='parent-trail'><a href='#<%= data.user %>'><%= data.user %></a> / <a href='#<%= data.user %>/<%= data.repo.name %>'><%= data.repo.name %></a><% if (data.isPrivate) { %><span class='ico small inline private' title='Private Project'></span><% } %></h4>\r\n    <!-- if (isNew() && !translate) placeholder, not value -->\r\n    <input type='text' class='headerinput' data-mode='<%= data.mode %>' <% print((data.placeholder ? 'placeholder=' : 'value=') + '\"' + data.input + '\"') %>>\r\n    <div class='mask'></div>\r\n  </div>\r\n<% } else { %>\r\n  <div class='avatar round'><%= data.avatar %></div>\r\n  <div class='fl details'>\r\n    <h4><a class='user' href='#<%= data.user %>'><%= data.user %></a></h4>\r\n    <h2><a class='repo' href='#<%= data.path %>'><%= data.title %></a></h2>\r\n  </div>\r\n<% } %>\r\n","li":{"file":"<% if (file.binary) { %>\r\n  <div class='listing-icon icon round <%- file.extension %> <% if (file.media) { %>media<% } %>'></div>\r\n<% } else { %>\r\n  <a href='#<%= file.repo.owner.login %>/<%= file.repo.name %>/edit/<%- file.branch %>/<%- file.path %>' class='listing-icon'>\r\n    <span class='icon round <%- file.extension %> <% if (file.markdown) { %> md<% } %> <% if (file.media) { %> media<% } %>'></span>\r\n  </a>\r\n<% } %>\r\n\r\n<div class='details'>\r\n  <div class='actions fr clearfix'>\r\n    <% if (!file.binary) { %>\r\n      <a class='clearfix'\r\n        title=\"<%= t('main.repo.edit') %>\"\r\n        href='#<%= file.repo.owner.login %>/<%= file.repo.name %>/edit/<%- file.branch %>/<%- file.path %>'>\r\n        <%= t('main.repo.edit') %>\r\n      </a>\r\n    <% } %>\r\n    <% if (file.writable) { %>\r\n      <a\r\n        class='delete'\r\n        title=\"<%= t('main.repo.delete') %>\"\r\n        href='#'>\r\n        <span class='ico rubbish small'></span>\r\n      </a>\r\n    <% } %>\r\n  </div>\r\n  <% if (file.binary) { %>\r\n    <h3 class='title' title='<%- file.name %>'><%- file.name %></h3>\r\n  <% } else { %>\r\n    <h3 class='title' title='<%- file.name %>'><a class='clearfix'href='#<%= file.repo.owner.login %>/<%= file.repo.name %>/edit/<%- file.branch %>/<%- file.path %>'><%- file.name %></a></h3>\r\n  <% } %>\r\n  <span class='deemphasize'><%- file.jailpath %></span>\r\n</div>\r\n","folder":"<a href='#<%= folder.repo.owner.login %>/<%= folder.repo.name %>/tree/<%= folder.branch %>/<%= folder.path %>' class='listing-icon'>\r\n  <span class='icon round folder'></span>\r\n</a>\r\n\r\n<span class='details'>\r\n  <h3 class='title' title='<%= folder.name %>'>\r\n    <a href='#<%= folder.repo.owner.login %>/<%= folder.repo.name %>/tree/<%= folder.branch %>/<%= folder.path %>'>\r\n      <%- folder.name %>\r\n    </a>\r\n  </h3>\r\n  <span class='deemphasize'><%- folder.jailpath %></span>\r\n</span>\r\n","repo":"<a\r\n  class='listing-icon'\r\n  data-user='<%- repo.owner.login %>'\r\n  data-repo='<%- repo.name %>'\r\n  href='#<%- repo.owner.login %>/<%- repo.name %>'>\r\n  <% if ((repo.owner.login !== repo.login) && repo.private) { %>\r\n    <span class='icon round repo owner private' title=\"<%- t('main.repos.sharedFrom') %> (<%- repo.owner.login %>)\"></span>\r\n  <% } else if (repo.owner.login !== repo.login) { %>\r\n    <span class='icon round repo owner' title=\"<%- t('main.repos.sharedFrom') %> (<%- repo.owner.login %>)\"></span>\r\n  <% } else if (repo.fork && repo.private) { %>\r\n    <span class='icon round repo private fork' title=\"<%- t('main.repos.forkedFrom') %>\"></span>\r\n  <% } else if (repo.fork) { %>\r\n    <span class='icon round repo fork' title=\"<%- t('main.repos.forkedFrom') %>\"></span>\r\n  <% } else if (repo.private) { %>\r\n    <span class='icon round repo private'></span>\r\n  <% } else { %>\r\n    <span class='icon round repo'></span>\r\n  <% } %>\r\n</a>\r\n\r\n<div class='details'>\r\n  <div class='actions fr clearfix'>\r\n    <a\r\n      data-user='<%- repo.owner.login %>'\r\n      data-repo='<%- repo.name %>'\r\n      href='#<%- repo.owner.login %>/<%- repo.name %>'>\r\n      <%= t('main.repos.repo') %>\r\n    </a>\r\n    <% if (repo.homepage) { %>\r\n      <a href='<%- repo.homepage %>'><%= t('main.repos.site') %></a>\r\n    <% } %>\r\n  </div>\r\n  <a\r\n    data-user='<%- repo.owner.login %>'\r\n    data-repo='<%- repo.name %>'\r\n    href='#<%- repo.owner.login %>/<%- repo.name %>'>\r\n    <h3<% if (!repo.description) { %> class='title'<% } %>><%- repo.name %></h3>\r\n    <span class='deemphasize'><%- repo.description %></span>\r\n  </a>\r\n</div>\r\n"},"loading":"<div class='loading round clearfix'>\r\n  <div class='loading-icon'></div>\r\n  <span class=\"message\"></span>\r\n</div>\r\n","meta":{"button":"<div class='form-item'>\r\n  <label for='<%= meta.name %>'><%= meta.label %></label>\r\n  <% if (meta.help) { %><small class='deemphasize'><%= meta.help %></small><% } %>\r\n  <fieldset>\r\n    <button class='metafield round <%= meta.name %>' type='button' name='<%= meta.name %>' value='<%= meta.value %>' data-on='<%= meta.on %>' data-off='<%= meta.off %>'><%= meta.on %></button>\r\n  </fieldset>\r\n</div>\r\n","checkbox":"<div class='form-item'>\r\n  <fieldset>\r\n    <input class='metafield' type='checkbox' name='<%= meta.name %>' value='<%= meta.value %>'<% print(meta.checked ? 'checked' : '') %> />\r\n    <label class='aside' for='<%= meta.name %>'><%= meta.label %></label>\r\n  </fieldset>\r\n  <% if (meta.help) { %><small class='deemphasize'><%= meta.help %></small><% } %>\r\n</div>\r\n","multiselect":"<div class='form-item'>\r\n  <label for='<%= meta.name %>'><%= meta.label %></label>\r\n  <% if (meta.help) { %><small class='deemphasize'><%= meta.help %></small><% } %>\r\n\r\n  <fieldset>\r\n    <select id='<%= meta.name %>' name='<%= meta.name %>' data-placeholder='<%= meta.placeholder %>' multiple class='metafield chzn-select'>\r\n      <% _(meta.options).each(function(o) { %>\r\n        <% if (!o.lang || o.lang === meta.lang) { %>\r\n\r\n          <% if (o.name) { %>\r\n            <% if (meta.value.indexOf(o.value) >= 0) { %>\r\n             <option selected value='<%= o.value %>'><%= o.name %></option>\r\n           <% } else { %>\r\n             <option value='<%= o.value %>'><%= o.name %></option>\r\n           <% } %>\r\n\r\n          <% } else if (o.value) { %>\r\n            <% if (meta.value.indexOf(o.value) >= 0) { %>\r\n             <option selected value='<%= o.value %>'><%= o.value %></option>\r\n           <% } else { %>\r\n             <option value='<%= o.value %>'><%= o.value %></option>\r\n           <% } %>\r\n\r\n          <% } else { %>\r\n            <% if (meta.value.indexOf(o) >= 0) { %>\r\n             <option selected value='<%= o %>'><%= o %></option>\r\n           <% } else { %>\r\n             <option value='<%= o %>'><%= o %></option>\r\n           <% } %>\r\n          <% } %>\r\n\r\n        <% } %>\r\n      <% }); %>\r\n    </select>\r\n  </fieldset>\r\n\r\n  <% if (meta.alterable) { %>\r\n    <div class='create'>\r\n      <input type='text' class='inline' data-select='<%= meta.name %>' />\r\n      <a href='#' class='round create-select inline button' data-select='<%= meta.name %>' title=\"<%= t('main.file.createMeta') %>\"><%= t('main.file.createMeta') %></a>\r\n    </div>\r\n  <% } %>\r\n</div>\r\n","raw":"<div class='form-item'>\r\n  <label for='raw'><%= t('main.file.rawMeta') %></label>\r\n  <% if (meta.help) { %><small><%= meta.help %></small><% } %>\r\n  <fieldset>\r\n    <div name='raw' id='raw' class='metafield inner'></div>\r\n  </fieldset>\r\n</div>\r\n","select":"<div class='form-item'>\r\n  <label for='<%= meta.name %>'><%= meta.label %></label>\r\n  <% if (meta.help) { %><small class='deemphasize'><%= meta.help %></small><% } %>\r\n\r\n  <fieldset>\r\n    <select name='<%= meta.name %>' data-placeholder='<%= meta.placeholder %>' class='metafield chzn-select'>\r\n      <% _(meta.options).each(function(o) { %>\r\n\r\n        <% if (meta.placeholder) { %>\r\n          <option></option>\r\n        <% } %>\r\n\r\n        <% if (!o.lang || o.lang === meta.lang) { %>\r\n\r\n          <% if (o.name) { %>\r\n            <% if (typeof meta.value !== 'undefined' && o.value === meta.value) { %>\r\n              <option selected value='<%= o.value %>'><%= o.name %></option>\r\n            <% } else { %>\r\n              <option value='<%= o.value %>'><%= o.name %></option>\r\n            <% } %>\r\n\r\n          <% } else if (o.value) { %>\r\n            <% if (typeof meta.value !== 'undefined' && o.value === meta.value) { %>\r\n             <option selected value='<%= o.value %>'><%= o.value %></option>\r\n            <% } else { %>\r\n             <option value='<%= o.value %>'><%= o.value %></option>\r\n            <% } %>\r\n\r\n          <% } else { %>\r\n            <% if (typeof meta.value !== 'undefined' && o === meta.value) { %>\r\n             <option selected value='<%= o %>'><%= o %></option>\r\n            <% } else { %>\r\n             <option value='<%= o %>'><%= o %></option>\r\n            <% } %>\r\n          <% } %>\r\n\r\n        <% } %>\r\n      <% }); %>\r\n    </select>\r\n  </fieldset>\r\n</div>\r\n","text":"<div class='form-item'>\r\n  <label for='<%= meta.name %>'><%= meta.label %></label>\r\n  <% if (meta.help) { %><small class='deemphasize'><%= meta.help %></small><% } %>\r\n  <fieldset>\r\n    <input class='metafield' type='text' name='<%= meta.name %>' value='<%= meta.value %>' data-type='<%= meta.type %>' placeholder='<%= meta.placeholder %>' />\r\n  </fieldset>\r\n</div>\r\n","textarea":"<div class='form-item yaml-block'>\r\n  <label for='<%= meta.name %>'><%= meta.label %></label>\r\n  <% if (meta.help) { %><small class='deemphasize'><%= meta.help %></small><% } %>\r\n  <fieldset>\r\n    <textarea class='metafield' id='<%= meta.id %>' type='text' name='<%= meta.name %>' data-type='<%= meta.type %>' placeholder='<%= meta.placeholder %>'><%= meta.value %></textarea>\r\n  </fieldset>\r\n</div>\r\n"},"metadata":"<div class='form'></div>\r\n<a href='#' class='button round finish'><%= t('main.file.back') %></a>\r\n","modal":"<div class='modal-content round'>\r\n  <div class='modal-heading inner'>\r\n    <%= t('modal.errorHeading') %>\r\n  </div>\r\n  <div class='prose inner'>\r\n    <p><%= modal.message %></p>\r\n  </div>\r\n  <div class='modal-footer inner'>\r\n    <a href='#' class='button round got-it'><%= t('modal.confirm') %></a>\r\n  </div>\r\n</div>\r\n","nav":"<ul class='mobile nav clearfix'>\r\n  <li>\r\n    <a href='#' class='toggle ico menu round'></a>\r\n  </li>\r\n</ul>\r\n\r\n<ul class='file nav clearfix'>\r\n  <li>\r\n    <a href='#' title=\"<%= t('navigation.edit') %>\" class='ico round pencil edit' data-state='edit'>\r\n      <span class='popup round arrow-right'><%= t('navigation.edit') %></span>\r\n    </a>\r\n  </li>\r\n\r\n  <li>\r\n    <a href='#' title=\"<%= t('navigation.preview') %>\" class='ico round eye blob preview' data-state='blob'>\r\n      <span class='popup round arrow-right'><%= t('navigation.preview') %></span>\r\n    </a>\r\n  </li>\r\n\r\n  <li>\r\n    <a href='#' title=\"<%= t('navigation.meta') %>\" class='ico round metadata meta' data-state='meta'>\r\n      <span class='popup round arrow-right'><%= t('navigation.meta') %></span>\r\n    </a>\r\n  </li>\r\n\r\n  <li>\r\n    <a href='#' title=\"<%= t('navigation.settings') %>\" class='ico round sprocket settings' data-state='settings' data-drawer=true>\r\n      <span class='popup round arrow-right'><%= t('navigation.settings') %></span>\r\n    </a>\r\n  </li>\r\n\r\n  <li>\r\n    <a href='#' title=\"<%= t('navigation.save') %>\" class='ico round save' data-state='save'>\r\n      <div class='status'></div>\r\n      <span class='popup round arrow-right'>\r\n        <%= t('navigation.save') %>\r\n      </span>\r\n    </a>\r\n  </li>\r\n</ul>\r\n\r\n<ul class='auth nav clearfix'>\r\n  <li>\r\n    <a class='ico round switch login' href='<%= data.login %>' title=\"<%= t('login') %>\">\r\n      <span class='popup round arrow-right'><%= t('login') %></span>\r\n    </a>\r\n  </li>\r\n</ul>\r\n","notification":"<div class='notify'>\r\n  <h2 class='icon landing error'>Webdevplus</h2>\r\n  <div class='inner'>\r\n    <p><%= data.message %></p>\r\n    <p class='error'><%= data.error %></p>\r\n\r\n    <% _(data.options).each(function(options) { %>\r\n    <div>\r\n      <a class='button round <% if(options.className) { %><%= options.className %><% } %>' href='<%= options.link %>'><%= options.title %></a>\r\n    </div>\r\n    <% }); %>\r\n  </div>\r\n</div>\r\n","profile":"<header id='heading' class='heading limiter clearfix'></header>\r\n\r\n<div id='content' class='application content limiter'>\r\n  <div class='topbar'>\r\n    <div id='search' class='content-search round'></div>\r\n  </div>\r\n  <ul id='repos' class='projects listing'></ul>\r\n</div>\r\n","repo":"<header id='heading' class='heading limiter clearfix'></header>\r\n\r\n<div id='content' class='application content limiter'>\r\n  <div class='topbar clearfix'>\r\n    <!-- if repo and authenticated -->\r\n    <!-- #user/repo/new/branch/path -->\r\n    <div id='search' class='fl content-search round'></div>\r\n    <a href='#' class='fl button round new new-file' data-state='new'>\r\n      <%= t('navigation.newFile') %>\r\n    </a>\r\n  </div>\r\n\r\n  <div id='files'></div>\r\n</div>\r\n","search":"<span class='ico search'></span>\r\n<input type='text' id='filter' placeholder=\"<%= search.placeholder %>\" />\r\n","sidebar":{"branches":"<div class='inner'>\r\n  <h2 class='label'><%= t('sidebar.repo.branch') %></h2>\r\n  <select class='chzn-select'></select>\r\n</div>\r\n","drafts":"<a class='button round' href='#<%= link %>'><%= t('sidebar.repo.drafts') %></a>\r\n","label":"<div class='inner'>\r\n  <h2 class='label inner'><%= label %></h2>\r\n</div>\r\n","li":{"commit":"<a class='<%= data.status %>' href='#<%- [data.repo.owner.login, data.repo.name, data.mode, data.branch, data.path].join(\"/\") %>'>\r\n  <span class='ico small inline <%= data.status %>'></span>\r\n  <span class='message'><%- data.file.filename %></span>\r\n</a>\r\n"},"orgs":"<div class='inner'>\r\n  <h2 class='label'><%= t('sidebar.repos.groups') %></h2>\r\n</div>\r\n<ul class='listing'>\r\n  <li>\r\n    <a href='#<%= orgs.login.user %>' title='<%= orgs.login.user %>' data-id='<%= orgs.login.id %>'>\r\n      <%= orgs.login.user %>\r\n    </a>\r\n  </li>\r\n  <% orgs.orgs.each(function(org) {  %>\r\n  <li>\r\n    <a href='#<%= org.login %>' title='<%= org.login %>' data-id='<%= org.id %>'>\r\n      <%= org.login %>\r\n    </a>\r\n  </li>\r\n  <% }); %>\r\n</ul>\r\n","save":"<div class='inner'>\r\n  <h2 class='label'><%= t('sidebar.save.label') %></h2>\r\n</div>\r\n<div class='inner authoring'>\r\n  <div class='commit'>\r\n    <textarea class='commit-message' placeholder></textarea>\r\n    <a class='ico small cancel round' title=\"<%= t('sidebar.save.cancel') %>\" href='#' data-action='cancel'>\r\n      <span class='popup round arrow-bottom'><%= t('sidebar.save.cancel') %></span>\r\n    </a>\r\n  </div>\r\n  <a class='confirm button round' href='#' data-action='confirm'><%= writable %></a>\r\n</div>\r\n","settings":"<div class='inner'>\r\n  <h2 class='label'><%= t('sidebar.settings.title') %></h2>\r\n</div>\r\n<div class='inner authoring'>\r\n  <% if (/^_posts/.test(settings.path)) { %>\r\n    <a class='draft button round' href='#' data-action='draft'><%= t('sidebar.settings.draft') %></a>\r\n  <% } %>\r\n  \r\n  <% if (settings.languages && settings.lang !== 'yaml') { %>\r\n    <% _.each(settings.languages, function(l) { %>\r\n      <% if (l.value && (settings.metadata && (settings.metadata.lang !== l.value))) { %>\r\n        <a class='translate round button' href='#<%= l.value %>' data-action='translate'><%= t('sidebar.settings.translate') + ' ' + l.name %></a>\r\n      <% } %>\r\n    <% }); %>\r\n  <% } %>\r\n  \r\n  <% if (['csv', 'tsv'].indexOf(settings.lang) !== -1) { %>\r\n    <a class='toggle-editor button round' href='#' data-action='toggle-editor'><%= t('sidebar.settings.toggleEditor') %></a>\r\n  <% } %>\r\n\r\n  <!-- if !isNew() and is writable -->\r\n  <a class='delete button round' href='#' data-action='destroy'><%= t('sidebar.settings.delete') %></a>\r\n</div>\r\n\r\n<% if (settings.fileInput) { %>\r\n  <div class='inner'>\r\n    <h2 class='label'><%= t('sidebar.settings.fileInputLabel') %></h2>\r\n    <input type='text' class='filepath' placeholder='<%= settings.path %>' value='<%= settings.path %>'>\r\n  </div>\r\n<% } %>\r\n"},"start":"<div class='round splash'>\r\n  <h2 class='icon landing'>WebDevPlus</h2>\r\n  <div class='inner'>\r\n    <p><%= t('main.start.content') %></p>\r\n    \r\n    <p><a href='#about'><%= t('main.start.learn') %></a></p>\r\n    <a class='round button' href='<%= auth.site %>/login/oauth/authorize?client_id=<%= auth.id %>&scope=<%- auth.scope %>'><%= t('login') %></a>\r\n    <div class=\"toggle-hide\">\r\n      <a href=\"#scopes\" class=\"deemphasize\">Set repository access</a>\r\n      <select>\r\n        <option value=\"repo\" <% if (auth.scope === 'repo') {%>selected<% } %>>Public and private repositories</option>\r\n        <option value=\"public_repo\" <% if (auth.scope === 'public_repo') {%>selected<% } %>>Only public repositories</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n</div>\r\n","toolbar":"<% if (toolbar.draft) { %>\r\n  <a href='#' class='draft-to-post round contain'>\r\n    <%= t('actions.draft.toPost') %><span class='ico small checkmark'></span>\r\n    <span class='popup round arrow-top'><%= t('actions.draft.toPostInfo') %></span>\r\n  </a>\r\n<% } else { %>\r\n  <% if (toolbar.metadata && toolbar.metadata.published) { %>\r\n    <a href='#' class='publish-flag published round contain' data-state='true'>\r\n      <%= t('actions.publishing.published') %><span class='ico small checkmark'></span>\r\n    </a>\r\n  <% } else if (toolbar.metadata && !toolbar.metadata.published) { %>\r\n    <a href='#' class='publish-flag round contain' data-state='false'>\r\n      <%= t('actions.publishing.unpublished') %><span class='ico small checkmark'></span>\r\n    </a>\r\n  <% } %>\r\n<% } %>\r\n\r\n<% if (toolbar.markdown) { %>\r\n<div class='options clearfix'>\r\n  <ul class='group round clearfix'>\r\n    <li><a href='#' title=\"<%= t('toolbar.heading') %>\" data-key='heading' data-snippet='<% print(\"##\\n\\n\") %>'>h2</a></li>\r\n    <li><a href='#' title=\"<%= t('toolbar.subHeading') %>\" data-key='sub-heading' data-snippet='<% print(\"###\\n\\n\") %>'>h3</a></li>\r\n  </ul>\r\n  <ul class='group round clearfix'>\r\n    <li>\r\n      <a title=\"<%= t('toolbar.link') %>\" href='#' data-key='link' data-snippet=false data-dialog=true>\r\n        <span class='ico small link'></span>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a title=\"<%= t('toolbar.image') %>\" href='#' data-key='media' data-snippet=false data-dialog=true>\r\n        <span class='ico small picture'></span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n  <ul class='group round clearfix'>\r\n    <li><a href='#' title=\"<%= t('toolbar.bold') %>\" data-key='bold' data-snippet='****'>B</a></li>\r\n    <li>\r\n      <a data-key='italic' href='#' title=\"<%= t('toolbar.italic') %>\" data-snippet='__'>\r\n        <span class='ico small italic'></span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n  <ul class='group round clearfix'>\r\n    <li>\r\n      <a title=\"<%= t('toolbar.blockquote') %>\"  href='#' data-key='quote' data-snippet='<% print(\"> We loved with a love that was more than love\\n\\n\"); %>'>\r\n        <span class='ico small quote'></span>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a href='#' title=\"<%= t('toolbar.list') %>\" data-key='list' data-snippet='-'>\r\n        <span class='ico small list'></span>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a href='#' title=\"<%= t('toolbar.numberedlist') %>\" data-key='numbered-list' data-snippet='1.'>\r\n        <span class='ico small numbered-list'></span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n  <ul class='group round clearfix'>\r\n    <li>\r\n    <a class='round' title=\"<%= t('toolbar.help') %>\" href='#' data-key='help' data-snippet=false data-dialog=true>\r\n        <span class='ico small question'></span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n<% } %>\r\n<div id='dialog'></div>\r\n"};
