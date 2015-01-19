# ExtJS 4.x + CKEditor

Here is a simple page using a wrapper for the [CKEditor](http://ckeditor.com/) to be used in ExtJS.

## How to use (Non-MVC)

See the sample index.html file included.

## How to use (MVC)

1. Include the CKEditor either with a local downloaded copy or through the CKEditor CDN.

2. Copy the js file `'CKEditor.js'` to your project

3. Change the class name if desired `'Ext.ux.CKEditor'`

4. Add requires:

	```
	 requires: [
		'Ext.ux.CKEditor'
	  ]
	```

5. Use the editor:

	```
	Ext.create('Ext.panel.Panel', {
		width: 600,
		height: 400,
		...
		items: [
			{
				xtype: 'ckeditor',
				itemId: 'textEdit',
				width: 600
			}
		]
	});
	```
	
## Testing

Tested with ExtJS 4.2.1, 4.2.3

## License

MIT License. Free to use and change.