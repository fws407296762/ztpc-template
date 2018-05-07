
export default [
    {
        path:"/",
        component(resolve){
            require(["../pages/home"],resolve);
        }
    },
	{
        path:"/abc",
        component(resolve){
            require(["../pages/home"],resolve);
        }
    }
]