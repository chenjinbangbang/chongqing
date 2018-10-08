<template>
    <div class='Finance-1-1-1'>
        <div class="main-cont clearfix">

            <div class="func-mod">
                <h3>贫困学生信息管理</h3>

                <div class="content">

                    <div class="home">

                        <div class="title">
                            <p>学生信息列表</p>
                            <el-radio-group v-model="updateWay" size="small">
                                <el-radio-button label="手动同步数据"></el-radio-button>
                                <el-radio-button label="自动同步数据"></el-radio-button>
                            </el-radio-group>

                        </div>

                        <el-table :data="students" style="width:100%" stripe ref="students">
                            <el-table-column width="120" prop="name" label="姓名"></el-table-column>
                            <el-table-column width="120" prop="nativePlace" label="籍贯"></el-table-column>
                            <el-table-column width="220" prop="identity" label="身份证号"></el-table-column>
                            <el-table-column width="120" prop="birthday" label="出生日期"></el-table-column>
                            <el-table-column width="120" prop="school" label="学校"></el-table-column>
                            <el-table-column width="120" prop="schoolClass" label="班级"></el-table-column>
                            <el-table-column width="120" prop="workUrl" label="就业信息链接">
                                <template slot-scope="scope">
                                    <a :href="scope.row.workUrl">点击链接</a>
                                </template>
                            </el-table-column>
                            <el-table-column width="120" prop="familyUrl" label="家庭信息链接">
                                <template slot-scope="scope">
                                    <a :href="scope.row.familyUrl">点击链接</a>
                                </template>
                            </el-table-column>
                            <el-table-column width="120" prop="fundUrl" label="资助过程链接">
                                <template slot-scope="scope">
                                    <a :href="scope.row.fundUrl">点击链接</a>
                                </template>
                            </el-table-column>

                            <!--<el-table-column width="200" label="操作">
                                <template slot-scope="scope">
                                    <el-button type="primary" @click="addConditions(scope.$index)">保存</el-button>
                                    <el-button type="danger" @click.native.prevent="deleteConditions(scope.$index,conditions)">删除</el-button>
                                </template>
                            </el-table-column>-->
                        </el-table>
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

            }
        }
    }
</style>

<script>
    export default {
        name: 'Finance-1-1-1',
        components: {},
        data() {
            return {
                updateWay: '手动同步数据',
                students: [ //学生信息列表
                    {
                        name: '刘德华', nativePlace: '广东省', identity: '441827199305262222', birthday: '19930526', 'school': '深圳大学',
                        schoolClass: '8班',workUrl: 'http://www.baidu.com', familyUrl: 'http://www.baidu.com', fundUrl: 'http://www.baidu.com'
                    },
                    {
                        name: '周星驰', nativePlace: '香港', identity: '441827199305262222', birthday: '19930526', 'school': '香港大学',
                        schoolClass: '隔壁班',workUrl: 'http://www.baidu.com', familyUrl: 'http://www.baidu.com', fundUrl: 'http://www.baidu.com'
                    }
                ],
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
