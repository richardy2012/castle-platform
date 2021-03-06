Ext.define("app.view.user.UserForm", {
	extend : "Ext.form.Panel",
	alias : "widget.userform",
	requires : [ "app.view.user.UserController", "app.view.user.UserModel" ],
	controller : "user",
	viewModel : "user",
	url : Ext.ctx + "/user/save",
	bodyPadding : 5,
	border : false,
	frame : false,
	scrollable : true,
	layout : "anchor",
	defaults : {
		anchor : "90%"
	},
	fieldDefaults : {
		labelAlign : "right",
		labelWidth : 120
	},
	items : [ {
		bodyPadding : 5,
		border : false,
		frame : false,
		scrollable : true,
		layout : "anchor",
		defaults : {
			anchor : "90%"
		},
		defaultType : "textfield",
		items : [ {
			xtype : "hiddenfield",
			name : "id"
		}, {
			fieldLabel : "账号",
			name : "username",
			allowBlank : false
		}, {
			fieldLabel : "姓名",
			name : "name",
			allowBlank : false
		}, {
			fieldLabel : "邮箱",
			name : "email",
			vtype : "email"
		}, {
			fieldLabel : "手机",
			name : "mobile",
			regex : /^((\d{3,4}-)*\d{7,8}(-\d{3,4})*|13\d{9})$/
		} ]
	} ],
	buttonAlign : "left",
	buttons : [ {
		text : "保存",
		formBind : true,
		handler : "onFormSave"
	} ]
});