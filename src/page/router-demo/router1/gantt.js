import React from 'react';
import { gantt } from 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
import 'dhtmlx-gantt/codebase/ext/dhtmlxgantt_marker.js';
import 'dhtmlx-gantt/codebase/ext/dhtmlxgantt_tooltip.js';
import 'dhtmlx-gantt/codebase/locale/locale_cn.js';


export default class Gantt extends React.Component {
    componentDidMount() {
        gantt.config.inherit_scale_class = true
        gantt.config.readonly = true
        gantt.config.grid_width = 530
        gantt.config.xml_date = '%Y-%m-%d'
        gantt.config.scale_unit = 'year'
        gantt.config.duration_unit = 'month'
        gantt.config.date_scale = '%Y年'
        gantt.config.subscales = [
            { unit: 'month', step: 1, date: '%M' }
        ]
        gantt.config.row_height = 53
        gantt.config.scale_height = 59
        gantt.config.task_height = 23
        gantt.config.show_task_cells = true
        gantt.templates.tooltip_text = function (start, end, task) {
            return '<span>计划开始时间:</span> <span>&nbsp;&nbsp;计划结束时间:</span> <br/><span>实际开始时间:</span><span>&nbsp;&nbsp;实际结束时间:</span>'
        }
        // gantt.clearAll()
        gantt.config.columns = [
            {
                name: 'text',
                label: '任务名称',
                width: 100,
                template: function () {
                    return `节点：`; // 通过 template 回调可以指定返回内容值
                },
            },
            {
                name: 'text',
                label: '进度',
                width: 80,
                template: function () {
                    return `节点：`; // 通过 template 回调可以指定返回内容值
                },
            },
            {
                name: 'text',
                label: '材料',
                width: 80,
                template: function () {
                    return `节点：`; // 通过 template 回调可以指定返回内容值
                },
            },
            {
                name: 'text',
                label: '操作',
                width: 80,
                template: function () {
                    return `节点：`;
                },
            }
        ];

        const { tasks } = this.props;
        gantt.init(this.ganttContainer);
        gantt.parse(tasks);
    }

    shouldComponentUpdate(nextProps) {
        return this.props.zoom !== nextProps.zoom;
    }

    componentDidUpdate() {
        gantt.render();
    }
    render() {
        return (
            <div className='gantt'
                 ref={ (input) => { this.ganttContainer = input } }
            ></div>
        );
    }
}
