<template>
    <div class='home'>
        <div class="main-cont clearfix">
            <aside class="depart">
                <h3>部门列表</h3>
                <ul class="depart-list">
                    <li><span><i class="fa fa-caret-right"></i>所有部门</span>
                        <ul class="depart-sl-list">
                            <li><span><i class="fa fa-caret-right"></i>XXX部</span>
                                <ul class="depart-th-list">
                                    <li><a href="#"><i class="fa fa-user"></i>XXXXX</a></li>
                                    <li><a href="#"><i class="fa fa-user"></i>XXXXX</a></li>
                                    <li><a href="#"><i class="fa fa-user"></i>XXXXX</a></li>
                                    <li><a href="#"><i class="fa fa-user"></i>XXXXX</a></li>
                                    <li><a href="#"><i class="fa fa-user"></i>XXXXX</a></li>
                                    <li><a href="#"><i class="fa fa-user"></i>XXXXX</a></li>
                                </ul>
                            </li>
                            <li><span><i class="fa fa-caret-right"></i>XXX部</span>
                                <ul class="depart-th-list">
                                    <li><a href="#"><i class="fa fa-user"></i>XXXXX</a></li>
                                    <li><a href="#"><i class="fa fa-user"></i>XXXXX</a></li>
                                </ul>
                            </li>
                            <li><span><i class="fa fa-caret-right"></i>XXX部</span>
                                <ul class="depart-th-list">
                                    <li><a href="#"><i class="fa fa-user"></i>XXXXX</a></li>
                                    <li><a href="#"><i class="fa fa-user"></i>XXXXX</a></li>
                                    <li><a href="#"><i class="fa fa-user"></i>XXXXX</a></li>
                                    <li><a href="#"><i class="fa fa-user"></i>XXXXX</a></li>
                                    <li><a href="#"><i class="fa fa-user"></i>XXXXX</a></li>
                                    <li><a href="#"><i class="fa fa-user"></i>XXXXX</a></li>
                                </ul>
                            </li>
                            <li><span><i class="fa fa-caret-right"></i>XXX部</span>
                                <ul class="depart-th-list">
                                    <li><a href="#"><i class="fa fa-user"></i>XXXXX</a></li>
                                    <li><a href="#"><i class="fa fa-user"></i>XXXXX</a></li>
                                    <li><a href="#"><i class="fa fa-user"></i>XXXXX</a></li>
                                    <li><a href="#"><i class="fa fa-user"></i>XXXXX</a></li>
                                    <li><a href="#"><i class="fa fa-user"></i>XXXXX</a></li>
                                    <li><a href="#"><i class="fa fa-user"></i>XXXXX</a></li>
                                </ul>
                            </li>
                            <li><span><i class="fa fa-caret-right"></i>XXX部</span>
                                <ul class="depart-th-list">
                                    <li><a href="#"><i class="fa fa-user"></i>XXXXX</a></li>
                                    <li><a href="#"><i class="fa fa-user"></i>XXXXX</a></li>
                                    <li><a href="#"><i class="fa fa-user"></i>XXXXX</a></li>
                                    <li><a href="#"><i class="fa fa-user"></i>XXXXX</a></li>
                                    <li><a href="#"><i class="fa fa-user"></i>XXXXX</a></li>
                                    <li><a href="#"><i class="fa fa-user"></i>XXXXX</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </aside>
            <div class="content">
                <div class="func-mod">
                    <h3>功能视图区域</h3>

                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss">
    .main-cont { background-color: #dfebf7; margin-left: 240px; padding: 14px 14px 0 14px; position: relative;}
    .copy-right { text-align: center; text-indent: -240px; height: 40px; line-height: 40px; margin-left: 240px; padding-right: 20px;
        font-size: 13px; background-color: #dfebf7; }
    .depart { display: none; background-color: #fff; position: absolute; top: 14px; left: 14px;  height: calc(100% - 14px);
        width: 220px; z-index: 999; border-top: 3px solid #30b6ff; border-radius: 4px; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1); overflow: auto;}
    .depart * { white-space: nowrap;}
    .depart h3, .func-mod h3 { height: 40px; line-height: 40px; padding: 0 16px; border-bottom: 1px solid #ddd;}
    .depart-list { padding-top: 10px;}
    .depart-list li { cursor: pointer; line-height: 30px;}
    .depart-list>li.cur>span i, .depart-sl-list>li.cur>span i { -webkit-transform: rotate(90deg); transform: rotate(90deg);}
    .depart-sl-list li.cur span.cur, .depart-th-list a.cur { color: #fff; background-color: #30b6ff;}
    .depart-list span { display: block; padding-left: 14px; }
    .depart-list i { margin-right: 6px; font-size: 18px;}
    .depart-list>li { font-size: 15px;}
    .depart-sl-list, .depart-th-list { display: none;}
    .depart-sl-list span { padding-left: 28px;}
    .depart-sl-list>li { }
    .depart-th-list>li {}
    .depart-th-list a { display: block; padding-left: 44px;}
    .depart-th-list>li i { font-size: 14px;}
    .depart-th-list>li a { font-size: 13px; color: #444;}
    .content { -webkit-transition: 0.5s; transition: 0.5s;}
    .content.deviation { margin-left: 240px;}
    .func-mod { height: 800px; background-color: #fff; border-top: 3px solid #30b6ff; border-radius: 4px; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);}
</style>

<script>
    export default {
        name: 'home',
        components: {},
        data() {
            return {
                msg: ''
            }
        },
        methods: {},
        mounted(){
            //console.log(this.$route.path);
        }
    }
</script>
