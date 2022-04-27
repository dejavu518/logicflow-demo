import {
  DiamondNode,
  DiamondNodeModel,
} from "@logicflow/core";

class judgeModel extends DiamondNodeModel {
  // 形状
  setAttributes() {
    this.rx = 20
    this.ry = 20
  }
  // 样式
  getNodeStyle() {
    const style = super.getNodeStyle();
    style.stroke = '#6495ED';
    return style;
  }
}

class judgeView extends DiamondNode {}

export default {
  type: "judge",
  view: judgeView,
  model: judgeModel
}