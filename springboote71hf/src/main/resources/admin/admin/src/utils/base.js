const base = {
    get() {
        return {
            url : "http://localhost:8080/springboote71hf/",
            name: "springboote71hf",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboote71hf/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "就业信息管理系统"
        } 
    }
}
export default base
