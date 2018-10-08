<template>
    <div class='Expend-1-6'>
        <div class="main-cont clearfix">

            <div class="func-mod">
                <h3>统计分析</h3>

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
                            <el-tabs v-model="activeName">
                                <el-tab-pane label="上报情况统计" name="first" >
                                    <div class="title">
                                        <p>上报情况统计</p>
                                    </div>
                                    <el-table :data="statist" style="width:100%" stripe>
                                        <el-table-column prop="evidence" label="凭证"></el-table-column>
                                        <el-table-column prop="unit" label="所属单位"></el-table-column>
                                    </el-table>
                                </el-tab-pane>
                                <el-tab-pane label="问题凭证统计" name="second" >
                                    <div class="title">
                                        <p>问题凭证统计</p>
                                    </div>
                                    <el-table :data="statist" style="width:100%" stripe>
                                        <el-table-column prop="issue" label="问题凭证"></el-table-column>
                                        <el-table-column prop="unit" label="所属单位"></el-table-column>
                                    </el-table>
                                </el-tab-pane>
                                <el-tab-pane label="监控工作情况统计" name="third" >
                                    <div class="title">
                                        <p>监控工作情况统计</p>
                                    </div>
                                    <el-table :data="statist" style="width:100%" stripe>
                                        <el-table-column prop="cover" label="凭证审核覆盖率"></el-table-column>
                                        <el-table-column prop="analyze" label="凭证审核覆盖率和问题凭证分析"></el-table-column>
                                        <el-table-column prop="amount" label="数量之间的关系"></el-table-column>
                                    </el-table>
                                </el-tab-pane>

                                <el-tab-pane label="年度预算执行进度" name="four">
                                    <div class="title">
                                        <p>年度预算执行进度</p>
                                    </div>
                                </el-tab-pane>

                                <el-tab-pane label="自定义统计分析" name="five" >
                                    <div class="title">
                                        <p>自定义统计分析</p>
                                    </div>
                                </el-tab-pane>

                            </el-tabs>
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
            .submenu::-webkit-scrollbar {display:none} //隐藏滚动条
            .submenu{ max-height:300px; position:relative; overflow:auto;}

            .content{
                .title{}
                .home{ margin-left:20px;}
            }
        }
    }
</style>

<script>
    export default {
        name: 'Expend-1-6',
        components: {},
        data() {
            return {
                dataLists: [], //学校或者单位列表
                activeName: 'first', //tab标签默认内容
                statist: [ //统计列表
                    { evidence: "凭证1",issue: "凭证问题1凭证问题1",cover: "50%",analyze: "覆盖率和问题凭证1覆盖率和问题凭证1",amount: "亲属关系",unit: "重庆广播电视大学"},
                    { evidence: "凭证2",issue: "凭证问题2凭证问题2",cover: "33%",analyze: "覆盖率和问题凭证2覆盖率和问题凭证2",amount: "配偶关系",unit: "西南大学"}
                ],
            }
        },
        methods: {
            //获取学校或者单位列表
            getLists(){
                this.$http.get(' http://localhost:3000/area').then((result) => {
                    this.dataLists = result.data;
                });
            }
        },
        mounted(){

            //获取学校或者单位列表
            this.getLists();

        }
    }
</script>
