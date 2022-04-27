import {
  RectNode,
  RectNodeModel,
} from "@logicflow/core";

class approveModel extends RectNodeModel {
  // 形状
  setAttributes() {
    this.width = 50
    this.height = 35
  }
  // 样式
  getNodeStyle() {
    const style = super.getNodeStyle();
    style.stroke = '#3CB371';
    return style;
  }
}

class approveView extends RectNode {}

export default {
  type: "approve",
  view: approveView,
  model: approveModel
}