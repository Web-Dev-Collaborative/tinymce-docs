## `advtable_value_series`
{{ site.requires_5_7 }}

{% if pluginname != "Advanced Tables" %}
> **Note**: The `advtable_value_series` option requires the Advanced Tables plugin.
{% endif %}

The `advtable_value_series` option is used in conjunction with the [mceTableToggleSeries command]({{site.baseurl}}/plugins/premium/advtable/#commands).

The `advtable_value_series` option configures value series for populating cells in a table. This option can be used to create row identifiers.

**Type:** `Object`

**Default Value:**

```js
{
  // Natural number series
  numbers: { 
    update: true,
    resizable: false,
    generator: `GeneratorFunction` // For details, see: 'Creating a value series generator'
  },
  // English alphabetic series
  alpha: {
    update: true,
    resizable: false,
    generator: `GeneratorFunction` // For details, see: 'Creating a value series generator'
  },
}
```

Both default series are configured to update on table changes and not resize when using the resize bars.

### Series configuration

| Name | Value | Requirement | Description |
| ---- | ----- | ----------- | ----------- |
| update | `boolean` | Optional | default: `false` - When `true`, the series values will be updated when changes are made to the table. |
| resizable | `boolean` | Optional | default: `true` - When `true`, table cells containing the series values can be resized using a mouse or touch device. |
| generator | `(info: GeneratorInfo, rowIndex: number, columnIndex: number) => GeneratorResult` | Required | For details on creating a value series generator, see: [Creating a value series generator](#creatingavalueseriesgenerator).  |

#### Creating a value series generator

The `generator` is a callback function for specifying how to update a table cell of a value series. The callback is passed information relating to the generator and table cell, the row index, and column index of the table cell. For details, see: [GeneratorInfo](#generatorinfo). The callback should return an object containing the value and optionally, any classes and attributes to be applied to the table cell. For details, see: [GeneratorResult](#generatorresult).

##### GeneratorInfo

| Name | Value | Description |
| ---- | ----- | ----------- |
| rowType | `'thead'`, `'tbody'` or `'tfoot'` | The section of the table cell. |
| cellType | `'td'` or `'th'` | The type of the table cell. |
| direction | `'row'` or `'column'` | The direction of the generator. |
| prevSeriesValue | `string` or `undefined` | The previous value calculated by the generator. |

##### GeneratorResult

| Name | Value | Requirement | Description |
| ---- | ----- | ----------- | ----------- |
| classes | `string[]` | Optional | The classes to be applied to the table cell. |
| attributes | `Object` | Optional | The attributes to be applied to the table cell. The `attributes` should be provided as an object where each key is an attribute and each value is of type `string`, `boolean`, `number` or `null`. A value of `null` for an attribute will remove the attribute from the table cell. |
| value | `string`, `number` or `undefined` | Optional | The value of the table cell. If the value is `undefined`, the editor will use the previous value of the table cell. |

### Example: Using `advtable_value_series`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  plugins: 'table advtable',
  menubar: 'table',
  advtable_value_series: {
    numbers: {
      update: true,
      resizable: false,
      generator: function (info, rowIndex, columnIndex) {
        return {
          value: rowIndex + 1
        };
      }
    },
  }
});
```