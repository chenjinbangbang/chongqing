<template>
    <div id="app">
        <header class='header'>
            <h1><a href="#"><img src="./assets/img/syslogo.png"></a></h1>
            <nav class="navbar">
                <ul class="nav-menu">
                    <li :class="{cur: dataListIndex == index}" v-for="dataList,index in dataLists" @click="dataListChoose(index,dataList.id)">
                        <i class="fa fa-navicon"></i>{{dataList.name}}
                    </li>
                </ul>

                <div class="user-menu">
                    <div class="term">
                        <a href="#"><i class="fa fa-arrow-circle-o-up"></i>升级</a>
                    </div>
                    <div class="term">
                        <button><i class="fa fa-user"></i>琴瑟琵琶</button>
                        <ul class="drop-menu">
                            <li><a href="#"><i class="fa fa-pencil"></i>修改密码</a></li>
                            <li><a href="#"><i class="fa fa-navicon"></i>付款记录</a></li>
                            <li><a href="#"><i class="fa fa-power-off"></i>退出系统</a></li>
                        </ul>
                    </div>
                    <div class="term">
                        <button><i class="fa fa fa-envelope-o"></i>通知</button>
                        <div class="message">
                            <p>您没有新的通知</p>
                            <ul>
                                <li><a href="#"><i class="fa fa-exclamation"></i>通知内容通知内容通知内容通知内容</a></li>
                                <li><a href="#"><i class="fa fa-exclamation"></i>通知内容通知内容通知内容通知内容</a></li>
                                <li><a href="#"><i class="fa fa-exclamation"></i>通知内容通知内容通知内容通知内容</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <!--<aside class="sidebar">
            <ul class="sidebar-list">
                <li><a><i class="fa fa-th"></i>资金支出凭证管理<i class="fa fa-angle-right fr"></i></a>
                    <ul class="sub-list">
                        <li><a href="#"><i class="fa fa-genderless"></i>凭证数据自动采集</a></li>
                        <li><a href="#"><i class="fa fa-genderless"></i>监管数据设置</a></li>
                        <li><a href="#"><i class="fa fa-genderless"></i>日常监控</a></li>
                        <li><a href="#"><i class="fa fa-genderless"></i>专项审核</a></li>
                        <li><a href="#"><i class="fa fa-genderless"></i>整改工作</a></li>
                    </ul>
                </li>
                <li><a><i class="fa fa-th"></i>当前系统一级菜单<i class="fa fa-angle-right fr"></i></a>
                    <ul class="sub-list">
                        <li><a href="#"><i class="fa fa-genderless"></i>当前系统二级菜单</a></li>
                        <li><a href="#"><i class="fa fa-genderless"></i>当前系统二级菜单</a></li>
                        <li><a href="#"><i class="fa fa-genderless"></i>当前系统二级菜单</a></li>
                        <li><a href="#"><i class="fa fa-genderless"></i>当前系统二级菜单</a></li>
                    </ul>
                </li>
                <li><a><i class="fa fa-th"></i>当前系统一级菜单<i class="fa fa-angle-right fr"></i></a>
                    <ul class="sub-list">
                        <li><a href="#"><i class="fa fa-genderless"></i>当前系统二级菜单</a></li>
                        <li><a href="#"><i class="fa fa-genderless"></i>当前系统二级菜单</a></li>
                        <li><a href="#"><i class="fa fa-genderless"></i>当前系统二级菜单</a></li>
                        <li><a href="#"><i class="fa fa-genderless"></i>当前系统二级菜单</a></li>
                    </ul>
                </li>
                <li><a><i class="fa fa-th"></i>当前系统一级菜单<i class="fa fa-angle-right fr"></i></a>
                    <ul class="sub-list">
                        <li><a href="#"><i class="fa fa-genderless"></i>当前系统二级菜单</a></li>
                        <li><a href="#"><i class="fa fa-genderless"></i>当前系统二级菜单</a></li>
                        <li><a href="#"><i class="fa fa-genderless"></i>当前系统二级菜单</a></li>
                        <li><a href="#"><i class="fa fa-genderless"></i>当前系统二级菜单</a></li>
                    </ul>
                </li>
                <li><a><i class="fa fa-th"></i>显示/隐藏部门列表<i class="fa fa-angle-right fr"></i></a></li>
            </ul>
        </aside>-->

        <aside class="sidebar">
            <el-menu defaultActive="2" class="el-menu-vertical-demo" :router="true" :uniqueOpened="true" @open="handleOpen" @close="handleClose" backgroundColor="#536980" textColor="#c8daec" activeTextColor="#fff">
                <div v-for="dataMenu,index in dataMenus">
                    <el-submenu :index="dataListIndexName + '-' + String(index+1)">
                        <template slot="title">
                            <div class="menu">
                                <div>
                                    <i class="fa fa-th"></i>
                                </div>
                                <p>{{dataMenu.name}}</p>
                            </div>
                        </template>

                        <div v-for="menu,indexS in dataMenu.list">
                            <el-submenu :index="dataListIndexName + '-' + String(index+1)+'-'+String(indexS+1)">
                                <template slot="title">
                                    <div class="menu">
                                        <div>
                                            <i class="fa fa-genderless"></i>
                                        </div>
                                        <p>{{menu.name}}</p>
                                    </div>
                                </template>

                                <div v-for="submenu,indexT in menu.list">
                                    <el-menu-item :index="dataListIndexName + '-' + String(index+1)+'-'+String(indexS+1)+'-'+String(indexT+1)">
                                        <div class="menu">
                                            <div>
                                                <i class="fa fa-genderless"></i>
                                            </div>
                                            <p>{{submenu}}</p>
                                        </div>
                                    </el-menu-item>
                                </div>
                            </el-submenu>
                        </div>
                    </el-submenu>
                </div>

            </el-menu>
        </aside>

        <router-view></router-view>

        <nav-footer></nav-footer>

    </div>
</template>

<style lang="scss">
    @import 'assets/css/wap_base';
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        //text-align: center;
        color: #2c3e50;
    }
    .header { height: 60px; background-color: #536980; position: relative; z-index: 1000;}
    .header h1 { float: left;}
    .header h1 a { display: block; width: 240px; height: 60px; text-align: center;}
    .navbar { margin-left: 240px; line-height: 60px;}
    .nav-menu li{ padding: 0 20px; color: #c8daec; cursor:pointer;
        &.cur{ background-color: #435a71;}
    }
    .nav-menu li, .user-menu .term { float: left;}
    .user-menu .term>a { display: block; padding: 0 20px; color: #c8daec;}
    .nav-menu li:hover a, .user-menu .term:hover>a, .user-menu .term:hover button { background-color: #435a71;}

    .navbar i { margin-right: 10px;}
    .user-menu { float: right; padding-right: 30px;}
    .user-menu .term { float: left; position: relative;}
    .user-menu .term button { background: none; color: #c8daec; cursor: pointer; height: 60px; padding: 0 20px;}
    .user-menu .term:hover .drop-menu, .user-menu .term:hover .message { display: block;}
    .drop-menu, .message { display: none; position: absolute; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1); border-color: #eee;
        background-color: #fff; border-radius: 0 0 5px 5px; padding: 5px 0; z-index: 9999; top: 60px;
        right: 0; line-height: 30px;}
    .drop-menu a { display: block; color: #666; padding: 0 20px; white-space: nowrap;}
    .drop-menu a:hover { background-color: #ccc;}
    .message { width: 400px;}
    .message p { color: #666; padding: 0 20px; border-bottom: 1px solid #eee; white-space: nowrap;}
    .message ul { min-height: 60px;}
    .message li { white-space: nowrap; text-overflow: ellipsis; overflow: hidden; padding: 0 20px;}
    .message li a { color: #666;}

    /*.sidebar { background-color: #536980; position: absolute; top: 0; left: 0; padding-top: 60px; min-height: 100%; width: 240px; z-index: 999; }
    .sidebar-list>li { padding-top: 1px; border-top: 1px solid #465c73; box-shadow: 0 1px 0 0 #617991 inset; }
    .sidebar-list>li.cur, .sidebar-list>li:hover { background-color: #3a5067;}
    .sidebar-list>li>a { cursor: pointer; height: 48px; line-height: 48px; display: block; border-left: 8px solid #536980; padding: 0 20px;
        color: #c8daec; font-size: 15px; }
    .sidebar-list>li.cur>a, .sidebar-list>li:hover>a { color: #fff; border-color: #2eb8f9;}
    .sidebar-list>li i { margin-right: 14px; font-size: 16px;}
    .sidebar-list>li i.fr { font-size: 26px; margin-top: 11px; margin-right: 0; }
    .sidebar-list>li.cur i.fr { -webkit-transform: rotate(90deg); transform: rotate(90deg);}
    .sidebar-list .sub-list { display: none; background-color: #536980;}
    .sidebar-list .sub-list a { color: #fff; display: block; height: 44px; line-height: 44px; padding-left: 30px;
        -webkit-transition: 0.3s; transition: 0.3s;}
    .sidebar-list .sub-list i { margin-right: 8px; }
    .sidebar-list .sub-list a:hover { padding-left: 46px; background-color: #3a5067; color: #c8daec;}*/

    .sidebar { background-color: #536980; position: absolute; top: 0; left: 0; padding-top: 60px; min-height: 100%; width: 240px; z-index: 999;
        .el-menu{}
        i{ color:#c8daec; font-size:18px;}
    }

</style>

<script>
    import NavFooter from '@/views/Footer';
    export default {
        name: 'app',
        data(){
            return {
                dataLists: [], //所有系统列表-主导航
                dataListIndex: 0, //主导航默认选中
                dataListIndexName: '', //主导航选中时，获取对应的系统名称
                dataMenus: [], //选中某个系统，对应的菜副导航列表
                //dataMenuIndex: '', //副导航默认选中
            };
        },
        components: {NavFooter},
        computed: {},
        mounted(){
            //所有系统列表初始化
            this.getUsers();
        },
        methods: {
            //sub-menu展开的回调
            handleOpen(key,keyPath){
                this.$router.push({path: key}); //使父导航跳转链接有效
            },
            //sub-menu收起的回调
            handleClose(key,keyPath){
                this.$router.push({path: key}); //使父导航跳转链接有效
            },
            //获取所有系统列表以及某个系统，对应的菜单列表
            getUsers(){
                this.$http.get(' http://localhost:3000/system').then((result) => {
                    this.dataLists = result.data;

                    //对应的菜单列表默认选中--主导航默认选中
                    if(sessionStorage.getItem("dataListIndex")){
                        this.dataListIndex = sessionStorage.getItem("dataListIndex");
                        this.dataMenus = result.data[this.dataListIndex].list;
                    }else{
                        this.dataListIndex = 0;
                        this.dataMenus = result.data[0].list;
                    }
                });
            },
            //获取选中某个系统，对应的菜单列表
            dataListChoose(index,id){

                this.dataListIndex = index;
                //把this.dataListIndex添加到缓存中，主导航默认选中需要
                sessionStorage.setItem("dataListIndex",this.dataListIndex);

                //系统选中时，获取对应的系统名称
                switch(this.dataListIndex){
                    case 0:
                        this.dataListIndexName = 'work';
                        break;
                    case 1:
                        this.dataListIndexName = 'expend';
                        break;
                    case 2:
                        this.dataListIndexName = 'finance';
                        break;
                    case 3:
                        this.dataListIndexName = 'business';
                        break;
                    default:
                        break;
                }

                this.$http.get(' http://localhost:3000/system/'+id).then((result) => {
                    this.dataMenus = result.data.list;

                });
            }
        }
    }
</script>
