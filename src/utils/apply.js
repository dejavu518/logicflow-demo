import {
  CircleNode,
  CircleNodeModel,
} from "@logicflow/core";

class applyModel extends CircleNodeModel {
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

class applyView extends CircleNode {}

export default {
  type: "apply",
  view: applyView,
  model: applyModel
}