<template>
    <div>
        <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </el-row>
        <div class="a">
            <div class="b">
                <div class="c">
                    <div class="d">12121212</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .a{
        .b{
            .c{
                .d{
                    font-size: 20px;
                    margin: 30px;
                }
            }
        }
    }
</style>

<script>
    export default {
        name: "home"
    }
</script>

