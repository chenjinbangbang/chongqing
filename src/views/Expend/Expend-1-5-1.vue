<template>
    <div class='Expend-1-3-1'>
        <div class="main-cont clearfix">

            <div class="func-mod">
                <h3>整改工作-整改任务</h3>

                <div class="content">
                    <el-col :span="4">
                        <el-menu defaultActive="1" :uniqueOpened="true">
                            <div v-for="dataList,index in dataLists">
                                <el-tooltip effect="dark" :content="dataList.name" placement="left">
                                    <el-submenu :index="String(index+1)">
                                        <template slot="title">
                                            <div class="menu">
                                                <div>
                                                    <i class="el-icon-location"></i>
                                                </div>
                                                <p>{{dataList.name}}</p>
                                            </div>
                                        </template>
                                        <div class="submenu">
                                            <div v-for="list,indexS in dataList.list">
                                                <el-menu-item :index="String(index+1)+'-'+String(indexS+1)">
                                                    <el-tooltip effect="dark" :content="list" placement="right">
                                                        <div class="menu">
                                                            <div>
                                                                <i class="el-icon-location"></i>
                                                            </div>
                                                            <p>{{list}}</p>
                                                        </div>
                                                    </el-tooltip>
                                                </el-menu-item>
                                            </div>
                                        </div>
                                    </el-submenu>
                                </el-tooltip>

                            </div>
                        </el-menu>
                    </el-col>

                    <el-col :span="20">
                        <div class="home">

                            <!--显示任务内容-->
                            <!--<el-dialog title="任务内容" :visible.sync="contentVisible">
                                <div>
                                    <label for=""></label>
                                </div>
                            </el-dialog>-->

                            <!--添加任务-->
                            <el-dialog title="添加任务" :visible.sync="addVisible">
                                <el-form :model="addForm" ref="addForm">
                                    <el-form-item label="任务名：">
                                        <el-input v-model="addForm.name"></el-input>
                                    </el-form-item>
                                    <el-form-item label="整改问题描述：">
                                        <el-input type="textarea" placeholder="请输入整改问题描述" v-model="addForm.issue" :autosize="{minRows: 5,maxRows: 10}"></el-input>
                                    </el-form-item>
                                    <el-form-item label="附带问题凭证列表：">
                                        <el-input type="textarea" placeholder="请输入附带问题凭证列表" v-model="addForm.evidence" :autosize="{minRows: 5,maxRows: 10}"></el-input>
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
                                <p>显示所选单位任务列表</p>
                                <el-button size="small" type="primary" @click="addVisible = true"><i class="el-icon-plus"></i> 添加任务</el-button>
                            </div>

                            <el-table :data="tableDatas" style="width:100%" stripe ref="tableDatas">
                                <el-table-column prop="name" label="任务名"></el-table-column>
                                <el-table-column prop="time[0]" label="开始时间"></el-table-column>
                                <el-table-column prop="time[1]" label="结束时间"></el-table-column>
                                <el-table-column prop="contentUrl" label="任务内容链接">
                                    <template slot-scope="scope">
                                        <p>任务内容</p>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="feedback" label="反馈意见"></el-table-column>
                                <el-table-column prop="result" label="审核结果">
                                    <template slot-scope="scope">
                                        <i class="el-icon-success checkSuccess" v-if="scope.row.result"></i>
                                        <i class="el-icon-error checkError" v-else></i>
                                    </template>
                                </el-table-column>

                                <el-table-column label="操作" width="200">
                                    <template slot-scope="scope">
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
                .home{ margin-left:20px;}
            }
        }
    }
</style>

<script>
    export default {
        name: 'Expend-1-3-1',
        components: {},
        data() {
            return {
                dataLists: [], //学校或者单位列表
                activeName: 'first', //tab标签默认内容
                //数据列表
                tableDatas: [
                    {
                        name: "任务1",
                        time: ["2016-10-10","2017-05-05"],
                        issue: "",
                        evidence: "",
                        feedback: "我投诉你",
                        result: true
                    }
                ],
                addVisible: false, //添加列表的显示与隐藏
                addForm: {name: '',issue: '', evidence: '', time: ''}, //添加数据
            }
        },
        methods: {
            //获取学校或者单位列表
            getLists(){
                this.$http.get(' http://localhost:3000/area').then((result) => {
                    this.dataLists = result.data;
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
