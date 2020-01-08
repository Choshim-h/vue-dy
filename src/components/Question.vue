<template>
    <div>
        问题：{{question}}
    </div>
</template>

<script>
export default {
    created() {
        const questionId = this.$route.params.id;
        const index = this.questionList.findIndex(item => item.questionId == questionId)
        
        // console.log(this);
        if(index == -1){
            // this.$router.go(-1)

            //replace
            this.$route.replace('/err.html')

            //push
            // this.$route.push({name: 'err'})
        }else{
            this.question = this.questionList[index].title
        }
    },
    data () {
        return {
            question: '',
            questionList: [
                {
                    questionId: 201801,
                    title: '到底什么是es6中的class（类）？怎么实现class（类）'
                },
                {
                    questionId: 201802,
                    title: '什么是es6箭头函数？与普通函数主要区别在哪里？'
                },
                {
                    questionId: 201803,
                    title: '什么是es6的解构赋值，每次都创建一个对象吗'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>


