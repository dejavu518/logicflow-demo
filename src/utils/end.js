import {
  CircleNode,
  CircleNodeModel,
} from "@logicflow/core";

class endModel extends CircleNodeModel {
  // 样式
  getNodeStyle() {
    const style = super.getNodeStyle();
    style.stroke = '#FF6347';
    return style;
  }
  // 形状
  setAttributes() {
    this.r = 15
  }
}

class endView extends CircleNode {}

export default {
  type: "end",
  view: endView,
  model: endModel
}