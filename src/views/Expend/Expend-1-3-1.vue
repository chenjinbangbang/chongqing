<template>
    <div class='Expend-1-3-1'>
        <div class="main-cont clearfix">

            <div class="func-mod">
                <h3>日常监控-凭证审核</h3>

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
                            <el-tabs v-model="activeName" @tab-click="tabClick">
                                <el-tab-pane :label="'待审问题凭证（'+evidenceNo.length+'条）'" name="first" >
                                    <div class="title">
                                        <p>待审问题凭证（<span class="red">{{evidenceNo.length}}条</span>）</p>
                                        <el-button size="small" type="primary" @click="checkFn">批量智能审核标记凭证</el-button>
                                    </div>
                                    <el-table :data="evidenceNo" style="width:100%" stripe ref="evidenceNo">

                                        <el-table-column prop="evidence" type="expand">
                                            <template slot-scope="scope">
                                                <el-col :span="16">
                                                    <el-form labelPosition="right" labelWidth="130px">
                                                        <el-form-item label="凭证内容：">
                                                            <el-input type="textarea" placeholder="请输入凭证内容" v-model="scope.row.content" :autosize="{minRows: 5,maxRows: 10}" disabled></el-input>
                                                        </el-form-item>
                                                        <el-form-item label="审核说明：">
                                                            <el-input type="textarea" placeholder="请输入审核说明" v-model="scope.row.details" :autosize="{minRows: 5,maxRows: 10}"></el-input>
                                                        </el-form-item>
                                                        <el-form-item label="是否标记：">
                                                            <el-radio v-model="scope.row.sign" label="sign">标记</el-radio>
                                                            <el-radio v-model="scope.row.sign" label="nosign">不标记</el-radio>
                                                        </el-form-item>
                                                        <el-form-item>
                                                            <el-button type="primary" @click="toggleRowExpansionFn(scope.row,false,'evidenceNo')">确定</el-button>
                                                            <el-button type="default" @click="toggleRowExpansionFn(scope.row,false,'evidenceNo')">取消</el-button>
                                                        </el-form-item>
                                                    </el-form>
                                                </el-col>

                                            </template>
                                        </el-table-column>

                                        <el-table-column prop="evidence" label="凭证列表" :filters="evidenceNoFilter" :filter-method="filterTag" filter-placement="bottom">
                                            <template slot-scope="scope">
                                                {{scope.row.evidence}}
                                            </template>
                                        </el-table-column>

                                        <el-table-column prop="check" label="是否审核">
                                            <template slot-scope="scope">
                                                <i class="el-icon-success primary" v-if="scope.row.check"></i>
                                                <i class="el-icon-error error" v-else></i>
                                            </template>
                                        </el-table-column>

                                        <el-table-column prop="sign" label="是否标记">
                                            <template slot-scope="scope">
                                                <i class="el-icon-success success" v-if="scope.row.sign == 'sign'"></i>
                                                <i class="el-icon-error error" v-else></i>
                                            </template>
                                        </el-table-column>

                                        <el-table-column label="操作">
                                            <template slot-scope="scope">
                                                <el-button size="small" @click="toggleRowExpansionFn(scope.row,true,'evidenceNo')">编辑</el-button>
                                                <el-button size="small" type="danger" @click.native.prevent="deleteRow(scope.$index,evidenceNo)">删除</el-button>
                                            </template>
                                        </el-table-column>

                                    </el-table>

                                </el-tab-pane>
                                <el-tab-pane :label="'已审问题凭证（'+evidenceYes.length+'条）'" name="second" >
                                    <div class="title">已审问题凭证（<span class="red">{{evidenceYes.length}}条</span>）</div>
                                    <el-table :data="evidenceYes" style="width:100%" stripe ref="evidenceYes">

                                        <el-table-column prop="evidence" type="expand">
                                            <template slot-scope="scope">
                                                <el-col :span="16">
                                                    <el-form labelPosition="right" labelWidth="130px">
                                                        <el-form-item label="凭证内容：">
                                                            <el-input type="textarea" placeholder="请输入凭证内容" v-model="scope.row.content" :autosize="{minRows: 5,maxRows: 10}" disabled></el-input>
                                                        </el-form-item>
                                                        <el-form-item label="审核结果：">
                                                            <p class="red">
                                                                <span v-if="scope.row.checkResult">通过</span>
                                                                <span v-else>未通过</span>
                                                            </p>
                                                        </el-form-item>
                                                        <el-form-item label="上传原始扫描件：">
                                                            <el-upload action="https://jsonplaceholder.typicode.com/posts" multiple :limit="1" :on-exceed="handleExceed" :file-list="scope.row.fileList" listType="picture">
                                                                <el-button size="small" type="primary">点击上传</el-button>
                                                                <div slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                                                            </el-upload>
                                                        </el-form-item>
                                                        <el-form-item>
                                                            <el-button type="primary" @click="toggleRowExpansionFn(scope.row,false,'evidenceYes')">确定</el-button>
                                                            <el-button type="default" @click="toggleRowExpansionFn(scope.row,false,'evidenceYes')">取消</el-button>
                                                        </el-form-item>
                                                    </el-form>
                                                </el-col>

                                            </template>
                                        </el-table-column>

                                        <el-table-column prop="evidence" label="凭证列表" :filters="evidenceYesFilter" :filter-method="filterTag" filter-placement="bottom">
                                            <template slot-scope="scope">
                                                {{scope.row.evidence}}
                                            </template>
                                        </el-table-column>

                                        <el-table-column prop="check" label="是否审核">
                                            <template slot-scope="scope">
                                                <i class="el-icon-success primary" v-if="scope.row.check"></i>
                                                <i class="el-icon-error error" v-else></i>
                                            </template>
                                        </el-table-column>
                                        <el-table-column prop="checkResult" label="审核结果">
                                            <template slot-scope="scope">
                                                <p class="red">
                                                    <span v-if="scope.row.checkResult">通过</span>
                                                    <span v-else>未通过</span>
                                                </p>
                                            </template>
                                        </el-table-column>

                                        <el-table-column label="操作">
                                            <template slot-scope="scope">
                                                <el-button size="small" @click="toggleRowExpansionFn(scope.row,true,'evidenceYes')">编辑</el-button>
                                                <el-button size="small" type="danger" @click.native.prevent="deleteRow(scope.$index,evidenceYes)">删除</el-button>
                                            </template>
                                        </el-table-column>

                                    </el-table>

                                </el-tab-pane>
                                <el-tab-pane :label="'数据变更凭证（'+evidenceChange.length+'条）'" name="third" >
                                    <div class="title">
                                        <p>数据变更凭证（<span class="red">{{evidenceChange.length}}条</span>）</p>
                                        <el-button size="small" type="primary" @click="checkFn">批量智能审核标记凭证</el-button>
                                    </div>

                                    <el-table :data="evidenceChange" style="width:100%" stripe ref="evidenceChange">

                                        <el-table-column prop="evidence" type="expand">
                                            <template slot-scope="scope">
                                                <el-col :span="16">
                                                    <el-form labelPosition="right" labelWidth="130px">
                                                        <el-form-item label="凭证内容：">
                                                            <el-input type="textarea" placeholder="请输入凭证内容" v-model="scope.row.content" :autosize="{minRows: 5,maxRows: 10}" disabled></el-input>
                                                        </el-form-item>
                                                        <el-form-item label="审核说明：">
                                                            <el-input type="textarea" placeholder="请输入审核说明" v-model="scope.row.details" :autosize="{minRows: 5,maxRows: 10}"></el-input>
                                                        </el-form-item>
                                                        <el-form-item label="是否标记：">
                                                            <el-radio v-model="scope.row.sign" label="sign">标记</el-radio>
                                                            <el-radio v-model="scope.row.sign" label="nosign">不标记</el-radio>
                                                        </el-form-item>
                                                        <el-form-item>
                                                            <el-button type="primary" @click="toggleRowExpansionFn(scope.row,false,'evidenceChange')">确定</el-button>
                                                            <el-button type="default" @click="toggleRowExpansionFn(scope.row,false,'evidenceChange')">取消</el-button>
                                                        </el-form-item>
                                                    </el-form>
                                                </el-col>

                                            </template>
                                        </el-table-column>

                                        <el-table-column prop="evidence" label="凭证列表" :filters="evidenceNoFilter" :filter-method="filterTag" filter-placement="bottom">
                                            <template slot-scope="scope">
                                                {{scope.row.evidence}}
                                            </template>
                                        </el-table-column>

                                        <el-table-column prop="check" label="是否审核">
                                            <template slot-scope="scope">
                                                <i class="el-icon-success primary" v-if="scope.row.check"></i>
                                                <i class="el-icon-error info" v-else></i>
                                            </template>
                                        </el-table-column>

                                        <el-table-column prop="sign" label="是否标记">
                                            <template slot-scope="scope">
                                                <i class="el-icon-success success" v-if="scope.row.sign == 'sign'"></i>
                                                <i class="el-icon-error info" v-else></i>
                                            </template>
                                        </el-table-column>

                                        <el-table-column label="操作">
                                            <template slot-scope="scope">
                                                <el-button size="small" @click="toggleRowExpansionFn(scope.row,true,'evidenceChange')">编辑</el-button>
                                                <el-button size="small" type="danger" @click.native.prevent="deleteRow(scope.$index,evidenceChange)">删除</el-button>
                                            </template>
                                        </el-table-column>

                                    </el-table>

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
        name: 'Expend-1-3-1',
        components: {},
        data() {
            return {
                dataLists: [], //学校或者单位列表
                activeName: 'first', //tab标签默认内容
                evidences: [], //所有凭证列表
                evidenceNo: [], //待审问题凭证
                evidenceYes: [], //已审问题凭证
                evidenceChange: [], //数据变更凭证
                evidenceNoFilter: [], //待审问题凭证筛选
                evidenceYesFilter: [], //已审问题凭证筛选
                evidenceChangeFilter: [] //数据变更凭证筛选
            }
        },
        methods: {
            //获取学校或者单位列表
            getLists(){
                this.$http.get('http://localhost:3000/area').then((result) => {
                    this.dataLists = result.data;
                });
            },
            //获取所有凭证列表
            getEvidences(){
                this.$http.get("http://localhost:3000/evidences").then((result) => {
                    this.evidences = result.data;

                    //待审问题凭证初始化
                    this.evidenceNo = this.evidences.filter((item,index,self) => {
                        return item.type === "evidenceNo";
                    });
                    //已审问题凭证初始化
                    this.evidenceYes = this.evidences.filter((item,index,self) => {
                        return item.type === "evidenceYes";
                    });
                    //数据变更凭证初始化
                    this.evidenceChange = this.evidences.filter((item,index,self) => {
                        return item.type === "evidenceChange";
                    });
                    this.evidenceFilterFn(this.evidenceNo,this.evidenceNoFilter);
                    this.evidenceFilterFn(this.evidenceYes,this.evidenceYesFilter);
                    this.evidenceFilterFn(this.evidenceChange,this.evidenceChangeFilter);

                });
            },
            //切换tab事件
            tabClick(tab){
                /*switch(tab.name){
                    case 'first':
                        this.evidences = this.dataLists.filter((item,index,self) => {
                            return item.type === 'evidenceNo';
                        });
                        break;
                    case 'second':
                        this.evidences = this.dataLists.filter((item,index,self) => {
                            return item.type === 'evidenceYes';
                        });
                        break;
                    case 'third':
                        this.evidences = this.dataLists.filter((item,index,self) => {
                            return item.type === 'evidenceChange';
                        });
                        break;
                    default:
                        break;
                }
                this.evidenceFilterFn();*/
            },
            //筛选必须
            filterTag(value,row){
                return row.evidence === value;
            },
            //创建筛选条件-3个
            evidenceFilterFn(evidenceLists,evidenceListsFilter){

                let evidence = [],evidences,x,y;
                for(x of evidenceLists){ //变成数组
                    evidence.push(x.evidence);
                }
                evidences = evidence.filter((item,index,self) => { //过滤数组相同的值
                    return self.indexOf(item) === index;
                });
                for(y of evidences){ //为筛选条件添加text，value格式
                    evidenceListsFilter.push({text: y,value: y});
                }
            },
            //删除表单中的行
            deleteRow(index,rows){
                rows.splice(index,1);
            },
            checkFn(){
                /*let evidenceSign = [];
                evidenceSign = this.evidenceNo.filter((item,index,self) => {
                    if(item.sign === 'sign'){
                        item.type = 'evidenceYes';
                        item.check = true;
                    }
                    return item.sign === 'sign';
                });
                console.log(evidenceSign);
                if(evidenceSign.length > 0){
                    for(let x of evidenceSign){
                        this.evidenceYes.push(x);
                    }
                }
                console.log(this.evidenceYes);*/
            },
            //点击隐藏表格展开的内容
            toggleRowExpansionFn(row,expanded,formRef){
                switch(formRef){
                    case "evidenceNo":
                        this.$refs.evidenceNo.toggleRowExpansion(row,expanded);
                        break;
                    case "evidenceYes":
                        this.$refs.evidenceYes.toggleRowExpansion(row,expanded);
                        break;
                    case "evidenceChange":
                        this.$refs.evidenceChange.toggleRowExpansion(row,expanded);
                        break;
                    default:
                        break;
                }
            },
            //文件超出个数限制时的钩子
            handleExceed(files, fileList) {
                this.$message(
                    {
                        type: 'warning',
                        message: `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`
                    }
                );
            }
        },
        mounted(){
            //获取学校或者单位列表
            this.getLists();
            //获取所有凭证列表
            this.getEvidences();
        }
    }
</script>
