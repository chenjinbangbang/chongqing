<template>
    <div class='Finance-1-8'>
        <div class="main-cont clearfix">

            <div class="func-mod">
                <h3>资助数据分析</h3>

                <div class="content">
                    <el-tabs v-model="activeName">
                        <el-tab-pane label="贫困学生数据对比分析" name="first">
                            贫困学生数据对比分析
                        </el-tab-pane>
                        <el-tab-pane label="资助类型统计分析" name="second">
                            资助类型统计分析
                        </el-tab-pane>
                        <el-tab-pane label="资助对象统计分析" name="third">
                            资助对象统计分析
                        </el-tab-pane>
                        <el-tab-pane label="资助来源统计分析" name="four">
                            资助来源统计分析
                        </el-tab-pane>
                        <el-tab-pane label="自定义分析图表" name="five">
                            自定义分析图表
                        </el-tab-pane>
                    </el-tabs>
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
        name: 'Finance-1-8',
        components: {},
        data() {
            return {
                activeName: 'first', //tab标签默认内容
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
