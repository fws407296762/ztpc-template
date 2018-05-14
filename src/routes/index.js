
export default [
    {
        path:"/",
        component(resolve){
            require(["../pages/home"],resolve);
        }
    },
	{
        path:"/ys",
        component(resolve){
            require(["../pages/ys"],resolve);
        }
    }
]