<template>
    <div class='Expend-1-1'>
        <div class="main-cont clearfix">

            <div class="func-mod">
                <h3>凭证数据自动采集</h3>

                <div class="content">

                    <el-col :span="24">
                        <div class="home">

                            <!--添加任务-->
                            <el-dialog title="添加采集数据" :visible.sync="addVisible">
                                <el-form :model="addForm" ref="addForm">
                                    <el-form-item label="选择单位：">
                                        <el-cascader :options="dataListsOptions" :show-all-levels="false" v-model="addForm.unit"></el-cascader>
                                    </el-form-item>
                                    <el-form-item label="选择系统：">
                                        <el-select v-model="addForm.system" placeholder="选择系统">
                                            <el-option label="金蝶" value="金蝶"></el-option>
                                            <el-option label="金算盘" value="金算盘"></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="选择开始时间和结束时间：">
                                        <el-date-picker v-model="addForm.time" type="daterange" valueFormat="yyyy-MM-dd" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button type="primary" @click="addTaskClick">添 加</el-button>
                                        <el-button type="info" @click="resetForm">取 消</el-button>
                                    </el-form-item>
                                </el-form>
                            </el-dialog>

                            <div class="title">
                                <!--<p>凭证数据自动采集</p>-->
                                <el-button size="small" type="primary" @click="addVisible = true"><i class="el-icon-plus"></i>添加采集数据</el-button>
                            </div>

                            <el-table :data="tableDatas" style="width:100%" stripe ref="tableDatas">

                                <el-table-column prop="unit" label="单位名称"></el-table-column>
                                <el-table-column prop="system" label="系统名称"></el-table-column>
                                <el-table-column prop="gatherTime" label="最后采集时间"></el-table-column>
                                <el-table-column label="采集方式" width="200">
                                    <template slot-scope="scope">
                                        <el-radio-group v-model="scope.row.gatherWay" size="small">
                                            <el-radio-button label="手动采集"></el-radio-button>
                                            <el-radio-button label="自动采集"></el-radio-button>
                                        </el-radio-group>
                                    </template>
                                </el-table-column>

                                <el-table-column label="操作" width="200">
                                    <template slot-scope="scope">
                                        <el-button size="small" type="primary" @click="toggleRowExpansionFn(scope.row,true,'evidenceNo')">编辑</el-button>
                                        <el-button size="small" type="danger" @click.native.prevent="deleteRow(scope.$index,tableDatas)">删除</el-button>
                                    </template>
                                </el-table-column>

                            </el-table>
                        </div>
                    </el-col>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .main-cont {
        .func-mod {
            .content{
                .title{}
                .home{}
            }
        }
    }
</style>

<script>
    export default {
        name: 'Expend-1-1',
        components: {},
        data() {
            return {
                //数据列表
                tableDatas: [
                    {
                        unit: ["普通本科院校","西南大学"],
                        system: "金蝶",
                        gatherTime: "2016-10-10 10:10",
                        gatherWay: "手动采集"
                    }
                ],
                addVisible: false, //添加列表的显示与隐藏
                addForm: {unit: [],system: "", gatherTime: ""}, //添加数据
                dataListsOptions: []
            }
        },
        methods: {
            //获取学校或者单位列表
            getLists(){
                this.$http.get(' http://localhost:3000/area').then((result) => {
                    this.dataLists = result.data;

                    //获取学校单位级联选择器数据
                    for(let x of this.dataLists){
                        let children = [];
                        for(let y of x.list){
                            children.push({value: y,label: y});
                        }
                        this.dataListsOptions.push({value: x.name,label: x.name, children: children});
                    }

                });
            },
            //添加任务
            addTaskClick(){
                this.tableDatas.push(this.addForm);
                this.resetForm();
            },
            //重置添加任务表单
            resetForm(){
                this.$refs['addForm'].resetFields();
                this.addVisible = false;
            },
            //删除表单中的行
            deleteRow(index,rows){
                rows.splice(index,1);
            },
            checkFn(){

            },
            //点击隐藏表格展开的内容
            toggleRowExpansionFn(row,expanded,formRef){

            }
        },
        mounted(){

            //获取学校或者单位列表
            this.getLists();

        }
    }
</script>
