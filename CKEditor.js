/*
ExtJS 4.x wrapper for CKEditor (http://ckeditor.com/)
*/

Ext.define('Ext.ux.CKEditor', {
    extend: 'Ext.form.field.TextArea',
    alias: 'widget.ckeditor',

    constructor: function () {
        this.callParent(arguments);
        this.addEvents("instanceReady");
    },

    initComponent: function () {
        this.callParent(arguments);
        this.on("afterrender", function () {
            Ext.apply(this.CKConfig, {
                height: this.getHeight(),
                width: this.getWidth()
            });

            this.editor = CKEDITOR.replace(this.inputEl.id, this.CKConfig);
            this.editor.name = this.name;

            this.editor.on("instanceReady", function () {
                this.fireEvent(
                    "instanceReady", 
                    this, 
                    this.editor
                );
            }, this);

        }, this);
    },

    onRender: function (ct, position) {
        if (!this.el) {
            this.defaultAutoCreate = {
                tag: 'textarea',
                autocomplete: 'off'
            };
        }
        this.callParent(arguments)
    },
    
    setValue: function (value) {
        this.callParent(arguments);
        if (this.editor) {
            this.editor.setData(value);
        }
    },

    getValue: function () {
        if (this.editor) {
            return this.editor.getData();
        } 
        else {
            return ''
        }
    }
});