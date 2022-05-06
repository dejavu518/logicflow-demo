<template>
  <div>
    <v-form-render :form-json="formJson" :form-data="formData" :option-data="optionData" ref="vFormRef">
    </v-form-render>
    <el-button type="primary" @click="submitForm">Submit</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      /* 注意：formJson是指表单设计器导出的json，此处演示的formJson只是一个空白表单json！！ */
      formJson: { "widgetList": [{ "type": "input", "icon": "text-field", "formItemFlag": true, "options": { "name": "input47733", "label": "input", "labelAlign": "", "type": "text", "defaultValue": "", "placeholder": "", "columnWidth": "200px", "size": "", "labelWidth": null, "labelHidden": false, "readonly": false, "disabled": false, "hidden": false, "clearable": true, "showPassword": false, "required": false, "requiredHint": "", "validation": "", "validationHint": "", "customClass": [], "labelIconClass": null, "labelIconPosition": "rear", "labelTooltip": null, "minLength": null, "maxLength": null, "showWordLimit": false, "prefixIcon": "", "suffixIcon": "", "appendButton": false, "appendButtonDisabled": false, "buttonIcon": "el-icon-search", "onCreated": "", "onMounted": "", "onInput": "", "onChange": "", "onFocus": "", "onBlur": "", "onValidate": "" }, "id": "input47733" }, { "type": "number", "icon": "number-field", "formItemFlag": true, "options": { "name": "number87618", "label": "number", "labelAlign": "", "defaultValue": 0, "placeholder": "", "columnWidth": "200px", "size": "", "labelWidth": null, "labelHidden": false, "disabled": false, "hidden": false, "required": false, "requiredHint": "", "validation": "", "validationHint": "", "customClass": "", "labelIconClass": null, "labelIconPosition": "rear", "labelTooltip": null, "min": -100000000000, "max": 100000000000, "precision": 0, "step": 1, "controlsPosition": "right", "onCreated": "", "onMounted": "", "onChange": "", "onFocus": "", "onBlur": "", "onValidate": "" }, "id": "number87618" }, { "type": "select", "icon": "select-field", "formItemFlag": true, "options": { "name": "select111812", "label": "select", "labelAlign": "", "defaultValue": "", "placeholder": "", "columnWidth": "200px", "size": "", "labelWidth": null, "labelHidden": false, "disabled": false, "hidden": false, "clearable": true, "filterable": false, "allowCreate": false, "remote": false, "automaticDropdown": false, "multiple": false, "multipleLimit": 0, "optionItems": [{ "label": "select 1", "value": 1 }, { "label": "select 2", "value": 2 }, { "label": "select 3", "value": 3 }], "required": false, "requiredHint": "", "validation": "", "validationHint": "", "customClass": "", "labelIconClass": null, "labelIconPosition": "rear", "labelTooltip": null, "onCreated": "", "onMounted": "", "onRemoteQuery": "", "onChange": "", "onFocus": "", "onBlur": "", "onValidate": "" }, "id": "select111812" }, { "type": "grid", "category": "container", "icon": "grid", "cols": [{ "type": "grid-col", "category": "container", "icon": "grid-col", "internal": true, "widgetList": [], "options": { "name": "gridCol10873", "hidden": false, "span": 12, "offset": 0, "push": 0, "pull": 0, "responsive": false, "md": 12, "sm": 12, "xs": 12, "customClass": "" }, "id": "grid-col-10873" }, { "type": "grid-col", "category": "container", "icon": "grid-col", "internal": true, "widgetList": [], "options": { "name": "gridCol76826", "hidden": false, "span": 12, "offset": 0, "push": 0, "pull": 0, "responsive": false, "md": 12, "sm": 12, "xs": 12, "customClass": "" }, "id": "grid-col-76826" }], "options": { "name": "grid67350", "hidden": false, "gutter": 12, "colHeight": null, "customClass": "" }, "id": "grid67350" }, { "type": "table", "category": "container", "icon": "table", "rows": [{ "cols": [{ "type": "table-cell", "category": "container", "icon": "table-cell", "internal": true, "widgetList": [], "merged": false, "options": { "name": "table-cell-74443", "cellWidth": "", "cellHeight": "", "colspan": 1, "rowspan": 1, "customClass": "" }, "id": "table-cell-74443" }], "id": "table-row-116966", "merged": false }], "options": { "name": "table34113", "hidden": false, "customClass": [] }, "id": "table34113" }], "formConfig": { "modelName": "formData", "refName": "vForm", "rulesName": "rules", "labelWidth": 80, "labelPosition": "left", "size": "", "labelAlign": "label-left-align", "cssCode": "", "customClass": "", "functions": "", "layoutType": "PC", "onFormCreated": "", "onFormMounted": "", "onFormDataChange": "" } },
      formData: {},
      optionData: {}
    }
  },
  methods: {
    submitForm() {
      this.$refs.vFormRef.getFormData().then(formData => {
        // Form Validation OK
        alert(JSON.stringify(formData))
      }).catch(error => {
        // Form Validation failed
        this.$message.error(error)
      })
    }
  }
}
</script>