<template>
    <div class='expend-1-2-4'>
        <div class="main-cont clearfix">

            <div class="func-mod">
                <h3>监管数据设置-智能预警设置</h3>

                <div class="content">
                    <div class="choose">
                        <label for="warningCondition">选择预警条件：</label>
                        <el-select v-model="warningCondition" id="warningCondition" placeholder="选择预警条件">
                            <el-option label="智能检测" value="warning1"></el-option>
                            <el-option label="自定义条件" value="warning2"></el-option>
                        </el-select>
                    </div>

                    <div class="home">
                        <div class="warning1" v-if="warningCondition === 'warning1'">
                            <h2 class="title">智能检测：</h2>
                            <el-col :span="24">
                                <!--<el-input type="textarea" placeholder="智能检测" v-model="warning1" size="medium" :autosize="{minRows: 5,maxRows: 10}"></el-input>-->
                                <p>{{warning1}}</p>
                            </el-col>
                        </div>

                        <div class="warning2" v-else>
                            <h2 class="title">自定义条件：</h2>

                            <el-table :data="conditions" style="width:100%" stripe ref="conditions">
                                <el-table-column label="选择凭证属性">
                                    <template slot-scope="scope">
                                        <el-select v-model="scope.row.attribute" placeholder="选择凭证属性">
                                            <el-option label="摘要" value="attribute1"></el-option>
                                            <el-option label="贷方科目" value="attribute2"></el-option>
                                            <el-option label="明细科目" value="attribute3"></el-option>
                                            <el-option label="金额" value="attribute4"></el-option>
                                        </el-select>
                                    </template>
                                </el-table-column>
                                <el-table-column label="选择条件">
                                    <template slot-scope="scope">
                                        <el-select v-model="scope.row.choose" placeholder="选择条件">
                                            <el-option label="包含" value="attribute1"></el-option>
                                            <el-option label="不包含" value="attribute2"></el-option>
                                            <el-option label="等于" value="attribute3"></el-option>
                                            <el-option label="不等于" value="attribute4"></el-option>
                                            <el-option label="开头为" value="attribute5"></el-option>
                                            <el-option label="结尾为" value="attribute6"></el-option>
                                        </el-select>
                                    </template>
                                </el-table-column>
                                <el-table-column label="输入值">
                                    <template slot-scope="scope">
                                        <el-input v-model="scope.row.value" placeholder="输入值"></el-input>
                                    </template>
                                </el-table-column>
                                <el-table-column label="操作">
                                    <template slot-scope="scope">
                                        <el-button size="small" type="primary" @click="addConditions(scope.$index)">保存</el-button>
                                        <el-button size="small" type="danger" @click.native.prevent="deleteConditions(scope.$index,conditions)">删除</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>

                        </div>
                    </div>

                </div>




            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .main-cont {
        .func-mod {
            .choose{}
            .content{
                .warning1{
                    p{ margin-top:20px;}
                }
            }
        }
    }
</style>

<script>
    export default {
        name: 'expend-1-2-4',
        components: {},
        data() {
            return {
                warningCondition: 'warning2', //选择预警条件
                warning1: '你已学习了xxx内容，你已学习了xxx内容，你已学习了xxx内容，你已学习了xxx内容', //智能检测内容
                conditions: [ //自定义条件列表内容
                    { attribute: '',choose: '',value: ''}
                ]
            }
        },
        mounted(){

        },
        methods: {
            //增加一条自定义条件列表
            addConditions(index){
                if((index+1) === this.conditions.length){
                    this.conditions.push({attribute: '',choose: '',value: ''});
                }
            },
            //删除一条自定义条件列表
            deleteConditions(index,rows){
                rows.splice(index,1);
            }
        }
    }
</script>
