<template>
  <div id="container">
  </div>
</template>

<script>
import LogicFlow from '@logicflow/core'; //引入核心组件库
import "@logicflow/core/dist/style/index.css"; //引入样式文件
import apply from '@/utils/apply.js'
import approve from '@/utils/approve.js'
import judge from '@/utils/judge.js'
import end from '@/utils/end.js'
import { Control } from '@logicflow/extension';//引入控制面板插件
export default {
  mounted() {
    LogicFlow.use(Control);
    const lf = new LogicFlow({
      container: document.querySelector('#container'),
      // 网格线
      grid: {
        size: 10,
        visible: true,
        type: 'mesh',
        config: {
          color: '#ababab',
          thickness: 1,
        },
      },
      adjustNodePosition: false
    });
    lf.register(apply);
    lf.register(approve);
    lf.register(judge);
    lf.register(end);
    // 控制面板
    // lf.extension.control.addItem({
    //   iconClass: "custom-minimap",
    //   title: "",
    //   text: "导航",
    //   onMouseEnter: (lf, ev) => {
    //     const position = lf.getPointByClient(ev.x, ev.y);
    //     lf.extension.miniMap.showMiniMap.show(
    //       position.domOverlayPosition.x - 120,
    //       position.domOverlayPosition.y + 35
    //     );
    //   },
    //   onClick: (lf, ev) => {
    //     const position = lf.getPointByClient(ev.x, ev.y);
    //     lf.extension.miniMap.show(
    //       position.domOverlayPosition.x - 120,
    //       position.domOverlayPosition.y + 35
    //     );
    //   }
    // });
    lf.render({
      nodes: [
        {
          type: 'apply',
          x: 100,
          y: 100,
          text: {
            value: '申请',
            x: 100,
            y: 130
          },
        },//申请节点
        {
          type: 'approve',
          x: 100,
          y: 180,
          text: {
            value: '审批',
            x: 100,
            y: 210
          },
        },//审批节点 
        {
          type: 'judge',
          x: 100,
          y: 260,
          text: {
            value: '申请',
            x: 100,
            y: 290
          },
        },//判断节点 
        {
          type: 'end',
          x: 100,
          y: 340,
          text: {
            value: '申请',
            x: 100,
            y: 370
          },
        },//结束节点
      ]
    })

  }
}
</script>

<style lang="scss" scoped>
#container {
  height: 1000px;
}
</style>